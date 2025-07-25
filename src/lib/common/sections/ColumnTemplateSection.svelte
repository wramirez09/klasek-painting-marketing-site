<script lang="ts">
	import { cn } from '../utils';

	let classes = '';
	export { classes as class };
</script>

<section class={cn('bg-white p-y p-x relative', classes)}>
	<div class="container main-container grid lg:grid-cols-2 gap-8 z-10">
		{#if $$slots.heading}
			<h2 class="lg:col-span-2"><slot name="heading" /></h2>
		{/if}

		<!-- Left column -->
		<slot name="left-column" />

		<!-- Right column -->
		<slot name="right-column" />
	</div>
</section>

<style>
	@import './subcomponents/template-styles.css';
</style>
