import { c as create_ssr_component, v as validate_component, e as each, a as add_attribute, b as escape } from "../../../../../chunks/ssr.js";
import { R as RootServiceHero, O as OtherServicesSection } from "../../../../../chunks/OtherServicesSection.js";
import { R as RootServiceSection } from "../../../../../chunks/RootServiceSection.js";
import { b as serviceRoutes } from "../../../../../chunks/routes.js";
import { W as WhyChooseUsSection, S as ServiceAreaSection } from "../../../../../chunks/ServiceAreaSection.js";
import { P as PaintingPromisesSection } from "../../../../../chunks/PaintingPromisesSection.js";
import { C as ColumnTemplateSection } from "../../../../../chunks/ColumnTemplateSection.js";
import { V as ViewOurWorkSection } from "../../../../../chunks/ViewOurWorkSection.js";
import { C as CtaBannerSection } from "../../../../../chunks/CtaBannerSection.js";
const src = "/_app/immutable/assets/brick-painting-staining-service.CXVHz8Wj.webp";
const repair = "/_app/immutable/assets/exterior-brick-house-repair.DwsDgVnR.webp";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const paintingStainingService = [serviceRoutes["brick-painting"], serviceRoutes["brick-staining"]];
  return `${validate_component(RootServiceHero, "RootServiceHero").$$render(
    $$result,
    {
      data: {
        h1: "Trusted Brick Painting & Repair Services for Chicago Homeowners",
        listItems: [
          "Detailed Prep Work",
          "Experienced Painters",
          "Curb Appeal Boost",
          "Long-Lasting Results"
        ],
        image: {
          src,
          alt: "New exterior brick painting project house with fresh coat of paint by Klasek Painting"
        }
      }
    },
    {},
    {}
  )} ${validate_component(ColumnTemplateSection, "ColumnTemplateSection").$$render($$result, { class: "bg-off-white" }, {}, {
    "right-column": () => {
      return `<div slot="right-column"><ul>${each(paintingStainingService, ({ text, href }) => {
        return `<li><a${add_attribute("href", href, 0)}>${escape(text)}</a> </li>`;
      })}</ul></div>`;
    },
    "left-column": () => {
      return `<div slot="left-column" data-svelte-h="svelte-1b4j9gp"><h2>Brick Painting &amp; Staining Services</h2> <p>At Klasek Painting, we firmly believe that our brick painting &amp; staining services are second
			to none in Illinois! We provide a wide selection of painting services and are dedicated to
			being #1.</p></div>`;
    }
  })} ${validate_component(RootServiceSection, "RootServiceSection").$$render(
    $$result,
    {
      class: "bg-white",
      reverse: true,
      data: {
        heading: "Brick Repair Services",
        description: "Choosing Klasek Painting for your brick repair services ensures that you receive top-quality workmanship and attention to detail. Our experienced team uses the best materials and techniques to restore your brick masonry to its original beauty and strength. We provide reliable, affordable services with a commitment to customer satisfaction and long-lasting results.",
        href: serviceRoutes["brick-repair"].href,
        image: repair
      }
    },
    {},
    {}
  )} ${validate_component(OtherServicesSection, "OtherServicesSection").$$render($$result, { class: "bg-off-white", showBrick: false }, {}, {})} ${validate_component(CtaBannerSection, "CtaBannerSection").$$render($$result, {}, {}, {})} ${validate_component(PaintingPromisesSection, "PaintingPromisesSection").$$render($$result, {}, {}, {})} ${validate_component(ViewOurWorkSection, "ViewOurWorkSection").$$render($$result, { class: "bg-off-white" }, {}, {})} ${validate_component(WhyChooseUsSection, "WhyChooseUsSection").$$render($$result, {}, {}, {})} ${validate_component(ServiceAreaSection, "ServiceAreaSection").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
