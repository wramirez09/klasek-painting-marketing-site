// @ts-nocheck
import type { PageLoad } from './$types';
import { createTitleDescription } from '$lib/common/seo/metaTagHelpers';

export const load = () => {
	const pageMetaTags = createTitleDescription(
		'Professional Exterior Painting Services',
		'Klasek Painting offers expert exterior painting services for homes and businesses. Transform your space with our professional painting solutions.'
	);

	return {
		pageMetaTags
	};
};
;null as any as PageLoad;