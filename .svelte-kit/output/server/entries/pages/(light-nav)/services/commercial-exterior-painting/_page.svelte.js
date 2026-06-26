import { c as create_ssr_component, v as validate_component, a as add_attribute, e as each } from "../../../../../chunks/ssr.js";
import { R as RootServiceHero, O as OtherServicesSection } from "../../../../../chunks/OtherServicesSection.js";
import { W as WhyChooseUsSection, S as ServiceAreaSection } from "../../../../../chunks/ServiceAreaSection.js";
import { P as PaintingPromisesSection } from "../../../../../chunks/PaintingPromisesSection.js";
import { V as ViewOurWorkSection } from "../../../../../chunks/ViewOurWorkSection.js";
import { C as CtaBannerSection } from "../../../../../chunks/CtaBannerSection.js";
import { C as ColumnTemplateSection } from "../../../../../chunks/ColumnTemplateSection.js";
const src = "/_app/immutable/assets/new-exteior-commercial-painting-job-klasek-painting.DnurnCnC.webp";
const commercial = {
  sources: {
    avif: "/_app/immutable/assets/exterior-commercial-painting-service.Bnz4fmGy.avif 300w, /_app/immutable/assets/exterior-commercial-painting-service.ClElnGEE.avif 600w",
    webp: "/_app/immutable/assets/exterior-commercial-painting-service.BEMmfWfE.webp 300w, /_app/immutable/assets/exterior-commercial-painting-service.BkUccPmA.webp 600w",
    png: "/_app/immutable/assets/exterior-commercial-painting-service.D3pm2d-a.png 300w, /_app/immutable/assets/exterior-commercial-painting-service.Bhv35GyC.png 600w"
  },
  img: {
    src: "/_app/immutable/assets/exterior-commercial-painting-service.Bhv35GyC.png",
    w: 600,
    h: 400
  }
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(RootServiceHero, "RootServiceHero").$$render(
    $$result,
    {
      data: {
        h1: "#1 Exterior Commercial Painter in Cook County, IL",
        listItems: [
          "Simple, Straight-Forward Pricing",
          "Long-Lasting Results",
          "100% Satisfaction Guaranteed",
          "Free Design Consultation & Quote"
        ],
        image: {
          src,
          alt: "New exterior commercial painting job"
        }
      }
    },
    {},
    {}
  )} ${validate_component(ColumnTemplateSection, "ColumnTemplateSection").$$render($$result, { class: "bg-off-white" }, {}, {
    "right-column": () => {
      return `<div slot="right-column" data-svelte-h="svelte-2eur8u"><h2>Commercial Exterior Painting Services in Cook County</h2> <p>Enhance your property&#39;s curb appeal and protect it from the elements with Klasek Painting&#39;s
			expert commercial exterior painting services. Our skilled team understands the unique needs of
			businesses and works diligently to deliver exceptional results tailored to your property. From
			small storefronts to large office complexes, we&#39;re here to make your building stand out.</p></div>`;
    },
    "left-column": () => {
      return `<div slot="left-column" class="lg:order-first order-last">${typeof commercial === "string" ? `<img class="bord max-w-[400px] w-full h-auto rounded-lg mx-auto"${add_attribute("src", commercial.img.src, 0)} alt="Exterior commercial painting job"${add_attribute("width", commercial.img.w, 0)}${add_attribute("height", commercial.img.h, 0)}>` : `<picture>${each(Object.entries(commercial.sources), ([format, srcset]) => {
        return `<source${add_attribute("srcset", srcset, 0)}${add_attribute("type", "image/" + format, 0)}>`;
      })} <img class="bord max-w-[400px] w-full h-auto rounded-lg mx-auto"${add_attribute("src", commercial.img.src, 0)} alt="Exterior commercial painting job"${add_attribute("width", commercial.img.w, 0)}${add_attribute("height", commercial.img.h, 0)}></picture>`}</div>`;
    }
  })} ${validate_component(CtaBannerSection, "CtaBannerSection").$$render($$result, {}, {}, {})} ${validate_component(WhyChooseUsSection, "WhyChooseUsSection").$$render($$result, { class: "bg-off-white" }, {}, {})} ${validate_component(PaintingPromisesSection, "PaintingPromisesSection").$$render($$result, {}, {}, {})} ${validate_component(ViewOurWorkSection, "ViewOurWorkSection").$$render($$result, { class: "bg-off-white" }, {}, {})} ${validate_component(ServiceAreaSection, "ServiceAreaSection").$$render($$result, {}, {}, {})} ${validate_component(OtherServicesSection, "OtherServicesSection").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
