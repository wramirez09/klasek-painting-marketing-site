
import root from '../root.svelte';
import { set_building, set_prerendering } from '__sveltekit/environment';
import { set_assets } from '__sveltekit/paths';
import { set_manifest, set_read_implementation } from '__sveltekit/server';
import { set_private_env, set_public_env, set_safe_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_dir: "_app",
	app_template_contains_nonce: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<link rel=\"icon\" href=\"" + assets + "/favicon.png\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t\t<!-- Google tag (gtag.js) -->\n\t\t<script async src=\"https://www.googletagmanager.com/gtag/js?id=AW-998511498\"></script>\n\t\t<script>\n\t\t\twindow.dataLayer = window.dataLayer || [];\n\t\t\tfunction gtag() {\n\t\t\t\tdataLayer.push(arguments);\n\t\t\t}\n\t\t\tgtag('js', new Date());\n\n\t\t\tgtag('config', 'AW-998511498');\n\t\t</script>\n\t\t" + head + "\n\t</head>\n\t<body data-sveltekit-preload-data=\"hover\">\n\t\t<div style=\"display: contents\">" + body + "</div>\n\t</body>\n</html>\n",
		error: ({ status, message }) => "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\t</head>\n\t<body class=\"bg-secondary-dark\">\n\t\t<div id=\"error-container\">\n\t\t\t<h1>Oops! Something went wrong...</h1>\n\t\t\t<p>" + status + " | " + message + "</p>\n\t\t\t<p>\n\t\t\t\tTry refreshing the page. If that doesn't work, give us a call at\n\t\t\t\t<a href=\"tel:708-554-4697\">(708) 554-4697</a>.\n\t\t\t</p>\n\t\t</div>\n\t</body>\n</html>\n\n<style>\n\tbody {\n\t\theight: 100dvh;\n\t\tdisplay: grid;\n\t\tplace-items: center;\n\t}\n\n\t#error-container {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t}\n</style>\n"
	},
	version_hash: "r593ld"
};

export async function get_hooks() {
	return {
		...(await import("../../../src/hooks.server.ts")),
		
	};
}

export { set_assets, set_building, set_manifest, set_prerendering, set_private_env, set_public_env, set_read_implementation, set_safe_public_env };
