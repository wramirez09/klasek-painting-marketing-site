<script lang="ts">
	import type { WithContext, BreadcrumbList, ListItem } from 'schema-dts';
	import startCase from 'lodash/startCase';
	import { siteName } from '../seo/siteData';
	import { page } from '$app/stores';
	import { serializeSchema } from '../seo/serializeSchema';
	import { cn } from '../utils';

	// Shape of each breadcrumb list item
	type BreadcrumbListItem = { item: string } & Required<
		Pick<ListItem, '@type' | 'position' | 'name'>
	>;

	// Style prop
	let classes = '';
	export { classes as class };

	// Get current pathname
	const pathname = $page.url.pathname;

	// Split into array of path segments
	const pathArray = pathname.split('/').filter((path) => path !== '');

	// Create schema for each path segment
	const itemListElement: BreadcrumbListItem[] = pathArray.map((path, index) => {
		// Get the full path name thus far
		const fullPath = pathArray.slice(0, index + 1).join('/');

		// Return the schema for that route
		return {
			'@type': 'ListItem',
			position: index + 1,
			name: startCase(path),
			item: `${siteName}/${fullPath}`
		} as BreadcrumbListItem;
	});

	// Create the breadcrumb schema
	const breadcrumbSchema = {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: itemListElement
	} satisfies WithContext<BreadcrumbList>;

	// Strips the site name from the URL, leaving only the relative path
	const getRelativePath = (url: string) => {
		return url.replace(siteName, '');
	};
</script>

<svelte:head>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html serializeSchema(breadcrumbSchema)}
</svelte:head>

<section class="bg-white p-x">
	<ol
		class={cn(
			'container flex flex-wrap items-center gap-2 lg:text-base text-xs lg:py-8 py-6',
			classes
		)}
	>
		{#each breadcrumbSchema.itemListElement as listItem, i}
			<li class="flex items-center gap-2">
				<a href={getRelativePath(listItem.item)} class="hover:underline underline-offset-2">
					{listItem.name}
				</a>

				<span class="select-none">{i !== pathArray.length - 1 ? '>' : ''} </span>
			</li>
		{/each}
	</ol>
</section>
