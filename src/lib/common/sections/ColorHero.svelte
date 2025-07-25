<script lang="ts">
	export let h1: string;
</script>

<section class="p-y p-x hero-gradient">
	<div
		class="container max-w-screen-md flex flex-col items-center justify-center lg:gap-6 gap-4 text-center text-white"
	>
		<h1 class="lg:text-5xl xs:text-4xl text-3xl font-bold" data-testid="page-heading">{h1}</h1>

		<slot />
	</div>
</section>
