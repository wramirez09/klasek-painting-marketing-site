import { c as createTitleDescription } from "../../../../../chunks/metaTagHelpers.js";
import { s as splitGalleryPageImages } from "../../../../../chunks/galleryHelpers.js";
const load = async () => {
  const pageMetaTags = createTitleDescription("Cedar Replacement Gallery", "Cedar Replacement");
  const images = /* @__PURE__ */ Object.assign({
    "/src/lib/images/galleries/cedar-replacement/klasek-painting-cedar-replacement-1.webp": () => import("../../../../../chunks/klasek-painting-cedar-replacement-1.js"),
    "/src/lib/images/galleries/cedar-replacement/klasek-painting-cedar-replacement-10.webp": () => import("../../../../../chunks/klasek-painting-cedar-replacement-10.js"),
    "/src/lib/images/galleries/cedar-replacement/klasek-painting-cedar-replacement-11.webp": () => import("../../../../../chunks/klasek-painting-cedar-replacement-11.js"),
    "/src/lib/images/galleries/cedar-replacement/klasek-painting-cedar-replacement-12.webp": () => import("../../../../../chunks/klasek-painting-cedar-replacement-12.js"),
    "/src/lib/images/galleries/cedar-replacement/klasek-painting-cedar-replacement-13.webp": () => import("../../../../../chunks/klasek-painting-cedar-replacement-13.js"),
    "/src/lib/images/galleries/cedar-replacement/klasek-painting-cedar-replacement-14.webp": () => import("../../../../../chunks/klasek-painting-cedar-replacement-14.js"),
    "/src/lib/images/galleries/cedar-replacement/klasek-painting-cedar-replacement-15.webp": () => import("../../../../../chunks/klasek-painting-cedar-replacement-15.js"),
    "/src/lib/images/galleries/cedar-replacement/klasek-painting-cedar-replacement-16.webp": () => import("../../../../../chunks/klasek-painting-cedar-replacement-16.js"),
    "/src/lib/images/galleries/cedar-replacement/klasek-painting-cedar-replacement-17.webp": () => import("../../../../../chunks/klasek-painting-cedar-replacement-17.js"),
    "/src/lib/images/galleries/cedar-replacement/klasek-painting-cedar-replacement-18.webp": () => import("../../../../../chunks/klasek-painting-cedar-replacement-18.js"),
    "/src/lib/images/galleries/cedar-replacement/klasek-painting-cedar-replacement-19.webp": () => import("../../../../../chunks/klasek-painting-cedar-replacement-19.js"),
    "/src/lib/images/galleries/cedar-replacement/klasek-painting-cedar-replacement-2.webp": () => import("../../../../../chunks/klasek-painting-cedar-replacement-2.js"),
    "/src/lib/images/galleries/cedar-replacement/klasek-painting-cedar-replacement-20.webp": () => import("../../../../../chunks/klasek-painting-cedar-replacement-20.js"),
    "/src/lib/images/galleries/cedar-replacement/klasek-painting-cedar-replacement-21.webp": () => import("../../../../../chunks/klasek-painting-cedar-replacement-21.js"),
    "/src/lib/images/galleries/cedar-replacement/klasek-painting-cedar-replacement-3.webp": () => import("../../../../../chunks/klasek-painting-cedar-replacement-3.js"),
    "/src/lib/images/galleries/cedar-replacement/klasek-painting-cedar-replacement-4.webp": () => import("../../../../../chunks/klasek-painting-cedar-replacement-4.js"),
    "/src/lib/images/galleries/cedar-replacement/klasek-painting-cedar-replacement-5.webp": () => import("../../../../../chunks/klasek-painting-cedar-replacement-5.js"),
    "/src/lib/images/galleries/cedar-replacement/klasek-painting-cedar-replacement-6.webp": () => import("../../../../../chunks/klasek-painting-cedar-replacement-6.js"),
    "/src/lib/images/galleries/cedar-replacement/klasek-painting-cedar-replacement-7.webp": () => import("../../../../../chunks/klasek-painting-cedar-replacement-7.js"),
    "/src/lib/images/galleries/cedar-replacement/klasek-painting-cedar-replacement-8.webp": () => import("../../../../../chunks/klasek-painting-cedar-replacement-8.js"),
    "/src/lib/images/galleries/cedar-replacement/klasek-painting-cedar-replacement-9.webp": () => import("../../../../../chunks/klasek-painting-cedar-replacement-9.js")
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
