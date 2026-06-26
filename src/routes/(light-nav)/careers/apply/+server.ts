import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

/**
 * Job application endpoint.
 *
 * Receives a JSON application from the careers form and creates a record in the
 * Zoho CRM custom "Applicants" module via the REST API. Zoho credentials are
 * read from Cloudflare environment secrets (event.platform.env) so no tokens are
 * ever exposed to the browser.
 *
 * Required Cloudflare secrets (see Careers setup notes):
 *   ZOHO_CLIENT_ID
 *   ZOHO_CLIENT_SECRET
 *   ZOHO_REFRESH_TOKEN
 * Optional (defaults shown):
 *   ZOHO_ACCOUNTS_DOMAIN   default https://accounts.zoho.com
 *   ZOHO_API_DOMAIN        default https://www.zohoapis.com
 *   ZOHO_APPLICANTS_MODULE default Applicants
 *
 * The Applicants module must already exist in Zoho (custom modules can only be
 * created in the Zoho UI). Expected field API names are listed in FIELD_MAP.
 */

type ApplicationPayload = {
	name?: string;
	email?: string;
	phone?: string;
	position?: string;
	experience?: string;
	availability?: string;
	hasTransportation?: boolean;
	authorizedToWork?: boolean;
	message?: string;
	// Honeypot — must be empty for a real human submission.
	company?: string;
};

type ZohoEnv = {
	ZOHO_CLIENT_ID?: string;
	ZOHO_CLIENT_SECRET?: string;
	ZOHO_REFRESH_TOKEN?: string;
	ZOHO_ACCOUNTS_DOMAIN?: string;
	ZOHO_API_DOMAIN?: string;
	ZOHO_APPLICANTS_MODULE?: string;
};

async function getAccessToken(env: ZohoEnv): Promise<string> {
	const accountsDomain = env.ZOHO_ACCOUNTS_DOMAIN ?? 'https://accounts.zoho.com';
	const params = new URLSearchParams({
		refresh_token: env.ZOHO_REFRESH_TOKEN ?? '',
		client_id: env.ZOHO_CLIENT_ID ?? '',
		client_secret: env.ZOHO_CLIENT_SECRET ?? '',
		grant_type: 'refresh_token'
	});

	const res = await fetch(`${accountsDomain}/oauth/v2/token`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: params
	});

	const data = (await res.json()) as { access_token?: string; error?: string };
	if (!res.ok || !data.access_token) {
		throw new Error(`Zoho token exchange failed: ${data.error ?? res.status}`);
	}
	return data.access_token;
}

export const POST: RequestHandler = async ({ request, platform }) => {
	const env = (platform?.env ?? {}) as ZohoEnv;

	let body: ApplicationPayload;
	try {
		body = (await request.json()) as ApplicationPayload;
	} catch {
		throw error(400, 'Invalid request body');
	}

	// Honeypot: silently accept bots so they think they succeeded.
	if (body.company && body.company.trim() !== '') {
		return json({ success: true });
	}

	// Server-side validation of required fields.
	const required: (keyof ApplicationPayload)[] = ['name', 'phone'];
	for (const field of required) {
		if (!String(body[field] ?? '').trim()) {
			throw error(400, `${field} is required`);
		}
	}

	if (!env.ZOHO_CLIENT_ID || !env.ZOHO_CLIENT_SECRET || !env.ZOHO_REFRESH_TOKEN) {
		// Misconfiguration — log and fail loudly so it gets noticed.
		console.error('Zoho credentials are not configured in the environment.');
		throw error(503, 'Application intake is temporarily unavailable. Please try again later.');
	}

	const moduleName = env.ZOHO_APPLICANTS_MODULE ?? 'Applicants';
	const apiDomain = env.ZOHO_API_DOMAIN ?? 'https://www.zohoapis.com';

	// Maps our form fields to the Applicants module's field API names in Zoho.
	// "Name" is the module's default mandatory field. The rest are custom fields
	// that must be created in the Zoho module with these exact API names.
	const record: Record<string, unknown> = {
		Name: body.name,
		Email: body.email || null,
		Phone: body.phone,
		Position: body.position || null,
		Years_of_Experience: body.experience || null,
		Availability: body.availability || null,
		Has_Reliable_Transport: !!body.hasTransportation,
		Authorized_to_Work: !!body.authorizedToWork,
		Message: body.message || null,
		Lead_Source: 'Careers Page'
	};

	try {
		const accessToken = await getAccessToken(env);

		const res = await fetch(`${apiDomain}/crm/v6/${encodeURIComponent(moduleName)}`, {
			method: 'POST',
			headers: {
				Authorization: `Zoho-oauthtoken ${accessToken}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ data: [record], trigger: ['workflow'] })
		});

		const result = (await res.json()) as {
			data?: { code?: string; message?: string }[];
		};

		const firstStatus = result.data?.[0]?.code;
		if (!res.ok || firstStatus !== 'SUCCESS') {
			console.error('Zoho insert failed:', JSON.stringify(result));
			throw error(502, 'We could not submit your application. Please try again or call us.');
		}

		return json({ success: true });
	} catch (e) {
		// Re-throw SvelteKit HttpErrors; wrap anything else.
		if (e instanceof Error && 'status' in e) throw e;
		console.error('Application submission error:', e);
		throw error(502, 'We could not submit your application. Please try again or call us.');
	}
};
