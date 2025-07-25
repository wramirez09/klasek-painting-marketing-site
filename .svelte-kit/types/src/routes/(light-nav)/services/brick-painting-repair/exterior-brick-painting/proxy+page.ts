// @ts-nocheck
import type { PageLoad } from './$types';
import { createTitleDescription } from '$lib/common/seo/metaTagHelpers';

export const load = () => {
	const pageMetaTags = createTitleDescription(
		'Exterior Brick Painting',
		"Refresh and protect your brick exterior with Klasek Painting's expert brick painting services. Durable and vibrant finishes. Contact us today for a free quote!"
	);

	return {
		pageMetaTags
	};
};
;null as any as PageLoad;