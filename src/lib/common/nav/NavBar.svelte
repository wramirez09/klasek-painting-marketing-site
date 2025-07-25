<script lang="ts">
	import DesktopNavMenu from './DesktopNavMenu.svelte';
	import MobileNavMenu from './MobileNavMenu.svelte';

	export let lightNav = false;
</script>

<nav
	class={`${lightNav ? 'lg:bg-off-white' : ''} bg-secondary-dark sticky top-0 z-[100] h-fit w-full max-w-[100vw] lg:px-6`}
>
	<!-- Top banner -->
	<div
		class={`${lightNav ? 'lg:bg-secondary-dark' : ''} bg-white lg:px-8 xs:px-6 px-4 lg:py-2 py-1 w-fit mx-auto grid place-items-center rounded-b-xl`}
	>
		<p
			class={`${lightNav ? 'lg:text-white' : ''} text-secondary-dark lg:text-base text-xs text-center font-semibold`}
		>
			Stucco Repair Crews Available Now!
		</p>
	</div>

	<DesktopNavMenu {lightNav} />

	<MobileNavMenu />
</nav>
