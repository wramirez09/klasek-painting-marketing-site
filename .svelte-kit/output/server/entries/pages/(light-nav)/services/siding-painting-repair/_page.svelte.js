import { c as create_ssr_component, v as validate_component, e as each, a as add_attribute, b as escape } from "../../../../../chunks/ssr.js";
import { R as RootServiceHero, O as OtherServicesSection } from "../../../../../chunks/OtherServicesSection.js";
import { b as serviceRoutes } from "../../../../../chunks/routes.js";
import { W as WhyChooseUsSection, S as ServiceAreaSection } from "../../../../../chunks/ServiceAreaSection.js";
import { P as PaintingPromisesSection } from "../../../../../chunks/PaintingPromisesSection.js";
import { C as ColumnTemplateSection } from "../../../../../chunks/ColumnTemplateSection.js";
import { V as ViewOurWorkSection } from "../../../../../chunks/ViewOurWorkSection.js";
import { C as CtaBannerSection } from "../../../../../chunks/CtaBannerSection.js";
const src = "/_app/immutable/assets/siding-painting-repair-services.C5psbMAx.webp";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const paintingServices = [
    {
      text: "Hardie Board Painting",
      href: serviceRoutes["hardie-painting"].href
    },
    {
      text: "Aluminum Painting",
      href: serviceRoutes["aluminum-painting"].href
    },
    {
      text: "Cedar Painting",
      href: serviceRoutes["cedar-painting"].href
    },
    {
      text: "Vinyl Painting",
      href: serviceRoutes["vinyl-painting"].href
    }
  ];
  const repairServices = [
    {
      text: "Hardie Board Installation",
      href: serviceRoutes["hardie-installation"].href
    },
    {
      text: "Hardie Board Repair",
      href: serviceRoutes["hardie-repair"].href
    },
    {
      text: "Aluminum Repair",
      href: serviceRoutes["aluminum-repair"].href
    },
    {
      text: "Cedar Repair",
      href: serviceRoutes["cedar-repair"].href
    },
    {
      text: "Vinyl Repair",
      href: serviceRoutes["vinyl-repair"].href
    }
  ];
  return `${validate_component(RootServiceHero, "RootServiceHero").$$render(
    $$result,
    {
      data: {
        h1: "Quality Siding Painting & Repair Services for Chicago Homeowners",
        listItems: [
          "100% Satisfaction Guaranteed",
          "Over 30 Years of Experience",
          "Meticulous Surface Preparation",
          "Quality Materials & Workmanship"
        ],
        image: {
          src,
          alt: "Exterior siding and painting repair project in progress, with ladders leaning against a freshly painted blue house"
        }
      }
    },
    {},
    {}
  )} ${validate_component(ColumnTemplateSection, "ColumnTemplateSection").$$render($$result, { class: "bg-off-white" }, {}, {
    "right-column": () => {
      return `<div slot="right-column"><ul>${each(paintingServices, ({ text, href }) => {
        return `<li><a${add_attribute("href", href, 0)}>${escape(text)}</a> </li>`;
      })}</ul></div>`;
    },
    "left-column": () => {
      return `<div slot="left-column" data-svelte-h="svelte-1pudky9"><h2>Siding Painting Services</h2> <p>Klasek Painting specializes in siding painting services and provides exceptional customer
			service when painting your house. Our team does everything we can to make your dreams come
			true. The different types of sidings we service include:</p></div>`;
    }
  })} ${validate_component(ColumnTemplateSection, "ColumnTemplateSection").$$render($$result, {}, {}, {
    "right-column": () => {
      return `<div slot="right-column"><ul>${each(repairServices, ({ text, href }) => {
        return `<li><a${add_attribute("href", href, 0)}>${escape(text)}</a> </li>`;
      })}</ul></div>`;
    },
    "left-column": () => {
      return `<div slot="left-column" data-svelte-h="svelte-og3u1"><h2>Siding Repair Services</h2> <p>In additon to providing top-of-the line painting services, our technicians are specially
			trained to repair any damage to your house&#39;s siding. View our siding repair services below:</p></div>`;
    }
  })} ${validate_component(OtherServicesSection, "OtherServicesSection").$$render(
    $$result,
    {
      class: "bg-off-white",
      showSidingPaintingRepair: false
    },
    {},
    {}
  )} ${validate_component(CtaBannerSection, "CtaBannerSection").$$render($$result, {}, {}, {})} ${validate_component(ViewOurWorkSection, "ViewOurWorkSection").$$render($$result, {}, {}, {})} ${validate_component(PaintingPromisesSection, "PaintingPromisesSection").$$render($$result, { class: "bg-off-white" }, {}, {})} ${validate_component(WhyChooseUsSection, "WhyChooseUsSection").$$render($$result, {}, {}, {})} ${validate_component(ServiceAreaSection, "ServiceAreaSection").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
