// @ts-nocheck
import type { PageLoad } from './$types';
import { createTitleDescription } from '$lib/common/seo/metaTagHelpers';

export const load = () => {
	const pageMetaTags = createTitleDescription(
		'Stucco Painting',
		"Trusted stucco painting services in Cook County. Protect your home's exterior with high-quality, durable paint. Affordable prices and professional results."
	);

	return {
		pageMetaTags
	};
};
;null as any as PageLoad;