<script lang="ts">
	import ClickToCall from '../other/ClickToCall.svelte';
</script>

<section class="lg:py-8 py-6 p-x bg-secondary">
	<div
		class="container max-w-screen-sm grid place-items-center gap-4 text-white text-center font-bold"
	>
		<h2 class="lg:text-xl xs:text-base text-sm -mb-1 !leading-tight font-normal">
			Ready to help your property&nbsp;look&nbsp;its&nbsp;best?
		</h2>

		<span class="lg:text-5xl xs:text-5xl text-4xl text-primary">Call the best.</span>

		<ClickToCall variant="outline" />
	</div>
</section>
