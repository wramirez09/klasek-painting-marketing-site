import { c as create_ssr_component, b as escape } from "./ssr.js";
const ColorHero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { h1 } = $$props;
  if ($$props.h1 === void 0 && $$bindings.h1 && h1 !== void 0) $$bindings.h1(h1);
  return `<section class="p-y p-x hero-gradient"><div class="container max-w-screen-md flex flex-col items-center justify-center lg:gap-6 gap-4 text-center text-white"><h1 class="lg:text-5xl xs:text-4xl text-3xl font-bold" data-testid="page-heading">${escape(h1)}</h1> ${slots.default ? slots.default({}) : ``}</div></section>`;
});
export {
  ColorHero as C
};
