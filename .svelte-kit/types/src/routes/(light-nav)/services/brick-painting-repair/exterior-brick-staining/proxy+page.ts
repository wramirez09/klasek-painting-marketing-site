// @ts-nocheck
import type { PageLoad } from './$types';
import { createTitleDescription } from '$lib/common/seo/metaTagHelpers';

export const load = () => {
	const pageMetaTags = createTitleDescription(
		'Exterior Brick Staining',
		"Professional exterior brick staining in Cook County. Refresh your home's look with high-quality, durable brick stains. Affordable pricing and expert results."
	);

	return {
		pageMetaTags
	};
};
;null as any as PageLoad;