<script lang="ts">
	import * as Accordion from '$components/accordion';
	import { cn } from '../utils';
	import Faq, { type FaqData } from './subcomponents/Faq.svelte';
	import { isMobileStore } from '$lib/stores/isMobileStore';

	let classes = '';
	export { classes as class };

	export let faqData: FaqData[];

	// Open second faq on desktop
	let value = $isMobileStore ? '' : 'faq-1';
</script>

<section class={cn('p-y lg:px-12 xs:px-4 px-2 bg-white', classes)}>
	<div class="container max-w-screen-lg flex flex-col lg:gap-8 gap-4">
		<h2 class="text-center mx-auto lg:text-4xl xs:text-3xl text-2xl font-bold">
			Frequently Asked Questions
		</h2>

		<Accordion.Root bind:value class="flex flex-col gap-4">
			{#each faqData as data, i}
				<Accordion.Item value={`faq-${i}`}>
					<Faq {data} />
				</Accordion.Item>
			{/each}
		</Accordion.Root>
	</div>
</section>
