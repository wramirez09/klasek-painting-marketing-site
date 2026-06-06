import { c as create_ssr_component, e as each, a as add_attribute, b as escape } from "./ssr.js";
const GalleryLinkBlock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `<div class="flex flex-col !gap-2"><h3 data-svelte-h="svelte-12ooy9w">See More Photos of Our Work!</h3> <ul class="!gap-1">${each(data, ({ text, href }) => {
    return `<li><a${add_attribute("href", href, 0)}>${escape(text)} Gallery</a></li>`;
  })}</ul></div>`;
});
export {
  GalleryLinkBlock as G
};
