<script lang="ts">
	import Button from '$components/button/button.svelte';
	import src from '$images/backgrounds/orange-paint-splash.webp?enhanced';
	import { page } from '$app/stores';
	import { routes } from '../routing/routes';
	import paintTop from '$images/backgrounds/orange-paint-top.webp';
	import paintBottom from '$images/backgrounds/orange-paint-bottom.webp';
	import { inview, type Options } from 'svelte-inview';

	const secondaryBackgroundRoutes: string[] = [routes['service-area'].href, routes['gallery'].href];
	const hiddenRoutes: string[] = [routes['contact'].href];

	$: bg = secondaryBackgroundRoutes.includes($page.url.pathname)
		? 'bg-secondary'
		: 'bg-gradient-to-b from-white from-[85%] to-secondary to-[85%]';

	$: hidden = hiddenRoutes.includes($page.url.pathname);

	let isInView = false;
	const options: Options = {
		rootMargin: '300px',
		unobserveOnEnter: true
	};
</script>

<div
	use:inview={options}
	on:inview_enter={() => (isInView = true)}
	class:hidden
	class={`relative w-full ${bg}`}
>
	<!-- Mobile orange paint top -->
	{#if isInView}
		<div
			style={`background-image: url(${paintTop});`}
			class="bg-cover bg-bottom w-full h-12 lg:hidden relative -bottom-1"
		/>
	{:else}
		<div class="w-full h-12 lg:hidden relative -bottom-1" />
	{/if}

	<!-- Desktop orange paint -->
	<enhanced:img
		class="hidden lg:block max-w-screen-lg absolute h-full w-auto top-0 left-1/2 -translate-x-1/2 z-0"
		{src}
		alt=""
		aria-hidden="true"
		loading="lazy"
	/>

	<div
		class="container max-w-screen-lg p-y lg:px-0 xs:px-6 px-4 flex flex-col items-center text-center gap-6 [&>*]:z-10 text-white lg:bg-none bg-gradient-to-b from-primary-dark to-primary"
	>
		<h2 class="font-bold text-4xl">Schedule An Appointment</h2>

		<p class="max-w-[600px]">
			Complete our form or call our customer service team to schedule a visit to your home. We'll
			walk the property, discuss options, then deliver a free, written estimate for you to evaluate.
		</p>

		<Button variant="white" href="/contact-us">Get Free Estimate</Button>
	</div>

	<!-- Mobile orange paint bottom -->
	{#if isInView}
		<div
			style={`background-image: url(${paintBottom});`}
			class="bg-cover bg-top w-full h-12 lg:hidden relative -top-1"
		/>
	{:else}
		<div class="w-full h-12 lg:hidden relative -top-1" />
	{/if}
</div>
