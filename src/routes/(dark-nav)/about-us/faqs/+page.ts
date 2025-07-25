import type { PageLoad } from './$types';
import { createTitleDescription } from '$lib/common/seo/metaTagHelpers';

export const load: PageLoad = () => {
	const pageMetaTags = createTitleDescription(
		'Exterior Home Painting FAQs',
		'Frequently asked questions about exterior home painting. Experienced painters are waiting to serve you in Lyons, Le Grange, and Western Springs. Find out what Klasek Painting can do for you today.'
	);

	return {
		pageMetaTags
	};
};
