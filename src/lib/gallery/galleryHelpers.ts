// Used with import.meta.glob
export interface ImageModule {
	default: string;
	enhanced: boolean;
}

// Split images provided into eager/lazy sets
export const splitGalleryPageImages = async (
	images: Record<string, () => Promise<ImageModule>>
) => {
	// Convert the imported images object to array
	const imageEntries = Object.entries(images);

	// Define the number of initial images to load
	const initialImageCount = 8;

	// Split the images into initial (eager loading) and remaining (lazy loading) sets
	const initialImageEntries = imageEntries.slice(0, initialImageCount);
	const remainingImageEntries = imageEntries.slice(initialImageCount);

	// Resolve the initial images
	const eagerImages = Object.fromEntries(
		await Promise.all(
			initialImageEntries.map(
				async ([key, value]): Promise<[string, ImageModule]> => [key, await value()]
			)
		)
	);

	// Remaining images (to be lazy loaded)
	const lazyImages = Object.fromEntries(remainingImageEntries);

	return {
		eagerImages,
		lazyImages
	};
};

// Parse all images provided
export const parseGalleryPageImages = async (
	images: Record<string, () => Promise<ImageModule>>
) => {
	const imageEntries = Object.entries(images);

	const parsedImages = Object.fromEntries(
		await Promise.all(
			imageEntries.map(async ([key, value]): Promise<[string, ImageModule]> => [key, await value()])
		)
	);

	return parsedImages;
};
