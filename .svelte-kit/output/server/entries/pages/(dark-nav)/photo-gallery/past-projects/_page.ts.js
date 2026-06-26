import { c as createTitleDescription } from "../../../../../chunks/metaTagHelpers.js";
import { s as splitGalleryPageImages } from "../../../../../chunks/galleryHelpers.js";
const load = async () => {
  const pageMetaTags = createTitleDescription("Past Projects Gallery", "Past Projects");
  const images = /* @__PURE__ */ Object.assign({
    "/src/lib/images/galleries/past-projects/klasek-painting-past-project-1.webp": () => import("../../../../../chunks/klasek-painting-past-project-1.js"),
    "/src/lib/images/galleries/past-projects/klasek-painting-past-project-10.webp": () => import("../../../../../chunks/klasek-painting-past-project-10.js"),
    "/src/lib/images/galleries/past-projects/klasek-painting-past-project-11.webp": () => import("../../../../../chunks/klasek-painting-past-project-11.js"),
    "/src/lib/images/galleries/past-projects/klasek-painting-past-project-12.webp": () => import("../../../../../chunks/klasek-painting-past-project-12.js"),
    "/src/lib/images/galleries/past-projects/klasek-painting-past-project-13.webp": () => import("../../../../../chunks/klasek-painting-past-project-13.js"),
    "/src/lib/images/galleries/past-projects/klasek-painting-past-project-14.webp": () => import("../../../../../chunks/klasek-painting-past-project-14.js"),
    "/src/lib/images/galleries/past-projects/klasek-painting-past-project-15.webp": () => import("../../../../../chunks/klasek-painting-past-project-15.js"),
    "/src/lib/images/galleries/past-projects/klasek-painting-past-project-2.webp": () => import("../../../../../chunks/klasek-painting-past-project-2.js"),
    "/src/lib/images/galleries/past-projects/klasek-painting-past-project-3.webp": () => import("../../../../../chunks/klasek-painting-past-project-3.js"),
    "/src/lib/images/galleries/past-projects/klasek-painting-past-project-4.webp": () => import("../../../../../chunks/klasek-painting-past-project-4.js"),
    "/src/lib/images/galleries/past-projects/klasek-painting-past-project-5.webp": () => import("../../../../../chunks/klasek-painting-past-project-5.js"),
    "/src/lib/images/galleries/past-projects/klasek-painting-past-project-6.webp": () => import("../../../../../chunks/klasek-painting-past-project-6.js"),
    "/src/lib/images/galleries/past-projects/klasek-painting-past-project-7.webp": () => import("../../../../../chunks/klasek-painting-past-project-7.js"),
    "/src/lib/images/galleries/past-projects/klasek-painting-past-project-8.webp": () => import("../../../../../chunks/klasek-painting-past-project-8.js"),
    "/src/lib/images/galleries/past-projects/klasek-painting-past-project-9.webp": () => import("../../../../../chunks/klasek-painting-past-project-9.js")
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
