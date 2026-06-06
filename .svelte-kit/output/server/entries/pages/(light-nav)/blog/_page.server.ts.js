import { b as blogData } from "../../../../chunks/data.js";
import { error } from "@sveltejs/kit";
import kebabCase from "lodash/kebabCase.js";
import { c as createTitleDescription } from "../../../../chunks/metaTagHelpers.js";
const blogsPerPage = 6;
const blogTocData = [
  "/blog/can-you-paint-hardie-board",
  "/blog/painting-maintenance-how-to-keep-your-home-looking-fresh",
  "/blog/diy-vs-professional-painting-when-to-hire-a-painter",
  "/blog/what-exterior-paint-colors-look-the-best"
];
const load = ({ url }) => {
  const blogPages = [];
  for (let i = 0; i < blogTocData.length; i += blogsPerPage) {
    blogPages.push(blogTocData.slice(i, i + blogsPerPage));
  }
  const pageNumber = parseInt(url.searchParams.get("page") ?? "1");
  if (pageNumber < 1 || pageNumber > blogPages.length) {
    error(404, "Page not found");
  }
  const ourBlogData = blogPages[pageNumber - 1].map(
    (blog) => blogData[blog].data
  );
  const blogPreviewData = ourBlogData.map((blog) => ({
    title: blog.title,
    datePublished: blog.datePublished,
    meta: blog.meta,
    image: blog.image,
    href: `/blog/${kebabCase(blog.title)}`
  }));
  const notFirstPage = pageNumber > 1;
  const pageMetaTags = createTitleDescription(
    `Our Blog${notFirstPage ? ` | Page ${pageNumber}` : ""}`,
    `Stay up to date with the latest projects completed by the Cook County Painters at Klasek Painting when you follow our blog${notFirstPage ? `, page ${pageNumber}.` : "."}`
  );
  return {
    blogPreviewData,
    maxPage: blogPages.length,
    pageMetaTags
  };
};
export {
  load
};
