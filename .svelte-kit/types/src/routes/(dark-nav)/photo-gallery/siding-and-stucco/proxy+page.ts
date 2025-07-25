// @ts-nocheck
import type { PageLoad } from './$types';
import { createTitleDescription } from '$lib/common/seo/metaTagHelpers';
import { splitGalleryPageImages } from '$lib/gallery/galleryHelpers';
import type { ImageModule } from '$lib/gallery/galleryHelpers';

export const load = async () => {
	const pageMetaTags = createTitleDescription('Siding and Stucco Gallery', 'Siding and Stucco');

	// Import all images in gallery dir
	const images = import.meta.glob<ImageModule>('$lib/images/galleries/siding-and-stucco/*.webp', {
		query: {
			enhanced: true
		}
	});

	const { eagerImages, lazyImages } = await splitGalleryPageImages(images);

	return {
		eagerImages,
		lazyImages,
		pageMetaTags
	};
};
;null as any as PageLoad;