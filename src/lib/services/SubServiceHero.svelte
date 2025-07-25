<script lang="ts" context="module">
	export type SubServiceHeroData = {
		h1: string;
		listItems: [string, string, string, string];
	};
</script>

<script lang="ts">
	import RibbonWrapper from '$lib/common/other/RibbonWrapper.svelte';
	import Breadcrumb from '$lib/common/other/Breadcrumb.svelte';
	import Button from '$components/button/button.svelte';
	import { routes } from '$lib/common/routing/routes';

	export let data: SubServiceHeroData;
</script>

<section class="p-y px-4 lg:bg-gradient-to-b from-off-white to-white bg-secondary-dark">
	<div class="container flex flex-col lg:gap-8 gap-6 sm:items-center justify-center">
		<RibbonWrapper
			><h1
				class="lg:text-secondary-dark text-white font-bold sm:text-center xl:text-4xl xs:text-3xl text-2xl sm:px-6"
				data-testid="page-heading"
			>
				{data.h1} in Cook&nbsp;County
			</h1></RibbonWrapper
		>

		<ul
			class="grid md:grid-cols-2 md:grid-rows-2 lg:text-secondary-dark text-white font-semibold lg:text-xl text-lg gap-y-4 gap-x-8"
		>
			{#each data.listItems as item}
				<li class="disc">{item}</li>
			{/each}
		</ul>

		<Button href={routes['contact'].href}>Get Free Estimate</Button>
	</div>
</section>

<Breadcrumb class="border-y lg:py-4 py-2 pl-2" />
