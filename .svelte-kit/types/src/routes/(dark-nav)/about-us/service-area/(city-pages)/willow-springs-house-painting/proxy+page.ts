// @ts-nocheck
import type { PageLoad } from './$types';
import { createCityMetaTags } from '$lib/common/seo/metaTagHelpers';

export const load = () => {
	const pageMetaTags = createCityMetaTags(
		'Exterior House Painters in Willow Springs, IL',
		'Klasek Painting offers expert house painting, brick restoration, and siding repair in Willow Springs, IL. With 30+ years of experience, we ensure stunning and durable results.'
	);

	return {
		pageMetaTags
	};
};
;null as any as PageLoad;