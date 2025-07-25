<script lang="ts">
	import Breadcrumb from '$lib/common/other/Breadcrumb.svelte';
	import ColorHero from '$lib/common/sections/ColorHero.svelte';
	import GalleryPage from '$lib/gallery/GalleryPage.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<ColorHero h1="White Cedar Siding Gallery" />

<Breadcrumb />

<GalleryPage eagerImages={data.parsedImages} />
