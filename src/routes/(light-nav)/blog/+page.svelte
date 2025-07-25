<script lang="ts">
	import type { PageData } from './$types';
	import BlogPreviewCard from '$lib/blogs/BlogPreviewCard.svelte';
	import { page } from '$app/stores';
	import { House } from 'lucide-svelte';
	import RibbonWrapper from '$lib/common/other/RibbonWrapper.svelte';

	export let data: PageData;

	let currentPage: number;
	$: currentPage = parseInt($page.url.searchParams.get('page') ?? '1');

	$: notFirstPage = currentPage > 1;
</script>

<svelte:head>
	<link
		rel="canonical"
		href={`https://www.klasekpainting.com/blog${notFirstPage ? `?page=${currentPage}` : ''}`}
	/>
</svelte:head>

<section class="p-y p-x bg-gradient-to-b from-off-white to-white">
	<div class="container mx-auto flex flex-col items-center lg:gap-8 gap-4 relative">
		<div>
			<RibbonWrapper class="before:!w-10 after:!w-10">
				<h1
					class="text-center lg:text-6xl xs:text-4xl text-3xl text-secondary-dark font-bold lg:px-6"
					data-testid="page-heading"
				>
					Klasek Painting Blogs
				</h1>
			</RibbonWrapper>

			<!-- Home button -->
			{#if currentPage !== 1}
				<a href="/blog" class="mt-4 w-fit flex gap-1 mx-auto text-secondary-dark underline">
					<House />
					<p class="pt-[3px]">Blog Home</p>
				</a>
			{/if}
		</div>

		<!-- Blog cards -->
		<ul class="flex flex-col mx-auto h-fit w-full divide-y">
			{#each data.blogPreviewData as previewData}
				<BlogPreviewCard {previewData} />
			{/each}
		</ul>
	</div>
</section>
