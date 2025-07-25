import type { PageLoad } from './$types';
import { createTitleDescription } from '$lib/common/seo/metaTagHelpers';

export const load: PageLoad = () => {
	const pageMetaTags = createTitleDescription(
		'Stucco Repair',
		"Restore your stucco exterior with Klasek Painting's expert repair services. Quality craftsmanship and durable results. Contact us today for a free quote!"
	);

	return {
		pageMetaTags
	};
};
