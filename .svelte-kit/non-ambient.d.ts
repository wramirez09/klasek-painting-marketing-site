
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/(light-nav)" | "/(dark-nav)" | "/" | "/.well-known" | "/.well-known/appspecific" | "/.well-known/appspecific/com.chrome.devtools.json" | "/(dark-nav)/about-us" | "/(dark-nav)/about-us/faqs" | "/(dark-nav)/about-us/service-area/(city-pages)" | "/(dark-nav)/about-us/service-area" | "/(dark-nav)/about-us/service-area/(city-pages)/berwyn-house-painting" | "/(dark-nav)/about-us/service-area/(city-pages)/burr-ridge-house-painting" | "/(dark-nav)/about-us/service-area/(city-pages)/clarendon-hills-house-painting" | "/(dark-nav)/about-us/service-area/(city-pages)/downers-grove-house-painting" | "/(dark-nav)/about-us/service-area/(city-pages)/forest-park-house-painting" | "/(dark-nav)/about-us/service-area/(city-pages)/hinsdale-house-painting" | "/(dark-nav)/about-us/service-area/(city-pages)/la-grange-house-painting" | "/(dark-nav)/about-us/service-area/(city-pages)/oak-brook-house-painting" | "/(dark-nav)/about-us/service-area/(city-pages)/oak-park-house-painting" | "/(dark-nav)/about-us/service-area/(city-pages)/orland-park-house-painting" | "/(dark-nav)/about-us/service-area/(city-pages)/riverside-house-painting" | "/(dark-nav)/about-us/service-area/(city-pages)/western-springs-house-painting" | "/(dark-nav)/about-us/service-area/(city-pages)/westmont-house-painting" | "/(dark-nav)/about-us/service-area/(city-pages)/willow-springs-house-painting" | "/(dark-nav)/about-us/service-area/(city-pages)/willowbrook-house-painting" | "/(dark-nav)/about-us/testimonials" | "/(light-nav)/blog" | "/(light-nav)/blog/[title]" | "/(light-nav)/contact-us" | "/(light-nav)/legal" | "/(light-nav)/legal/privacy-policy" | "/(dark-nav)/photo-gallery" | "/(dark-nav)/photo-gallery/brick-painting" | "/(dark-nav)/photo-gallery/cedar-replacement" | "/(dark-nav)/photo-gallery/cedar-shingle-and-stucco-repair" | "/(dark-nav)/photo-gallery/cedar-siding-repair-paint" | "/(dark-nav)/photo-gallery/exterior-hardie-board" | "/(dark-nav)/photo-gallery/past-projects" | "/(dark-nav)/photo-gallery/siding-and-stucco" | "/(dark-nav)/photo-gallery/siding-repair" | "/(dark-nav)/photo-gallery/stucco-and-cedar-siding" | "/(dark-nav)/photo-gallery/stucco-and-trim" | "/(dark-nav)/photo-gallery/stucco-repair" | "/(dark-nav)/photo-gallery/stucco-siding-repair-paint" | "/(dark-nav)/photo-gallery/trim" | "/(dark-nav)/photo-gallery/victorian-homes" | "/(dark-nav)/photo-gallery/white-cedar-siding" | "/(light-nav)/services" | "/(light-nav)/services/brick-painting-repair" | "/(light-nav)/services/brick-painting-repair/exterior-brick-painting" | "/(light-nav)/services/brick-painting-repair/exterior-brick-repair" | "/(light-nav)/services/brick-painting-repair/exterior-brick-staining" | "/(light-nav)/services/commercial-exterior-painting" | "/(light-nav)/services/design-color-consultation" | "/(light-nav)/services/exterior-home-painting" | "/(light-nav)/services/exterior-home-painting/exterior-paint-contractor" | "/(light-nav)/services/exterior-home-painting/historic-house-painting" | "/(light-nav)/services/gutter-installation-repair" | "/(light-nav)/services/siding-painting-repair" | "/(light-nav)/services/siding-painting-repair/aluminum-siding-painting" | "/(light-nav)/services/siding-painting-repair/aluminum-siding-repair" | "/(light-nav)/services/siding-painting-repair/cedar-siding-painting" | "/(light-nav)/services/siding-painting-repair/cedar-siding-repair" | "/(light-nav)/services/siding-painting-repair/hardie-board-installation" | "/(light-nav)/services/siding-painting-repair/hardie-board-painting" | "/(light-nav)/services/siding-painting-repair/hardie-board-repair" | "/(light-nav)/services/siding-painting-repair/vinyl-siding-painting" | "/(light-nav)/services/siding-painting-repair/vinyl-siding-repair" | "/(light-nav)/services/stucco-painting-repair" | "/(light-nav)/services/stucco-painting-repair/stucco-painting" | "/(light-nav)/services/stucco-painting-repair/stucco-repair" | "/sitemap.xml";
		RouteParams(): {
			"/(light-nav)/blog/[title]": { title: string }
		};
		LayoutParams(): {
			"/(light-nav)": { title?: string };
			"/(dark-nav)": Record<string, never>;
			"/": { title?: string };
			"/.well-known": Record<string, never>;
			"/.well-known/appspecific": Record<string, never>;
			"/.well-known/appspecific/com.chrome.devtools.json": Record<string, never>;
			"/(dark-nav)/about-us": Record<string, never>;
			"/(dark-nav)/about-us/faqs": Record<string, never>;
			"/(dark-nav)/about-us/service-area/(city-pages)": Record<string, never>;
			"/(dark-nav)/about-us/service-area": Record<string, never>;
			"/(dark-nav)/about-us/service-area/(city-pages)/berwyn-house-painting": Record<string, never>;
			"/(dark-nav)/about-us/service-area/(city-pages)/burr-ridge-house-painting": Record<string, never>;
			"/(dark-nav)/about-us/service-area/(city-pages)/clarendon-hills-house-painting": Record<string, never>;
			"/(dark-nav)/about-us/service-area/(city-pages)/downers-grove-house-painting": Record<string, never>;
			"/(dark-nav)/about-us/service-area/(city-pages)/forest-park-house-painting": Record<string, never>;
			"/(dark-nav)/about-us/service-area/(city-pages)/hinsdale-house-painting": Record<string, never>;
			"/(dark-nav)/about-us/service-area/(city-pages)/la-grange-house-painting": Record<string, never>;
			"/(dark-nav)/about-us/service-area/(city-pages)/oak-brook-house-painting": Record<string, never>;
			"/(dark-nav)/about-us/service-area/(city-pages)/oak-park-house-painting": Record<string, never>;
			"/(dark-nav)/about-us/service-area/(city-pages)/orland-park-house-painting": Record<string, never>;
			"/(dark-nav)/about-us/service-area/(city-pages)/riverside-house-painting": Record<string, never>;
			"/(dark-nav)/about-us/service-area/(city-pages)/western-springs-house-painting": Record<string, never>;
			"/(dark-nav)/about-us/service-area/(city-pages)/westmont-house-painting": Record<string, never>;
			"/(dark-nav)/about-us/service-area/(city-pages)/willow-springs-house-painting": Record<string, never>;
			"/(dark-nav)/about-us/service-area/(city-pages)/willowbrook-house-painting": Record<string, never>;
			"/(dark-nav)/about-us/testimonials": Record<string, never>;
			"/(light-nav)/blog": { title?: string };
			"/(light-nav)/blog/[title]": { title: string };
			"/(light-nav)/contact-us": Record<string, never>;
			"/(light-nav)/legal": Record<string, never>;
			"/(light-nav)/legal/privacy-policy": Record<string, never>;
			"/(dark-nav)/photo-gallery": Record<string, never>;
			"/(dark-nav)/photo-gallery/brick-painting": Record<string, never>;
			"/(dark-nav)/photo-gallery/cedar-replacement": Record<string, never>;
			"/(dark-nav)/photo-gallery/cedar-shingle-and-stucco-repair": Record<string, never>;
			"/(dark-nav)/photo-gallery/cedar-siding-repair-paint": Record<string, never>;
			"/(dark-nav)/photo-gallery/exterior-hardie-board": Record<string, never>;
			"/(dark-nav)/photo-gallery/past-projects": Record<string, never>;
			"/(dark-nav)/photo-gallery/siding-and-stucco": Record<string, never>;
			"/(dark-nav)/photo-gallery/siding-repair": Record<string, never>;
			"/(dark-nav)/photo-gallery/stucco-and-cedar-siding": Record<string, never>;
			"/(dark-nav)/photo-gallery/stucco-and-trim": Record<string, never>;
			"/(dark-nav)/photo-gallery/stucco-repair": Record<string, never>;
			"/(dark-nav)/photo-gallery/stucco-siding-repair-paint": Record<string, never>;
			"/(dark-nav)/photo-gallery/trim": Record<string, never>;
			"/(dark-nav)/photo-gallery/victorian-homes": Record<string, never>;
			"/(dark-nav)/photo-gallery/white-cedar-siding": Record<string, never>;
			"/(light-nav)/services": Record<string, never>;
			"/(light-nav)/services/brick-painting-repair": Record<string, never>;
			"/(light-nav)/services/brick-painting-repair/exterior-brick-painting": Record<string, never>;
			"/(light-nav)/services/brick-painting-repair/exterior-brick-repair": Record<string, never>;
			"/(light-nav)/services/brick-painting-repair/exterior-brick-staining": Record<string, never>;
			"/(light-nav)/services/commercial-exterior-painting": Record<string, never>;
			"/(light-nav)/services/design-color-consultation": Record<string, never>;
			"/(light-nav)/services/exterior-home-painting": Record<string, never>;
			"/(light-nav)/services/exterior-home-painting/exterior-paint-contractor": Record<string, never>;
			"/(light-nav)/services/exterior-home-painting/historic-house-painting": Record<string, never>;
			"/(light-nav)/services/gutter-installation-repair": Record<string, never>;
			"/(light-nav)/services/siding-painting-repair": Record<string, never>;
			"/(light-nav)/services/siding-painting-repair/aluminum-siding-painting": Record<string, never>;
			"/(light-nav)/services/siding-painting-repair/aluminum-siding-repair": Record<string, never>;
			"/(light-nav)/services/siding-painting-repair/cedar-siding-painting": Record<string, never>;
			"/(light-nav)/services/siding-painting-repair/cedar-siding-repair": Record<string, never>;
			"/(light-nav)/services/siding-painting-repair/hardie-board-installation": Record<string, never>;
			"/(light-nav)/services/siding-painting-repair/hardie-board-painting": Record<string, never>;
			"/(light-nav)/services/siding-painting-repair/hardie-board-repair": Record<string, never>;
			"/(light-nav)/services/siding-painting-repair/vinyl-siding-painting": Record<string, never>;
			"/(light-nav)/services/siding-painting-repair/vinyl-siding-repair": Record<string, never>;
			"/(light-nav)/services/stucco-painting-repair": Record<string, never>;
			"/(light-nav)/services/stucco-painting-repair/stucco-painting": Record<string, never>;
			"/(light-nav)/services/stucco-painting-repair/stucco-repair": Record<string, never>;
			"/sitemap.xml": Record<string, never>
		};
		Pathname(): "/" | "/.well-known" | "/.well-known/" | "/.well-known/appspecific" | "/.well-known/appspecific/" | "/.well-known/appspecific/com.chrome.devtools.json" | "/.well-known/appspecific/com.chrome.devtools.json/" | "/about-us" | "/about-us/" | "/about-us/faqs" | "/about-us/faqs/" | "/about-us/service-area" | "/about-us/service-area/" | "/about-us/service-area/berwyn-house-painting" | "/about-us/service-area/berwyn-house-painting/" | "/about-us/service-area/burr-ridge-house-painting" | "/about-us/service-area/burr-ridge-house-painting/" | "/about-us/service-area/clarendon-hills-house-painting" | "/about-us/service-area/clarendon-hills-house-painting/" | "/about-us/service-area/downers-grove-house-painting" | "/about-us/service-area/downers-grove-house-painting/" | "/about-us/service-area/forest-park-house-painting" | "/about-us/service-area/forest-park-house-painting/" | "/about-us/service-area/hinsdale-house-painting" | "/about-us/service-area/hinsdale-house-painting/" | "/about-us/service-area/la-grange-house-painting" | "/about-us/service-area/la-grange-house-painting/" | "/about-us/service-area/oak-brook-house-painting" | "/about-us/service-area/oak-brook-house-painting/" | "/about-us/service-area/oak-park-house-painting" | "/about-us/service-area/oak-park-house-painting/" | "/about-us/service-area/orland-park-house-painting" | "/about-us/service-area/orland-park-house-painting/" | "/about-us/service-area/riverside-house-painting" | "/about-us/service-area/riverside-house-painting/" | "/about-us/service-area/western-springs-house-painting" | "/about-us/service-area/western-springs-house-painting/" | "/about-us/service-area/westmont-house-painting" | "/about-us/service-area/westmont-house-painting/" | "/about-us/service-area/willow-springs-house-painting" | "/about-us/service-area/willow-springs-house-painting/" | "/about-us/service-area/willowbrook-house-painting" | "/about-us/service-area/willowbrook-house-painting/" | "/about-us/testimonials" | "/about-us/testimonials/" | "/blog" | "/blog/" | `/blog/${string}` & {} | `/blog/${string}/` & {} | "/contact-us" | "/contact-us/" | "/legal" | "/legal/" | "/legal/privacy-policy" | "/legal/privacy-policy/" | "/photo-gallery" | "/photo-gallery/" | "/photo-gallery/brick-painting" | "/photo-gallery/brick-painting/" | "/photo-gallery/cedar-replacement" | "/photo-gallery/cedar-replacement/" | "/photo-gallery/cedar-shingle-and-stucco-repair" | "/photo-gallery/cedar-shingle-and-stucco-repair/" | "/photo-gallery/cedar-siding-repair-paint" | "/photo-gallery/cedar-siding-repair-paint/" | "/photo-gallery/exterior-hardie-board" | "/photo-gallery/exterior-hardie-board/" | "/photo-gallery/past-projects" | "/photo-gallery/past-projects/" | "/photo-gallery/siding-and-stucco" | "/photo-gallery/siding-and-stucco/" | "/photo-gallery/siding-repair" | "/photo-gallery/siding-repair/" | "/photo-gallery/stucco-and-cedar-siding" | "/photo-gallery/stucco-and-cedar-siding/" | "/photo-gallery/stucco-and-trim" | "/photo-gallery/stucco-and-trim/" | "/photo-gallery/stucco-repair" | "/photo-gallery/stucco-repair/" | "/photo-gallery/stucco-siding-repair-paint" | "/photo-gallery/stucco-siding-repair-paint/" | "/photo-gallery/trim" | "/photo-gallery/trim/" | "/photo-gallery/victorian-homes" | "/photo-gallery/victorian-homes/" | "/photo-gallery/white-cedar-siding" | "/photo-gallery/white-cedar-siding/" | "/services" | "/services/" | "/services/brick-painting-repair" | "/services/brick-painting-repair/" | "/services/brick-painting-repair/exterior-brick-painting" | "/services/brick-painting-repair/exterior-brick-painting/" | "/services/brick-painting-repair/exterior-brick-repair" | "/services/brick-painting-repair/exterior-brick-repair/" | "/services/brick-painting-repair/exterior-brick-staining" | "/services/brick-painting-repair/exterior-brick-staining/" | "/services/commercial-exterior-painting" | "/services/commercial-exterior-painting/" | "/services/design-color-consultation" | "/services/design-color-consultation/" | "/services/exterior-home-painting" | "/services/exterior-home-painting/" | "/services/exterior-home-painting/exterior-paint-contractor" | "/services/exterior-home-painting/exterior-paint-contractor/" | "/services/exterior-home-painting/historic-house-painting" | "/services/exterior-home-painting/historic-house-painting/" | "/services/gutter-installation-repair" | "/services/gutter-installation-repair/" | "/services/siding-painting-repair" | "/services/siding-painting-repair/" | "/services/siding-painting-repair/aluminum-siding-painting" | "/services/siding-painting-repair/aluminum-siding-painting/" | "/services/siding-painting-repair/aluminum-siding-repair" | "/services/siding-painting-repair/aluminum-siding-repair/" | "/services/siding-painting-repair/cedar-siding-painting" | "/services/siding-painting-repair/cedar-siding-painting/" | "/services/siding-painting-repair/cedar-siding-repair" | "/services/siding-painting-repair/cedar-siding-repair/" | "/services/siding-painting-repair/hardie-board-installation" | "/services/siding-painting-repair/hardie-board-installation/" | "/services/siding-painting-repair/hardie-board-painting" | "/services/siding-painting-repair/hardie-board-painting/" | "/services/siding-painting-repair/hardie-board-repair" | "/services/siding-painting-repair/hardie-board-repair/" | "/services/siding-painting-repair/vinyl-siding-painting" | "/services/siding-painting-repair/vinyl-siding-painting/" | "/services/siding-painting-repair/vinyl-siding-repair" | "/services/siding-painting-repair/vinyl-siding-repair/" | "/services/stucco-painting-repair" | "/services/stucco-painting-repair/" | "/services/stucco-painting-repair/stucco-painting" | "/services/stucco-painting-repair/stucco-painting/" | "/services/stucco-painting-repair/stucco-repair" | "/services/stucco-painting-repair/stucco-repair/" | "/sitemap.xml" | "/sitemap.xml/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/favicon.png" | "/klasek-painting.png" | "/klasek_blog.webp" | "/klasek_blog_what-exterior-paint-colors-look-the-best-2.webp" | "/klasek_blog_what-exterior-paint-colors-look-the-best-3.webp" | "/klasek_blog_what-exterior-paint-colors-look-the-best.webp" | "/robots.txt" | string & {};
	}
}