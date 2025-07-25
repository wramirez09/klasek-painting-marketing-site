<script lang="ts">
	import Button from '$components/button/button.svelte';
	import { routes } from '$lib/common/routing/routes';
	import ServiceGridCell, { type ServiceGridCellData } from './ServiceGridCell.svelte';
	import { serviceRoutes } from '$lib/common/routing/routes';
	import siding from '$images/galleries/exterior-hardie-board/exterior-hardie-board-12.webp';
	import brick from '$images/galleries/brick-painting/brick-painting-7.webp';
	import stucco from '$images/galleries/stucco-and-trim/klasek-painting-stucco-and-trim-3.webp';
	import design from '$images/galleries/victorian-homes/klasek-painting-victorian-homes-1.webp';
	import { inview, type Options } from 'svelte-inview';

	const serviceData: ServiceGridCellData[] = [
		{
			link: serviceRoutes['siding-painting-repair'],
			bg: siding
		},
		{
			link: serviceRoutes['brick-painting-repair'],
			bg: brick
		},
		{
			link: serviceRoutes['stucco-painting-repair'],
			bg: stucco
		},
		{
			link: serviceRoutes['design-consultation'],
			bg: design
		}
	];

	// Inview setup
	let isInView = false;
	const options: Options = {
		rootMargin: '200px',
		unobserveOnEnter: true
	};
</script>

<section
	use:inview={options}
	on:inview_enter={() => (isInView = true)}
	class="lg:bg-gradient-to-r bg-gradient-to-b lg:to-[60%] to-[40%] from-secondary-dark to-secondary lg:py-24 lg:p-x relative"
>
	<div class="container lg:grid lg:grid-cols-2 flex flex-col">
		<!-- Copy container -->
		<div class="flex flex-col justify-center lg:gap-8 gap-4 text-white lg:p-0 py-8 p-x">
			<h2 class="font-bold xl:text-6xl lg:text-5xl xs:text-4xl text-3xl">
				House Painting Services
			</h2>

			<p class="lg:text-lg lg:w-3/4">
				Klasek Painting offers reliable, professional painting and repair services for your home's
				exterior.
			</p>

			<Button class="w-fit" href={routes['contact'].href}>Get a Free Estimate Today!</Button>
		</div>

		<!-- Image grid container -->
		<ul class="lg:absolute size-full lg:w-1/2 top-0 left-1/2 grid sm:grid-cols-2 sm:grid-rows-2">
			{#each serviceData as data, index}
				<ServiceGridCell {data} bind:isInView {index} />
			{/each}
		</ul>
	</div>
</section>
