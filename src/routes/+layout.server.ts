import type { LayoutServerLoad } from './$types';
import type { MetaTagsProps } from 'svelte-meta-tags';
import { publicLogoUrl } from '$lib/common/seo/siteData';

export const load = ((ctx) => {
	// Base meta tags for all pages
	const baseMetaTags = Object.freeze<MetaTagsProps>({
		title: 'Klasek Painting: Trusted Exterior Painting & Repair in Chicago & Surrounding Suburbs',
		titleTemplate: '%s',
		description:
			'Klasek Painting: Expert exterior house painting and repair services in Chicago and Cook County, IL with over 30 years of experience. Get a free estimate for siding, brick, stucco, and historic home painting. 100% satisfaction guaranteed!',
		canonical: new URL(ctx.url.pathname, ctx.url.origin).href,
		robots: 'index,follow',
		openGraph: {
			type: 'website',
			url: new URL(ctx.url.pathname, ctx.url.origin).href,
			locale: 'en_US',
			title: 'Cook County Painters',
			description:
				'Klasek Painting is a team of licensed and fully certified painters offering homes in Cook County top-quality painting solutions. Call for a free estimate.',
			siteName: 'Klasek Painting',
			images: [
				{
					url: publicLogoUrl,
					alt: 'Klasek Painting',
					width: 682,
					height: 262,
					secureUrl: publicLogoUrl,
					type: 'image/png'
				}
			]
		}
	});

	// No page-specific meta tags in layout
	const pageMetaTags = {};

	return {
		url: ctx.url.href,
		baseMetaTags,
		pageMetaTags
	};
}) satisfies LayoutServerLoad;
