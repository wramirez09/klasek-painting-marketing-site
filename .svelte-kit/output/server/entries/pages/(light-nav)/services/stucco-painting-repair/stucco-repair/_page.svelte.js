import { c as create_ssr_component, g as subscribe, v as validate_component, a as add_attribute, e as each } from "../../../../../../chunks/ssr.js";
import { S as SubServiceHero, F as FaqSection } from "../../../../../../chunks/FaqSection.js";
import { E as EmailSignup } from "../../../../../../chunks/EmailSignup.js";
import { C as ColumnTemplateSection } from "../../../../../../chunks/ColumnTemplateSection.js";
import { B as BasicTemplateSection } from "../../../../../../chunks/BasicTemplateSection.js";
import { r as routes, g as galleryRoutes } from "../../../../../../chunks/routes.js";
import { H as HeadingAccent } from "../../../../../../chunks/HeadingAccent.js";
import { i as isMobileStore } from "../../../../../../chunks/isMobileStore.js";
import { G as GalleryLinkBlock } from "../../../../../../chunks/GalleryLinkBlock.js";
const src = {
  sources: {
    avif: "/_app/immutable/assets/exterior-stucco-repair-service.DKhbR85G.avif 306w, /_app/immutable/assets/exterior-stucco-repair-service.DHjyDFgG.avif 611w",
    webp: "/_app/immutable/assets/exterior-stucco-repair-service.DXbMpyFh.webp 306w, /_app/immutable/assets/exterior-stucco-repair-service.BF7f6Lbm.webp 611w",
    png: "/_app/immutable/assets/exterior-stucco-repair-service.Dvcxrc1H.png 306w, /_app/immutable/assets/exterior-stucco-repair-service.fCxrnz4-.png 611w"
  },
  img: {
    src: "/_app/immutable/assets/exterior-stucco-repair-service.fCxrnz4-.png",
    w: 611,
    h: 381
  }
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isMobileStore, $$unsubscribe_isMobileStore;
  $$unsubscribe_isMobileStore = subscribe(isMobileStore, (value) => $isMobileStore = value);
  const faqData = [
    {
      question: "How should I prepare my stucco for a paint job?",
      answer: "Proper prep work is crucial for a successful exterior painting project. Start by using a pressure washer to clean the stucco surface and remove any dirt, debris, or loose paint. This will ensure better adhesion of the new paint and result in a smoother finish."
    },
    {
      question: "Can stucco repair be included in an exterior painting service?",
      answer: "Yes, many professional exterior painting services include stucco repair as part of their offerings. Before beginning the painting process, professional painters can address any cracks, holes, or damage to the exterior stucco, ensuring a seamless and durable finish."
    },
    {
      question: "What is the drying time for stucco patching before painting?",
      answer: "The drying time for stucco patching can vary depending on the type of patching material used and weather conditions in Chicago, IL. Generally, it takes about 24-48 hours for the stucco patch to dry completely before applying a second coat or starting the exterior house painting."
    },
    {
      question: "Is pressure washing necessary before an exterior house painting project?",
      answer: "Yes, pressure washing is an essential step before any exterior house painting. It helps to clean the surface thoroughly, removing any mold, mildew, and dirt, which allows the new paint to adhere better and last longer."
    },
    {
      question: "What should I expect from a professional exterior painting contractor in terms of attention to detail?",
      answer: "A reputable painting contractor will pay close attention to detail throughout the entire process. This includes thorough prep work, such as stucco repair and pressure washing, precise application of the paint using brushes, rollers, or a paint sprayer, and meticulous final touches to ensure a flawless finish."
    },
    {
      question: "Can professional painters apply a second coat of paint on my home's exterior?",
      answer: "Yes, applying a second coat of paint is often recommended for better coverage and durability. Professional painters will ensure that the first coat is completely dry before applying the second coat, resulting in a long-lasting and vibrant finish for your home's exterior."
    }
  ];
  $$unsubscribe_isMobileStore();
  return `${validate_component(SubServiceHero, "SubServiceHero").$$render(
    $$result,
    {
      data: {
        h1: "#1 Stucco Repair Service",
        listItems: [
          "Curb Appeal Boost",
          "Simple, Straight-Forward Pricing",
          "Clear Communication",
          "Meticulous Surface Care"
        ]
      }
    },
    {},
    {}
  )} ${validate_component(ColumnTemplateSection, "ColumnTemplateSection").$$render($$result, { class: "lg:pt-12 pt-4" }, {}, {
    "left-column": () => {
      return `<div slot="left-column" data-svelte-h="svelte-bc804f"><h2>Expert Stucco Repair</h2> <p>Stucco has become a popular choice across the United States due to its
      affordability and durability. However, harsh weather conditions like
      storms and blizzards can leave your stucco looking worn and damaged. To
      restore its beauty or prepare for a fresh coat of paint, Klasek Painting
      offers expert stucco repair services in Cook County. Our specialists are
      here to help you bring your stucco back to life, ensuring it remains both
      functional and attractive.</p></div>`;
    },
    "right-column": () => {
      return `<div slot="right-column">${typeof src === "string" ? `<img class="w-full h-auto max-w-[500px] mx-auto bord rounded-lg"${add_attribute("src", src.img.src, 0)} alt="Pete Klasek working on a stucco repair exterior house project"${add_attribute("loading", $isMobileStore ? "lazy" : "eager", 0)}${add_attribute("width", src.img.w, 0)}${add_attribute("height", src.img.h, 0)}>` : `<picture>${each(Object.entries(src.sources), ([format, srcset]) => {
        return `<source${add_attribute("srcset", srcset, 0)}${add_attribute("type", "image/" + format, 0)}>`;
      })} <img class="w-full h-auto max-w-[500px] mx-auto bord rounded-lg"${add_attribute("src", src.img.src, 0)} alt="Pete Klasek working on a stucco repair exterior house project"${add_attribute("loading", $isMobileStore ? "lazy" : "eager", 0)}${add_attribute("width", src.img.w, 0)}${add_attribute("height", src.img.h, 0)}></picture>`}</div>`;
    }
  })} ${validate_component(BasicTemplateSection, "BasicTemplateSection").$$render($$result, { class: "bg-off-white" }, {}, {
    default: () => {
      return `${validate_component(HeadingAccent, "HeadingAccent").$$render($$result, { extend: true, class: "sm:w-fit" }, {}, {
        default: () => {
          return `<h2 data-svelte-h="svelte-m1c014">Trust Us to Handle Your Stucco Restoration in Cook County</h2>`;
        }
      })} <p data-svelte-h="svelte-lukfo4">With all the options for different colors, styles, patterns, and designs, it
    is no wonder that so many residents select stucco as their primary choice of
    exterior surfacing for their house. Even though stucco is an excellent
    substance to use on the outside of your home, it is still prone to damage
    after many years of weathering. If your home’s stucco has eroded from snow,
    ice, wind, hail, rain, and scorching sun, you will need to invest in
    thorough stucco repairs.</p> <p data-svelte-h="svelte-76kp0y">You may be wondering whether this process is something you could tackle by
    yourself, since online videos often make stucco applications look relatively
    easy. However, this is unfortunately not the case, since stucco can be quite
    finicky if it is not handled by professionals with many years of experience.
    By allowing our experts to take care of your repairs, you can have peace of
    mind knowing it is done right.</p> <h3 data-svelte-h="svelte-e7rffm">Customizing Your New Stucco Surfaces</h3> <p data-svelte-h="svelte-lb56r2">When applying new stucco, Klasek Painting offers a range of customization
    options to suit your unique style and preferences. Our team can tailor
    colors, textures, and finishes to match your vision, ensuring that no detail
    is out of reach. Whether you want to complement your home&#39;s existing design
    or create something entirely new, we use advanced techniques to deliver
    results that enhance your home&#39;s exterior.</p> <strong data-svelte-h="svelte-121xzcv">Customization options include:</strong> <ul data-svelte-h="svelte-104uutf"><li>Applying stucco over various surfaces, including brick and concrete</li> <li>Selecting from diverse designs and patterns</li> <li>Adding creative detailing to windowsills, door frames, trim, and more</li> <li>Matching textures, styles, and colors for a cohesive look</li></ul> <p data-svelte-h="svelte-17ec6uc">For high-quality stucco workmanship in Cook County, <a${add_attribute("href", routes["contact"].href, 0)}>contact Klasek Painting</a> to explore your options.</p> ${validate_component(GalleryLinkBlock, "GalleryLinkBlock").$$render(
        $$result,
        {
          data: [
            galleryRoutes["stucco-repair-paint"],
            galleryRoutes["stucco-trim"],
            galleryRoutes["stucco-cedar-siding"],
            galleryRoutes["siding-stucco"],
            galleryRoutes["cedar-shingle-stucco-repair"],
            galleryRoutes["stucco-repair"]
          ]
        },
        {},
        {}
      )}`;
    }
  })} ${validate_component(FaqSection, "FaqSection").$$render($$result, { faqData }, {}, {})} ${validate_component(EmailSignup, "EmailSignup").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
