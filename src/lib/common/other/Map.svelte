<script lang="ts">
	import { inview, type Options } from 'svelte-inview';
	import { cn } from '../utils';
	import src from '$images/backgrounds/klasek-painting-map.webp';

	let classes = '';
	export { classes as class };
	export let lazy = false;

	// Inview setup
	let isInView = false;
	const options: Options = {
		rootMargin: '200px',
		unobserveOnEnter: true
	};
</script>

<div
	use:inview={options}
	on:inview_enter={() => (isInView = true)}
	class={cn('size-full overflow-hidden relative rounded-lg border', classes)}
>
	{#if !lazy || isInView}
		<div
			style={`background-image: url(${src}`}
			class="size-full bg-cover bg-center bg-gray-100 rounded-lg"
		/>

		<p class="text-xs absolute bottom-0 right-0 p-1 backdrop-blur-lg text-gray-600 rounded-tl-sm">
			Map Data ©2024 Google
		</p>
	{/if}
</div>
