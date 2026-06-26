import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { C as ClickToCall } from "./ClickToCall.js";
const CtaBannerSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="lg:py-8 py-6 p-x bg-secondary"><div class="container max-w-screen-sm grid place-items-center gap-4 text-white text-center font-bold"><h2 class="lg:text-xl xs:text-base text-sm -mb-1 !leading-tight font-normal" data-svelte-h="svelte-jwiqk7">Ready to help your property look its best?</h2> <span class="lg:text-5xl xs:text-5xl text-4xl text-primary" data-svelte-h="svelte-abl9jc">Call the best.</span> ${validate_component(ClickToCall, "ClickToCall").$$render($$result, { variant: "outline" }, {}, {})}</div></section>`;
});
export {
  CtaBannerSection as C
};
