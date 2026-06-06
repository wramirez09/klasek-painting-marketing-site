import { c as createTitleDescription } from "../../../../../chunks/metaTagHelpers.js";
import { s as splitGalleryPageImages } from "../../../../../chunks/galleryHelpers.js";
const load = async () => {
  const pageMetaTags = createTitleDescription(
    "Cedar Siding Repair & Paint Gallery",
    "Cedar Siding Repair & Paint"
  );
  const images = /* @__PURE__ */ Object.assign({
    "/src/lib/images/galleries/cedar-siding-repair-paint/cedar-siding-repair-paint-1.webp": () => import("../../../../../chunks/cedar-siding-repair-paint-1.js"),
    "/src/lib/images/galleries/cedar-siding-repair-paint/cedar-siding-repair-paint-10.webp": () => import("../../../../../chunks/cedar-siding-repair-paint-10.js"),
    "/src/lib/images/galleries/cedar-siding-repair-paint/cedar-siding-repair-paint-11.webp": () => import("../../../../../chunks/cedar-siding-repair-paint-11.js"),
    "/src/lib/images/galleries/cedar-siding-repair-paint/cedar-siding-repair-paint-12.webp": () => import("../../../../../chunks/cedar-siding-repair-paint-12.js"),
    "/src/lib/images/galleries/cedar-siding-repair-paint/cedar-siding-repair-paint-2.webp": () => import("../../../../../chunks/cedar-siding-repair-paint-2.js"),
    "/src/lib/images/galleries/cedar-siding-repair-paint/cedar-siding-repair-paint-3.webp": () => import("../../../../../chunks/cedar-siding-repair-paint-3.js"),
    "/src/lib/images/galleries/cedar-siding-repair-paint/cedar-siding-repair-paint-4.webp": () => import("../../../../../chunks/cedar-siding-repair-paint-4.js"),
    "/src/lib/images/galleries/cedar-siding-repair-paint/cedar-siding-repair-paint-5.webp": () => import("../../../../../chunks/cedar-siding-repair-paint-5.js"),
    "/src/lib/images/galleries/cedar-siding-repair-paint/cedar-siding-repair-paint-6.webp": () => import("../../../../../chunks/cedar-siding-repair-paint-6.js"),
    "/src/lib/images/galleries/cedar-siding-repair-paint/cedar-siding-repair-paint-7.webp": () => import("../../../../../chunks/cedar-siding-repair-paint-7.js"),
    "/src/lib/images/galleries/cedar-siding-repair-paint/cedar-siding-repair-paint-8.webp": () => import("../../../../../chunks/cedar-siding-repair-paint-8.js"),
    "/src/lib/images/galleries/cedar-siding-repair-paint/cedar-siding-repair-paint-9.webp": () => import("../../../../../chunks/cedar-siding-repair-paint-9.js")
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
