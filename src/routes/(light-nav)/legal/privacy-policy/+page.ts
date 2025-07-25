import type { PageLoad } from './$types';
import { createTitleDescription } from '$lib/common/seo/metaTagHelpers';

export const load: PageLoad = () => {
	const pageMetaTags = {
		robots: 'noindex,nofollow',
		...createTitleDescription(
			'Privacy Policy',
			'Privacy Policy. Need experienced painters in Lyons? Call Klasek Painting to schedule an estimate today.'
		)
	};

	return {
		pageMetaTags
	};
};
