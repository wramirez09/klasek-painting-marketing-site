import { c as create_ssr_component, v as validate_component, b as escape, j as compute_slots } from "./ssr.js";
import { B as Button } from "./button.js";
import { e as destinationPhone } from "./siteData.js";
const ClickToCall = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { variant = "default" } = $$props;
  let { class: classes = "" } = $$props;
  const href = `tel:${destinationPhone}`;
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0) $$bindings.variant(variant);
  if ($$props.class === void 0 && $$bindings.class && classes !== void 0) $$bindings.class(classes);
  return `${validate_component(Button, "Button").$$render($$result, { class: classes, href, variant }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}  ${!$$slots.default ? `${escape(destinationPhone)}` : ``}`;
    }
  })}`;
});
export {
  ClickToCall as C
};
