import { siteName } from "$lib/common/seo/siteData";
import { blogData } from "$lib/blogs/data";

// Build the URL list from the route tree so the sitemap can never drift from
// what actually ships. Vite resolves this glob at build time.
const pageModules = import.meta.glob("/src/routes/**/+page.svelte");

// One build timestamp shared across all entries for <lastmod>.
const lastmod = new Date().toISOString().split("T")[0];

const staticPaths = Object.keys(pageModules)
  .map((file) => file.replace("/src/routes", "").replace("/+page.svelte", ""))
  // strip route group segments e.g. /(light-nav)
  .map((path) => path.replace(/\/\([^/]+\)/g, ""))
  // the root route collapses to '' — normalize to '/'
  .map((path) => (path === "" ? "/" : path))
  // drop dynamic params and .well-known routes
  .filter((path) => !path.includes("[") && !path.includes(".well-known"));

// The /blog/[title] route is dynamic, so the glob can't enumerate posts.
// Pull real post URLs from the blog data (skipping the ":version" duplicate keys).
const blogPaths = Object.keys(blogData).filter((key) => !key.includes(":"));

const paths = Array.from(new Set([...staticPaths, ...blogPaths])).sort((a, b) =>
  a === "/" ? -1 : b === "/" ? 1 : a.localeCompare(b),
);

// GET /sitemap.xml
export const GET = () => {
  const urls = paths
    .map(
      (path) => `  <url>
    <loc>${siteName}${path === "/" ? "/" : path}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`,
    )
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
>
${urls}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
};
