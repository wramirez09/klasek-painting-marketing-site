import { c as create_ssr_component, v as validate_component, a as add_attribute, e as each } from "../../../../../../chunks/ssr.js";
import { S as SubServiceHero, F as FaqSection } from "../../../../../../chunks/FaqSection.js";
import { C as ColumnTemplateSection } from "../../../../../../chunks/ColumnTemplateSection.js";
import { B as BasicTemplateSection } from "../../../../../../chunks/BasicTemplateSection.js";
import { r as routes, g as galleryRoutes } from "../../../../../../chunks/routes.js";
import { H as HeadingAccent } from "../../../../../../chunks/HeadingAccent.js";
import { G as GalleryLinkBlock } from "../../../../../../chunks/GalleryLinkBlock.js";
const src = {
  sources: {
    avif: "/_app/immutable/assets/aluminum-siding-painting-service.DDBeBD7T.avif 321w, /_app/immutable/assets/aluminum-siding-painting-service.BNFyozYq.avif 641w",
    webp: "/_app/immutable/assets/aluminum-siding-painting-service.DureXieY.webp 321w, /_app/immutable/assets/aluminum-siding-painting-service.Cuo76oKm.webp 641w",
    png: "/_app/immutable/assets/aluminum-siding-painting-service.BXp_5fU-.png 321w, /_app/immutable/assets/aluminum-siding-painting-service.DcZ4a4qS.png 641w"
  },
  img: {
    src: "/_app/immutable/assets/aluminum-siding-painting-service.DcZ4a4qS.png",
    w: 641,
    h: 641
  }
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const faqData = [
    {
      question: "How do I know if aluminum siding painting is the right choice for my home?",
      answer: "If your aluminum siding is in good condition but looks faded or worn, a fresh coat of paint can significantly enhance your home's exterior and curb appeal. Quality painting by professional painters can revitalize your siding, making it look new and protecting it from the elements."
    },
    {
      question: "What makes a good aluminum siding paint job?",
      answer: "A good aluminum siding paint job involves thorough surface preparation, including cleaning and priming, followed by applying high-quality paint. Chicago painters who specialize in exterior painting ensure that every step is meticulously performed to achieve a long-lasting, flawless finish."
    },
    {
      question: "How long does an aluminum siding paint job last?",
      answer: "With proper preparation and the use of top-rated, high-quality paint, an aluminum siding paint job can last between 10-15 years. Hiring an experienced exterior painting company ensures that the work is done correctly, maximizing the lifespan of the paint."
    },
    {
      question: "Can painting professionals work with all colors for aluminum siding?",
      answer: "Yes, painting professionals can work with a wide range of colors to match your aesthetic preferences. Consulting with a top-rated professional painter will help you choose the best color to complement your home's exterior and enhance its curb appeal."
    },
    {
      question: "Why should I hire a professional painter for aluminum siding?",
      answer: "Hiring a professional painter ensures that your aluminum siding is properly prepped, primed, and painted with high-quality materials. Experienced Chicago painters have the skills and equipment needed to deliver a durable and attractive finish, saving you time and ensuring a superior result."
    },
    {
      question: "What should I look for in an exterior painting company?",
      answer: "Look for an exterior painting company with a strong reputation, verified customer reviews, and examples of previous work. Quality painting companies will provide detailed estimates, use top-rated materials, and employ skilled painting professionals to ensure your home's exterior looks its best."
    }
  ];
  return `${validate_component(SubServiceHero, "SubServiceHero").$$render(
    $$result,
    {
      data: {
        h1: "#1 Aluminum Siding Painting Company",
        listItems: [
          "Simple, Straight-Forward Pricing",
          "Meticulous Surface Care",
          "Long-Lasting Results",
          "Free Design & Consultation"
        ]
      }
    },
    {},
    {}
  )} ${validate_component(ColumnTemplateSection, "ColumnTemplateSection").$$render($$result, { class: "lg:pt-12 pt-4" }, {}, {
    "right-column": () => {
      return `<div slot="right-column">${typeof src === "string" ? `<img class="w-full h-auto max-w-[550px] mx-auto"${add_attribute("src", src.img.src, 0)} alt="Before and after aluminum painting project by Klasek Painting"${add_attribute("width", src.img.w, 0)}${add_attribute("height", src.img.h, 0)}>` : `<picture>${each(Object.entries(src.sources), ([format, srcset]) => {
        return `<source${add_attribute("srcset", srcset, 0)}${add_attribute("type", "image/" + format, 0)}>`;
      })} <img class="w-full h-auto max-w-[550px] mx-auto"${add_attribute("src", src.img.src, 0)} alt="Before and after aluminum painting project by Klasek Painting"${add_attribute("width", src.img.w, 0)}${add_attribute("height", src.img.h, 0)}></picture>`}</div>`;
    },
    "left-column": () => {
      return `<div slot="left-column" class="!justify-normal" data-svelte-h="svelte-o6eryj"><h2>How Painting Aluminum Siding Can Transform Your House</h2> <p>Aluminum siding looks beautiful when it&#39;s new, but once it starts to age, it can appear tired
			and faded. The good news is you can turn back the hands of time with a little elbow grease,
			cleaning, and a few good coats of paint. Aluminum siding is prevalent in our Chicago suburbs
			because it&#39;s insulating against the frigid winters. Plus, it&#39;s low maintenance - but not
			maintenance-free. You still need to keep it clean and repair any damage right away.</p></div>`;
    }
  })} ${validate_component(BasicTemplateSection, "BasicTemplateSection").$$render($$result, { class: "bg-off-white" }, {}, {
    default: () => {
      return `${validate_component(HeadingAccent, "HeadingAccent").$$render($$result, { extend: true, class: "sm:w-fit" }, {}, {
        default: () => {
          return `<h2 data-svelte-h="svelte-1k40tgx">Klasek Painting For Professional Exterior Painting</h2>`;
        }
      })} <p data-svelte-h="svelte-tsqpq3"><a href="/">Klasek Painting</a> has been servicing the beautiful Chicago suburbs for over 25
		years. Owner, Pete Klasek, is available to answer any questions you may have about your aluminum
		siding. Our company is known for its high-quality work, superior products, dependable service,
		satisfaction guarantee, and on-time completion. If you have a home or commercial property you
		would like to have stained or painted,
		<a${add_attribute("href", routes["contact"].href, 0)}>contact Pete Klasek</a> today.</p> ${validate_component(GalleryLinkBlock, "GalleryLinkBlock").$$render($$result, { data: [galleryRoutes["past-projects"]] }, {}, {})}`;
    }
  })} ${validate_component(FaqSection, "FaqSection").$$render($$result, { faqData }, {}, {})}`;
});
export {
  Page as default
};
