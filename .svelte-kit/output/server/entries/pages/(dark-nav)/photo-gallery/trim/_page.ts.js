import { c as createTitleDescription } from "../../../../../chunks/metaTagHelpers.js";
import { s as splitGalleryPageImages } from "../../../../../chunks/galleryHelpers.js";
const load = async () => {
  const pageMetaTags = createTitleDescription("Trim Gallery", "Trim");
  const images = /* @__PURE__ */ Object.assign({
    "/src/lib/images/galleries/trim/klasek-painting-trim-1.webp": () => import("../../../../../chunks/klasek-painting-trim-1.js"),
    "/src/lib/images/galleries/trim/klasek-painting-trim-10.webp": () => import("../../../../../chunks/klasek-painting-trim-10.js"),
    "/src/lib/images/galleries/trim/klasek-painting-trim-11.webp": () => import("../../../../../chunks/klasek-painting-trim-11.js"),
    "/src/lib/images/galleries/trim/klasek-painting-trim-12.webp": () => import("../../../../../chunks/klasek-painting-trim-12.js"),
    "/src/lib/images/galleries/trim/klasek-painting-trim-13.webp": () => import("../../../../../chunks/klasek-painting-trim-13.js"),
    "/src/lib/images/galleries/trim/klasek-painting-trim-14.webp": () => import("../../../../../chunks/klasek-painting-trim-14.js"),
    "/src/lib/images/galleries/trim/klasek-painting-trim-15.webp": () => import("../../../../../chunks/klasek-painting-trim-15.js"),
    "/src/lib/images/galleries/trim/klasek-painting-trim-2.webp": () => import("../../../../../chunks/klasek-painting-trim-2.js"),
    "/src/lib/images/galleries/trim/klasek-painting-trim-3.webp": () => import("../../../../../chunks/klasek-painting-trim-3.js"),
    "/src/lib/images/galleries/trim/klasek-painting-trim-4.webp": () => import("../../../../../chunks/klasek-painting-trim-4.js"),
    "/src/lib/images/galleries/trim/klasek-painting-trim-5.webp": () => import("../../../../../chunks/klasek-painting-trim-5.js"),
    "/src/lib/images/galleries/trim/klasek-painting-trim-6.webp": () => import("../../../../../chunks/klasek-painting-trim-6.js"),
    "/src/lib/images/galleries/trim/klasek-painting-trim-7.webp": () => import("../../../../../chunks/klasek-painting-trim-7.js"),
    "/src/lib/images/galleries/trim/klasek-painting-trim-8.webp": () => import("../../../../../chunks/klasek-painting-trim-8.js")
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
