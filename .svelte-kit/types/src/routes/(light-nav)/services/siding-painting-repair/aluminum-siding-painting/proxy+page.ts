// @ts-nocheck
import type { PageLoad } from './$types';
import { createTitleDescription } from '$lib/common/seo/metaTagHelpers';

export const load = () => {
	const pageMetaTags = createTitleDescription(
		'Aluminum Siding Painting',
		'Trust Klasek Painting for professional aluminum siding painting. Our skilled painters ensure long-lasting and beautiful results. Get a free consultation today!'
	);

	return {
		pageMetaTags
	};
};
;null as any as PageLoad;