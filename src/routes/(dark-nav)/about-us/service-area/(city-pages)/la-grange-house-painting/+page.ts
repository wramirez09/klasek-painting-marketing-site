import type { PageLoad } from "./$types";
import { createCityMetaTags } from "$lib/common/seo/metaTagHelpers";

export const load: PageLoad = () => {
  const pageMetaTags = createCityMetaTags(
    "Exterior House Painters in La Grange, IL",
    "Klasek Painting offers expert house painting, brick restoration, and siding repair in La Grange, IL. With 30+ years of experience, we ensure stunning and durable results.",
  );

  return {
    pageMetaTags,
  };
};
