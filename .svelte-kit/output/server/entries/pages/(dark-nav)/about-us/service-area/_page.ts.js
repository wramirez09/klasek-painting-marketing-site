import { c as createTitleDescription } from "../../../../../chunks/metaTagHelpers.js";
const load = () => {
  const pageMetaTags = createTitleDescription(
    "Service Area",
    "Klasek Painting delivers dependable service to homeowners throughout a wide service area. Call today for a free estimate!"
  );
  return {
    pageMetaTags
  };
};
export {
  load
};
