import type { PageLoad } from './$types';
import { createTitleDescription } from '$lib/common/seo/metaTagHelpers';

export const load: PageLoad = () => {
	const pageMetaTags = createTitleDescription(
		'Professional Commercial Painting Service',
		'Transform your commercial property with our expert exterior painting services. Klasek Painting ensures a flawless finish. Get a free quote now!'
	);

	return {
		pageMetaTags
	};
};
