import { c as createTitleDescription } from "../../../../../chunks/metaTagHelpers.js";
import { s as splitGalleryPageImages } from "../../../../../chunks/galleryHelpers.js";
const load = async () => {
  const pageMetaTags = createTitleDescription(
    "Stucco and Cedar Siding Gallery",
    "Stucco and Cedar Siding"
  );
  const images = /* @__PURE__ */ Object.assign({
    "/src/lib/images/galleries/stucco-and-cedar-siding/stucco-and-cedar-siding-1.webp": () => import("../../../../../chunks/stucco-and-cedar-siding-1.js"),
    "/src/lib/images/galleries/stucco-and-cedar-siding/stucco-and-cedar-siding-10.webp": () => import("../../../../../chunks/stucco-and-cedar-siding-10.js"),
    "/src/lib/images/galleries/stucco-and-cedar-siding/stucco-and-cedar-siding-11.webp": () => import("../../../../../chunks/stucco-and-cedar-siding-11.js"),
    "/src/lib/images/galleries/stucco-and-cedar-siding/stucco-and-cedar-siding-12.webp": () => import("../../../../../chunks/stucco-and-cedar-siding-12.js"),
    "/src/lib/images/galleries/stucco-and-cedar-siding/stucco-and-cedar-siding-13.webp": () => import("../../../../../chunks/stucco-and-cedar-siding-13.js"),
    "/src/lib/images/galleries/stucco-and-cedar-siding/stucco-and-cedar-siding-2.webp": () => import("../../../../../chunks/stucco-and-cedar-siding-2.js"),
    "/src/lib/images/galleries/stucco-and-cedar-siding/stucco-and-cedar-siding-3.webp": () => import("../../../../../chunks/stucco-and-cedar-siding-3.js"),
    "/src/lib/images/galleries/stucco-and-cedar-siding/stucco-and-cedar-siding-4.webp": () => import("../../../../../chunks/stucco-and-cedar-siding-4.js"),
    "/src/lib/images/galleries/stucco-and-cedar-siding/stucco-and-cedar-siding-5.webp": () => import("../../../../../chunks/stucco-and-cedar-siding-5.js"),
    "/src/lib/images/galleries/stucco-and-cedar-siding/stucco-and-cedar-siding-6.webp": () => import("../../../../../chunks/stucco-and-cedar-siding-6.js"),
    "/src/lib/images/galleries/stucco-and-cedar-siding/stucco-and-cedar-siding-7.webp": () => import("../../../../../chunks/stucco-and-cedar-siding-7.js"),
    "/src/lib/images/galleries/stucco-and-cedar-siding/stucco-and-cedar-siding-8.webp": () => import("../../../../../chunks/stucco-and-cedar-siding-8.js"),
    "/src/lib/images/galleries/stucco-and-cedar-siding/stucco-and-cedar-siding-9.webp": () => import("../../../../../chunks/stucco-and-cedar-siding-9.js")
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
