import type { PageLoad } from './$types';
import { createCityMetaTags } from '$lib/common/seo/metaTagHelpers';

export const load: PageLoad = () => {
	const pageMetaTags = createCityMetaTags(
		'Exterior House Painters in Westmont, IL',
		'Klasek Painting offers professional house painting, brick restoration, and siding repair services in Westmont, IL. With 25+ years of experience, we ensure beautiful, long-lasting results tailored to your vision.'
	);

	return {
		pageMetaTags
	};
};
