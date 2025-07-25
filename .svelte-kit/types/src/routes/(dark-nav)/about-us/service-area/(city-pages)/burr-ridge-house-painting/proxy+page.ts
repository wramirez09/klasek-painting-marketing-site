// @ts-nocheck
import type { PageLoad } from './$types';
import { createCityMetaTags } from '$lib/common/seo/metaTagHelpers';

export const load = () => {
	const pageMetaTags = createCityMetaTags(
		'Top Exterior House Painters in Burr Ridge, IL',
		'Klasek Painting offers expert house painting, brick restoration, and siding repair services in Burr Ridge, IL. With 25+ years of experience, we ensure exceptional results.'
	);

	return {
		pageMetaTags
	};
};
;null as any as PageLoad;