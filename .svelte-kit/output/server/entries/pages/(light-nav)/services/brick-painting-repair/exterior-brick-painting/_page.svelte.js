import { c as create_ssr_component, v as validate_component, a as add_attribute, e as each } from "../../../../../../chunks/ssr.js";
import { S as SubServiceHero, F as FaqSection } from "../../../../../../chunks/FaqSection.js";
import { C as ColumnTemplateSection } from "../../../../../../chunks/ColumnTemplateSection.js";
import { r as routes } from "../../../../../../chunks/routes.js";
const src = {
  sources: {
    avif: "/_app/immutable/assets/brick-painting-service-before-and-after.BsL7QMso.avif 321w, /_app/immutable/assets/brick-painting-service-before-and-after.CzQI3qD_.avif 641w",
    webp: "/_app/immutable/assets/brick-painting-service-before-and-after.CoZ6xnDs.webp 321w, /_app/immutable/assets/brick-painting-service-before-and-after.Br8XX9fj.webp 641w",
    png: "/_app/immutable/assets/brick-painting-service-before-and-after.D3aEzLWv.png 321w, /_app/immutable/assets/brick-painting-service-before-and-after.LAnKG7pt.png 641w"
  },
  img: {
    src: "/_app/immutable/assets/brick-painting-service-before-and-after.LAnKG7pt.png",
    w: 641,
    h: 641
  }
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const faqData = [
    {
      question: "How long does exterior brick painting last?",
      answer: "With proper preparation and high-quality paints, exterior brick painting can last 15 years or longer. Regular maintenance and occasional touch-ups will help preserve the paint's longevity, especially in areas exposed to harsh weather."
    },
    {
      question: "Can I change the color of my brick with paint?",
      answer: "Yes, exterior brick painting allows you to completely change the color of your brick. Our team uses premium, breathable paints that not only give your brick a fresh look but also ensure long-lasting protection."
    },
    {
      question: "Will painting my brick cause damage over time?",
      answer: "No, as long as the correct types of paint are used. We apply breathable, masonry-specific paints that allow moisture to escape, preventing any long-term damage to the brick or mortar. This ensures both the beauty and integrity of your home remain intact."
    },
    {
      question: "How do you prepare brick for painting?",
      answer: "Proper preparation is key to a successful brick painting project. We thoroughly clean the brick surfaces, repair any damage, and use a primer designed for masonry to ensure that the paint adheres well and provides a durable finish."
    }
  ];
  return `${validate_component(SubServiceHero, "SubServiceHero").$$render(
    $$result,
    {
      data: {
        h1: "#1 Brick House Painting Service",
        listItems: [
          "Free Design & Consultation",
          "Experienced Painters",
          "Meticulous Surface Care",
          "Long-Lasting Results"
        ]
      }
    },
    {},
    {}
  )} ${validate_component(ColumnTemplateSection, "ColumnTemplateSection").$$render($$result, { class: "pb-0 lg:pt-12 pt-4" }, {}, {
    "left-column": () => {
      return `<div slot="left-column" class="!justify-normal" data-svelte-h="svelte-g48emi"><h2>Professional Exterior Brick Painting</h2> <p>Brick exteriors are known for their timeless beauty and durability, but they do require <a${add_attribute("href", routes["brick-repair"].href, 0)}>proper maintenance</a>
			to stay in top condition. If you&#39;re considering painting your brick home or commercial property,
			Klasek Painting offers <a${add_attribute("href", routes["services"].href, 0)}>expert services</a> to enhance and protect
			your investment. Regular inspections are crucial, especially in older buildings, to identify and
			address any cracks or damage before painting. Our skilled team ensures that any necessary repairs
			are made, providing a flawless finish that not only revitalizes your brick exterior but also extends
			its lifespan.</p> <p>Ready to give your brick exterior a fresh, new look? <a${add_attribute("href", routes["contact"].href, 0)}>Contact us</a> today to schedule a consultation with our expert team.</p></div>`;
    },
    "right-column": () => {
      return `<div slot="right-column"> ${typeof src === "string" ? `<img class="w-full h-auto max-w-[450px] mx-auto"${add_attribute("src", src.img.src, 0)} alt=""${add_attribute("width", src.img.w, 0)}${add_attribute("height", src.img.h, 0)}>` : `<picture>${each(Object.entries(src.sources), ([format, srcset]) => {
        return `<source${add_attribute("srcset", srcset, 0)}${add_attribute("type", "image/" + format, 0)}>`;
      })} <img class="w-full h-auto max-w-[450px] mx-auto"${add_attribute("src", src.img.src, 0)} alt=""${add_attribute("width", src.img.w, 0)}${add_attribute("height", src.img.h, 0)}></picture>`} <small data-svelte-h="svelte-3jkqpi"><strong>Before &amp; After Brick Home Transformation</strong> <p>Check out this amazing transformation from a recent job Klasek Painting did in the Chicago
				suburbs. As you can see there is quite a difference between the dreary old brick and the
				beautifully modern white exterior. <a${add_attribute("href", routes["gallery"].href, 0)}>View more of our past work in our gallery.</a></p></small></div>`;
    }
  })} ${validate_component(FaqSection, "FaqSection").$$render($$result, { faqData }, {}, {})}`;
});
export {
  Page as default
};
