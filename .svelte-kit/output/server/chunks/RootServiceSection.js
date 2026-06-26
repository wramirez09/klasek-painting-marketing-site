import { c as create_ssr_component, a as add_attribute, b as escape, e as each, v as validate_component } from "./ssr.js";
import { B as Button } from "./button.js";
import { c as cn } from "./utils2.js";
import "./index3.js";
const RootServiceSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { reverse = false } = $$props;
  let { class: classes = "" } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  if ($$props.reverse === void 0 && $$bindings.reverse && reverse !== void 0) $$bindings.reverse(reverse);
  if ($$props.class === void 0 && $$bindings.class && classes !== void 0) $$bindings.class(classes);
  return `<section${add_attribute("class", cn("p-y p-x bg-off-white", classes), 0)}><div${add_attribute(
    "class",
    cn("grid lg:grid-rows-1 grid-cols-1 lg:gap-12 gap-6 container lg:max-w-screen-xl max-w-screen-md xs:grid-rows-[225px_auto] grid-rows-[175px_auto]", reverse ? "lg:grid-cols-[3fr_2fr]" : "lg:grid-cols-[2fr_3fr]"),
    0
  )}> <div class="${escape(reverse ? "lg:col-start-2" : "", true) + " flex flex-col lg:gap-4 gap-2 xl:py-8 lg:py-6"}"><h2 class="font-bold xl:text-4xl xs:text-3xl text-2xl">${escape(data.heading)}</h2> <p class="leading-loose">${escape(data.description)}</p> ${data.listItems ? `<ul class="flex flex-col gap-2 font-semibold">${each(data.listItems, ({ text, href }) => {
    return `<li class="disc [--top:10px] underline"><a class="hover:text-primary-dark"${add_attribute("href", href, 0)}>${escape(text)}</a> </li>`;
  })}</ul>` : ``} ${data.href ? `${validate_component(Button, "Button").$$render(
    $$result,
    {
      class: "mt-2 lg:w-fit text-secondary-dark",
      href: data.href,
      variant: "outline"
    },
    {},
    {
      default: () => {
        return `View Service`;
      }
    }
  )}` : ``} ${slots.default ? slots.default({}) : ``}</div>  <div${add_attribute(
    "class",
    cn("relative size-full lg:order-none order-first", reverse ? "lg:col-start-1 row-start-1" : "lg:col-start-2 row-start-1"),
    0
  )}>${``}</div></div></section>`;
});
export {
  RootServiceSection as R
};
