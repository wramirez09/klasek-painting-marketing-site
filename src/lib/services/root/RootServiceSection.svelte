<script lang="ts" context="module">
	import type { Link } from '$lib/common/routing/routing';

	type ServiceSectionData = {
		heading: string;
		description: string;
		listItems?: Link[];
		href?: string;
		image: string;
	};
</script>

<script lang="ts">
	import Button from '$components/button/button.svelte';
	import { cn } from '$lib/common/utils';
	import { inview, type Options } from 'svelte-inview';

	export let data: ServiceSectionData;

	// Inview setup
	let isInView = false;
	const options: Options = {
		rootMargin: '200px',
		unobserveOnEnter: true
	};

	// Reverse columns on desktop
	export let reverse = false;

	let classes = '';
	export { classes as class };
</script>

<section
	use:inview={options}
	on:inview_enter={() => (isInView = true)}
	class={cn('p-y p-x bg-off-white', classes)}
>
	<div
		class={cn(
			'grid lg:grid-rows-1 grid-cols-1 lg:gap-12 gap-6 container lg:max-w-screen-xl max-w-screen-md xs:grid-rows-[225px_auto] grid-rows-[175px_auto]',
			reverse ? 'lg:grid-cols-[3fr_2fr]' : 'lg:grid-cols-[2fr_3fr]'
		)}
	>
		<!-- Copy -->
		<div class="{reverse ? 'lg:col-start-2' : ''} flex flex-col lg:gap-4 gap-2 xl:py-8 lg:py-6">
			<h2 class="font-bold xl:text-4xl xs:text-3xl text-2xl">{data.heading}</h2>

			<p class="leading-loose">{data.description}</p>

			{#if data.listItems}
				<ul class="flex flex-col gap-2 font-semibold">
					{#each data.listItems as { text, href }}
						<li class="disc [--top:10px] underline">
							<a class="hover:text-primary-dark" {href}>{text}</a>
						</li>
					{/each}
				</ul>
			{/if}

			{#if data.href}
				<Button class="mt-2 lg:w-fit text-secondary-dark" href={data.href} variant="outline"
					>View Service</Button
				>
			{/if}

			<slot />
		</div>

		<!-- Image -->
		<div
			class={cn(
				'relative size-full lg:order-none order-first',
				reverse ? 'lg:col-start-1 row-start-1' : 'lg:col-start-2 row-start-1'
			)}
		>
			{#if isInView}
				<div
					style={`background-image: url(${data.image});`}
					class="absolute size-full bg-gray-100 rounded-lg bg-cover bg-center bord"
				></div>
			{/if}
		</div>
	</div>
</section>
