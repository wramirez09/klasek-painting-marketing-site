import type { PageLoad } from './$types';
import { createCityMetaTags } from '$lib/common/seo/metaTagHelpers';

export const load: PageLoad = () => {
	const pageMetaTags = createCityMetaTags(
		'Exterior House Painters in Riverside, IL',
		"Klasek Painting specializes in high-quality house painting, brick restoration, and siding repair in Riverside, IL. Enhance your home's beauty with our trusted expertise and attention to detail."
	);

	return {
		pageMetaTags
	};
};
