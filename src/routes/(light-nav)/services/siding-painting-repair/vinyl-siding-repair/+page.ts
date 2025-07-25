import type { PageLoad } from './$types';
import { createTitleDescription } from '$lib/common/seo/metaTagHelpers';

export const load: PageLoad = () => {
	const pageMetaTags = createTitleDescription(
		'Vinyl Siding Repair',
		"Expert vinyl siding repair services in Cook County. Restore your home's exterior with high-quality, repairs. Affordable prices and professional results."
	);

	return {
		pageMetaTags
	};
};
