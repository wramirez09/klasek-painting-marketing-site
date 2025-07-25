<script lang="ts" context="module">
	export type GalleryPreviewGridData = {
		images: {
			small1: string;
			small2: string;
			large: string;
		};
		name: string;
		href: string;
	};
</script>

<script lang="ts">
	import Button from '$components/button/button.svelte';
	import { inview } from 'svelte-inview';
	import type { Options } from 'svelte-inview';
	import { cubicOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	export let data: GalleryPreviewGridData;
	export let reverse = false;
	export let load = false;

	let isInView = false;
	const options: Options = {
		rootMargin: '-15%',
		unobserveOnEnter: true
	};
</script>

<li
	use:inview={options}
	on:inview_enter={() => (isInView = true)}
	class="md:min-h-[416px] min-h-[300px] md:h-auto w-full md:max-w-none max-w-[400px] mx-auto"
>
	{#if load || isInView}
		<div
			transition:fly={{ y: 100, duration: 400, easing: cubicOut }}
			class="w-full md:h-full h-[300px] grid md:grid-rows-[200px_200px] md:gap-4 {reverse
				? 'md:grid-cols-[3fr_2fr]'
				: 'md:grid-cols-[2fr_3fr]'}"
		>
			<!-- Small image 1 -->
			<div
				style={`background-image: url(${data.images.small1});`}
				class:col-start-2={reverse}
				class="hidden md:block col-span-1 row-span-1 bg-cover bg-center rounded-lg"
			/>

			<!-- Small image 2 -->
			<div
				style={`background-image: url(${data.images.small2});`}
				class:col-start-2={reverse}
				class="hidden md:block col-span-1 row-span-1 row-start-2 bg-cover bg-center rounded-lg"
			/>

			<!-- Big image -->
			<div
				style={`background-image: url(${data.images.large});`}
				class="{reverse
					? 'md:col-start-1'
					: 'md:col-start-2'} col-span-1 row-span-2 row-start-1 rounded-lg bg-cover bg-center md:bg-transparent bg-black/40 bg-blend-multiply lg:p-4 p-2 flex lg:items-start items-end"
			>
				<!-- Color background -->
				<div
					class="size-full lg:bg-secondary/50 bg-secondary/60 flex justify-center md:items-center md:p-0 py-4 rounded-lg md:backdrop-blur-md backdrop-blur-sm lg:h-full h-fit"
				>
					<!-- Copy container -->
					<div class="flex flex-col gap-6 md:w-3/4 w-4/5">
						<h2 class="text-left lg:text-6xl text-3xl font-bold text-white">
							{data.name}
						</h2>

						<hr class="border-primary border-[2px] w-16" />

						<Button class="w-fit" href={data.href}>View Gallery</Button>
					</div>
				</div>
			</div>
		</div>
	{/if}
</li>
