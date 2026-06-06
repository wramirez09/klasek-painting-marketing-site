import { c as createTitleDescription } from "../../../../../chunks/metaTagHelpers.js";
import { s as splitGalleryPageImages } from "../../../../../chunks/galleryHelpers.js";
const load = async () => {
  const pageMetaTags = createTitleDescription(
    "Cedar Shingle and Stucco Repair Gallery",
    "Cedar Shingle and Stucco Repair"
  );
  const images = /* @__PURE__ */ Object.assign({
    "/src/lib/images/galleries/cedar-shingle-and-stucco-repair/cedar-shingle-and-stucco-repair-1.webp": () => import("../../../../../chunks/cedar-shingle-and-stucco-repair-1.js"),
    "/src/lib/images/galleries/cedar-shingle-and-stucco-repair/cedar-shingle-and-stucco-repair-10.webp": () => import("../../../../../chunks/cedar-shingle-and-stucco-repair-10.js"),
    "/src/lib/images/galleries/cedar-shingle-and-stucco-repair/cedar-shingle-and-stucco-repair-11.webp": () => import("../../../../../chunks/cedar-shingle-and-stucco-repair-11.js"),
    "/src/lib/images/galleries/cedar-shingle-and-stucco-repair/cedar-shingle-and-stucco-repair-12.webp": () => import("../../../../../chunks/cedar-shingle-and-stucco-repair-12.js"),
    "/src/lib/images/galleries/cedar-shingle-and-stucco-repair/cedar-shingle-and-stucco-repair-13.webp": () => import("../../../../../chunks/cedar-shingle-and-stucco-repair-13.js"),
    "/src/lib/images/galleries/cedar-shingle-and-stucco-repair/cedar-shingle-and-stucco-repair-14.webp": () => import("../../../../../chunks/cedar-shingle-and-stucco-repair-14.js"),
    "/src/lib/images/galleries/cedar-shingle-and-stucco-repair/cedar-shingle-and-stucco-repair-15.webp": () => import("../../../../../chunks/cedar-shingle-and-stucco-repair-15.js"),
    "/src/lib/images/galleries/cedar-shingle-and-stucco-repair/cedar-shingle-and-stucco-repair-16.webp": () => import("../../../../../chunks/cedar-shingle-and-stucco-repair-16.js"),
    "/src/lib/images/galleries/cedar-shingle-and-stucco-repair/cedar-shingle-and-stucco-repair-2.webp": () => import("../../../../../chunks/cedar-shingle-and-stucco-repair-2.js"),
    "/src/lib/images/galleries/cedar-shingle-and-stucco-repair/cedar-shingle-and-stucco-repair-3.webp": () => import("../../../../../chunks/cedar-shingle-and-stucco-repair-3.js"),
    "/src/lib/images/galleries/cedar-shingle-and-stucco-repair/cedar-shingle-and-stucco-repair-4.webp": () => import("../../../../../chunks/cedar-shingle-and-stucco-repair-4.js"),
    "/src/lib/images/galleries/cedar-shingle-and-stucco-repair/cedar-shingle-and-stucco-repair-5.webp": () => import("../../../../../chunks/cedar-shingle-and-stucco-repair-5.js"),
    "/src/lib/images/galleries/cedar-shingle-and-stucco-repair/cedar-shingle-and-stucco-repair-6.webp": () => import("../../../../../chunks/cedar-shingle-and-stucco-repair-6.js"),
    "/src/lib/images/galleries/cedar-shingle-and-stucco-repair/cedar-shingle-and-stucco-repair-7.webp": () => import("../../../../../chunks/cedar-shingle-and-stucco-repair-7.js"),
    "/src/lib/images/galleries/cedar-shingle-and-stucco-repair/cedar-shingle-and-stucco-repair-8.webp": () => import("../../../../../chunks/cedar-shingle-and-stucco-repair-8.js"),
    "/src/lib/images/galleries/cedar-shingle-and-stucco-repair/cedar-shingle-and-stucco-repair-9.webp": () => import("../../../../../chunks/cedar-shingle-and-stucco-repair-9.js")
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
