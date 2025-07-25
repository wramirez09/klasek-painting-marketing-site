// @ts-nocheck
import type { PageLoad } from './$types';
import { createTitleDescription } from '$lib/common/seo/metaTagHelpers';
import { parseGalleryPageImages } from '$lib/gallery/galleryHelpers';
import type { ImageModule } from '$lib/gallery/galleryHelpers';

export const load = async () => {
	const pageMetaTags = createTitleDescription('Past Projects Gallery', 'Past Projects');

	// Import all images in gallery dir
	const images = import.meta.glob<ImageModule>('$lib/images/galleries/stucco-and-trim/*.webp', {
		query: {
			enhanced: true
		}
	});

	const parsedImages = await parseGalleryPageImages(images);

	return {
		parsedImages,
		pageMetaTags
	};
};
;null as any as PageLoad;