import type { PageLoad } from './$types';
import { createTitleDescription } from '$lib/common/seo/metaTagHelpers';

export const load: PageLoad = () => {
	const pageMetaTags = createTitleDescription(
		'Hardie Board Siding Repair',
		"Restore and maintain your Hardie Board siding with Klasek Painting's expert repair services. Quality craftsmanship and durable results. Contact us today!"
	);

	return {
		pageMetaTags
	};
};
