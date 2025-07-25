// @ts-nocheck
import type { PageLoad } from './$types';
import { createCityMetaTags } from '$lib/common/seo/metaTagHelpers';

export const load = () => {
	const pageMetaTags = createCityMetaTags(
		'Exterior House Painters in Western Springs, IL',
		"Elevate your home's exterior with Klasek Painting in Western Springs, IL. Specializing in expert painting, brick restoration, and siding repair, we bring 25+ years of craftsmanship to every project."
	);

	return {
		pageMetaTags
	};
};
;null as any as PageLoad;