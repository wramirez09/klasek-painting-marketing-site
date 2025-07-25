<script lang="ts">
	import Button from '$components/button/button.svelte';
	import NavLinks from './NavLinks.svelte';
	import { onMount } from 'svelte';
	import logo from '$images/logos/klasek-painting.webp?enhanced';
	import logoDark from '$images/logos/kalsek-painting-dark.webp?enhanced';
	import { routes } from '../routing/routes';

	export let lightNav = false;
	export let ctaHref = routes['contact'].href;
	export let logoHref = '/';
	export let showNavLinks = true;

	let shrinkNav: boolean;

	const limit = 32;
	const delta = 50;
	let lastScrollTop = 0;

	// Shrink nav on scroll
	function shrinkNavOnScroll() {
		const scrollTop = window.scrollY;

		// Always expand nav if at top of page
		if (scrollTop <= 0) {
			shrinkNav = false;
		}

		// Make sure user scrolls more than delta (prevents jittering on scroll up/down)
		if (Math.abs(lastScrollTop - scrollTop) <= delta) {
			return;
		}

		// If user scrolls past limit, shrink nav
		shrinkNav = scrollTop > limit;

		// Update last scroll position
		lastScrollTop = scrollTop;
	}

	onMount(() => {
		// Set initial state
		shrinkNav = window.scrollY > limit;

		// Scroll listener
		const listener = window.addEventListener('scroll', shrinkNavOnScroll);

		// Cleanup
		return listener;
	});
</script>

<div
	class={`
		${shrinkNav ? 'lg:py-3' : 'lg:py-8'}
        hidden lg:flex justify-between max-w-screen-xl mx-auto relative border-primary transition-all duration-200
        before:absolute before:content-[''] before:max-w-[100vw] xl:before:w-[103%] lg:before:w-full before:h-1 before:bg-primary before:rounded-full before:top-full before:left-1/2 before:-translate-x-1/2
    `}
>
	<!-- Logo -->
	<div class="w-fit">
		<a href={logoHref}>
			<!-- Dark logo -->
			<enhanced:img
				src={logoDark}
				class:lg:block={lightNav}
				alt="Klasek Painting"
				class="{shrinkNav
					? 'w-[160px]'
					: 'w-[180px]'} h-auto hidden transition-all duration-200 flex-shrink-0"
			/>

			<!-- Light logo -->
			<enhanced:img
				src={logo}
				alt="Klasek Painting"
				class:lg:hidden={lightNav}
				class="{shrinkNav ? 'w-[160px]' : 'w-[180px]'} h-auto block transition-all duration-200"
			/>
		</a>
	</div>

	{#if showNavLinks}
		<ul
			class={`${lightNav ? '[&>*>*]:!text-secondary-dark [&>*>*>*]:!text-secondary-dark' : ''} flex items-center justify-center gap-6`}
		>
			<NavLinks />
		</ul>
	{/if}

	<div class="flex items-center justify-end gap-3">
		<Button href={ctaHref}>Get Free Estimate</Button>
	</div>
</div>
