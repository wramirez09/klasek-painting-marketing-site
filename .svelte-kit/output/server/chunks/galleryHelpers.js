const splitGalleryPageImages = async (images) => {
  const imageEntries = Object.entries(images);
  const initialImageCount = 8;
  const initialImageEntries = imageEntries.slice(0, initialImageCount);
  const remainingImageEntries = imageEntries.slice(initialImageCount);
  const eagerImages = Object.fromEntries(
    await Promise.all(
      initialImageEntries.map(
        async ([key, value]) => [key, await value()]
      )
    )
  );
  const lazyImages = Object.fromEntries(remainingImageEntries);
  return {
    eagerImages,
    lazyImages
  };
};
const parseGalleryPageImages = async (images) => {
  const imageEntries = Object.entries(images);
  const parsedImages = Object.fromEntries(
    await Promise.all(
      imageEntries.map(async ([key, value]) => [key, await value()])
    )
  );
  return parsedImages;
};
export {
  parseGalleryPageImages as p,
  splitGalleryPageImages as s
};
