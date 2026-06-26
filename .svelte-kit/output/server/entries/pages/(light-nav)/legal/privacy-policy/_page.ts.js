import { c as createTitleDescription } from "../../../../../chunks/metaTagHelpers.js";
const load = () => {
  const pageMetaTags = {
    robots: "noindex,nofollow",
    ...createTitleDescription(
      "Privacy Policy",
      "Privacy Policy. Need experienced painters in Lyons? Call Klasek Painting to schedule an estimate today."
    )
  };
  return {
    pageMetaTags
  };
};
export {
  load
};
