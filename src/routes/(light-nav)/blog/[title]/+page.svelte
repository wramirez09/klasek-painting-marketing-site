<script lang="ts">
	import type { PageData } from './$types';
	import facebook from '$images/icons/facebook.svg';
	import twitter from '$images/icons/twitter.svg';
	import linkedin from '$images/icons/linkedin.svg';
	import ShareLinks, { type ShareLinksData } from '$lib/blogs/ShareLinks.svelte';
	import { page } from '$app/stores';
	import ArrowIcon from '$images/icons/ArrowIcon.svelte';
	import { JsonLd } from 'svelte-meta-tags';
	import { aboutUsRoutes } from '$lib/common/routing/routes';

	export let data: PageData;

	const postData = data.postData;

	const sharelinksData: ShareLinksData[] = [
		{
			icon: facebook,
			label: 'Share blog post to Facebook',
			href: `http://www.facebook.com/sharer.php?u=${$page.url.toString()}`
		},
		{
			icon: twitter,
			label: 'Share blog post to Twitter',
			href: `http://twitter.com/share?url=${$page.url.toString()}&text=${postData.title}`
		},
		{
			icon: linkedin,
			label: 'Share blog post to LinkedIn',
			href: `http://www.linkedin.com/shareArticle?mini=true&url=${$page.url.toString()}`
		}
	];
</script>

<!-- Article JSON-LD schema -->
<JsonLd schema={data.articleSchema} />

<section class="lg:pt-12 py-12 pt-20 p-x bg-gradient-to-b from-off-white to-white">
	<div class="max-w-screen-lg mx-auto relative">
		<!-- Close button -->
		<a
			href={aboutUsRoutes['blog'].href}
			class="absolute lg:top-0 -top-8 left-0 flex items-center group size-fit"
		>
			<ArrowIcon
				class="size-4 rotate-180 duration-200 group-hover:-translate-x-[2px] translate-x-0 text-gray-700"
			/>
			<span class="border-b text-sm">Go Back</span>
		</a>

		<!-- Featured image -->
		<div class="size-full lg:min-h-[300px] min-h-[200px]">
			<img
				src={postData.image}
				alt=""
				class="size-full w-auto mx-auto sm:max-h-[300px] max-h-[200px] rounded-lg z-10 border-2 border-secondary-dark"
			/>
		</div>

		<!-- Share links -->
		<div
			class="lg:my-6 my-4 py-2 border-y-2 flex xs:flex-row flex-col xs:justify-between justify-center items-center text-gray-700 sm:px-2 xs:gap-0 gap-2"
		>
			<div class="flex gap-2 items-center">
				<span class="mr-1 text-sm">Share:</span>
				<ul class="flex gap-4 items-center">
					{#each sharelinksData as data}
						<ShareLinks {data} />
					{/each}
				</ul>
			</div>

			<span class="xs:order-none order-first">{postData.datePublished}</span>
		</div>

		<!-- Post body -->
		<div class="blog-container flex flex-col lg:gap-6 gap-4 leading-relaxed main-container">
			<div>
				<h1 class="lg:text-3xl xs:text-2xl text-xl font-semibold" data-testid="page-heading">
					{postData.title}
				</h1>

				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html postData.body}
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
	@import '$lib/common/sections/subcomponents/template-styles.css';

	.main-container :global(img) {
		@apply sm:h-[200px] sm:w-fit w-full h-fit sm:rounded-lg;
	}
</style>
