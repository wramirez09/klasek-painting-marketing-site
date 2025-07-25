import type { PageLoad } from './$types';
import { createTitleDescription } from '$lib/common/seo/metaTagHelpers';

export const load: PageLoad = () => {
	const pageMetaTags = createTitleDescription(
		'Exterior Brick Painting and Repair',
		"Professional brick painting and repair services to enhance and protect your home's exterior. Serving Cook County with over 30 years of experience, call today!"
	);

	return {
		pageMetaTags
	};
};
