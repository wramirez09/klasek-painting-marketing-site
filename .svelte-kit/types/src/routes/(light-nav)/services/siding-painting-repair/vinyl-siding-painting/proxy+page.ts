// @ts-nocheck
import type { PageLoad } from './$types';
import { createTitleDescription } from '$lib/common/seo/metaTagHelpers';

export const load = () => {
	const pageMetaTags = createTitleDescription(
		'Vinyl Siding Painting',
		"Expert vinyl siding painting services in Cook County. Refresh your home's exterior with high-quality, durable paint. Affordable prices and professional results."
	);

	return {
		pageMetaTags
	};
};
;null as any as PageLoad;