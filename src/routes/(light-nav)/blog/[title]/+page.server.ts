import type { PageServerLoad } from './$types';
import { createTitleDescription } from '$lib/common/seo/metaTagHelpers';
import type { WithContext, Article } from 'schema-dts';
import { publicLogoUrl } from '$lib/common/seo/siteData';
import { blogData } from '$lib/blogs/data';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = ({ url }) => {
	const postData = blogData[url.pathname].data;

	if (!postData) {
		throw error(404, 'Blog post not found');
	}

	const pageMetaTags = createTitleDescription(postData.title, postData.meta);

	// Article JSON-LD schema
	const articleSchema = {
		'@context': 'https://schema.org',
		'@type': 'Article',
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': url.toString()
		},
		headline: postData.title,
		url: url.toString(),
		description: postData.meta,
		publisher: {
			'@type': 'Organization',
			name: 'Klasek Painting',
			logo: {
				'@type': 'ImageObject',
				url: publicLogoUrl
			}
		}
	} satisfies WithContext<Article>;

	return {
		postData,
		pageMetaTags,
		articleSchema
	};
};
