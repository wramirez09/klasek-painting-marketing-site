// @ts-nocheck
import type { PageLoad } from './$types';
import { createTitleDescription } from '$lib/common/seo/metaTagHelpers';

export const load = () => {
	const pageMetaTags = createTitleDescription(
		'Testimonials',
		'Klasek Painting is proud to boast exceptional customer reviews and testimonials! Read what our past clients have to say about us.'
	);

	return {
		pageMetaTags
	};
};
;null as any as PageLoad;