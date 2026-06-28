import type { PageLoad } from "./$types";
import { createCityMetaTags } from "$lib/common/seo/metaTagHelpers";

export const load: PageLoad = () => {
  const pageMetaTags = createCityMetaTags(
    "Exterior House Painters in Willowbrook, IL",
    "Klasek Painting offers expert house painting, brick restoration, and siding repair in Willowbrook, IL. With over 30 years of experience, we deliver beautiful, long-lasting finishes for your home.",
  );

  return {
    pageMetaTags,
  };
};
