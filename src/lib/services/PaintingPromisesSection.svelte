<script lang="ts">
	import RibbonWrapper from '$lib/common/other/RibbonWrapper.svelte';
	import { cn } from '$lib/common/utils';

	let classes = '';
	export { classes as class };

	const steps = [
		'Accept All Major Credit Cards\nfor Your Convenience',
		'Free Color Consultation\nfor Exterior Painting Services',
		'Reputable References\nfrom Local Homeowners',
		'Free, Informative\nWritten Estimate Provided',
		'Prompt & Courteous\nService'
	];
</script>

<section class={cn('bg-white p-y p-x', classes)}>
	<div class="container max-w-screen-lg flex flex-col items-center lg:gap-12 gap-8 text-center">
		<RibbonWrapper
			><h2 class="lg:text-4xl xs:text-3xl text-2xl font-semibold text-secondary lg:px-4">
				Our 5-Point Painting Service Promise
			</h2></RibbonWrapper
		>

		<ul class="w-full flex flex-wrap justify-around gap-8">
			{#each steps as step, i}
				<li class="flex flex-col items-center gap-2">
					<div class="grid place-items-center lg:size-16 size-12 bg-primary">
						<p class="text-white font-bold lg:text-2xl text-xl">{i + 1}</p>
					</div>

					<p class="font-semibold lg:text-lg whitespace-pre text-secondary">{step}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>
