<script lang="ts">
	import Button from '$components/button/button.svelte';
	import type { BlogPreviewData } from './blogs';

	export let previewData: BlogPreviewData;
</script>

<li
	class="list-none grid lg:grid-cols-[400px_auto] md:grid-cols-[350px_auto] md:grid-rows-1 py-8 lg:gap-x-4 md:gap-0 gap-2"
>
	<!-- Image -->
	<div class="relative w-full rounded-lg overflow-clip my-auto h-[250px]">
		<div class="absolute rounded-lg size-full bg-off-white animate-pulse" />

		<img
			src="{previewData.image}"
			alt="{previewData.meta}"
			class="absolute object-cover object-center size-full z-10 rounded-lg border-2 border-secondary-dark"
		/>
	</div>

	<!-- Content -->
	<div class="sm:px-8 sm:pl-4 flex flex-col sm:gap-4 gap-2 h-fit my-auto">
		<div>
			<h2 class="font-semibold lg:text-4xl xs:text-2xl text-xl mb-1 text-secondary-dark">
				{previewData.title}
			</h2>

			<span class="text-sm text-gray-600">{previewData.datePublished}</span>
		</div>

		<p>{previewData.meta}..</p>

		<Button variant="outline" class="md:w-fit text-secondary-dark" href={previewData.href}
			>Read Post</Button
		>
	</div>
</li>
