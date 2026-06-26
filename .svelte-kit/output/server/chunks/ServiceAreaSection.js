import { c as create_ssr_component, a as add_attribute, v as validate_component, e as each, b as escape } from "./ssr.js";
import { B as Button } from "./button.js";
import { H as HeadingAccent } from "./HeadingAccent.js";
import { r as routes, s as serviceAreaRoutes } from "./routes.js";
import { c as cn } from "./utils2.js";
import "./index3.js";
import { R as RibbonWrapper } from "./RibbonWrapper.js";
import { C as ClickToCall } from "./ClickToCall.js";
import { M as Map } from "./Map.js";
import { L as LocationIcon } from "./LocationIcon.js";
const WhyChooseUsSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: classes = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && classes !== void 0) $$bindings.class(classes);
  return `<section${add_attribute("class", cn("p-y p-x bg-white", classes), 0)}><div class="container grid lg:grid-cols-[6fr_5fr] grid-cols-1 lg:grid-rows-1 xs:grid-rows-[auto_325px] grid-rows-[auto_250px]"> <div class="w-full lg:h-full xs:h-[325px] h-[250px] bord border-primary-dark lg:max-w-none max-w-[500px] mx-auto rounded-lg overflow-clip bg-gray-100 lg:order-first order-last">${``}</div>  <div class="flex flex-col lg:gap-6 gap-4 lg:py-6 pb-6 [&amp;>*]:sm:ml-12">${validate_component(HeadingAccent, "HeadingAccent").$$render(
    $$result,
    {
      class: "lg:!w-[calc(100%-25px)] sm:!ml-0 sm:!pl-12 w-fit"
    },
    {},
    {
      default: () => {
        return `<h2 class="lg:text-4xl xs:text-3xl text-2xl" data-svelte-h="svelte-f8m9fq">Why Choose Us?</h2>`;
      }
    }
  )} <p class="leading-relaxed [&amp;>a]:font-semibold [&amp;>a]:underline [&amp;>a]:underline-offset-2 [&amp;>a]:text-secondary-dark [&amp;>a]:whitespace-nowrap" data-svelte-h="svelte-s209cx">At Klasek Painting, we are passionate about helping properties in our community look their
				best. From <a${add_attribute("href", routes["exterior-home-painting"].href, 0)}>exterior painting</a> to
				<a${add_attribute("href", routes["stucco-painting-repair"].href, 0)}>stucco services</a>
				and <a${add_attribute("href", routes["cedar-repair"].href, 0)}>cedar siding repair</a>, our team of experts are
				here to help. We work exclusively with the best materials on the market and pair them with
				time-tested methods to deliver results that last.</p> <p class="leading-relaxed" data-svelte-h="svelte-tj03l1">Our trusted contractors start every customized service with a free, written estimate,
				walking you through all of your options, so you can make the best decision for your
				property. We understand the value of your home, which is why we treat you and your space
				with the utmost care and respect.</p> ${validate_component(Button, "Button").$$render(
    $$result,
    {
      variant: "outline",
      class: "w-fit text-secondary-dark",
      href: routes["about"].href
    },
    {},
    {
      default: () => {
        return `About Us`;
      }
    }
  )}</div></div></section>`;
});
const AreaCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="grid grid-cols-1 lg:grid-rows-[minmax(300px)_auto] grid-rows-[250px_auto] w-full max-w-screen-sm mx-auto"><div>${validate_component(Map, "Map").$$render($$result, { lazy: true }, {}, {})}</div> <div class="lg:py-4 py-2 flex flex-col sm:gap-4 gap-2"><span class="font-semibold lg:text-2xl text-xl flex gap-2 items-center">${validate_component(LocationIcon, "LocationIcon").$$render($$result, { class: "size-6 inline text-primary-dark" }, {}, {})}
			Lyons, Illinois</span> <hr class="border-secondary border-[1px] w-full"> <div class="flex sm:flex-row flex-col lg:items-center justify-between lg:gap-12 gap-4"><p class="lg:text-lg" data-svelte-h="svelte-1zf1qs">4415 S. Custer, <br>Lyons, IL 60534</p> ${validate_component(ClickToCall, "ClickToCall").$$render(
    $$result,
    {
      variant: "outline",
      class: "text-secondary-dark lg:w-full sm:w-fit"
    },
    {},
    {}
  )}</div></div></div>`;
});
const ServiceAreaSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: classes = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && classes !== void 0) $$bindings.class(classes);
  return `<section${add_attribute("class", cn("bg-white p-y p-x", classes), 0)}><div class="container flex flex-col items-center lg:gap-8 gap-4">${validate_component(RibbonWrapper, "RibbonWrapper").$$render($$result, {}, {}, {
    default: () => {
      return `<h2 class="text-center font-bold lg:px-6 px-4 lg:text-3xl text-2xl" data-svelte-h="svelte-10fjyiu">Areas We Serve</h2>`;
    }
  })} <hr class="border-secondary border-[1px] w-full">  <div class="grid lg:grid-cols-[2fr_3fr] lg:gap-16 gap-4 w-full">${validate_component(AreaCard, "AreaCard").$$render($$result, {}, {}, {})} <ul class="grid xs:grid-cols-2 lg:gap-0 gap-y-4">${each(Object.values(serviceAreaRoutes), ({ text, href }) => {
    return `<li class="disc [--top:12px] lg:text-xl sm:text-lg underline size-fit"><a${add_attribute("href", href, 0)}>${escape(text)}</a> </li>`;
  })}</ul></div></div></section>`;
});
export {
  ServiceAreaSection as S,
  WhyChooseUsSection as W
};
