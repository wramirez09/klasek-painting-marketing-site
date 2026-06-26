import { c as create_ssr_component, v as validate_component, a as add_attribute, e as each, b as escape } from "../../../../../chunks/ssr.js";
import { M as Map } from "../../../../../chunks/Map.js";
import { s as serviceAreaRoutes } from "../../../../../chunks/routes.js";
import { B as Button } from "../../../../../chunks/button.js";
import { L as LocationIcon } from "../../../../../chunks/LocationIcon.js";
import { C as ClickToCall } from "../../../../../chunks/ClickToCall.js";
import { P as PhoneIcon } from "../../../../../chunks/PhoneIcon.js";
import { i as googleMapsHref } from "../../../../../chunks/siteData.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="p-y lg:px-12 xs:px-4 px-2 hero-gradient"><div class="container grid lg:grid-cols-2 lg:gap-12 gap-6"> <div class="flex flex-col justify-center lg:gap-6 gap-4 text-secondary-dark bg-white rounded-lg lg:p-12 xs:px-6 px-4 py-6"><h1 class="lg:text-5xl xs:text-4xl text-3xl lg:font-normal font-semibold" data-testid="page-heading" data-svelte-h="svelte-1c31c20">Service Areas</h1> <p class="leading-relaxed text-foreground" data-svelte-h="svelte-l1ehfa">Klasek Painting has over 30 years of experience delivering beautiful, long-lasting results
				to homeowners in Chicago. Our mission is to be the area&#39;s most trusted exterior repair and
				exterior painting contractor, so we are commited to providing first class service at a fair
				price.</p> <hr class="border-[2px] w-full border-primary-dark"> <div class="flex items-center gap-4">${validate_component(LocationIcon, "LocationIcon").$$render($$result, { class: "size-8 text-primary-dark" }, {}, {})} <a${add_attribute("href", googleMapsHref, 0)} target="_blank" class="underline underline-offset-2 lg:text-lg font-semibold" data-svelte-h="svelte-1fvez44">4415 S. Custer, Lyons, IL 60534</a></div> <div class="flex items-center gap-4">${validate_component(PhoneIcon, "PhoneIcon").$$render($$result, { class: "size-8 text-primary-dark" }, {}, {})} ${validate_component(ClickToCall, "ClickToCall").$$render(
    $$result,
    {
      class: "text-secondary-dark",
      variant: "outline"
    },
    {},
    {}
  )}</div></div>  ${validate_component(Map, "Map").$$render($$result, { class: "lg:size-full w-full h-[250px]" }, {}, {})}  <ul class="lg:col-span-2 grid lg:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-2 mx-auto lg:gap-x-16">${each(Object.values(serviceAreaRoutes), ({ text, href }) => {
    return `<li class="disc lg:[--top:12px] [--top:10px] lg:text-lg">${validate_component(Button, "Button").$$render($$result, { href, variant: "link" }, {}, {
      default: () => {
        return `${escape(text)}`;
      }
    })} </li>`;
  })}</ul></div></section>`;
});
export {
  Page as default
};
