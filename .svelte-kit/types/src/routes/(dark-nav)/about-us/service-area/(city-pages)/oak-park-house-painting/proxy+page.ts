// @ts-nocheck
import type { PageLoad } from './$types';
import { createCityMetaTags } from '$lib/common/seo/metaTagHelpers';

export const load = () => {
	const pageMetaTags = createCityMetaTags(
		'Exterior House Painters in Oak Park, IL',
		'Klasek Painting offers expert house painting, brick repair, and siding restoration in Oak Park, IL. With over 30 years of experience, we deliver stunning, long-lasting results.'
	);

	return {
		pageMetaTags
	};
};
;null as any as PageLoad;