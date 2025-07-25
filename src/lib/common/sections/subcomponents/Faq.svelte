<script lang="ts" context="module">
	export type FaqData = {
		question: string;
		answer: string;
	};
</script>

<script lang="ts">
	import * as Accordion from '$components/accordion';

	export let data: FaqData;
</script>

<Accordion.Trigger>
	{data.question}
</Accordion.Trigger>

<Accordion.Content>
	{data.answer}
</Accordion.Content>
