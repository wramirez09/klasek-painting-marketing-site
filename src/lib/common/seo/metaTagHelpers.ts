import type { MetaTagsProps } from 'svelte-meta-tags';

export function createTitleDescription(title: string, description: string): MetaTagsProps {
	return Object.freeze({
		title,
		description,
		titleTemplate: '%s | Cook County Painters',
		openGraph: {
			title,
			description
		}
	}) satisfies MetaTagsProps;
}

export function createCityMetaTags(title: string, description: string): MetaTagsProps {
	return Object.freeze({
		titleTemplate: '%s',
		title,
		description,
		openGraph: {
			title,
			description
		}
	}) satisfies MetaTagsProps;
}
