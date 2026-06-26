import { c as createTitleDescription } from "../../../../chunks/metaTagHelpers.js";
const load = () => {
  const pageMetaTags = createTitleDescription(
    "Photo Gallery",
    "View our Photo Gallery. For trusted and reliable home painting services in Cook County, contact Klasek Painting."
  );
  return {
    pageMetaTags
  };
};
export {
  load
};
