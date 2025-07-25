import type { PageLoad } from './$types';
import { createTitleDescription } from '$lib/common/seo/metaTagHelpers';

export const load: PageLoad = () => {
	const pageMetaTags = createTitleDescription(
		'Professional Color Consultation and Design',
		"Transform your home with Klasek Painting's design and color consultation services. Expert advice on color schemes and designs to suit your style. Contact us today!"
	);

	return {
		pageMetaTags
	};
};
