<script lang="ts">
	import ArrowIcon from '$lib/images/icons/ArrowIcon.svelte';
	import { slide } from 'svelte/transition';
	import type { Link } from '$lib/common/routing/routing';
	import { isMobileStore } from '$lib/stores/isMobileStore';
	import { onNavigate } from '$app/navigation';
	import { cn } from '$lib/common/utils';

	export let data: Link;
	let classes = '';
	export { classes as class };

	// Dropdown state
	let open = false;

	// Close dropdown on navigation
	onNavigate(() => {
		open = false;
	});

	// Open dropdown
	const openMenu = () => {
		if (!$isMobileStore) {
			open = true;
		}
	};

	// Close dropdown
	const closeMenu = () => {
		if (!$isMobileStore) {
			open = false;
		}
	};

	// Handle focus leave (for keyboard navigation)
	function handleFocusLeave(node: Node, cb: () => void) {
		if ($isMobileStore) return;

		function handleFocusIn() {
			if (!node.contains(document.activeElement)) {
				cb();
			}
		}

		document.addEventListener('focusin', handleFocusIn);

		return {
			destroy() {
				document.removeEventListener('focusin', handleFocusIn);
			}
		};
	}
</script>

<!-- Desktop Dropdown -->
<li
	on:mouseenter={openMenu}
	on:mouseleave={closeMenu}
	on:focusin={openMenu}
	use:handleFocusLeave={() => (open = false)}
	class={cn('relative group', classes)}
>
	<div
		class="lg:p-0 text-white h-full flex items-center lg:justify-start justify-between py-4 relative"
	>
		<a
			href={data.href}
			class="{open
				? 'lg:underline'
				: ''} lg:hover:underline underline-offset-2 font-semibold lg:text-lg text-2xl whitespace-nowrap flex items-center"
		>
			{data.text}
			<!-- Desktop arrow -->
			<ArrowIcon class="lg:inline hidden lg:size-5 size-6 rotate-90 m-0" /></a
		>

		<!-- Mobile arrow button -->
		{#if $isMobileStore}
			<button on:click={() => (open = !open)}>
				<ArrowIcon
					class="{open
						? '-rotate-90'
						: 'rotate-90'} lg:hidden lg:size-5 size-8 m-0 inline duration-200"
				/>
			</button>
		{/if}
	</div>

	{#if open}
		<div
			transition:slide={{ duration: $isMobileStore ? 300 : 0 }}
			class="lg:before:ribbon-bottom lg:before:rounded-t-lg lg:absolute p-1 lg:size-fit size-full lg:before:bg-primary lg:bg-transparent bg-secondary [--r:.5rem] z-0 lg:before:absolute lg:before:content-[''] lg:before:w-[calc(100%+theme(padding.2))] lg:before:h-[calc(100%+theme(padding.2))] before:size-full lg:before:inset-0"
		>
			<ul
				class={`
				lg:max-h-[350px] lg:overflow-y-scroll
				lg:before:ribbon-bottom lg:before:rounded-t-lg
				whitespace-nowrap flex flex-col lg:pb-2 lg:pl-2
				lg:before:bg-white lg:before:size-full [--r:.5rem] z-10
				lg:static relative lg:divide-y divide-gray-100
				before:absolute before:content-['']
				lg:before:top-1 lg:before:left-1 before:inset-0 before:w-[100vw] before:h-full before:bg-secondary
			`}
			>
				<slot />
			</ul>
		</div>
	{/if}
</li>
