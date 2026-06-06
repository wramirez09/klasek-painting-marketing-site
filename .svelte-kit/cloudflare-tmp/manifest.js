export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","klasek-painting.png","klasek_blog.webp","klasek_blog_what-exterior-paint-colors-look-the-best-2.webp","klasek_blog_what-exterior-paint-colors-look-the-best-3.webp","klasek_blog_what-exterior-paint-colors-look-the-best.webp","robots.txt"]),
	mimeTypes: {".png":"image/png",".webp":"image/webp",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.BxP_PZp7.js",app:"_app/immutable/entry/app.C2oY7mJi.js",imports:["_app/immutable/entry/start.BxP_PZp7.js","_app/immutable/chunks/CPGwwV9Y.js","_app/immutable/chunks/CwTS8T7P.js","_app/immutable/chunks/BzDfcGes.js","_app/immutable/entry/app.C2oY7mJi.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/CwTS8T7P.js","_app/immutable/chunks/IHki7fMi.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js')),
			__memo(() => import('../output/server/nodes/6.js')),
			__memo(() => import('../output/server/nodes/7.js')),
			__memo(() => import('../output/server/nodes/8.js')),
			__memo(() => import('../output/server/nodes/9.js')),
			__memo(() => import('../output/server/nodes/10.js')),
			__memo(() => import('../output/server/nodes/11.js')),
			__memo(() => import('../output/server/nodes/12.js')),
			__memo(() => import('../output/server/nodes/13.js')),
			__memo(() => import('../output/server/nodes/14.js')),
			__memo(() => import('../output/server/nodes/15.js')),
			__memo(() => import('../output/server/nodes/16.js')),
			__memo(() => import('../output/server/nodes/17.js')),
			__memo(() => import('../output/server/nodes/18.js')),
			__memo(() => import('../output/server/nodes/19.js')),
			__memo(() => import('../output/server/nodes/20.js')),
			__memo(() => import('../output/server/nodes/21.js')),
			__memo(() => import('../output/server/nodes/22.js')),
			__memo(() => import('../output/server/nodes/23.js')),
			__memo(() => import('../output/server/nodes/24.js')),
			__memo(() => import('../output/server/nodes/25.js')),
			__memo(() => import('../output/server/nodes/26.js')),
			__memo(() => import('../output/server/nodes/27.js')),
			__memo(() => import('../output/server/nodes/28.js')),
			__memo(() => import('../output/server/nodes/29.js')),
			__memo(() => import('../output/server/nodes/30.js')),
			__memo(() => import('../output/server/nodes/31.js')),
			__memo(() => import('../output/server/nodes/32.js')),
			__memo(() => import('../output/server/nodes/33.js')),
			__memo(() => import('../output/server/nodes/34.js')),
			__memo(() => import('../output/server/nodes/35.js')),
			__memo(() => import('../output/server/nodes/36.js')),
			__memo(() => import('../output/server/nodes/37.js')),
			__memo(() => import('../output/server/nodes/38.js')),
			__memo(() => import('../output/server/nodes/39.js')),
			__memo(() => import('../output/server/nodes/40.js')),
			__memo(() => import('../output/server/nodes/41.js')),
			__memo(() => import('../output/server/nodes/42.js')),
			__memo(() => import('../output/server/nodes/43.js')),
			__memo(() => import('../output/server/nodes/44.js')),
			__memo(() => import('../output/server/nodes/45.js')),
			__memo(() => import('../output/server/nodes/46.js')),
			__memo(() => import('../output/server/nodes/47.js')),
			__memo(() => import('../output/server/nodes/48.js')),
			__memo(() => import('../output/server/nodes/49.js')),
			__memo(() => import('../output/server/nodes/50.js')),
			__memo(() => import('../output/server/nodes/51.js')),
			__memo(() => import('../output/server/nodes/52.js')),
			__memo(() => import('../output/server/nodes/53.js')),
			__memo(() => import('../output/server/nodes/54.js')),
			__memo(() => import('../output/server/nodes/55.js')),
			__memo(() => import('../output/server/nodes/56.js')),
			__memo(() => import('../output/server/nodes/57.js')),
			__memo(() => import('../output/server/nodes/58.js')),
			__memo(() => import('../output/server/nodes/59.js')),
			__memo(() => import('../output/server/nodes/60.js')),
			__memo(() => import('../output/server/nodes/61.js')),
			__memo(() => import('../output/server/nodes/62.js')),
			__memo(() => import('../output/server/nodes/63.js')),
			__memo(() => import('../output/server/nodes/64.js')),
			__memo(() => import('../output/server/nodes/65.js')),
			__memo(() => import('../output/server/nodes/66.js')),
			__memo(() => import('../output/server/nodes/67.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/.well-known/appspecific/com.chrome.devtools.json",
				pattern: /^\/\.well-known\/appspecific\/com\.chrome\.devtools\.json\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/.well-known/appspecific/com.chrome.devtools.json/_server.js'))
			},
			{
				id: "/(dark-nav)/about-us",
				pattern: /^\/about-us\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/(dark-nav)/about-us/faqs",
				pattern: /^\/about-us\/faqs\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/(dark-nav)/about-us/service-area",
				pattern: /^\/about-us\/service-area\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(dark-nav)/about-us/service-area/(city-pages)/berwyn-house-painting",
				pattern: /^\/about-us\/service-area\/berwyn-house-painting\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(dark-nav)/about-us/service-area/(city-pages)/burr-ridge-house-painting",
				pattern: /^\/about-us\/service-area\/burr-ridge-house-painting\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/(dark-nav)/about-us/service-area/(city-pages)/clarendon-hills-house-painting",
				pattern: /^\/about-us\/service-area\/clarendon-hills-house-painting\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/(dark-nav)/about-us/service-area/(city-pages)/downers-grove-house-painting",
				pattern: /^\/about-us\/service-area\/downers-grove-house-painting\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/(dark-nav)/about-us/service-area/(city-pages)/forest-park-house-painting",
				pattern: /^\/about-us\/service-area\/forest-park-house-painting\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/(dark-nav)/about-us/service-area/(city-pages)/hinsdale-house-painting",
				pattern: /^\/about-us\/service-area\/hinsdale-house-painting\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/(dark-nav)/about-us/service-area/(city-pages)/la-grange-house-painting",
				pattern: /^\/about-us\/service-area\/la-grange-house-painting\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/(dark-nav)/about-us/service-area/(city-pages)/oak-brook-house-painting",
				pattern: /^\/about-us\/service-area\/oak-brook-house-painting\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/(dark-nav)/about-us/service-area/(city-pages)/oak-park-house-painting",
				pattern: /^\/about-us\/service-area\/oak-park-house-painting\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/(dark-nav)/about-us/service-area/(city-pages)/orland-park-house-painting",
				pattern: /^\/about-us\/service-area\/orland-park-house-painting\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/(dark-nav)/about-us/service-area/(city-pages)/riverside-house-painting",
				pattern: /^\/about-us\/service-area\/riverside-house-painting\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/(dark-nav)/about-us/service-area/(city-pages)/western-springs-house-painting",
				pattern: /^\/about-us\/service-area\/western-springs-house-painting\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/(dark-nav)/about-us/service-area/(city-pages)/westmont-house-painting",
				pattern: /^\/about-us\/service-area\/westmont-house-painting\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/(dark-nav)/about-us/service-area/(city-pages)/willow-springs-house-painting",
				pattern: /^\/about-us\/service-area\/willow-springs-house-painting\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/(dark-nav)/about-us/service-area/(city-pages)/willowbrook-house-painting",
				pattern: /^\/about-us\/service-area\/willowbrook-house-painting\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/(dark-nav)/about-us/testimonials",
				pattern: /^\/about-us\/testimonials\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 23 },
				endpoint: null
			},
			{
				id: "/(light-nav)/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 40 },
				endpoint: null
			},
			{
				id: "/(light-nav)/blog/[title]",
				pattern: /^\/blog\/([^/]+?)\/?$/,
				params: [{"name":"title","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,3,], errors: [1,,], leaf: 41 },
				endpoint: null
			},
			{
				id: "/(light-nav)/contact-us",
				pattern: /^\/contact-us\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 42 },
				endpoint: null
			},
			{
				id: "/(light-nav)/legal/privacy-policy",
				pattern: /^\/legal\/privacy-policy\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 43 },
				endpoint: null
			},
			{
				id: "/(dark-nav)/photo-gallery",
				pattern: /^\/photo-gallery\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 24 },
				endpoint: null
			},
			{
				id: "/(dark-nav)/photo-gallery/brick-painting",
				pattern: /^\/photo-gallery\/brick-painting\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 25 },
				endpoint: null
			},
			{
				id: "/(dark-nav)/photo-gallery/cedar-replacement",
				pattern: /^\/photo-gallery\/cedar-replacement\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 26 },
				endpoint: null
			},
			{
				id: "/(dark-nav)/photo-gallery/cedar-shingle-and-stucco-repair",
				pattern: /^\/photo-gallery\/cedar-shingle-and-stucco-repair\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 27 },
				endpoint: null
			},
			{
				id: "/(dark-nav)/photo-gallery/cedar-siding-repair-paint",
				pattern: /^\/photo-gallery\/cedar-siding-repair-paint\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 28 },
				endpoint: null
			},
			{
				id: "/(dark-nav)/photo-gallery/exterior-hardie-board",
				pattern: /^\/photo-gallery\/exterior-hardie-board\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 29 },
				endpoint: null
			},
			{
				id: "/(dark-nav)/photo-gallery/past-projects",
				pattern: /^\/photo-gallery\/past-projects\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 30 },
				endpoint: null
			},
			{
				id: "/(dark-nav)/photo-gallery/siding-and-stucco",
				pattern: /^\/photo-gallery\/siding-and-stucco\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 31 },
				endpoint: null
			},
			{
				id: "/(dark-nav)/photo-gallery/siding-repair",
				pattern: /^\/photo-gallery\/siding-repair\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 32 },
				endpoint: null
			},
			{
				id: "/(dark-nav)/photo-gallery/stucco-and-cedar-siding",
				pattern: /^\/photo-gallery\/stucco-and-cedar-siding\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 33 },
				endpoint: null
			},
			{
				id: "/(dark-nav)/photo-gallery/stucco-and-trim",
				pattern: /^\/photo-gallery\/stucco-and-trim\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 34 },
				endpoint: null
			},
			{
				id: "/(dark-nav)/photo-gallery/stucco-repair",
				pattern: /^\/photo-gallery\/stucco-repair\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 35 },
				endpoint: null
			},
			{
				id: "/(dark-nav)/photo-gallery/stucco-siding-repair-paint",
				pattern: /^\/photo-gallery\/stucco-siding-repair-paint\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 36 },
				endpoint: null
			},
			{
				id: "/(dark-nav)/photo-gallery/trim",
				pattern: /^\/photo-gallery\/trim\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 37 },
				endpoint: null
			},
			{
				id: "/(dark-nav)/photo-gallery/victorian-homes",
				pattern: /^\/photo-gallery\/victorian-homes\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 38 },
				endpoint: null
			},
			{
				id: "/(dark-nav)/photo-gallery/white-cedar-siding",
				pattern: /^\/photo-gallery\/white-cedar-siding\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 39 },
				endpoint: null
			},
			{
				id: "/(light-nav)/services",
				pattern: /^\/services\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 44 },
				endpoint: null
			},
			{
				id: "/(light-nav)/services/brick-painting-repair",
				pattern: /^\/services\/brick-painting-repair\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 45 },
				endpoint: null
			},
			{
				id: "/(light-nav)/services/brick-painting-repair/exterior-brick-painting",
				pattern: /^\/services\/brick-painting-repair\/exterior-brick-painting\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 46 },
				endpoint: null
			},
			{
				id: "/(light-nav)/services/brick-painting-repair/exterior-brick-repair",
				pattern: /^\/services\/brick-painting-repair\/exterior-brick-repair\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 47 },
				endpoint: null
			},
			{
				id: "/(light-nav)/services/brick-painting-repair/exterior-brick-staining",
				pattern: /^\/services\/brick-painting-repair\/exterior-brick-staining\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 48 },
				endpoint: null
			},
			{
				id: "/(light-nav)/services/commercial-exterior-painting",
				pattern: /^\/services\/commercial-exterior-painting\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 49 },
				endpoint: null
			},
			{
				id: "/(light-nav)/services/design-color-consultation",
				pattern: /^\/services\/design-color-consultation\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 50 },
				endpoint: null
			},
			{
				id: "/(light-nav)/services/exterior-home-painting",
				pattern: /^\/services\/exterior-home-painting\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 51 },
				endpoint: null
			},
			{
				id: "/(light-nav)/services/exterior-home-painting/exterior-paint-contractor",
				pattern: /^\/services\/exterior-home-painting\/exterior-paint-contractor\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 52 },
				endpoint: null
			},
			{
				id: "/(light-nav)/services/exterior-home-painting/historic-house-painting",
				pattern: /^\/services\/exterior-home-painting\/historic-house-painting\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 53 },
				endpoint: null
			},
			{
				id: "/(light-nav)/services/gutter-installation-repair",
				pattern: /^\/services\/gutter-installation-repair\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 54 },
				endpoint: null
			},
			{
				id: "/(light-nav)/services/siding-painting-repair",
				pattern: /^\/services\/siding-painting-repair\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 55 },
				endpoint: null
			},
			{
				id: "/(light-nav)/services/siding-painting-repair/aluminum-siding-painting",
				pattern: /^\/services\/siding-painting-repair\/aluminum-siding-painting\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 56 },
				endpoint: null
			},
			{
				id: "/(light-nav)/services/siding-painting-repair/aluminum-siding-repair",
				pattern: /^\/services\/siding-painting-repair\/aluminum-siding-repair\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 57 },
				endpoint: null
			},
			{
				id: "/(light-nav)/services/siding-painting-repair/cedar-siding-painting",
				pattern: /^\/services\/siding-painting-repair\/cedar-siding-painting\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 58 },
				endpoint: null
			},
			{
				id: "/(light-nav)/services/siding-painting-repair/cedar-siding-repair",
				pattern: /^\/services\/siding-painting-repair\/cedar-siding-repair\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 59 },
				endpoint: null
			},
			{
				id: "/(light-nav)/services/siding-painting-repair/hardie-board-installation",
				pattern: /^\/services\/siding-painting-repair\/hardie-board-installation\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 60 },
				endpoint: null
			},
			{
				id: "/(light-nav)/services/siding-painting-repair/hardie-board-painting",
				pattern: /^\/services\/siding-painting-repair\/hardie-board-painting\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 61 },
				endpoint: null
			},
			{
				id: "/(light-nav)/services/siding-painting-repair/hardie-board-repair",
				pattern: /^\/services\/siding-painting-repair\/hardie-board-repair\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 62 },
				endpoint: null
			},
			{
				id: "/(light-nav)/services/siding-painting-repair/vinyl-siding-painting",
				pattern: /^\/services\/siding-painting-repair\/vinyl-siding-painting\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 63 },
				endpoint: null
			},
			{
				id: "/(light-nav)/services/siding-painting-repair/vinyl-siding-repair",
				pattern: /^\/services\/siding-painting-repair\/vinyl-siding-repair\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 64 },
				endpoint: null
			},
			{
				id: "/(light-nav)/services/stucco-painting-repair",
				pattern: /^\/services\/stucco-painting-repair\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 65 },
				endpoint: null
			},
			{
				id: "/(light-nav)/services/stucco-painting-repair/stucco-painting",
				pattern: /^\/services\/stucco-painting-repair\/stucco-painting\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 66 },
				endpoint: null
			},
			{
				id: "/(light-nav)/services/stucco-painting-repair/stucco-repair",
				pattern: /^\/services\/stucco-painting-repair\/stucco-repair\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 67 },
				endpoint: null
			},
			{
				id: "/sitemap.xml",
				pattern: /^\/sitemap\.xml\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/sitemap.xml/_server.ts.js'))
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

export const prerendered = new Set([]);

export const app_path = "_app";
