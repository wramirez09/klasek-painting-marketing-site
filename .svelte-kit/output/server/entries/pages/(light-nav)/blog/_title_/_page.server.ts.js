import { c as createTitleDescription } from "../../../../../chunks/metaTagHelpers.js";
import { p as publicLogoUrl } from "../../../../../chunks/siteData.js";
import { b as blogData } from "../../../../../chunks/data.js";
import { error } from "@sveltejs/kit";
const load = ({ url }) => {
  const postData = blogData[url.pathname].data;
  if (!postData) {
    throw error(404, "Blog post not found");
  }
  const pageMetaTags = createTitleDescription(postData.title, postData.meta);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url.toString()
    },
    headline: postData.title,
    url: url.toString(),
    description: postData.meta,
    publisher: {
      "@type": "Organization",
      name: "Klasek Painting",
      logo: {
        "@type": "ImageObject",
        url: publicLogoUrl
      }
    }
  };
  return {
    postData,
    pageMetaTags,
    articleSchema
  };
};
export {
  load
};
