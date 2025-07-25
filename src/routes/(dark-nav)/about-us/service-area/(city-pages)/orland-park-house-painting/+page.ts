import type { PageLoad } from './$types';
import { createCityMetaTags } from '$lib/common/seo/metaTagHelpers';

export const load: PageLoad = () => {
	const pageMetaTags = createCityMetaTags(
		'Exterior House Painters in Orland Park, IL',
		"Transform your home with Klasek Painting's expert house painting, brick restoration, and siding repair services in Orland Park, IL. Over 30 years of delivering stunning, durable finishes."
	);

	return {
		pageMetaTags
	};
};
