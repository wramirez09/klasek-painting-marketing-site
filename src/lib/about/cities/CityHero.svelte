<script lang="ts">
	import Button from '$components/button/button.svelte';
	import Breadcrumb from '$lib/common/other/Breadcrumb.svelte';
	import GoogleProof from '$lib/common/other/GoogleProof.svelte';
	import { routes } from '$lib/common/routing/routes';

	export let city: string;
	export let state = 'IL';
	export let showBreadcrumbs = true;
	export let href = routes['contact'].href;
</script>

<section class="bg-secondary-dark p-y p-x">
	<div class="container max-w-screen-md flex flex-col items-center lg:gap-8 gap-4">
		<h1
			class="text-center font-semibold text-white lg:text-5xl sm:text-4xl xs:text-3xl text-2xl"
			data-testid="page-heading"
		>
			#1 House Painters in <span class="whitespace-nowrap">{city}, {state}</span>
		</h1>

		<div class="sm:w-3/4">
			<GoogleProof
				class="border-2 py-2 px-4 rounded-lg border-opacity-30 shadow-subtle"
				textClasses="text-white"
				borderClasses="bg-border bg-opacity-30"
			/>
		</div>

		<Button {href}>Get Free Estimate</Button>
	</div>
</section>

{#if showBreadcrumbs}
	<Breadcrumb class="max-w-screen-lg lg:py-6 py-4 lg:border-b-0 border-b" />
{/if}
