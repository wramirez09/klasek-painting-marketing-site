import { c as createTitleDescription } from "../../../../../chunks/metaTagHelpers.js";
import { s as splitGalleryPageImages } from "../../../../../chunks/galleryHelpers.js";
const load = async () => {
  const pageMetaTags = createTitleDescription("Victorian Homes Gallery", "Victorian Homes");
  const images = /* @__PURE__ */ Object.assign({
    "/src/lib/images/galleries/victorian-homes/klasek-painting-victorian-homes-1.webp": () => import("../../../../../chunks/klasek-painting-victorian-homes-12.js"),
    "/src/lib/images/galleries/victorian-homes/klasek-painting-victorian-homes-2.webp": () => import("../../../../../chunks/klasek-painting-victorian-homes-2.js"),
    "/src/lib/images/galleries/victorian-homes/klasek-painting-victorian-homes-3.webp": () => import("../../../../../chunks/klasek-painting-victorian-homes-3.js"),
    "/src/lib/images/galleries/victorian-homes/klasek-painting-victorian-homes-4.webp": () => import("../../../../../chunks/klasek-painting-victorian-homes-4.js"),
    "/src/lib/images/galleries/victorian-homes/klasek-painting-victorian-homes-5.webp": () => import("../../../../../chunks/klasek-painting-victorian-homes-5.js"),
    "/src/lib/images/galleries/victorian-homes/klasek-painting-victorian-homes-6.webp": () => import("../../../../../chunks/klasek-painting-victorian-homes-6.js"),
    "/src/lib/images/galleries/victorian-homes/klasek-painting-victorian-homes-7.webp": () => import("../../../../../chunks/klasek-painting-victorian-homes-7.js"),
    "/src/lib/images/galleries/victorian-homes/klasek-painting-victorian-homes-8.webp": () => import("../../../../../chunks/klasek-painting-victorian-homes-8.js"),
    "/src/lib/images/galleries/victorian-homes/klasek-painting-victorian-homes-9.webp": () => import("../../../../../chunks/klasek-painting-victorian-homes-9.js")
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
