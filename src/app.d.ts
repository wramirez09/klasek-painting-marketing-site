// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface PageData {
			pageMetaTags: MetaTagsProps;
		}
		interface Platform {
			env?: {
				ZOHO_CLIENT_ID?: string;
				ZOHO_CLIENT_SECRET?: string;
				ZOHO_REFRESH_TOKEN?: string;
				ZOHO_ACCOUNTS_DOMAIN?: string;
				ZOHO_API_DOMAIN?: string;
				ZOHO_APPLICANTS_MODULE?: string;
			};
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
