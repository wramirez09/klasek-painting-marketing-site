import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/ssr.js";
import { R as RootServiceHero, O as OtherServicesSection } from "../../../../../chunks/OtherServicesSection.js";
import { R as RootServiceSection } from "../../../../../chunks/RootServiceSection.js";
import { r as routes } from "../../../../../chunks/routes.js";
import { W as WhyChooseUsSection, S as ServiceAreaSection } from "../../../../../chunks/ServiceAreaSection.js";
import { B as Button } from "../../../../../chunks/button.js";
import { P as PaintingPromisesSection } from "../../../../../chunks/PaintingPromisesSection.js";
import { V as ViewOurWorkSection } from "../../../../../chunks/ViewOurWorkSection.js";
import { C as CtaBannerSection } from "../../../../../chunks/CtaBannerSection.js";
const src = "/_app/immutable/assets/design-and-color-consultation-services.BRlaaiqu.webp";
const design = "/_app/immutable/assets/design-consultation-service.CvcciXSY.webp";
const color = "/_app/immutable/assets/color-consultation-service.DC_36SEG.webp";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(RootServiceHero, "RootServiceHero").$$render(
    $$result,
    {
      data: {
        h1: "Free Design & Color Consultation by Curb Appeal Experts",
        listItems: [
          "Design Pros - 30+ Years of Experience",
          "Visualize the Best Version of Your Home",
          "Get a Free, Written Proposal with Pricing",
          "Increase Your Home's Value with Lasting Results"
        ],
        image: {
          src,
          alt: "White house with black accents, recently completed design consultation project by Klasek Painting"
        }
      }
    },
    {},
    {}
  )} ${validate_component(RootServiceSection, "RootServiceSection").$$render(
    $$result,
    {
      data: {
        heading: "Design Services",
        description: "Choose Klasek Painting for your design services and experience top-notch quality and attention to detail. Our pros work with you to create beautiful designs that make your home look and feel amazing. Our focus is giving you great service at a fair price, with results that last.",
        image: design
      }
    },
    {},
    {
      default: () => {
        return `${validate_component(Button, "Button").$$render(
          $$result,
          {
            class: "mt-2 lg:w-fit",
            href: routes["contact"].href
          },
          {},
          {
            default: () => {
              return `Book Service`;
            }
          }
        )}`;
      }
    }
  )} ${validate_component(RootServiceSection, "RootServiceSection").$$render(
    $$result,
    {
      class: "bg-white",
      reverse: true,
      data: {
        heading: "Color Consultation Services",
        description: "Choose Klasek Painting for your color consultation and get expert advice and personal attention. Our team helps you pick the perfect colors to match your style and space. We offer reliable and affordable services, making sure you're happy with the stunning, long-lasting results. Klasek Painting has all your painting and design needs covered.",
        image: color
      }
    },
    {},
    {
      default: () => {
        return `${validate_component(Button, "Button").$$render(
          $$result,
          {
            class: "mt-2 lg:w-fit",
            href: routes["contact"].href
          },
          {},
          {
            default: () => {
              return `Book Service`;
            }
          }
        )}`;
      }
    }
  )} ${validate_component(OtherServicesSection, "OtherServicesSection").$$render(
    $$result,
    {
      class: "bg-off-white",
      showDesignConsultation: false
    },
    {},
    {}
  )} ${validate_component(CtaBannerSection, "CtaBannerSection").$$render($$result, {}, {}, {})} ${validate_component(ViewOurWorkSection, "ViewOurWorkSection").$$render($$result, { class: "bg-off-white" }, {}, {})} ${validate_component(PaintingPromisesSection, "PaintingPromisesSection").$$render($$result, {}, {}, {})} ${validate_component(WhyChooseUsSection, "WhyChooseUsSection").$$render($$result, { class: "bg-off-white" }, {}, {})} ${validate_component(ServiceAreaSection, "ServiceAreaSection").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
