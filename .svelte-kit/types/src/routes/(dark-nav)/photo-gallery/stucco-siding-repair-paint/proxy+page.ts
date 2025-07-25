// @ts-nocheck
import type { PageLoad } from './$types';
import { createTitleDescription } from '$lib/common/seo/metaTagHelpers';
import { splitGalleryPageImages } from '$lib/gallery/galleryHelpers';
import type { ImageModule } from '$lib/gallery/galleryHelpers';

export const load = async () => {
	const pageMetaTags = createTitleDescription(
		'Stucco Repair & Paint Gallery',
		'Stucco Repair & Paint'
	);

	// Import all images in gallery dir
	const images = import.meta.glob<ImageModule>(
		'$lib/images/galleries/stucco-siding-repair-paint/*.webp',
		{
			query: {
				enhanced: true
			}
		}
	);

	const { eagerImages, lazyImages } = await splitGalleryPageImages(images);

	return {
		eagerImages,
		lazyImages,
		pageMetaTags
	};
};
;null as any as PageLoad;