// @ts-nocheck
import type { PageLoad } from './$types';
import { createTitleDescription } from '$lib/common/seo/metaTagHelpers';

export const load = () => {
	const pageMetaTags = createTitleDescription(
		'Top Exterior House Painters',
		'Transform your house with our expert exterior painting services. Klasek Painting ensures a flawless finish. Get a free quote now!'
	);

	return {
		pageMetaTags
	};
};
;null as any as PageLoad;