import { c as createTitleDescription } from "../../../../../chunks/metaTagHelpers.js";
import { s as splitGalleryPageImages } from "../../../../../chunks/galleryHelpers.js";
const load = async () => {
  const pageMetaTags = createTitleDescription("Stucco Repair Gallery", "Stucco Repair");
  const images = /* @__PURE__ */ Object.assign({
    "/src/lib/images/galleries/stucco-repair/klasek-painting-stucco-repair-1.webp": () => import("../../../../../chunks/klasek-painting-stucco-repair-1.js"),
    "/src/lib/images/galleries/stucco-repair/klasek-painting-stucco-repair-10.webp": () => import("../../../../../chunks/klasek-painting-stucco-repair-10.js"),
    "/src/lib/images/galleries/stucco-repair/klasek-painting-stucco-repair-11.webp": () => import("../../../../../chunks/klasek-painting-stucco-repair-11.js"),
    "/src/lib/images/galleries/stucco-repair/klasek-painting-stucco-repair-2.webp": () => import("../../../../../chunks/klasek-painting-stucco-repair-2.js"),
    "/src/lib/images/galleries/stucco-repair/klasek-painting-stucco-repair-3.webp": () => import("../../../../../chunks/klasek-painting-stucco-repair-3.js"),
    "/src/lib/images/galleries/stucco-repair/klasek-painting-stucco-repair-4.webp": () => import("../../../../../chunks/klasek-painting-stucco-repair-4.js"),
    "/src/lib/images/galleries/stucco-repair/klasek-painting-stucco-repair-5.webp": () => import("../../../../../chunks/klasek-painting-stucco-repair-5.js"),
    "/src/lib/images/galleries/stucco-repair/klasek-painting-stucco-repair-6.webp": () => import("../../../../../chunks/klasek-painting-stucco-repair-6.js"),
    "/src/lib/images/galleries/stucco-repair/klasek-painting-stucco-repair-7.webp": () => import("../../../../../chunks/klasek-painting-stucco-repair-7.js"),
    "/src/lib/images/galleries/stucco-repair/klasek-painting-stucco-repair-8.webp": () => import("../../../../../chunks/klasek-painting-stucco-repair-8.js"),
    "/src/lib/images/galleries/stucco-repair/klasek-painting-stucco-repair-9.webp": () => import("../../../../../chunks/klasek-painting-stucco-repair-9.js")
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
