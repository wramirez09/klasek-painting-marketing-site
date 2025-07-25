<script lang="ts" context="module">
	import type { Link } from '$lib/common/routing/routing';

	export type ServiceGridCellData = { link: Link; bg: string };
</script>

<script lang="ts">
	import { SquareArrowOutUpRight } from 'lucide-svelte';
	import { fade } from 'svelte/transition';

	export let data: ServiceGridCellData;
	export let isInView: boolean;
	export let index: number;
</script>

<li class="text-white relative group overflow-clip lg:min-h-none min-h-[200px]">
	{#if isInView}
		<a
			transition:fade={{ duration: 150, delay: index * 100 }}
			style={`--bg: url(${data.bg})`}
			href={data.link.href}
			class="group block size-full group-hover:before:scale-105 group-hover:before:bg-primary-dark/70 before:duration-300 before:ease-out before:bg-cover before:bg-center before:bg-secondary/70 before:bg-blend-multiply before:size-full before:absolute before:content-['']"
		>
			<span
				class="group-focus:ring-2 group-focus:ring-ring ring-offset-2 font-semibold lg:text-base text-lg absolute xl:bottom-6 xl:left-6 lg:bottom-3 lg:left-3 left-1/2 lg:translate-x-0 lg:translate-y-0 -translate-x-1/2 bottom-1/2 translate-y-1/2 flex items-center gap-2 group-hover:underline backdrop-blur-sm p-1 whitespace-nowrap"
				>{data.link.text} <SquareArrowOutUpRight class="size-4" /></span
			>
		</a>
	{/if}
</li>

<style>
	a::before {
		background-image: var(--bg);
	}
</style>
