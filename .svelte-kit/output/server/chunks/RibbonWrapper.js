import { c as create_ssr_component, a as add_attribute } from "./ssr.js";
import { c as cn } from "./utils2.js";
const RibbonWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: classes = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && classes !== void 0) $$bindings.class(classes);
  return `<div${add_attribute(
    "class",
    cn(classes, `
    relative w-fit 
    before:absolute before:content-[''] before:h-full before:w-[15px] before:ribbon-left before:right-full before:top-0 before:bg-primary-dark before:[--r:.75rem] before:lg:block before:hidden
    after:absolute after:content-[''] after:h-full after:w-[15px] after:ribbon-right after:left-full after:top-0 after:bg-primary-dark after:[--r:.75rem] after:lg:block after:hidden
`),
    0
  )}>${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  RibbonWrapper as R
};
