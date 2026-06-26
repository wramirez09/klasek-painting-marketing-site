import { c as createTitleDescription } from "../../../../../chunks/metaTagHelpers.js";
import { s as splitGalleryPageImages } from "../../../../../chunks/galleryHelpers.js";
const load = async () => {
  const pageMetaTags = createTitleDescription("Brick Painting Gallery", "Brick Painting");
  const images = /* @__PURE__ */ Object.assign({
    "/src/lib/images/galleries/brick-painting/brick-painting-1.webp": () => import("../../../../../chunks/brick-painting-1.js"),
    "/src/lib/images/galleries/brick-painting/brick-painting-2.webp": () => import("../../../../../chunks/brick-painting-2.js"),
    "/src/lib/images/galleries/brick-painting/brick-painting-3.webp": () => import("../../../../../chunks/brick-painting-3.js"),
    "/src/lib/images/galleries/brick-painting/brick-painting-4.webp": () => import("../../../../../chunks/brick-painting-4.js"),
    "/src/lib/images/galleries/brick-painting/brick-painting-5.webp": () => import("../../../../../chunks/brick-painting-5.js"),
    "/src/lib/images/galleries/brick-painting/brick-painting-6.webp": () => import("../../../../../chunks/brick-painting-6.js"),
    "/src/lib/images/galleries/brick-painting/brick-painting-7.webp": () => import("../../../../../chunks/brick-painting-7.js"),
    "/src/lib/images/galleries/brick-painting/brick-painting-8.webp": () => import("../../../../../chunks/brick-painting-8.js"),
    "/src/lib/images/galleries/brick-painting/brick-painting-9.webp": () => import("../../../../../chunks/brick-painting-9.js")
  });
  const { eagerImages, lazyImages } = await splitGalleryPageImages(images);
  return {
    eagerImages,
    lazyImages,
    pageMetaTags
  };
};
export {
  load
};
