// @ts-nocheck
import type { PageLoad } from './$types';
import { createTitleDescription } from '$lib/common/seo/metaTagHelpers';

export const load = () => {
	const pageMetaTags = createTitleDescription(
		'Aluminum Siding Repair',
		"Expert aluminum siding repair services in Cook County. Restore your home's exterior with high-quality repairs. Affordable prices and professional results."
	);

	return {
		pageMetaTags
	};
};
;null as any as PageLoad;