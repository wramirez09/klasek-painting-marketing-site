import { error, json } from "@sveltejs/kit";
async function getAccessToken(env) {
  const accountsDomain = env.ZOHO_ACCOUNTS_DOMAIN ?? "https://accounts.zoho.com";
  const params = new URLSearchParams({
    refresh_token: env.ZOHO_REFRESH_TOKEN ?? "",
    client_id: env.ZOHO_CLIENT_ID ?? "",
    client_secret: env.ZOHO_CLIENT_SECRET ?? "",
    grant_type: "refresh_token"
  });
  const res = await fetch(`${accountsDomain}/oauth/v2/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params
  });
  const data = await res.json();
  if (!res.ok || !data.access_token) {
    throw new Error(`Zoho token exchange failed: ${data.error ?? res.status}`);
  }
  return data.access_token;
}
const POST = async ({ request, platform }) => {
  const env = platform?.env ?? {};
  let body;
  try {
    body = await request.json();
  } catch {
    throw error(400, "Invalid request body");
  }
  if (body.company && body.company.trim() !== "") {
    return json({ success: true });
  }
  const required = ["name", "phone"];
  for (const field of required) {
    if (!String(body[field] ?? "").trim()) {
      throw error(400, `${field} is required`);
    }
  }
  if (!env.ZOHO_CLIENT_ID || !env.ZOHO_CLIENT_SECRET || !env.ZOHO_REFRESH_TOKEN) {
    console.error("Zoho credentials are not configured in the environment.");
    throw error(503, "Application intake is temporarily unavailable. Please try again later.");
  }
  const moduleName = env.ZOHO_APPLICANTS_MODULE ?? "Applicants";
  const apiDomain = env.ZOHO_API_DOMAIN ?? "https://www.zohoapis.com";
  const record = {
    Name: body.name,
    Email: body.email || null,
    Phone: body.phone,
    Position: body.position || null,
    Years_of_Experience: body.experience || null,
    Availability: body.availability || null,
    Has_Reliable_Transport: !!body.hasTransportation,
    Authorized_to_Work: !!body.authorizedToWork,
    Message: body.message || null,
    Lead_Source: "Careers Page"
  };
  try {
    const accessToken = await getAccessToken(env);
    const res = await fetch(`${apiDomain}/crm/v6/${encodeURIComponent(moduleName)}`, {
      method: "POST",
      headers: {
        Authorization: `Zoho-oauthtoken ${accessToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ data: [record], trigger: ["workflow"] })
    });
    const result = await res.json();
    const firstStatus = result.data?.[0]?.code;
    if (!res.ok || firstStatus !== "SUCCESS") {
      console.error("Zoho insert failed:", JSON.stringify(result));
      throw error(502, "We could not submit your application. Please try again or call us.");
    }
    return json({ success: true });
  } catch (e) {
    if (e instanceof Error && "status" in e) throw e;
    console.error("Application submission error:", e);
    throw error(502, "We could not submit your application. Please try again or call us.");
  }
};
export {
  POST
};
