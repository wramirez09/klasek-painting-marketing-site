import { p as publicLogoUrl } from "../../chunks/siteData.js";
const load = (ctx) => {
  const baseMetaTags = Object.freeze({
    title: "Klasek Painting: Trusted Exterior Painting & Repair in Chicago & Surrounding Suburbs",
    titleTemplate: "%s",
    description: "Klasek Painting: Expert exterior house painting and repair services in Chicago and Cook County, IL with over 30 years of experience. Get a free estimate for siding, brick, stucco, and historic home painting. 100% satisfaction guaranteed!",
    canonical: new URL(ctx.url.pathname, ctx.url.origin).href,
    robots: "index,follow",
    openGraph: {
      type: "website",
      url: new URL(ctx.url.pathname, ctx.url.origin).href,
      locale: "en_US",
      title: "Cook County Painters",
      description: "Klasek Painting is a team of licensed and fully certified painters offering homes in Cook County top-quality painting solutions. Call for a free estimate.",
      siteName: "Klasek Painting",
      images: [
        {
          url: publicLogoUrl,
          alt: "Klasek Painting",
          width: 682,
          height: 262,
          secureUrl: publicLogoUrl,
          type: "image/png"
        }
      ]
    }
  });
  const pageMetaTags = {};
  return {
    url: ctx.url.href,
    baseMetaTags,
    pageMetaTags
  };
};
export {
  load
};
