import { c as create_ssr_component, v as validate_component, a as add_attribute, e as each } from "../../../../../../chunks/ssr.js";
import { S as SubServiceHero, F as FaqSection } from "../../../../../../chunks/FaqSection.js";
import { C as ColumnTemplateSection } from "../../../../../../chunks/ColumnTemplateSection.js";
import { B as BasicTemplateSection } from "../../../../../../chunks/BasicTemplateSection.js";
import { b as serviceRoutes, r as routes, g as galleryRoutes } from "../../../../../../chunks/routes.js";
import { H as HeadingAccent } from "../../../../../../chunks/HeadingAccent.js";
import { G as GalleryLinkBlock } from "../../../../../../chunks/GalleryLinkBlock.js";
const src = {
  sources: {
    avif: "/_app/immutable/assets/cedar-siding-painting-service.DRbadkuu.avif 321w, /_app/immutable/assets/cedar-siding-painting-service.H3ONyrZ6.avif 641w",
    webp: "/_app/immutable/assets/cedar-siding-painting-service.CahAg_df.webp 321w, /_app/immutable/assets/cedar-siding-painting-service.DXhypSIf.webp 641w",
    png: "/_app/immutable/assets/cedar-siding-painting-service.B09wu5RY.png 321w, /_app/immutable/assets/cedar-siding-painting-service.BGkhmsRz.png 641w"
  },
  img: {
    src: "/_app/immutable/assets/cedar-siding-painting-service.BGkhmsRz.png",
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
        h1: "#1 Cedar Siding Painting Company",
        listItems: [
          "Clear Communication",
          "Simple, Straight-Forward Pricing",
          "Meticulous Surface Care",
          "Durable Finishes"
        ]
      }
    },
    {},
    {}
  )} ${validate_component(ColumnTemplateSection, "ColumnTemplateSection").$$render($$result, { class: "lg:pt-12 pt-4" }, {}, {
    "right-column": () => {
      return `<div slot="right-column">${typeof src === "string" ? `<img class="w-full h-auto max-w-[500px] mx-auto"${add_attribute("src", src.img.src, 0)} alt=""${add_attribute("width", src.img.w, 0)}${add_attribute("height", src.img.h, 0)}>` : `<picture>${each(Object.entries(src.sources), ([format, srcset]) => {
        return `<source${add_attribute("srcset", srcset, 0)}${add_attribute("type", "image/" + format, 0)}>`;
      })} <img class="w-full h-auto max-w-[500px] mx-auto"${add_attribute("src", src.img.src, 0)} alt=""${add_attribute("width", src.img.w, 0)}${add_attribute("height", src.img.h, 0)}></picture>`}</div>`;
    },
    "left-column": () => {
      return `<div slot="left-column" class="!justify-normal" data-svelte-h="svelte-1foad5v"><h2>Superior Cedar Siding Painting</h2> <p>At Klasek Painting, we offer top-tier cedar siding painting services that outshine the
			competition. Our expert team uses the highest quality materials and techniques to ensure a
			flawless finish. We take pride in delivering long-lasting results that protect and beautify
			your home, making us the best choice for your cedar siding needs.</p></div>`;
    }
  })} ${validate_component(BasicTemplateSection, "BasicTemplateSection").$$render($$result, { class: "bg-off-white" }, {}, {
    default: () => {
      return `${validate_component(HeadingAccent, "HeadingAccent").$$render($$result, { class: "sm:w-fit", extend: true }, {}, {
        default: () => {
          return `<h2 data-svelte-h="svelte-18qf01e">Benefits of Choosing Cedar Siding</h2>`;
        }
      })} <p data-svelte-h="svelte-1m5ha0l">Cedar siding is a popular choice in Cook County due to its natural beauty and durability. Here&#39;s
		why you should consider cedar siding painting for your home:</p> <ul data-svelte-h="svelte-k6b7la"><li><strong>Enhanced Curb Appeal:</strong> Cedar siding adds a timeless and elegant look to any home</li> <li><strong>Natural Insulation:</strong> Cedar wood provides excellent insulation, keeping your home
			cooler in the summer and warmer in the winter</li> <li><strong>Durability:</strong> With proper maintenance, cedar siding can last for decades, standing
			up to the elements</li> <li><strong>Pest Resistant:</strong> Cedar wood&#39;s natural oils make it resistant to insects and other
			pests</li> <li><strong>Eco-Friendly:</strong> Cedar is a renewable resource, making it a sustainable choice for
			your home</li> <li><strong>Increased Home Value:</strong> Well-maintained cedar siding can increase the overall value
			of your property</li></ul> <p data-svelte-h="svelte-1ezkmpm">Choosing cedar siding for your home in Cook County means investing in a beautiful, durable, and
		eco-friendly material. Our expert painting services ensure that your cedar siding remains in
		peak condition, providing long-lasting protection and aesthetic appeal. Trust Klasek Painting to
		bring out the best in your cedar siding, enhancing both the look and value of your home.</p>`;
    }
  })} ${validate_component(BasicTemplateSection, "BasicTemplateSection").$$render($$result, { class: "pb-0" }, {}, {
    default: () => {
      return `${validate_component(HeadingAccent, "HeadingAccent").$$render($$result, { class: "sm:w-fit", extend: true }, {}, {
        default: () => {
          return `<h2 data-svelte-h="svelte-9m8iwm">Our Cedar Siding Painting Process</h2>`;
        }
      })} <p data-svelte-h="svelte-1b5pjbh">At Klasek Painting, we believe that attention to detail and using the highest quality materials
		are key to being the best <a${add_attribute("href", serviceRoutes["siding-painting-repair"].href, 0)}>siding painting company</a>. Our experienced team follows a meticulous process to ensure a beautiful, long-lasting finish
		for your cedar siding. Here&#39;s how we achieve outstanding results:</p> <ol data-svelte-h="svelte-1q0jeof"><li><strong>Initial Inspection:</strong> We thoroughly inspect the cedar siding to identify any damage
			or areas that need special attention</li> <li><strong>Surface Preparation:</strong> We clean the surface, remove any loose paint, and sand rough
			areas to create a smooth base</li> <li><strong>Primer Application:</strong> We apply a high-quality stain-blocking primer to ensure excellent
			paint adhesion and to prevent tannin bleed-through</li> <li><strong>Painting:</strong> We use top-tier acrylic latex paint, applying two coats for optimal
			coverage and durability</li> <li><strong>Final Inspection:</strong> We conduct a final inspection to ensure a flawless finish and
			complete customer satisfaction</li></ol> <p data-svelte-h="svelte-12es0u4">Our professional painters are dedicated to providing excellent performance on every project. We
		take pride in our work and strive to exceed your expectations, delivering outstanding results
		that enhance the beauty and durability of your cedar siding. <a${add_attribute("href", routes["contact"].href, 0)}>Contact Klasek Painting</a> today to get a free estimate for your cedar siding painting project.</p> ${validate_component(GalleryLinkBlock, "GalleryLinkBlock").$$render(
        $$result,
        {
          data: [
            galleryRoutes["cedar-replacement"],
            galleryRoutes["cedar-siding"],
            galleryRoutes["white-cedar-siding"],
            galleryRoutes["cedar-shingle-stucco-repair"]
          ]
        },
        {},
        {}
      )}`;
    }
  })} ${validate_component(FaqSection, "FaqSection").$$render($$result, { faqData }, {}, {})}`;
});
export {
  Page as default
};
