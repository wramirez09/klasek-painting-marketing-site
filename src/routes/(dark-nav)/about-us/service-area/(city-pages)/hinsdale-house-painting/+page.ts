import type { PageLoad } from './$types';
import { createCityMetaTags } from '$lib/common/seo/metaTagHelpers';

export const load: PageLoad = () => {
	const pageMetaTags = createCityMetaTags(
		'House Painters in Hinsdale, IL',
		'Klasek Painting offers expert house painting, brick repair, and siding restoration in Hinsdale, IL. With 30+ years of experience, we provide stunning, long-lasting results.'
	);

	return {
		pageMetaTags
	};
};
