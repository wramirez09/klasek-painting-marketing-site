// @ts-nocheck
import type { PageServerLoad } from './$types';
import type { BlogPreviewData } from '$lib/blogs/blogs';
import { blogData } from '$lib/blogs/data';
import { error } from '@sveltejs/kit';
import kebabCase from 'lodash/kebabCase';
import { createTitleDescription } from '$lib/common/seo/metaTagHelpers';

const blogsPerPage = 6;

const blogTocData = [
	'/blog/painting-maintenance-how-to-keep-your-home-looking-fresh',
	'/blog/diy-vs-professional-painting-when-to-hire-a-painter',
	'/blog/what-exterior-paint-colors-look-the-best'
] as const;

export const load = ({ url }: Parameters<PageServerLoad>[0]) => {
	// Split TOC data into pages
	const blogPages: string[][] = [];
	for (let i = 0; i < blogTocData.length; i += blogsPerPage) {
		blogPages.push(blogTocData.slice(i, i + blogsPerPage));
	}

	// Get page number from URL
	// If param not present, default to 1
	const pageNumber = parseInt(url.searchParams.get('page') ?? '1');

	// Ensure page number is within bounds
	if (pageNumber < 1 || pageNumber > blogPages.length) {
		error(404, 'Page not found');
	}

	// Map each blog URL to a promise
	const ourBlogData = blogPages[pageNumber - 1].map((blog) => blogData[blog].data);

	const blogPreviewData: BlogPreviewData[] = ourBlogData.map((blog) => ({
		title: blog.title,
		datePublished: blog.datePublished,
		meta: blog.meta,
		image: blog.image,
		href: `/blog/${kebabCase(blog.title)}`
	}));

	const notFirstPage = pageNumber > 1;

	// Create meta tags
	const pageMetaTags = createTitleDescription(
		`Our Blog${notFirstPage ? ` | Page ${pageNumber}` : ''}`,
		`Stay up to date with the latest projects completed by the Cook County Painters at Klasek Painting when you follow our blog${notFirstPage ? `, page ${pageNumber}.` : '.'}`
	);

	return {
		blogPreviewData,
		maxPage: blogPages.length,
		pageMetaTags
	};
};
