// @ts-nocheck
import type { PageLoad } from './$types';
import { createTitleDescription } from '$lib/common/seo/metaTagHelpers';

export const load = () => {
	const pageMetaTags = createTitleDescription(
		'Service Area',
		'Klasek Painting delivers dependable service to homeowners throughout a wide service area. Call today for a free estimate!'
	);

	return {
		pageMetaTags
	};
};
;null as any as PageLoad;