// @ts-nocheck
import type { PageLoad } from './$types';
import { createCityMetaTags } from '$lib/common/seo/metaTagHelpers';

export const load = () => {
	const pageMetaTags = createCityMetaTags(
		'Exterior House Painters in Oak Brook, IL',
		'Klasek Painting provides expert house painting, brick repair, and siding restoration in Oak Brook, IL. With 25+ years of experience, we ensure exceptional, long-lasting results.'
	);

	return {
		pageMetaTags
	};
};
;null as any as PageLoad;