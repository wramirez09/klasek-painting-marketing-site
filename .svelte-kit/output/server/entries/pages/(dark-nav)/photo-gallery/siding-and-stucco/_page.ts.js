import { c as createTitleDescription } from "../../../../../chunks/metaTagHelpers.js";
import { s as splitGalleryPageImages } from "../../../../../chunks/galleryHelpers.js";
const load = async () => {
  const pageMetaTags = createTitleDescription("Siding and Stucco Gallery", "Siding and Stucco");
  const images = /* @__PURE__ */ Object.assign({
    "/src/lib/images/galleries/siding-and-stucco/klasek-painting-siding-and-stucco-1.webp": () => import("../../../../../chunks/klasek-painting-siding-and-stucco-1.js"),
    "/src/lib/images/galleries/siding-and-stucco/klasek-painting-siding-and-stucco-10.webp": () => import("../../../../../chunks/klasek-painting-siding-and-stucco-10.js"),
    "/src/lib/images/galleries/siding-and-stucco/klasek-painting-siding-and-stucco-11.webp": () => import("../../../../../chunks/klasek-painting-siding-and-stucco-11.js"),
    "/src/lib/images/galleries/siding-and-stucco/klasek-painting-siding-and-stucco-12.webp": () => import("../../../../../chunks/klasek-painting-siding-and-stucco-12.js"),
    "/src/lib/images/galleries/siding-and-stucco/klasek-painting-siding-and-stucco-2.webp": () => import("../../../../../chunks/klasek-painting-siding-and-stucco-2.js"),
    "/src/lib/images/galleries/siding-and-stucco/klasek-painting-siding-and-stucco-3.webp": () => import("../../../../../chunks/klasek-painting-siding-and-stucco-3.js"),
    "/src/lib/images/galleries/siding-and-stucco/klasek-painting-siding-and-stucco-4.webp": () => import("../../../../../chunks/klasek-painting-siding-and-stucco-4.js"),
    "/src/lib/images/galleries/siding-and-stucco/klasek-painting-siding-and-stucco-5.webp": () => import("../../../../../chunks/klasek-painting-siding-and-stucco-5.js"),
    "/src/lib/images/galleries/siding-and-stucco/klasek-painting-siding-and-stucco-6.webp": () => import("../../../../../chunks/klasek-painting-siding-and-stucco-6.js"),
    "/src/lib/images/galleries/siding-and-stucco/klasek-painting-siding-and-stucco-7.webp": () => import("../../../../../chunks/klasek-painting-siding-and-stucco-7.js"),
    "/src/lib/images/galleries/siding-and-stucco/klasek-painting-siding-and-stucco-8.webp": () => import("../../../../../chunks/klasek-painting-siding-and-stucco-8.js"),
    "/src/lib/images/galleries/siding-and-stucco/klasek-painting-siding-and-stucco-9.webp": () => import("../../../../../chunks/klasek-painting-siding-and-stucco-9.js")
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
