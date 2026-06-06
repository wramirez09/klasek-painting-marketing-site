import { c as createTitleDescription } from "../../../../../chunks/metaTagHelpers.js";
import { p as parseGalleryPageImages } from "../../../../../chunks/galleryHelpers.js";
const load = async () => {
  const pageMetaTags = createTitleDescription("White Cedar Siding Gallery", "White Cedar Siding");
  const images = /* @__PURE__ */ Object.assign({
    "/src/lib/images/galleries/white-cedar-siding/klasek-painting-white-cedar-siding-1.webp": () => import("../../../../../chunks/klasek-painting-white-cedar-siding-1.js"),
    "/src/lib/images/galleries/white-cedar-siding/klasek-painting-white-cedar-siding-2.webp": () => import("../../../../../chunks/klasek-painting-white-cedar-siding-2.js"),
    "/src/lib/images/galleries/white-cedar-siding/klasek-painting-white-cedar-siding-3.webp": () => import("../../../../../chunks/klasek-painting-white-cedar-siding-3.js"),
    "/src/lib/images/galleries/white-cedar-siding/klasek-painting-white-cedar-siding-4.webp": () => import("../../../../../chunks/klasek-painting-white-cedar-siding-4.js"),
    "/src/lib/images/galleries/white-cedar-siding/klasek-painting-white-cedar-siding-5.webp": () => import("../../../../../chunks/klasek-painting-white-cedar-siding-5.js"),
    "/src/lib/images/galleries/white-cedar-siding/klasek-painting-white-cedar-siding-6.webp": () => import("../../../../../chunks/klasek-painting-white-cedar-siding-6.js"),
    "/src/lib/images/galleries/white-cedar-siding/klasek-painting-white-cedar-siding-7.webp": () => import("../../../../../chunks/klasek-painting-white-cedar-siding-7.js"),
    "/src/lib/images/galleries/white-cedar-siding/klasek-painting-white-cedar-siding-8.webp": () => import("../../../../../chunks/klasek-painting-white-cedar-siding-8.js")
  });
  const parsedImages = await parseGalleryPageImages(images);
  return {
    parsedImages,
    pageMetaTags
  };
};
export {
  load
};
