import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/ssr.js";
import { R as RootServiceHero, O as OtherServicesSection } from "../../../../../chunks/OtherServicesSection.js";
import { R as RootServiceSection } from "../../../../../chunks/RootServiceSection.js";
import { b as serviceRoutes } from "../../../../../chunks/routes.js";
import { W as WhyChooseUsSection, S as ServiceAreaSection } from "../../../../../chunks/ServiceAreaSection.js";
import { P as PaintingPromisesSection } from "../../../../../chunks/PaintingPromisesSection.js";
const src = "/_app/immutable/assets/stucco-painting-repair-services.D5bzhR67.webp";
const painting = "/_app/immutable/assets/stucco-painting-service.BEgKulgW.webp";
const repair = "/_app/immutable/assets/stucco-repair-service.Dqv7zbqz.webp";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(RootServiceHero, "RootServiceHero").$$render(
    $$result,
    {
      data: {
        h1: "Reliable Stucco Painting & Repair Services for Chicago Homeowners",
        listItems: [
          "100% Satisfaction Guaranteed",
          "Quality Materials & Workmanship",
          "Over 30 Years of Experience",
          "Meticulous Surface Preparation"
        ],
        image: {
          src,
          alt: "Beautiful house with newly repair stucco and paint job done by Klasek Painting"
        }
      }
    },
    {},
    {}
  )} ${validate_component(RootServiceSection, "RootServiceSection").$$render(
    $$result,
    {
      data: {
        heading: "Stucco Painting Services",
        description: "Choosing Klasek Painting for your stucco painting services guarantees exceptional quality and meticulous attention to detail. Our skilled professionals use top-grade materials and techniques to enhance the beauty and durability of your stucco surfaces. We offer affordable services with a focus on customer satisfaction and long-lasting results.",
        href: serviceRoutes["stucco-painting"].href,
        image: painting
      }
    },
    {},
    {}
  )} ${validate_component(RootServiceSection, "RootServiceSection").$$render(
    $$result,
    {
      class: "bg-white",
      reverse: true,
      data: {
        heading: "Stucco Repair Services",
        description: "Choosing Klasek Painting for your stucco repair services means you'll receive expert craftsmanship and careful attention to detail. We provide dependable, affordable services with a commitment to customer satisfaction and durable, long-lasting results. Klasek Painting can cover all of your painting needs.",
        href: serviceRoutes["stucco-repair"].href,
        image: repair
      }
    },
    {},
    {}
  )} ${validate_component(PaintingPromisesSection, "PaintingPromisesSection").$$render($$result, { class: "bg-off-white" }, {}, {})} ${validate_component(OtherServicesSection, "OtherServicesSection").$$render($$result, { showStucco: false }, {}, {})} ${validate_component(WhyChooseUsSection, "WhyChooseUsSection").$$render($$result, { class: "bg-off-white" }, {}, {})} ${validate_component(ServiceAreaSection, "ServiceAreaSection").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
