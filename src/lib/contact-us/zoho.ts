// Shared Zoho WebToLead config + submit helper.
// Mirrors the proven client-side flow in ContactForm.svelte so every lead form
// (contact, inline estimate, season offer) posts to the same CRM pipeline.
// NOTE: xnQsjsdp / xmIwtLD are Zoho's PUBLIC WebToLead form identifiers — not secrets.

export const ZOHO_FORM_ACTION = 'https://crm.zoho.com/crm/WebToLeadForm';

export const ZOHO_HIDDEN_FIELDS: Record<string, string> = {
	xnQsjsdp: 'cdaf4fd904d1a76d463cfa7498f7083593f85a7ebaf6309bc04de2170f5c5221',
	xmIwtLD:
		'b63d7c69781dd958162b76c2f3ecab4ffd5b8b5d2d23c3e5ae5621f9cb4f47fc4fac4b525fe84a2d485aaabf4ef4373c',
	actionType: 'TGVhZHM=',
	returnURL: 'null',
	aG9uZXlwb3Q: '' // honeypot — must stay empty
};

/** Split a single "Name" field into Zoho's required First/Last pair. */
export function splitName(full: string): { firstName: string; lastName: string } {
	const parts = full.trim().split(/\s+/).filter(Boolean);
	if (parts.length <= 1) return { firstName: '', lastName: parts[0] ?? '' };
	return { firstName: parts[0], lastName: parts.slice(1).join(' ') };
}

/**
 * POST a lead to Zoho WebToLead. Only the keys mapped in the Zoho form config
 * are honored ("First Name", "Last Name", "Email", "Phone", "City", "Zip Code",
 * "Description"); fold anything else into Description. Returns true on apparent success.
 */
export async function submitLeadToZoho(fields: Record<string, string>): Promise<boolean> {
	const params = new URLSearchParams();
	for (const [k, v] of Object.entries(ZOHO_HIDDEN_FIELDS)) params.append(k, v);
	for (const [k, v] of Object.entries(fields)) if (v) params.append(k, v);

	const res = await fetch(ZOHO_FORM_ACTION, {
		method: 'POST',
		body: params,
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
	});
	const text = await res.text().catch(() => '');
	return res.ok || res.redirected || text.includes('Thank you') || text.includes('success');
}
