import type { PageLoad } from './$types';
import { createTitleDescription } from '$lib/common/seo/metaTagHelpers';

export const load: PageLoad = () => {
	const pageMetaTags = createTitleDescription(
		'Cedar Siding Repair',
		"Restore the beauty of your cedar siding with Klasek Painting's expert repair services. Quality craftsmanship and durable results. Contact us for a free quote!"
	);

	return {
		pageMetaTags
	};
};
