import { c as create_ssr_component, v as validate_component, e as each, a as add_attribute, b as escape } from "../../../../chunks/ssr.js";
import { C as ContactForm } from "../../../../chunks/ContactForm.js";
import { M as Map } from "../../../../chunks/Map.js";
import { L as LocationIcon } from "../../../../chunks/LocationIcon.js";
import { C as ClickToCall } from "../../../../chunks/ClickToCall.js";
import { s as serviceAreaRoutes } from "../../../../chunks/routes.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="bg-off-white py-8 lg:px-12 xs:px-4 px-2"><div class="container grid lg:grid-cols-2 gap-12 w-full"><div class="flex flex-col lg:gap-3 gap-2 lg:p-6 lg:rounded-lg lg:shadow-subtle lg:border lg:bg-white"><h1 class="xl:text-5xl xs:text-4xl text-3xl w-full font-semibold text-secondary-dark" data-testid="page-heading" data-svelte-h="svelte-ehwika">Sign Up for a Free Estimate</h1> <p data-svelte-h="svelte-1rl7pej">If you&#39;re considering an upgrade to the exterior of your home, contact
        the experts at Klasek Painting.</p> <p data-svelte-h="svelte-7av52f">At no cost to you, we&#39;ll view your property, assess needs, provide
        design consultation, and submit a simple, written quote.</p> <p>You can count on us for quality service, honest expectation setting, and
        excellent communication throughout the entire project. Complete the
        form, or call us at ${validate_component(ClickToCall, "ClickToCall").$$render(
    $$result,
    {
      class: "text-secondary-dark hover:text-primary-dark !font-semibold",
      variant: "link"
    },
    {},
    {}
  )}!</p> <div class="bg-white lg:mt-0 mt-2 lg:p-0 p-2 pt-0 rounded-lg lg:shadow-none shadow-subtle">${validate_component(ContactForm, "ContactForm").$$render($$result, {}, {}, {})}</div></div> <div class="flex flex-col items-center lg:gap-8 gap-6"> <div class="grid grid-cols-1 grid-rows-[350px_auto] w-full">${validate_component(Map, "Map").$$render(
    $$result,
    {
      class: "rounded-t-sm rounded-b-none border-b-secondary-dark [&>*]:rounded-none"
    },
    {},
    {}
  )}  <div class="bg-secondary-dark py-4 lg:px-12 px-4 rounded-b-lg flex sm:flex-row flex-col items-center sm:justify-between sm:gap-0 gap-4"><div class="flex items-center gap-2">${validate_component(LocationIcon, "LocationIcon").$$render($$result, { class: "size-8 text-primary-dark" }, {}, {})} <p class="leading-tight text-white text-sm" data-svelte-h="svelte-1f7twt7">4415 S. Custer,<br>Lyons, IL 60534</p></div> ${validate_component(ClickToCall, "ClickToCall").$$render($$result, { variant: "outline" }, {}, {})}</div></div>  <ul class="grid grid-cols-2 lg:gap-x-12 gap-x-4 gap-y-2 w-fit font-semibold text-secondary-dark underline underline-offset-2 sm:text-lg xs:text-base text-sm">${each(Object.values(serviceAreaRoutes), ({ text, href }) => {
    return `<li class="disc sm:[--top:12px] [--top:10px]"><a${add_attribute("href", href, 0)}>${escape(text)}</a> </li>`;
  })}</ul></div></div></section>`;
});
export {
  Page as default
};
