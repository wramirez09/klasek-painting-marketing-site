// @ts-nocheck
import type { PageLoad } from './$types';
import { createTitleDescription } from '$lib/common/seo/metaTagHelpers';

export const load = () => {
	const pageMetaTags = createTitleDescription(
		'Exterior Brick Repair',
		"Expert exterior brick repair services in Cook County. Restore your home's brickwork with high-quality, repairs. Affordable prices and professional results."
	);

	return {
		pageMetaTags
	};
};
;null as any as PageLoad;