<script lang="ts">
	import GalleryPreviewGrid from './subcomponents/GalleryPreviewGrid.svelte';
	import ourWorkGalleryData from './subcomponents/ourWorkGalleryData';
</script>

<section class="!pt-0 p-y p-x bg-secondary">
	<ul class="container grid md:grid-cols-1 sm:grid-cols-2 grid-cols-1 md:gap-12 gap-6">
		{#each ourWorkGalleryData as { href, name, images }, i}
			<GalleryPreviewGrid
				load={i === 0}
				reverse={i % 2 !== 0}
				data={{
					images,
					name,
					href
				}}
			/>
		{/each}
	</ul>
</section>
