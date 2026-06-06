import { c as create_ssr_component, g as subscribe, a as add_attribute, e as each, b as escape } from "./ssr.js";
import startCase from "lodash/startCase.js";
import { s as siteName } from "./siteData.js";
import { p as page } from "./stores.js";
import { c as cn } from "./utils2.js";
function serializeSchema(schema) {
  return `<script type="application/ld+json">${JSON.stringify(schema)}<\/script>`;
}
const Breadcrumb = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { class: classes = "" } = $$props;
  const pathname = $page.url.pathname;
  const pathArray = pathname.split("/").filter((path) => path !== "");
  const itemListElement = pathArray.map((path, index) => {
    const fullPath = pathArray.slice(0, index + 1).join("/");
    return {
      "@type": "ListItem",
      position: index + 1,
      name: startCase(path),
      item: `${siteName}/${fullPath}`
    };
  });
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement
  };
  const getRelativePath = (url) => {
    return url.replace(siteName, "");
  };
  if ($$props.class === void 0 && $$bindings.class && classes !== void 0) $$bindings.class(classes);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1jojfni_START --><!-- HTML_TAG_START -->${serializeSchema(breadcrumbSchema)}<!-- HTML_TAG_END --><!-- HEAD_svelte-1jojfni_END -->`, ""} <section class="bg-white p-x"><ol${add_attribute("class", cn("container flex flex-wrap items-center gap-2 lg:text-base text-xs lg:py-8 py-6", classes), 0)}>${each(breadcrumbSchema.itemListElement, (listItem, i) => {
    return `<li class="flex items-center gap-2"><a${add_attribute("href", getRelativePath(listItem.item), 0)} class="hover:underline underline-offset-2">${escape(listItem.name)}</a> <span class="select-none">${escape(i !== pathArray.length - 1 ? ">" : "")}</span> </li>`;
  })}</ol></section>`;
});
export {
  Breadcrumb as B
};
