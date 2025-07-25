import type { PageLoad } from './$types';
import { createTitleDescription } from '$lib/common/seo/metaTagHelpers';

export const load: PageLoad = () => {
	const pageMetaTags = createTitleDescription(
		'Cedar Siding Painting',
		"Top-notch cedar siding painting services in Cook County. Enhance your home's beauty and durability with Klasek Painting."
	);

	return {
		pageMetaTags
	};
};
