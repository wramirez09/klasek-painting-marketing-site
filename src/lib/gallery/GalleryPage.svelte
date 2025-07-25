<script lang="ts">
	import Button from '$components/button/button.svelte';
	import type { ImageModule } from './galleryHelpers';
	import SpinnerIcon from '$images/icons/SpinnerIcon.svelte';

	export let eagerImages: {
		[k: string]: ImageModule;
	};
	export let lazyImages: { [k: string]: () => Promise<ImageModule> } | undefined = undefined;

	// Resolve lazy images
	const loadImages = async () => {
		if (!lazyImages) return;

		const entries = Object.entries(lazyImages);
		const resolvedEntries = Object.fromEntries(
			await Promise.all(
				entries.map(async ([key, value]): Promise<[string, ImageModule]> => [key, await value()])
			)
		);
		return resolvedEntries;
	};

	$: showLazyImages = false;
</script>

<section class="lg:pb-8 pb-6 p-x bg-white">
	<div class="container flex flex-col items-center gap-6">
		<ul class="w-full grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
			<!-- Eager images -->
			<!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
			{#each Object.entries(eagerImages) as [_path, module]}
				<li class="overflow-clip">
					<enhanced:img
						class="h-auto w-full hover:scale-105 duration-300 ease-out"
						src={module.default}
						alt=""
					/>
				</li>
			{/each}

			<!-- If show images button pressed -->
			{#if showLazyImages}
				<!-- Await lazy image loading -->
				{#await loadImages()}
					<!-- Loading indicator -->
					<li class="xl:col-span-4 md:col-span-3 sm:col-span-2 grid place-items-center">
						<SpinnerIcon class="size-12 text-secondary-dark animate-spin" />
					</li>
				{:then images}
					<!-- Render lazy images -->
					{#if images}
						<!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
						{#each Object.entries(images) as [_path, module]}
							<li class="overflow-clip">
								<enhanced:img
									class="h-auto w-full hover:scale-105 duration-300 ease-out"
									src={module.default}
									alt=""
								/>
							</li>
						{/each}
					{/if}
				{/await}
			{/if}
		</ul>

		<!-- Show/Hide button, only visible if lazyImages provided -->
		{#if lazyImages}
			<Button
				on:click={() => (showLazyImages = !showLazyImages)}
				class="mx-auto"
				variant="secondary">{showLazyImages ? 'Hide Images' : 'Show More Images'}</Button
			>
		{/if}
	</div>
</section>
