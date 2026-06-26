import { c as createTitleDescription } from "../../../../../chunks/metaTagHelpers.js";
import { p as parseGalleryPageImages } from "../../../../../chunks/galleryHelpers.js";
const load = async () => {
  const pageMetaTags = createTitleDescription("Past Projects Gallery", "Past Projects");
  const images = /* @__PURE__ */ Object.assign({
    "/src/lib/images/galleries/stucco-and-trim/klasek-painting-stucco-and-trim-1.webp": () => import("../../../../../chunks/klasek-painting-stucco-and-trim-1.js"),
    "/src/lib/images/galleries/stucco-and-trim/klasek-painting-stucco-and-trim-2.webp": () => import("../../../../../chunks/klasek-painting-stucco-and-trim-2.js"),
    "/src/lib/images/galleries/stucco-and-trim/klasek-painting-stucco-and-trim-3.webp": () => import("../../../../../chunks/klasek-painting-stucco-and-trim-3.js"),
    "/src/lib/images/galleries/stucco-and-trim/klasek-painting-stucco-and-trim-4.webp": () => import("../../../../../chunks/klasek-painting-stucco-and-trim-4.js"),
    "/src/lib/images/galleries/stucco-and-trim/klasek-painting-stucco-and-trim-5.webp": () => import("../../../../../chunks/klasek-painting-stucco-and-trim-5.js"),
    "/src/lib/images/galleries/stucco-and-trim/klasek-painting-stucco-and-trim-6.webp": () => import("../../../../../chunks/klasek-painting-stucco-and-trim-6.js")
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
