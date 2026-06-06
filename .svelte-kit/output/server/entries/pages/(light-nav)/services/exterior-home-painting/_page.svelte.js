import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/ssr.js";
import { R as RootServiceHero, O as OtherServicesSection } from "../../../../../chunks/OtherServicesSection.js";
import { R as RootServiceSection } from "../../../../../chunks/RootServiceSection.js";
import { b as serviceRoutes } from "../../../../../chunks/routes.js";
import { W as WhyChooseUsSection, S as ServiceAreaSection } from "../../../../../chunks/ServiceAreaSection.js";
import { P as PaintingPromisesSection } from "../../../../../chunks/PaintingPromisesSection.js";
import { V as ViewOurWorkSection } from "../../../../../chunks/ViewOurWorkSection.js";
import { C as CtaBannerSection } from "../../../../../chunks/CtaBannerSection.js";
import { E as EmailSignup } from "../../../../../chunks/EmailSignup.js";
const src = "/_app/immutable/assets/exterior-home-painting.JNOrapCC.webp";
const historic = "/_app/immutable/assets/historic-house-painting.CdL7seb4.webp";
const exterior = "/_app/immutable/assets/exterior-house-painting-services.q26j7Izb.webp";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(RootServiceHero, "RootServiceHero").$$render(
    $$result,
    {
      data: {
        h1: "Experienced House Painters in Cook County, IL",
        listItems: [
          "Over 30 Years of Experience",
          "Meticulous Surface Preparation",
          "Quality Materials & Workmanship",
          "Free Design Consultation & Quote"
        ],
        image: { src, alt: "Exterior Home Painting" }
      }
    },
    {},
    {}
  )} ${validate_component(EmailSignup, "EmailSignup").$$render($$result, {}, {}, {})} ${validate_component(RootServiceSection, "RootServiceSection").$$render(
    $$result,
    {
      class: "bg-white",
      reverse: true,
      data: {
        heading: "Exterior House Painting Services",
        description: "At Klasek Painting, we dedicate our all to each project to ensure your vision comes true. We provide Industry-leading equipment and specially trained painters to deliver efficient and timely services.",
        href: serviceRoutes["exterior-paint-contractor"].href,
        image: exterior
      }
    },
    {},
    {}
  )} ${validate_component(RootServiceSection, "RootServiceSection").$$render(
    $$result,
    {
      data: {
        heading: "Historic House Painting Services",
        description: "When It comes to Historic Houses, Klasek knows how to provide top-notch painting services to your home's delicate exterior. Painting historic homes require attention to detail and finesse, that can be found at Klasek Painting.",
        href: serviceRoutes["historic-house-painting"].href,
        image: historic
      }
    },
    {},
    {}
  )} ${validate_component(OtherServicesSection, "OtherServicesSection").$$render($$result, { showExteriorPainting: false }, {}, {})} ${validate_component(WhyChooseUsSection, "WhyChooseUsSection").$$render($$result, { class: "bg-off-white" }, {}, {})} ${validate_component(CtaBannerSection, "CtaBannerSection").$$render($$result, {}, {}, {})} ${validate_component(PaintingPromisesSection, "PaintingPromisesSection").$$render($$result, {}, {}, {})} ${validate_component(ViewOurWorkSection, "ViewOurWorkSection").$$render($$result, { class: "bg-off-white" }, {}, {})} ${validate_component(ServiceAreaSection, "ServiceAreaSection").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
