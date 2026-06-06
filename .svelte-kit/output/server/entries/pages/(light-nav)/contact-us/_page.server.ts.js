import { c as createTitleDescription } from "../../../../chunks/metaTagHelpers.js";
const load = () => {
  const pageMetaTags = createTitleDescription(
    "Contact Us",
    "For expert painting solutions in Cook County, contact Klasek Painting. We offer free estimates and have over 30 years of experience."
  );
  return {
    pageMetaTags
  };
};
export {
  load
};
