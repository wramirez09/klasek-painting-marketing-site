// @ts-nocheck
import type { PageLoad } from './$types';
import { createTitleDescription } from '$lib/common/seo/metaTagHelpers';

export const load = () => {
	const pageMetaTags = createTitleDescription(
		'Reliable Stucco Painting and Repair Services',
		'Trust Klasek Painting for professional stucco painting and repair. Our skilled team ensures a flawless finish and long-lasting protection. Get a free quote!'
	);

	return {
		pageMetaTags
	};
};
;null as any as PageLoad;