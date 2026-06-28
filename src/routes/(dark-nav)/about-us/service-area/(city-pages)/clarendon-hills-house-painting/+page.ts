import type { PageLoad } from "./$types";
import { createCityMetaTags } from "$lib/common/seo/metaTagHelpers";

export const load: PageLoad = () => {
  const pageMetaTags = createCityMetaTags(
    "Exterior House Painters in Clarendon Hills, IL",
    "Klasek Painting offers top-quality house painting, brick restoration, and siding repair services in Clarendon Hills, IL. With 30+ years of experience, we guarantee beautiful results.",
  );

  return {
    pageMetaTags,
  };
};
