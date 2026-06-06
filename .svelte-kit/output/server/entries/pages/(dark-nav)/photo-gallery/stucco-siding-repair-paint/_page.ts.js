import { c as createTitleDescription } from "../../../../../chunks/metaTagHelpers.js";
import { s as splitGalleryPageImages } from "../../../../../chunks/galleryHelpers.js";
const load = async () => {
  const pageMetaTags = createTitleDescription(
    "Stucco Repair & Paint Gallery",
    "Stucco Repair & Paint"
  );
  const images = /* @__PURE__ */ Object.assign({
    "/src/lib/images/galleries/stucco-siding-repair-paint/stucco-siding-paint-and-repair-1.webp": () => import("../../../../../chunks/stucco-siding-paint-and-repair-1.js"),
    "/src/lib/images/galleries/stucco-siding-repair-paint/stucco-siding-paint-and-repair-10.webp": () => import("../../../../../chunks/stucco-siding-paint-and-repair-10.js"),
    "/src/lib/images/galleries/stucco-siding-repair-paint/stucco-siding-paint-and-repair-11.webp": () => import("../../../../../chunks/stucco-siding-paint-and-repair-11.js"),
    "/src/lib/images/galleries/stucco-siding-repair-paint/stucco-siding-paint-and-repair-12.webp": () => import("../../../../../chunks/stucco-siding-paint-and-repair-12.js"),
    "/src/lib/images/galleries/stucco-siding-repair-paint/stucco-siding-paint-and-repair-13.webp": () => import("../../../../../chunks/stucco-siding-paint-and-repair-13.js"),
    "/src/lib/images/galleries/stucco-siding-repair-paint/stucco-siding-paint-and-repair-14.webp": () => import("../../../../../chunks/stucco-siding-paint-and-repair-14.js"),
    "/src/lib/images/galleries/stucco-siding-repair-paint/stucco-siding-paint-and-repair-15.webp": () => import("../../../../../chunks/stucco-siding-paint-and-repair-15.js"),
    "/src/lib/images/galleries/stucco-siding-repair-paint/stucco-siding-paint-and-repair-16.webp": () => import("../../../../../chunks/stucco-siding-paint-and-repair-16.js"),
    "/src/lib/images/galleries/stucco-siding-repair-paint/stucco-siding-paint-and-repair-17.webp": () => import("../../../../../chunks/stucco-siding-paint-and-repair-17.js"),
    "/src/lib/images/galleries/stucco-siding-repair-paint/stucco-siding-paint-and-repair-2.webp": () => import("../../../../../chunks/stucco-siding-paint-and-repair-2.js"),
    "/src/lib/images/galleries/stucco-siding-repair-paint/stucco-siding-paint-and-repair-3.webp": () => import("../../../../../chunks/stucco-siding-paint-and-repair-3.js"),
    "/src/lib/images/galleries/stucco-siding-repair-paint/stucco-siding-paint-and-repair-4.webp": () => import("../../../../../chunks/stucco-siding-paint-and-repair-4.js"),
    "/src/lib/images/galleries/stucco-siding-repair-paint/stucco-siding-paint-and-repair-5.webp": () => import("../../../../../chunks/stucco-siding-paint-and-repair-5.js"),
    "/src/lib/images/galleries/stucco-siding-repair-paint/stucco-siding-paint-and-repair-6.webp": () => import("../../../../../chunks/stucco-siding-paint-and-repair-6.js"),
    "/src/lib/images/galleries/stucco-siding-repair-paint/stucco-siding-paint-and-repair-7.webp": () => import("../../../../../chunks/stucco-siding-paint-and-repair-7.js"),
    "/src/lib/images/galleries/stucco-siding-repair-paint/stucco-siding-paint-and-repair-8.webp": () => import("../../../../../chunks/stucco-siding-paint-and-repair-8.js"),
    "/src/lib/images/galleries/stucco-siding-repair-paint/stucco-siding-paint-and-repair-9.webp": () => import("../../../../../chunks/stucco-siding-paint-and-repair-9.js")
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
