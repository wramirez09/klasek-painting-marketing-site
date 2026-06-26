import { c as createTitleDescription } from "../../../../../chunks/metaTagHelpers.js";
import { s as splitGalleryPageImages } from "../../../../../chunks/galleryHelpers.js";
const load = async () => {
  const pageMetaTags = createTitleDescription(
    "Exterior Hardie Board Gallery",
    "Exterior Hardie Board"
  );
  const images = /* @__PURE__ */ Object.assign({
    "/src/lib/images/galleries/exterior-hardie-board/exterior-hardie-board-1.webp": () => import("../../../../../chunks/exterior-hardie-board-1.js"),
    "/src/lib/images/galleries/exterior-hardie-board/exterior-hardie-board-10.webp": () => import("../../../../../chunks/exterior-hardie-board-10.js"),
    "/src/lib/images/galleries/exterior-hardie-board/exterior-hardie-board-11.webp": () => import("../../../../../chunks/exterior-hardie-board-11.js"),
    "/src/lib/images/galleries/exterior-hardie-board/exterior-hardie-board-12.webp": () => import("../../../../../chunks/exterior-hardie-board-12.js"),
    "/src/lib/images/galleries/exterior-hardie-board/exterior-hardie-board-13.webp": () => import("../../../../../chunks/exterior-hardie-board-13.js"),
    "/src/lib/images/galleries/exterior-hardie-board/exterior-hardie-board-14.webp": () => import("../../../../../chunks/exterior-hardie-board-14.js"),
    "/src/lib/images/galleries/exterior-hardie-board/exterior-hardie-board-15.webp": () => import("../../../../../chunks/exterior-hardie-board-15.js"),
    "/src/lib/images/galleries/exterior-hardie-board/exterior-hardie-board-2.webp": () => import("../../../../../chunks/exterior-hardie-board-2.js"),
    "/src/lib/images/galleries/exterior-hardie-board/exterior-hardie-board-3.webp": () => import("../../../../../chunks/exterior-hardie-board-3.js"),
    "/src/lib/images/galleries/exterior-hardie-board/exterior-hardie-board-4.webp": () => import("../../../../../chunks/exterior-hardie-board-4.js"),
    "/src/lib/images/galleries/exterior-hardie-board/exterior-hardie-board-5.webp": () => import("../../../../../chunks/exterior-hardie-board-5.js"),
    "/src/lib/images/galleries/exterior-hardie-board/exterior-hardie-board-6.webp": () => import("../../../../../chunks/exterior-hardie-board-6.js"),
    "/src/lib/images/galleries/exterior-hardie-board/exterior-hardie-board-7.webp": () => import("../../../../../chunks/exterior-hardie-board-7.js"),
    "/src/lib/images/galleries/exterior-hardie-board/exterior-hardie-board-8.webp": () => import("../../../../../chunks/exterior-hardie-board-8.js"),
    "/src/lib/images/galleries/exterior-hardie-board/exterior-hardie-board-9.webp": () => import("../../../../../chunks/exterior-hardie-board-9.js")
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
