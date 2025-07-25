// @ts-nocheck
import type { PageLoad } from './$types';
import { createTitleDescription } from '$lib/common/seo/metaTagHelpers';

export const load = () => {
	const pageMetaTags = createTitleDescription(
		'Photo Gallery',
		'View our Photo Gallery. For trusted and reliable home painting services in Cook County, contact Klasek Painting.'
	);

	return {
		pageMetaTags
	};
};
;null as any as PageLoad;