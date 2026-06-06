import { c as create_ssr_component, v as validate_component, a as add_attribute, e as each } from "../../../../../../chunks/ssr.js";
import { S as SubServiceHero, F as FaqSection } from "../../../../../../chunks/FaqSection.js";
import { C as ColumnTemplateSection } from "../../../../../../chunks/ColumnTemplateSection.js";
import { G as GalleryLinkBlock } from "../../../../../../chunks/GalleryLinkBlock.js";
import { g as galleryRoutes } from "../../../../../../chunks/routes.js";
const src = {
  sources: {
    avif: "/_app/immutable/assets/exterior-paint-contractor.MFLL9Gbv.avif 341w, /_app/immutable/assets/exterior-paint-contractor.Z66NTt-7.avif 682w",
    webp: "/_app/immutable/assets/exterior-paint-contractor.CaWeelPn.webp 341w, /_app/immutable/assets/exterior-paint-contractor.c0U-CB2M.webp 682w",
    png: "/_app/immutable/assets/exterior-paint-contractor.CeGo-X57.png 341w, /_app/immutable/assets/exterior-paint-contractor.B5feeU1y.png 682w"
  },
  img: {
    src: "/_app/immutable/assets/exterior-paint-contractor.B5feeU1y.png",
    w: 682,
    h: 443
  }
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const faqData = [
    {
      question: "Can I use interior paint for exterior surfaces?",
      answer: "No, interior paint is formulated specifically for indoor environments and lacks the durability required to withstand outdoor elements. For exterior surfaces, it's essential to use paint products designed for exterior applications to ensure longevity and protection against weather."
    },
    {
      question: "Why should I hire a professional exterior painting company?",
      answer: "Hiring a professional exterior painting company ensures that you receive high-quality workmanship, proper preparation, and the use of premium paint products. Our professional painters have years of experience and the expertise needed to deliver a fresh coat of paint that enhances your home's curb appeal and withstands the elements."
    },
    {
      question: "What is the difference between interior and exterior painting?",
      answer: "Interior and exterior painting differ mainly in the formulation of the paint. Exterior paint is designed to resist weather conditions, UV rays, and mildew, while interior paint focuses on durability and ease of cleaning. Leading painting professionals use specific products suited to each environment to ensure optimal results."
    },
    {
      question: "How often should I repaint the exterior of my home?",
      answer: "The frequency of repainting depends on various factors, including the quality of the previous paint job, the type of paint used, and the local climate. However, a fresh coat of paint is generally recommended every 5-10 years. Consulting with an experienced exterior painting company can provide a more accurate timeline based on your home's specific needs."
    },
    {
      question: "How does a fresh coat of paint enhance my home's curb appeal?",
      answer: "A fresh coat of paint significantly improves your home's curb appeal by providing a clean, updated look. It also helps protect your home from the elements, preventing damage and maintaining its value. Leading painting professionals can help you choose the right colors and finishes to maximize your home's aesthetic appeal."
    },
    {
      question: "What should I look for in a painting company?",
      answer: "When choosing a painting company, look for Chicago painters with years of experience, positive customer reviews, and a portfolio of completed projects. Ensure they use high-quality paint products and provide a detailed estimate. A reputable exterior painting company will offer a comprehensive service that includes surface preparation, painting, and cleanup to guarantee a durable and beautiful finish."
    }
  ];
  return `${validate_component(SubServiceHero, "SubServiceHero").$$render(
    $$result,
    {
      data: {
        h1: "#1 Exterior Painting Contractor",
        listItems: [
          "Industry Experts",
          "100% Satisfaction Guaranteed",
          "High Quality Materials",
          "Free Design & Consultation"
        ]
      }
    },
    {},
    {}
  )} ${validate_component(ColumnTemplateSection, "ColumnTemplateSection").$$render($$result, { class: "lg:pt-12 pt-4" }, {}, {
    "right-column": () => {
      return `<div slot="right-column"><h2 data-svelte-h="svelte-1pim7ap">Enhanced Curb Appeal with Expert Exterior Painting</h2> <p data-svelte-h="svelte-dqdkp2">The exterior of your home is the first impression it makes, and Klasek Painting ensures that
			impression is nothing short of stunning. Our expert exterior painting services are designed to
			enhance your home&#39;s curb appeal, bringing out the best in its architectural features. With a
			focus on both aesthetics and durability, we create finishes that not only look great but also
			stand up to the test of time, ensuring your home remains beautiful for years to come.</p> ${validate_component(GalleryLinkBlock, "GalleryLinkBlock").$$render(
        $$result,
        {
          data: [galleryRoutes["past-projects"], galleryRoutes["victorian"]]
        },
        {},
        {}
      )}</div>`;
    },
    "left-column": () => {
      return `<div slot="left-column" class="order-last">${typeof src === "string" ? `<img class="w-full h-auto bord rounded-lg max-w-[500px] mx-auto"${add_attribute("src", src.img.src, 0)} alt=""${add_attribute("width", src.img.w, 0)}${add_attribute("height", src.img.h, 0)}>` : `<picture>${each(Object.entries(src.sources), ([format, srcset]) => {
        return `<source${add_attribute("srcset", srcset, 0)}${add_attribute("type", "image/" + format, 0)}>`;
      })} <img class="w-full h-auto bord rounded-lg max-w-[500px] mx-auto"${add_attribute("src", src.img.src, 0)} alt=""${add_attribute("width", src.img.w, 0)}${add_attribute("height", src.img.h, 0)}></picture>`}</div>`;
    }
  })} ${validate_component(FaqSection, "FaqSection").$$render($$result, { faqData }, {}, {})}`;
});
export {
  Page as default
};
