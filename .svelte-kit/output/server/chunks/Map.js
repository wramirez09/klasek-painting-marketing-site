import { c as create_ssr_component, a as add_attribute } from "./ssr.js";
import "./index3.js";
import { c as cn } from "./utils2.js";
const Map = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: classes = "" } = $$props;
  let { lazy = false } = $$props;
  let isInView = false;
  if ($$props.class === void 0 && $$bindings.class && classes !== void 0) $$bindings.class(classes);
  if ($$props.lazy === void 0 && $$bindings.lazy && lazy !== void 0) $$bindings.lazy(lazy);
  return `<div${add_attribute("class", cn("size-full overflow-hidden relative rounded-lg border", classes), 0)}>${!lazy || isInView ? `<iframe src="https://maps.google.com/maps?cid=14393281302172224254&amp;output=embed" loading="lazy" width="600px" height="450px" referrerpolicy="no-referrer-when-downgrade" title="Google Map" allowfullscreen></iframe> <p class="text-xs absolute bottom-0 right-0 p-1 backdrop-blur-lg text-gray-600 rounded-tl-sm" data-svelte-h="svelte-117mzab">Map Data ©2024 Google</p>` : ``}</div>`;
});
export {
  Map as M
};
