// @ts-nocheck
import type { PageLoad } from './$types';
import { createTitleDescription } from '$lib/common/seo/metaTagHelpers';

export const load = () => {
	const pageMetaTags = createTitleDescription(
		'Hardie Board Siding Painting',
		"Enhance your home's exterior with Klasek Painting's expert Hardie Board siding painting services. Durable and vibrant finishes. Contact us for a free quote!"
	);

	return {
		pageMetaTags
	};
};
;null as any as PageLoad;