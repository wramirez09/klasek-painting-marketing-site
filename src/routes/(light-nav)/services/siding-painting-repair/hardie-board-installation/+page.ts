import type { PageLoad } from './$types';
import { createTitleDescription } from '$lib/common/seo/metaTagHelpers';

export const load: PageLoad = () => {
	const pageMetaTags = createTitleDescription(
		'Hardie Board Siding Installation',
		'Upgrade your home with expert Hardie Board fiber cement siding installation from Klasek Painting. Durable, beautiful, built for Chicago weather. Free estimates!'
	);

	return {
		pageMetaTags
	};
};
