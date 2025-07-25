<script lang="ts">
	import RibbonWrapper from '../other/RibbonWrapper.svelte';
	import { serviceAreaRoutes } from '../routing/routes';
	import AreaCard from './subcomponents/AreaCard.svelte';
	import { cn } from '../utils';

	let classes = '';
	export { classes as class };
</script>

<section class={cn('bg-white p-y p-x', classes)}>
	<div class="container flex flex-col items-center lg:gap-8 gap-4">
		<RibbonWrapper
			><h2 class="text-center font-bold lg:px-6 px-4 lg:text-3xl text-2xl">
				Areas We Serve
			</h2></RibbonWrapper
		>

		<hr class="border-secondary border-[1px] w-full" />

		<!-- Grid container -->
		<div class="grid lg:grid-cols-[2fr_3fr] lg:gap-16 gap-4 w-full">
			<AreaCard />

			<ul class="grid xs:grid-cols-2 lg:gap-0 gap-y-4">
				{#each Object.values(serviceAreaRoutes) as { text, href }}
					<li class="disc [--top:12px] lg:text-xl sm:text-lg underline size-fit">
						<a {href}>{text}</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>
