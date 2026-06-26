import { c as create_ssr_component, g as subscribe, v as validate_component, a as add_attribute, e as each } from "../../../../../../chunks/ssr.js";
import { S as SubServiceHero, F as FaqSection } from "../../../../../../chunks/FaqSection.js";
import { C as ColumnTemplateSection } from "../../../../../../chunks/ColumnTemplateSection.js";
import { B as BasicTemplateSection } from "../../../../../../chunks/BasicTemplateSection.js";
import { r as routes, g as galleryRoutes } from "../../../../../../chunks/routes.js";
import { H as HeadingAccent } from "../../../../../../chunks/HeadingAccent.js";
import { g as galleryBeforeAfter } from "../../../../../../chunks/hardie-board-siding-painting-before-after-service.js";
import { i as isMobileStore } from "../../../../../../chunks/isMobileStore.js";
import { G as GalleryLinkBlock } from "../../../../../../chunks/GalleryLinkBlock.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isMobileStore, $$unsubscribe_isMobileStore;
  $$unsubscribe_isMobileStore = subscribe(isMobileStore, (value) => $isMobileStore = value);
  const faqData = [
    {
      question: "What is Hardie Board siding made of?",
      answer: "Hardie Board is a type of fiberboard composed of mechanical pulp and is known for its durability. It's also referred to as Hardie Plank siding, concrete siding, cement-fiber siding, and fiber cement cladding."
    },
    {
      question: "Do I need to prime new Hardie Board before painting?",
      answer: "Yes, even though new Hardie Board comes with a factory primer, it's essential to apply a high-quality primer to ensure proper coverage, especially on the edges. We recommend using Loxon Masonry Primer by Sherwin-Williams."
    },
    {
      question: "What type of paint should I use on Hardie Board siding?",
      answer: "For the best results, use a high-quality acrylic latex exterior paint from reputable brands like Sherwin Williams, Benjamin Moore, or Behr. These paints offer superior protection and longevity for your siding."
    },
    {
      question: "Can I roll on paint when painting Hardie Board?",
      answer: "While you can use a roller, spraying the paint is the preferred method. Spraying ensures that the paint gets into all the cracks and covers every surface thoroughly."
    },
    {
      question: "How should I prepare faded Hardie Board for painting?",
      answer: "To prepare faded Hardie Board, ensure thorough preparation by setting any popped nails, scraping off loose or peeling paint, and caulking significant gaps. Repair or replace any sections in direct contact with the ground to prevent deterioration."
    },
    {
      question: "What are the best practices for painting Hardie Board trim?",
      answer: "Before painting trim, make sure all preparation steps are complete. This includes sanding, scraping off loose paint, caulking large cracks, and replacing any dry rot. For trim, doors, spindles, columns, or porch areas, apply a primer coat if they are weathered. Use semi-gloss paint for trim as it looks best and stays cleaner longer."
    }
  ];
  $$unsubscribe_isMobileStore();
  return `${validate_component(SubServiceHero, "SubServiceHero").$$render(
    $$result,
    {
      data: {
        h1: "#1 Hardie Board Siding Painting Company",
        listItems: [
          "Attention to Detail",
          "Experienced Painters",
          "Clear Communication",
          "100% Satisfaction Guaranteed"
        ]
      }
    },
    {},
    {}
  )} ${validate_component(ColumnTemplateSection, "ColumnTemplateSection").$$render($$result, { class: "lg:pt-12 pt-4" }, {}, {
    "right-column": () => {
      return `<div slot="right-column">${typeof galleryBeforeAfter === "string" ? `<img class="w-full h-auto max-w-[550px] mx-auto"${add_attribute("src", galleryBeforeAfter.img.src, 0)} alt="Hardie board siding project before and after by Klasek Painting"${add_attribute("loading", $isMobileStore ? "lazy" : "eager", 0)}${add_attribute("width", galleryBeforeAfter.img.w, 0)}${add_attribute("height", galleryBeforeAfter.img.h, 0)}>` : `<picture>${each(Object.entries(galleryBeforeAfter.sources), ([format, srcset]) => {
        return `<source${add_attribute("srcset", srcset, 0)}${add_attribute("type", "image/" + format, 0)}>`;
      })} <img class="w-full h-auto max-w-[550px] mx-auto"${add_attribute("src", galleryBeforeAfter.img.src, 0)} alt="Hardie board siding project before and after by Klasek Painting"${add_attribute("loading", $isMobileStore ? "lazy" : "eager", 0)}${add_attribute("width", galleryBeforeAfter.img.w, 0)}${add_attribute("height", galleryBeforeAfter.img.h, 0)}></picture>`}</div>`;
    },
    "left-column": () => {
      return `<div slot="left-column" data-svelte-h="svelte-b730sy"><h2>All About Painting Exterior Hardie Board Siding</h2> <p>Hardie Board is a heavy type of fiberboard made from mechanical pulp. It&#39;s also called Hardie
			Plank siding, concrete siding, cement-fiber siding, and fiber cement cladding. You&#39;ll see this
			siding on many homes in the Chicago suburbs, and, more recently, some artists even use it as a
			canvas. You can find Hardie Board siding in various finishes, thicknesses, and types to mimic
			coarse chipboard, plywood, or real wood. Its preparation for painting depends on usage.</p> <p>Hardie Board colors vary as the siding almost always comes pre-primed to protect it during
			shipment. When ordering new, it&#39;s smart to get a shade close to the color you want your home
			to be. Cut edges, factory primed and unprimed boards require priming before painting. Read on
			to learn more about this popular siding material.</p></div>`;
    }
  })} ${validate_component(BasicTemplateSection, "BasicTemplateSection").$$render($$result, { class: "bg-off-white" }, {}, {
    default: () => {
      return `${validate_component(HeadingAccent, "HeadingAccent").$$render($$result, { extend: true }, {}, {
        default: () => {
          return `<h2 data-svelte-h="svelte-qvypci">Klasek Painting Serving Chicagoland</h2>`;
        }
      })} <p data-svelte-h="svelte-123zfj8">Klasek Painting has been servicing the beautiful Chicago suburbs for over 30 years. Owner, Pete
		Klasek, is available to answer any questions you may have about having your Hardie Board siding
		painting project. Our company is known for its high-quality work, superior products, dependable
		service, satisfaction guarantee, and on-time completion. We provide and exterior painting
		services at competitive pricing. If you have a home or commercial property you&#39;d like to have
		stained or painted, <a${add_attribute("href", routes["contact"].href, 0)}>contact Klasek Painting</a> today.</p> ${validate_component(GalleryLinkBlock, "GalleryLinkBlock").$$render($$result, { data: [galleryRoutes["hardie-board"]] }, {}, {})}`;
    }
  })} ${validate_component(FaqSection, "FaqSection").$$render($$result, { faqData }, {}, {})}`;
});
export {
  Page as default
};
