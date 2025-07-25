import type { PageServerLoad } from './$types.js';
import { createTitleDescription } from '$lib/common/seo/metaTagHelpers';

// Return form on load w/ schema
export const load: PageServerLoad = () => {
	const pageMetaTags = createTitleDescription(
		'Contact Us',
		'For expert painting solutions in Cook County, contact Klasek Painting. We offer free estimates and have over 30 years of experience.'
	);

	return {
		pageMetaTags
	};
};
