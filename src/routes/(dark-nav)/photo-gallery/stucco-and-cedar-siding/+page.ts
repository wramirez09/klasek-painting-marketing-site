import type { PageLoad } from './$types';
import { createTitleDescription } from '$lib/common/seo/metaTagHelpers';
import { splitGalleryPageImages } from '$lib/gallery/galleryHelpers';
import type { ImageModule } from '$lib/gallery/galleryHelpers';

export const load: PageLoad = async () => {
	const pageMetaTags = createTitleDescription(
		'Stucco and Cedar Siding Gallery',
		'Stucco and Cedar Siding'
	);

	// Import all images in gallery dir
	const images = import.meta.glob<ImageModule>(
		'$lib/images/galleries/stucco-and-cedar-siding/*.webp',
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
