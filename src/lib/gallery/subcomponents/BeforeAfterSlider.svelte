<script lang="ts" context="module">
	import type { Picture } from 'vite-imagetools';

	export type BeforeAfterSliderData = {
		title: string;
		before: Picture;
		after: Picture;
	};
</script>

<script lang="ts">
	import Range from './Range.svelte';
	import RibbonWrapper from '$lib/common/other/RibbonWrapper.svelte';

	export let data: BeforeAfterSliderData;

	// Initial percentage of left image shown
	let percent = 50;

	$: currentPercent = percent;
</script>

<li class="size-full flex flex-col lg:gap-4 gap-2">
	<RibbonWrapper class="mx-auto">
		<h2 class="lg:px-4 font-bold lg:text-3xl xs:text-2xl text-lg text-center text-white">
			{data.title}
		</h2>
	</RibbonWrapper>

	<div class="size-full relative lg:h-[350px] sm:h-[250px] h-[150px] rounded-lg bord">
		<!-- Range input -->
		<Range bind:currentPercent />

		<!-- Right Image (after) -->
		<div class="absolute size-full rounded-sm overflow-clip">
			<enhanced:img
				class="w-full h-auto absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
				src={data.after}
				alt={`${data.title} After`}
			/>
			<span
				class="absolute lg:top-4 top-2 lg:right-4 right-2 bg-secondary-dark rounded-sm lg:p-4 p-2 lg:text-base text-xs text-white font-bold tracking-wider"
				>After</span
			>
		</div>

		<!-- Left Image (before) -->
		<div
			style={`clip-path: polygon(0 0, ${currentPercent}% 0, ${currentPercent}% 100%, 0 100%)`}
			class="absolute overflow-hidden size-full rounded-sm"
		>
			<enhanced:img
				class="w-full h-auto absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
				src={data.before}
				alt={`${data.title} Before`}
			/>
			<span
				class="absolute lg:top-4 top-2 lg:left-4 left-2 bg-secondary-dark rounded-sm lg:p-4 p-2 lg:text-base text-xs text-white font-bold tracking-wider"
				>Before</span
			>
		</div>
	</div>
</li>
