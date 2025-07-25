// @ts-nocheck
import type { PageLoad } from './$types';
import { createTitleDescription } from '$lib/common/seo/metaTagHelpers';

export const load = () => {
	const pageMetaTags = createTitleDescription(
		'Professional Siding Painting and Repair',
		"Enhance your home's exterior with Klasek Painting's expert siding painting and repair services. Quality finishes and reliable repairs. Contact us for a quote!"
	);

	return {
		pageMetaTags
	};
};
;null as any as PageLoad;