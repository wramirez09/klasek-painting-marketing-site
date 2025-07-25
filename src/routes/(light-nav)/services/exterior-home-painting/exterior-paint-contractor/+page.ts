import type { PageLoad } from './$types';
import { createTitleDescription } from '$lib/common/seo/metaTagHelpers';

export const load: PageLoad = () => {
	const pageMetaTags = createTitleDescription(
		'Exterior Painting Contractors',
		'Trust Klasek Painting for top-notch exterior painting services. Our experienced contractors ensure high-quality results. Request a free quote today!'
	);

	return {
		pageMetaTags
	};
};
