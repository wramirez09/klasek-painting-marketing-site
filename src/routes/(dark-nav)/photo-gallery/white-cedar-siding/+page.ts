import type { PageLoad } from './$types';
import { createTitleDescription } from '$lib/common/seo/metaTagHelpers';
import { parseGalleryPageImages } from '$lib/gallery/galleryHelpers';
import type { ImageModule } from '$lib/gallery/galleryHelpers';

export const load: PageLoad = async () => {
	const pageMetaTags = createTitleDescription('White Cedar Siding Gallery', 'White Cedar Siding');

	// Import all images in gallery dir
	const images = import.meta.glob<ImageModule>('$lib/images/galleries/white-cedar-siding/*.webp', {
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
