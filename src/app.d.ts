// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface PageData {
			pageMetaTags: MetaTagsProps;
		}
	}

	declare type GTag = (...args: unknown[]) => void;

	declare interface Window {
		dataLayer: IArguments[];

		gtag?: GTag;
	}

	export const gtag: GTag;
}

export {};
