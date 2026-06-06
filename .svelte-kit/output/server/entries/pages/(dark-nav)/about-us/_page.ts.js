import { c as createTitleDescription } from "../../../../chunks/metaTagHelpers.js";
const load = () => {
  const pageMetaTags = createTitleDescription(
    "About Us",
    "You can rely on our team of experts to bring your home to life. Klasek Painting has been in the Chicago painting business for over 30 years. We are most well-known for our high quality work, dependable service, superior products, satisfaction guarantee, and the ability to meet your deadline."
  );
  return {
    pageMetaTags
  };
};
export {
  load
};
