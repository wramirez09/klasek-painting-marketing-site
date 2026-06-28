import type { PageLoad } from "./$types";
import { createCityMetaTags } from "$lib/common/seo/metaTagHelpers";

export const load: PageLoad = () => {
  const pageMetaTags = createCityMetaTags(
    "Exterior House Painters in Forest Park, IL",
    "Klasek Painting provides expert house painting, brick restoration, and siding repair in Forest Park, IL. With 30+ years of experience, we deliver exceptional and long-lasting results.",
  );

  return {
    pageMetaTags,
  };
};
