import type { LayoutServerLoad } from "./$types";
import type { MetaTagsProps } from "svelte-meta-tags";
import { ogImageUrl, siteName } from "$lib/common/seo/siteData";

export const load = ((ctx) => {
  // Canonical/og:url are built from the fixed production origin (siteName),
  // NOT ctx.url.origin — otherwise preview (*.pages.dev) or apex/non-www hosts
  // would self-canonicalize and split ranking signals.
  const canonicalUrl = new URL(ctx.url.pathname, siteName).href;

  // Base meta tags for all pages
  const baseMetaTags = Object.freeze<MetaTagsProps>({
    title: "Klasek Painting: Exterior Painting & Repair, Chicago Suburbs",
    titleTemplate: "%s",
    description:
      "Klasek Painting: Expert exterior house painting and repair services in Chicago and Cook County, IL with over 30 years of experience. Get a free estimate for siding, brick, stucco, and historic home painting. 100% satisfaction guaranteed!",
    canonical: canonicalUrl,
    robots: "index,follow",
    openGraph: {
      type: "website",
      url: canonicalUrl,
      locale: "en_US",
      title: "Cook County Painters",
      description:
        "Klasek Painting is a team of licensed and fully certified painters offering homes in Cook County top-quality painting solutions. Call for a free estimate.",
      siteName: "Klasek Painting",
      images: [
        {
          url: ogImageUrl,
          alt: "Klasek Painting — premium exterior house painting & design services",
          width: 1200,
          height: 630,
          secureUrl: ogImageUrl,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      cardType: "summary_large_image",
      title: "Klasek Painting",
      description:
        "Expert exterior house painting and repair across Chicago’s western Cook County suburbs for 30+ years. Free estimates.",
      image: ogImageUrl,
      imageAlt:
        "Klasek Painting — premium exterior house painting & design services",
    },
  });

  // No page-specific meta tags in layout
  const pageMetaTags = {};

  return {
    url: ctx.url.href,
    baseMetaTags,
    pageMetaTags,
  };
}) satisfies LayoutServerLoad;
