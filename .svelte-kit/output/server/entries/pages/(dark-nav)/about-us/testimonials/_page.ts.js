import { c as createTitleDescription } from "../../../../../chunks/metaTagHelpers.js";
const load = () => {
  const pageMetaTags = createTitleDescription(
    "Testimonials",
    "Klasek Painting is proud to boast exceptional customer reviews and testimonials! Read what our past clients have to say about us."
  );
  return {
    pageMetaTags
  };
};
export {
  load
};
