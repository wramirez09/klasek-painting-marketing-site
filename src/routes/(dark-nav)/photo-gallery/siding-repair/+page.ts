import type { PageLoad } from './$types';
import { createTitleDescription } from '$lib/common/seo/metaTagHelpers';
import { splitGalleryPageImages } from '$lib/gallery/galleryHelpers';
import type { ImageModule } from '$lib/gallery/galleryHelpers';

export const load: PageLoad = async () => {
	const pageMetaTags = createTitleDescription('Siding Repair Gallery', 'Siding Repair');

	// Import all images in gallery dir
	const images = import.meta.glob<ImageModule>('$lib/images/galleries/siding-repair/*.webp', {
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
