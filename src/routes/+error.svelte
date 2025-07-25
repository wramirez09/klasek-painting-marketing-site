<script lang="ts">
	import { page } from '$app/stores';
	import NavBar from '$lib/common/nav/NavBar.svelte';
	import ClickToCall from '$lib/common/other/ClickToCall.svelte';

	let is404 = $page.status === 404;
</script>

<svelte:head>
	<title>{is404 ? 'Page Not Found' : 'Error'} | Klasek Painting</title>
	<meta
		name="description"
		content="Sorry, {is404
			? "the page you're looking for isn't available"
			: 'something went wrong'}. Explore more from Klasek Painting and find what you need. Navigate back to our homepage or browse our site for related content."
	/>
</svelte:head>

<NavBar lightNav={true} />

<section class="overflow-hidden bg-gradient-to-b from-off-white to-white p-y p-x">
	<div class="container flex flex-col items-center gap-2">
		<h1>{is404 ? 'Page Not Found' : 'Uh oh... something went wrong'}</h1>

		{#if is404}
			<span class="text-secondary">Error 404</span>

			<div class="error-body">
				<span>
					If you expected to find something here, try using the links above and below to explore our
					content. If you still can't find what you're looking for, please
				</span>
				<a class="underline" href="/contact-us"> contact us online </a>
				or call us at <ClickToCall class="text-secondary-dark !font-semibold" variant="link" />
				<span>for further assistance.</span>
			</div>
		{:else}
			<span class="text-secondary">Error {$page.status}</span>
			<span class="text-secondary">{$page.error?.message}</span>

			<div class="error-body">
				<span>
					Sorry, something went wrong. Try using the links above and below to explore our content.
					If you still can't find what you're looking for, please
				</span>
				<a class="underline" href="/contact-us"> contact us online </a>
				or call us at <ClickToCall class="text-secondary-dark !font-semibold" variant="link" />
				<span>for further assistance.</span>
			</div>
		{/if}
	</div>
</section>

<style lang="postcss">
	h1 {
		@apply xl:text-6xl lg:text-5xl text-4xl text-center font-semibold text-secondary-dark;
	}

	a {
		@apply text-secondary-dark font-semibold underline underline-offset-2;
	}

	.error-body {
		@apply max-w-screen-sm mx-auto text-center text-gray-600;
	}
</style>
