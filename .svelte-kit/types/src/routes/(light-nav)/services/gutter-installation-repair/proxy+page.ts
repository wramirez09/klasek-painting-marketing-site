// @ts-nocheck
import type { PageLoad } from "./$types";
import { createTitleDescription } from "$lib/common/seo/metaTagHelpers";

export const load = () => {
  const pageMetaTags = createTitleDescription(
    "Seamless Gutter Installation & Repair",
    "Seamless aluminum gutters cut on-site by Klasek’s own crew — no subcontractors. Installation, repair, cleaning & maintenance across Cook County. 30+ years. Free written estimates.",
  );

  return {
    pageMetaTags,
  };
};
;null as any as PageLoad;