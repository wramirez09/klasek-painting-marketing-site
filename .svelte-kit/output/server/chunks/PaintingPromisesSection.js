import { c as create_ssr_component, a as add_attribute, v as validate_component, e as each, b as escape } from "./ssr.js";
import { R as RibbonWrapper } from "./RibbonWrapper.js";
import { c as cn } from "./utils2.js";
const PaintingPromisesSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: classes = "" } = $$props;
  const steps = [
    "Accept All Major Credit Cards\nfor Your Convenience",
    "Free Color Consultation\nfor Exterior Painting Services",
    "Reputable References\nfrom Local Homeowners",
    "Free, Informative\nWritten Estimate Provided",
    "Prompt & Courteous\nService"
  ];
  if ($$props.class === void 0 && $$bindings.class && classes !== void 0) $$bindings.class(classes);
  return `<section${add_attribute("class", cn("bg-white p-y p-x", classes), 0)}><div class="container max-w-screen-lg flex flex-col items-center lg:gap-12 gap-8 text-center">${validate_component(RibbonWrapper, "RibbonWrapper").$$render($$result, {}, {}, {
    default: () => {
      return `<h2 class="lg:text-4xl xs:text-3xl text-2xl font-semibold text-secondary lg:px-4" data-svelte-h="svelte-spyplw">Our 5-Point Painting Service Promise</h2>`;
    }
  })} <ul class="w-full flex flex-wrap justify-around gap-8">${each(steps, (step, i) => {
    return `<li class="flex flex-col items-center gap-2"><div class="grid place-items-center lg:size-16 size-12 bg-primary"><p class="text-white font-bold lg:text-2xl text-xl">${escape(i + 1)}</p></div> <p class="font-semibold lg:text-lg whitespace-pre text-secondary">${escape(step)}</p> </li>`;
  })}</ul></div></section>`;
});
export {
  PaintingPromisesSection as P
};
