<script lang="ts">
	import OurWorkGallery from '$lib/gallery/OurWorkGallery.svelte';
	import GalleryHero from '$lib/gallery/GalleryHero.svelte';
	import GalleryControls, { type Gallery } from '$lib/gallery/subcomponents/GalleryControls.svelte';
	import BeforeAfterGallery from '$lib/gallery/BeforeAfterGallery.svelte';

	let activeTab: Gallery = 'our-work';
</script>

<GalleryHero />
<GalleryControls bind:activeTab />
{#if activeTab === 'our-work'}
	<OurWorkGallery />
{:else}
	<BeforeAfterGallery />
{/if}
