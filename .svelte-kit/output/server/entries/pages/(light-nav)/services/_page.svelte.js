import { c as create_ssr_component, v as validate_component, a as add_attribute, b as escape, e as each } from "../../../../chunks/ssr.js";
import { R as RootServiceHero, O as OtherServicesSection } from "../../../../chunks/OtherServicesSection.js";
import { B as Button } from "../../../../chunks/button.js";
import { r as routes, b as serviceRoutes } from "../../../../chunks/routes.js";
import { I as Icon } from "../../../../chunks/Icon.js";
import { s as stucco, d as design } from "../../../../chunks/klasek-painting-victorian-homes-1.js";
import "../../../../chunks/index3.js";
import { W as WhyChooseUsSection, S as ServiceAreaSection } from "../../../../chunks/ServiceAreaSection.js";
import { T as TestimonialsSection } from "../../../../chunks/TestimonialsSection.js";
import { B as BasicTemplateSection } from "../../../../chunks/BasicTemplateSection.js";
import { R as RibbonWrapper } from "../../../../chunks/RibbonWrapper.js";
import { P as PaintingPromisesSection } from "../../../../chunks/PaintingPromisesSection.js";
const Square_arrow_out_up_right = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"
      }
    ],
    ["path", { "d": "m21 3-9 9" }],
    ["path", { "d": "M15 3h6v6" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "square-arrow-out-up-right" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const css = {
  code: "a.svelte-qui7i5::before{background-image:var(--bg)}",
  map: '{"version":3,"file":"ServiceGridCell.svelte","sources":["ServiceGridCell.svelte"],"sourcesContent":["<script lang=\\"ts\\" context=\\"module\\"><\/script>\\n\\n<script lang=\\"ts\\">import { SquareArrowOutUpRight } from \\"lucide-svelte\\";\\nimport { fade } from \\"svelte/transition\\";\\nexport let data;\\nexport let isInView;\\nexport let index;\\n<\/script>\\n\\n<li class=\\"text-white relative group overflow-clip lg:min-h-none min-h-[200px]\\">\\n\\t{#if isInView}\\n\\t\\t<a\\n\\t\\t\\ttransition:fade={{ duration: 150, delay: index * 100 }}\\n\\t\\t\\tstyle={`--bg: url(${data.bg})`}\\n\\t\\t\\thref={data.link.href}\\n\\t\\t\\tclass=\\"group block size-full group-hover:before:scale-105 group-hover:before:bg-primary-dark/70 before:duration-300 before:ease-out before:bg-cover before:bg-center before:bg-secondary/70 before:bg-blend-multiply before:size-full before:absolute before:content-[\'\']\\"\\n\\t\\t>\\n\\t\\t\\t<span\\n\\t\\t\\t\\tclass=\\"group-focus:ring-2 group-focus:ring-ring ring-offset-2 font-semibold lg:text-base text-lg absolute xl:bottom-6 xl:left-6 lg:bottom-3 lg:left-3 left-1/2 lg:translate-x-0 lg:translate-y-0 -translate-x-1/2 bottom-1/2 translate-y-1/2 flex items-center gap-2 group-hover:underline backdrop-blur-sm p-1 whitespace-nowrap\\"\\n\\t\\t\\t\\t>{data.link.text} <SquareArrowOutUpRight class=\\"size-4\\" /></span\\n\\t\\t\\t>\\n\\t\\t</a>\\n\\t{/if}\\n</li>\\n\\n<style>\\n\\ta::before {\\n\\t\\tbackground-image: var(--bg);\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA0BC,eAAC,QAAS,CACT,gBAAgB,CAAE,IAAI,IAAI,CAC3B"}'
};
const ServiceGridCell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { isInView } = $$props;
  let { index } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  if ($$props.isInView === void 0 && $$bindings.isInView && isInView !== void 0) $$bindings.isInView(isInView);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0) $$bindings.index(index);
  $$result.css.add(css);
  return `<li class="text-white relative group overflow-clip lg:min-h-none min-h-[200px]">${isInView ? `<a${add_attribute("style", `--bg: url(${data.bg})`, 0)}${add_attribute("href", data.link.href, 0)} class="group block size-full group-hover:before:scale-105 group-hover:before:bg-primary-dark/70 before:duration-300 before:ease-out before:bg-cover before:bg-center before:bg-secondary/70 before:bg-blend-multiply before:size-full before:absolute before:content-[''] svelte-qui7i5"><span class="group-focus:ring-2 group-focus:ring-ring ring-offset-2 font-semibold lg:text-base text-lg absolute xl:bottom-6 xl:left-6 lg:bottom-3 lg:left-3 left-1/2 lg:translate-x-0 lg:translate-y-0 -translate-x-1/2 bottom-1/2 translate-y-1/2 flex items-center gap-2 group-hover:underline backdrop-blur-sm p-1 whitespace-nowrap">${escape(data.link.text)} ${validate_component(Square_arrow_out_up_right, "SquareArrowOutUpRight").$$render($$result, { class: "size-4" }, {}, {})}</span></a>` : ``} </li>`;
});
const siding = "/_app/immutable/assets/exterior-hardie-board-12.DA9E35Ia.webp";
const brick = "/_app/immutable/assets/brick-painting-7.CiRdorxZ.webp";
const ServiceGridSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const serviceData = [
    {
      link: serviceRoutes["siding-painting-repair"],
      bg: siding
    },
    {
      link: serviceRoutes["brick-painting-repair"],
      bg: brick
    },
    {
      link: serviceRoutes["stucco-painting-repair"],
      bg: stucco
    },
    {
      link: serviceRoutes["design-consultation"],
      bg: design
    }
  ];
  let isInView = false;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<section class="lg:bg-gradient-to-r bg-gradient-to-b lg:to-[60%] to-[40%] from-secondary-dark to-secondary lg:py-24 lg:p-x relative"><div class="container lg:grid lg:grid-cols-2 flex flex-col"> <div class="flex flex-col justify-center lg:gap-8 gap-4 text-white lg:p-0 py-8 p-x"><h2 class="font-bold xl:text-6xl lg:text-5xl xs:text-4xl text-3xl" data-svelte-h="svelte-1hk9d55">House Painting Services</h2> <p class="lg:text-lg lg:w-3/4" data-svelte-h="svelte-1v89et3">Klasek Painting offers reliable, professional painting and repair services for your home&#39;s
				exterior.</p> ${validate_component(Button, "Button").$$render(
      $$result,
      {
        class: "w-fit",
        href: routes["contact"].href
      },
      {},
      {
        default: () => {
          return `Get a Free Estimate Today!`;
        }
      }
    )}</div>  <ul class="lg:absolute size-full lg:w-1/2 top-0 left-1/2 grid sm:grid-cols-2 sm:grid-rows-2">${each(serviceData, (data, index) => {
      return `${validate_component(ServiceGridCell, "ServiceGridCell").$$render(
        $$result,
        { data, index, isInView },
        {
          isInView: ($$value) => {
            isInView = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })}</ul></div></section>`;
  } while (!$$settled);
  return $$rendered;
});
const src = "/_app/immutable/assets/expert-exterior-home-painting-klasek-painting.DCHEFxVo.webp";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(RootServiceHero, "RootServiceHero").$$render(
    $$result,
    {
      data: {
        h1: "Expert Painting & Repair Services",
        listItems: [
          "Free Design & Consultation",
          "High-Quality Materials",
          "Experience Painters",
          "Curb Appeal Boost"
        ],
        image: {
          src,
          alt: "House with new exterior stucco repair and paint service by Klasek Painting"
        }
      }
    },
    {},
    {}
  )} ${validate_component(ServiceGridSection, "ServiceGridSection").$$render($$result, {}, {}, {})} ${validate_component(OtherServicesSection, "OtherServicesSection").$$render($$result, {}, {}, {})} ${validate_component(WhyChooseUsSection, "WhyChooseUsSection").$$render($$result, { class: "bg-off-white" }, {}, {})} ${validate_component(BasicTemplateSection, "BasicTemplateSection").$$render($$result, { class: "[&>div]:max-w-screen-xl" }, {}, {
    default: () => {
      return `${validate_component(RibbonWrapper, "RibbonWrapper").$$render($$result, { class: "mx-auto" }, {}, {
        default: () => {
          return `<h2 class="lg:px-7" data-svelte-h="svelte-19phtm">Exterior Painting Solutions in Cook County &amp; Surrouding Areas</h2>`;
        }
      })} <p data-svelte-h="svelte-1ix6uc3">When you hire Klasek Painting, you are hiring a local company that genuinely cares. We want to
		work with you to find the perfect solution for your specific goals, property requirements, and
		budget. Our insured and fully certified team believes in exceeding industry standards at every
		turn—going above and beyond to deliver timely, cost-effective, and pristine results.</p> <h3 data-svelte-h="svelte-1uq0kxr">Precise, Beautiful &amp; Long-Lasting Results</h3> <p data-svelte-h="svelte-l34n8c">With over 30 years of experience, we have helped thousands of properties in Cook County. <a${add_attribute("href", routes["gallery"].href, 0)}>View our gallery</a> to see some examples of our work.</p>`;
    }
  })} ${validate_component(PaintingPromisesSection, "PaintingPromisesSection").$$render($$result, { class: "pb-0" }, {}, {})} ${validate_component(TestimonialsSection, "TestimonialsSection").$$render($$result, {}, {}, {})} ${validate_component(ServiceAreaSection, "ServiceAreaSection").$$render($$result, { class: "pt-0" }, {}, {})}`;
});
export {
  Page as default
};
