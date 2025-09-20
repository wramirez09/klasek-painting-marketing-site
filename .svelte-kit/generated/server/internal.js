
import root from '../root.svelte';
import { set_building, set_prerendering } from '__sveltekit/environment';
import { set_assets } from '__sveltekit/paths';
import { set_manifest, set_read_implementation } from '__sveltekit/server';
import { set_private_env, set_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_template_contains_nonce: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	csrf_trusted_origins: [],
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hash_routing: false,
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	service_worker_options: undefined,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!doctype html>\n<html lang=\"en\">\n\n<head>\n\t<meta charset=\"utf-8\" />\n\t<link rel=\"icon\" href=\"" + assets + "/favicon.png\" />\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t<!-- Google tag (gtag.js) -->\n\t<script async src=\"https://www.googletagmanager.com/gtag/js?id=AW-998511498\"></script>\n\t<!-- atlas code -->\n\t<script nowprocket nitro-exclude type=\"text/javascript\" id=\"sa-dynamic-optimization\"\n\t\tdata-uuid=\"1cffbccf-fb4a-489d-9fb5-94ec6df5992b\"\n\t\tsrc=\"data:text/javascript;base64,dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoInNjcmlwdCIpO3NjcmlwdC5zZXRBdHRyaWJ1dGUoIm5vd3Byb2NrZXQiLCAiIik7c2NyaXB0LnNldEF0dHJpYnV0ZSgibml0cm8tZXhjbHVkZSIsICIiKTtzY3JpcHQuc3JjID0gImh0dHBzOi8vZGFzaGJvYXJkLnNlYXJjaGF0bGFzLmNvbS9zY3JpcHRzL2R5bmFtaWNfb3B0aW1pemF0aW9uLmpzIjtzY3JpcHQuZGF0YXNldC51dWlkID0gIjFjZmZiY2NmLWZiNGEtNDg5ZC05ZmI1LTk0ZWM2ZGY1OTkyYiI7c2NyaXB0LmlkID0gInNhLWR5bmFtaWMtb3B0aW1pemF0aW9uLWxvYWRlciI7ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpOw==\"></script>\n\t<!-- end atlas-->\n\n\t<!-- schema markup -->\n\t<script type=\"application/ld+json\">\n\t\t{\n\t\t\t\"url\": \"https://klasekpainting.com\",\n\t\t\t\"logo\": \"https://www.google.com/s2/favicons?sz=256&domain_url=https://klasekpainting.com\",\n\t\t\t\"name\": \"Klasek Painting\",\n\t\t\t\"type\": \"HomeAndConstructionBusiness\",\n\t\t\t\"email\": \"peter@klasekpainting.com\",\n\t\t\t\"address\": {\n\t\t\t\t\"type\": \"PostalAddress\",\n\t\t\t\t\"streetAddress\": \"4415 S. Custer, , IL 60534\",\n\t\t\t\t\"addressLocality\": \"Lyons\"\n\t\t\t},\n\t\t\t\"context\": \"https://schema.org\",\n\t\t\t\"description\": \"At Klasek Painting we offer reliable, professional painting services for exterior surfaces. Our company was established in 1992 and with over 30 years of experience, our company continues to provide top-quality work for residential projects. We use the most state-of-the-art materials from Sherwin Williams to assure a long-lasting paint job. We work from 7am to 5pm to complete your project in a timely fashion.\"\n\t\t}\n\t</script>\n\t<!-- end schema -->\n\t<script>\n\t\twindow.dataLayer = window.dataLayer || [];\n\t\tfunction gtag() {\n\t\t\tdataLayer.push(arguments);\n\t\t}\n\t\tgtag('js', new Date());\n\n\t\tgtag('config', 'AW-998511498');\n\t</script>\n\t" + head + "\n</head>\n\n<body data-sveltekit-preload-data=\"hover\">\n\t<div style=\"display: contents\">" + body + "</div>\n</body>\n\n</html>",
		error: ({ status, message }) => "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\t</head>\n\t<body class=\"bg-secondary-dark\">\n\t\t<div id=\"error-container\">\n\t\t\t<h1>Oops! Something went wrong...</h1>\n\t\t\t<p>" + status + " | " + message + "</p>\n\t\t\t<p>\n\t\t\t\tTry refreshing the page. If that doesn't work, give us a call at\n\t\t\t\t<a href=\"tel:708-554-4697\">(708) 554-4697</a>.\n\t\t\t</p>\n\t\t</div>\n\t</body>\n</html>\n\n<style>\n\tbody {\n\t\theight: 100dvh;\n\t\tdisplay: grid;\n\t\tplace-items: center;\n\t}\n\n\t#error-container {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t}\n</style>\n"
	},
	version_hash: "1gz56vw"
};

export async function get_hooks() {
	let handle;
	let handleFetch;
	let handleError;
	let handleValidationError;
	let init;
	({ handle, handleFetch, handleError, handleValidationError, init } = await import("../../../src/hooks.server.ts"));

	let reroute;
	let transport;
	

	return {
		handle,
		handleFetch,
		handleError,
		handleValidationError,
		init,
		reroute,
		transport
	};
}

export { set_assets, set_building, set_manifest, set_prerendering, set_private_env, set_public_env, set_read_implementation };
