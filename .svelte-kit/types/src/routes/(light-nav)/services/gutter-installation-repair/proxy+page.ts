// @ts-nocheck
import type { PageLoad } from './$types';
import { createTitleDescription } from '$lib/common/seo/metaTagHelpers';

export const load = () => {
	const pageMetaTags = createTitleDescription(
		'Gutter Installation & Repair',
		'Protect your home with expert gutter installation, replacement, repair, and cleaning from Klasek Painting. Serving Cook County for over 30 years. Get a free estimate!'
	);

	return {
		pageMetaTags
	};
};
;null as any as PageLoad;