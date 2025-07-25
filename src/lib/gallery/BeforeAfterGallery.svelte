<script lang="ts">
	import BeforeAfterSlider from './subcomponents/BeforeAfterSlider.svelte';
	import beforeAfterGalleryData from './subcomponents/beforeAfterGalleryData';
</script>

<section class="p-y p-x bg-secondary">
	<ul class="container max-w-screen-md flex flex-col gap-12">
		{#each beforeAfterGalleryData as data}
			<BeforeAfterSlider {data} />
		{/each}
	</ul>
</section>
