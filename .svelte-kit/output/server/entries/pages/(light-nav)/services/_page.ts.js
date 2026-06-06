import { c as createTitleDescription } from "../../../../chunks/metaTagHelpers.js";
const load = () => {
  const pageMetaTags = createTitleDescription(
    "Professional Exterior Painting Services",
    "Klasek Painting offers expert exterior painting services for homes and businesses. Transform your space with our professional painting solutions."
  );
  return {
    pageMetaTags
  };
};
export {
  load
};
