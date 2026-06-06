import { c as create_ssr_component, g as subscribe, v as validate_component, a as add_attribute, e as each } from "../../../../../../chunks/ssr.js";
import { S as SubServiceHero, F as FaqSection } from "../../../../../../chunks/FaqSection.js";
import { C as ColumnTemplateSection } from "../../../../../../chunks/ColumnTemplateSection.js";
import { B as BasicTemplateSection } from "../../../../../../chunks/BasicTemplateSection.js";
import { r as routes, g as galleryRoutes } from "../../../../../../chunks/routes.js";
import { H as HeadingAccent } from "../../../../../../chunks/HeadingAccent.js";
import { i as isMobileStore } from "../../../../../../chunks/isMobileStore.js";
import { G as GalleryLinkBlock } from "../../../../../../chunks/GalleryLinkBlock.js";
const src = {
  sources: {
    avif: "/_app/immutable/assets/exterior-hardie-board-1.C9LR72Vk.avif 200w, /_app/immutable/assets/exterior-hardie-board-1.BP2Xa993.avif 400w",
    webp: "/_app/immutable/assets/exterior-hardie-board-1.So7ecRbF.webp 200w, /_app/immutable/assets/exterior-hardie-board-1.BL-SdGeB.webp 400w",
    png: "/_app/immutable/assets/exterior-hardie-board-1.CMi3El4J.png 200w, /_app/immutable/assets/exterior-hardie-board-1.Cdn2AquH.png 400w"
  },
  img: {
    src: "/_app/immutable/assets/exterior-hardie-board-1.Cdn2AquH.png",
    w: 400,
    h: 224
  }
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isMobileStore, $$unsubscribe_isMobileStore;
  $$unsubscribe_isMobileStore = subscribe(isMobileStore, (value) => $isMobileStore = value);
  const faqData = [
    {
      question: "What is Hardie Board siding?",
      answer: "Hardie Board is a fiber cement siding made by James Hardie. It combines the look of wood siding with far greater durability — it resists rot, pests, fire, and the freeze-thaw cycles that wear out other siding materials in the Chicago area."
    },
    {
      question: "Is Hardie Board a good choice for Chicago-area homes?",
      answer: "Yes — it's one of the best. Fiber cement handles our region's temperature swings, snow, and humidity far better than vinyl or wood, holding its appearance for decades with minimal upkeep."
    },
    {
      question: "How long does Hardie Board siding last?",
      answer: "With professional installation, Hardie Board siding routinely lasts 30 to 50 years. James Hardie backs its products with industry-leading warranties, and we back our installation with a 100% satisfaction guarantee."
    },
    {
      question: "Can you replace just part of my siding with Hardie Board?",
      answer: "Yes. We handle everything from full-home re-siding to replacing damaged sections, color-matched and blended with your existing exterior."
    },
    {
      question: "Do you paint the new siding as well?",
      answer: "We do. As exterior painting specialists, we can finish your new Hardie Board in any color you choose — one team handles the entire project from installation through final coat."
    },
    {
      question: "How much does Hardie Board installation cost?",
      answer: "Cost depends on the size of your home and the scope of the project. Every project starts with a free, written estimate that lays out your options and pricing clearly — no surprises."
    }
  ];
  $$unsubscribe_isMobileStore();
  return `${validate_component(SubServiceHero, "SubServiceHero").$$render(
    $$result,
    {
      data: {
        h1: "#1 Hardie Board Siding Installation Company",
        listItems: [
          "Fiber Cement Siding Experts",
          "High-Quality Materials",
          "Experienced Installers",
          "100% Satisfaction Guaranteed"
        ]
      }
    },
    {},
    {}
  )} ${validate_component(ColumnTemplateSection, "ColumnTemplateSection").$$render($$result, { class: "lg:pt-12 pt-4" }, {}, {
    "right-column": () => {
      return `<div slot="right-column" data-svelte-h="svelte-b5jbet"><h2>Upgrade Your Home with Hardie Board Siding</h2> <p>Hardie Board fiber cement siding gives your home the warmth of wood with the durability to
			stand up to decades of Chicagoland weather. At Klasek Painting, we install new Hardie Board
			siding and replace aging or damaged siding, transforming your home&#39;s exterior with a material
			built to last. From full re-siding projects to targeted replacement, our experienced team
			delivers a precise fit and a flawless finish.</p> <p>Ready to see what Hardie Board can do for your home? <a${add_attribute("href", routes["contact"].href, 0)}>Contact us</a> for a free design consultation and written estimate.</p></div>`;
    },
    "left-column": () => {
      return `<div slot="left-column" class="lg:row-start-1 row-start-2">${typeof src === "string" ? `<img class="w-full h-auto max-w-[500px] mx-auto bord rounded-lg"${add_attribute("src", src.img.src, 0)} alt="New Hardie board siding installation by Klasek Painting"${add_attribute("loading", $isMobileStore ? "lazy" : "eager", 0)}${add_attribute("width", src.img.w, 0)}${add_attribute("height", src.img.h, 0)}>` : `<picture>${each(Object.entries(src.sources), ([format, srcset]) => {
        return `<source${add_attribute("srcset", srcset, 0)}${add_attribute("type", "image/" + format, 0)}>`;
      })} <img class="w-full h-auto max-w-[500px] mx-auto bord rounded-lg"${add_attribute("src", src.img.src, 0)} alt="New Hardie board siding installation by Klasek Painting"${add_attribute("loading", $isMobileStore ? "lazy" : "eager", 0)}${add_attribute("width", src.img.w, 0)}${add_attribute("height", src.img.h, 0)}></picture>`}</div>`;
    }
  })} ${validate_component(BasicTemplateSection, "BasicTemplateSection").$$render($$result, { class: "bg-off-white" }, {}, {
    default: () => {
      return `${validate_component(HeadingAccent, "HeadingAccent").$$render($$result, { extend: true, class: "sm:w-fit" }, {}, {
        default: () => {
          return `<h2 data-svelte-h="svelte-y82adz">Why Homeowners Choose Hardie Board</h2>`;
        }
      })} <p data-svelte-h="svelte-1s7zfma">There&#39;s a reason Hardie Board is one of the most popular siding upgrades in the Chicago suburbs
		— it solves the problems other siding materials create:</p> <ul data-svelte-h="svelte-1lol2k"><li><strong>Built for our climate:</strong> fiber cement shrugs off freeze-thaw cycles, snow, and humidity
			that crack and warp lesser materials</li> <li><strong>Decades of service life:</strong> properly installed Hardie Board lasts 30–50 years, backed
			by industry-leading manufacturer warranties</li> <li><strong>Low maintenance:</strong> resists rot, pests, and fire — no constant scraping, patching,
			or worrying</li> <li><strong>Timeless curb appeal:</strong> crisp lines and a wide range of styles and colors that elevate
			any architecture, from historic homes to new construction</li> <li><strong>Lasting value:</strong> siding replacement consistently ranks among the highest-return exterior
			improvements you can make</li></ul>`;
    }
  })} ${validate_component(BasicTemplateSection, "BasicTemplateSection").$$render($$result, { class: "pb-0" }, {}, {
    default: () => {
      return `${validate_component(HeadingAccent, "HeadingAccent").$$render($$result, { extend: true, class: "sm:w-fit" }, {}, {
        default: () => {
          return `<h2 data-svelte-h="svelte-dr3awc">Our Hardie Board Installation Process</h2>`;
        }
      })} <p data-svelte-h="svelte-9sb0gu">Great siding starts with great installation. Fiber cement only delivers on its promise when it&#39;s
		fitted, fastened, and sealed correctly — and that&#39;s where our experience shows:</p> <ol data-svelte-h="svelte-1t55i7h"><li><strong>Free Consultation:</strong> we assess your current siding, walk you through style and color
			options, and provide a clear written estimate</li> <li><strong>Preparation:</strong> we remove old or damaged siding and make sure the structure beneath
			is sound before anything new goes up</li> <li><strong>Precision Installation:</strong> every board is cut, fitted, fastened, and flashed to James
			Hardie&#39;s specifications for a weather-tight exterior</li> <li><strong>Sealing &amp; Finishing:</strong> joints and edges are sealed, and trim is finished for clean
			lines around windows, doors, and corners</li> <li><strong>Final Walkthrough:</strong> we inspect every detail with you and don&#39;t call it done until
			you&#39;re completely satisfied</li></ol> <p data-svelte-h="svelte-1giuj0e">Because we&#39;re also <a${add_attribute("href", routes["hardie-painting"].href, 0)}>Hardie Board painting specialists</a>, one team can take your project from bare walls to a beautifully finished exterior. Already
		have Hardie siding that needs attention? See our
		<a${add_attribute("href", routes["hardie-repair"].href, 0)}>Hardie Board repair services</a>.</p> ${validate_component(GalleryLinkBlock, "GalleryLinkBlock").$$render(
        $$result,
        {
          data: [galleryRoutes["hardie-board"], galleryRoutes["siding-repair"]]
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
