<script lang="ts">
	import { slide } from 'svelte/transition';
	import logo from '$images/logos/klasek-painting.webp';
	import logoDark from '$images/logos/kalsek-painting-dark.webp';
	import NavLinks from './NavLinks.svelte';
	import Hamburger from './subcomponents/Hamburger.svelte';
	import { onNavigate } from '$app/navigation';
	import Button from '$components/button/button.svelte';
	import { routes } from '../routing/routes';

	export let whiteNav = false;
	export let ctaHref = routes['contact'].href;
	export let logoHref = '/';
	export let showNavLinks = true;

	let open = false;

	let menu: HTMLElement;

	onNavigate(() => {
		open = false;
	});

	// Focus menu on open
	$: if (open && menu) {
		menu.focus();
	}
</script>

<div
	class={`lg:hidden flex justify-between items-center mx-2 mt-2 pb-4 relative 
    before:absolute before:content-[''] before:w-full before:h-[2px] before:bg-primary before:left-0 before:right-0 before:top-full before:rounded-full before:z-[100]
`}
>
	<!-- Logo -->
	<a class="pl-2" href={logoHref}>
		<img src={whiteNav ? logoDark : logo} alt="Klasek Painting" class="w-[125px] h-[48px]" />
	</a>

	<!-- Hamburger -->
	{#if showNavLinks}
		<div class="size-fit relative -right-2">
			<Hamburger bind:open />
		</div>
	{:else}
		<Button href={ctaHref} variant="outline" class="text-sm !p-2">Get Free Estimate</Button>
	{/if}
</div>

<!-- Dropdown -->
{#if open}
	<div
		transition:slide
		class="lg:hidden absolute h-[calc(100vh-100%)] w-[100vw] bg-secondary-dark left-0 top-full pt-2 flex flex-col justify-between overflow-y-scroll overflow-x-hidden"
	>
		{#if showNavLinks}
			<ul bind:this={menu} class="[&>*>*]:xs:px-12 [&>*>*]:px-8 space-y-1">
				{#if $$slots.default}
					<slot />
				{:else}
					<NavLinks />
				{/if}
			</ul>
		{/if}

		<div class="py-4 bg-secondary-dark grid place-items-center">
			<Button href={ctaHref}>Get Free Estimate</Button>
		</div>
	</div>
{:else}
	<ul class="hidden" bind:this={menu}><NavLinks /></ul>
{/if}
