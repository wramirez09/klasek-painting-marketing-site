// @ts-nocheck
import type { PageLoad } from './$types';
import { createCityMetaTags } from '$lib/common/seo/metaTagHelpers';

export const load = () => {
	const pageMetaTags = createCityMetaTags(
		'Top Exterior House Painters in Berwyn, IL',
		'Discover top-rated house painting services in Berwyn, Illinois with Klasek Painting. With 25+ years of experience, we offer expert exterior painting, brick restoration, siding repair, and more. Contact us for a free estimate today!'
	);

	return {
		pageMetaTags
	};
};
;null as any as PageLoad;