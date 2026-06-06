import type { PageLoad } from "./$types";
import { createTitleDescription } from "$lib/common/seo/metaTagHelpers";

export const load: PageLoad = () => {
  const pageMetaTags = createTitleDescription(
    "Hardie Board Siding Painting",
    "Hardie board siding primed, prepped & painted by Klasek's own crew — no subcontractors. Repair before painting, trim & soffit across Cook County. 30+ years. Free written estimates.",
  );

  return {
    pageMetaTags,
  };
};
