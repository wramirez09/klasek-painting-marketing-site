<script lang="ts">
	import * as Accordion from '$components/accordion';
	import { cn } from '../utils';
	import Faq, { type FaqData } from './subcomponents/Faq.svelte';
	import { isMobileStore } from '$lib/stores/isMobileStore';
	import { serializeSchema } from '../seo/serializeSchema';
	import type { WithContext, FAQPage } from 'schema-dts';

	let classes = '';
	export { classes as class };

	export let faqData: FaqData[];

	// Open second faq on desktop
	let value = $isMobileStore ? '' : 'faq-1';

	// Emit FAQPage structured data so search engines and AI answer engines can
	// extract these buyer questions. Mirrors the visible accordion content.
	const faqSchema = {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faqData.map(({ question, answer }) => ({
			'@type': 'Question' as const,
			name: question,
			acceptedAnswer: {
				'@type': 'Answer' as const,
				text: answer
			}
		}))
	} satisfies WithContext<FAQPage>;
</script>

<svelte:head>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html serializeSchema(faqSchema)}
</svelte:head>

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
