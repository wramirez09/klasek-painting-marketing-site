import type { PageLoad } from './$types';
import { createTitleDescription } from '$lib/common/seo/metaTagHelpers';

export const load: PageLoad = () => {
	const pageMetaTags = createTitleDescription(
		'Historic House Painting',
		'Expert historic home painting by Klasek Painting. Specialized techniques to maintain the authenticity of your historic property. Get a free consultation now!'
	);

	return {
		pageMetaTags
	};
};
