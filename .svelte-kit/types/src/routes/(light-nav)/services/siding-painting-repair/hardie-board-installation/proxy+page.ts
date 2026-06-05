// @ts-nocheck
import type { PageLoad } from './$types';
import { createTitleDescription } from '$lib/common/seo/metaTagHelpers';

export const load = () => {
	const pageMetaTags = createTitleDescription(
		'Hardie Board Siding Installation',
		'Upgrade your home with expert Hardie Board fiber cement siding installation from Klasek Painting. Durable, beautiful, built for Chicago weather. Free estimates!'
	);

	return {
		pageMetaTags
	};
};
;null as any as PageLoad;