import { c as create_ssr_component, g as subscribe, v as validate_component, a as add_attribute, e as each } from "../../../../../../chunks/ssr.js";
import { S as SubServiceHero, F as FaqSection } from "../../../../../../chunks/FaqSection.js";
import { C as ColumnTemplateSection } from "../../../../../../chunks/ColumnTemplateSection.js";
import { B as BasicTemplateSection } from "../../../../../../chunks/BasicTemplateSection.js";
import { H as HeadingAccent } from "../../../../../../chunks/HeadingAccent.js";
import { s as src } from "../../../../../../chunks/hardie-board-siding-repair-service.js";
import { i as isMobileStore } from "../../../../../../chunks/isMobileStore.js";
import { G as GalleryLinkBlock } from "../../../../../../chunks/GalleryLinkBlock.js";
import { g as galleryRoutes } from "../../../../../../chunks/routes.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isMobileStore, $$unsubscribe_isMobileStore;
  $$unsubscribe_isMobileStore = subscribe(isMobileStore, (value) => $isMobileStore = value);
  const faqData = [
    {
      question: "What makes Hardie Board different from wood siding?",
      answer: "Hardie Board, or fiber cement siding, is more durable and requires less maintenance than traditional wood siding."
    },
    {
      question: "How long does a Hardie Board repair project usually take?",
      answer: "The duration of a Hardie Board siding repair project depends on the extent of the damage, but we aim to make it as hassle-free and quick as possible."
    },
    {
      question: "Can you match the paint color of my existing Hardie Board siding?",
      answer: "Yes, we can match the paint color to ensure the repaired area blends seamlessly with your existing siding material."
    },
    {
      question: "What are the benefits of choosing Hardie Board over vinyl siding?",
      answer: "Hardie Board offers superior durability and a longer lifespan compared to vinyl siding, making it a great long-term investment."
    },
    {
      question: "What types of siding do you work with besides Hardie Board?",
      answer: "We work with various siding options, including vinyl siding and wood siding, to suit different needs and preferences."
    },
    {
      question: "How do you ensure a hassle-free repair process?",
      answer: "We use our years of experience and detailed planning to provide efficient and hassle-free repair work, keeping disruptions to a minimum."
    },
    {
      question: "What is Hardie Board made of?",
      answer: "Hardie Board is made from a mix of cellulose fibers, cement, and sand, making it a sturdy and reliable siding material."
    },
    {
      question: "Do you offer both repair and replacement services for Hardie Board siding?",
      answer: "Yes, we provide both repair and replacement services, depending on the condition of your siding and your specific needs."
    },
    {
      question: "How do you handle customer service during a siding project?",
      answer: "We prioritize excellent customer service, keeping you informed and involved throughout your siding project to ensure satisfaction."
    },
    {
      question: "Why should I choose your team for Hardie Board repair?",
      answer: "With our expertise in James Hardie fiber cement siding and years of experience, we deliver top-notch repair work and reliable results for every siding project."
    }
  ];
  $$unsubscribe_isMobileStore();
  return `${validate_component(SubServiceHero, "SubServiceHero").$$render(
    $$result,
    {
      data: {
        h1: "#1 Hardie Board Repair Service",
        listItems: [
          "100% Satisfaction Guaranteed",
          "Clear Communication",
          "Long-Lasting Results",
          "Simple, Straight-Forward Pricing"
        ]
      }
    },
    {},
    {}
  )} ${validate_component(ColumnTemplateSection, "ColumnTemplateSection").$$render($$result, { class: "lg:pt-12 pt-4" }, {}, {
    "right-column": () => {
      return `<div slot="right-column" data-svelte-h="svelte-6hd37j"><h2>Comprehensive Hardie Siding Solutions</h2> <p>Hardie Board siding is a popular choice for its exceptional durability and stylish appearance,
			but even the best materials may need attention over time. At Klasek Painting, we specialize in
			both the repair and maintenance of Hardie siding, ensuring your home stays protected and looks
			its best. Our team brings extensive experience and expertise to every project, addressing
			issues with precision and care to restore the integrity of your siding and enhance your home&#39;s
			curb appeal.</p></div>`;
    },
    "left-column": () => {
      return `<div slot="left-column" class="lg:row-start-1 row-start-2">${typeof src === "string" ? `<img class="bord rounded-lg max-w-[500px] mx-auto w-full h-auto"${add_attribute("src", src.img.src, 0)} alt="White paint Hardie board siding"${add_attribute("loading", $isMobileStore ? "lazy" : "eager", 0)}${add_attribute("width", src.img.w, 0)}${add_attribute("height", src.img.h, 0)}>` : `<picture>${each(Object.entries(src.sources), ([format, srcset]) => {
        return `<source${add_attribute("srcset", srcset, 0)}${add_attribute("type", "image/" + format, 0)}>`;
      })} <img class="bord rounded-lg max-w-[500px] mx-auto w-full h-auto"${add_attribute("src", src.img.src, 0)} alt="White paint Hardie board siding"${add_attribute("loading", $isMobileStore ? "lazy" : "eager", 0)}${add_attribute("width", src.img.w, 0)}${add_attribute("height", src.img.h, 0)}></picture>`}</div>`;
    }
  })} ${validate_component(BasicTemplateSection, "BasicTemplateSection").$$render($$result, { class: "bg-off-white" }, {}, {
    default: () => {
      return `${validate_component(HeadingAccent, "HeadingAccent").$$render($$result, { extend: true, class: "sm:w-fit" }, {}, {
        default: () => {
          return `<h2 data-svelte-h="svelte-y14xxn">Our Hardie Board Repair Process</h2>`;
        }
      })} <p data-svelte-h="svelte-6ssg6h">Hardie Board, also known as fiber cement siding, is a popular choice for homes in our area due
		to its durability and stylish appearance. It&#39;s designed to withstand harsh weather conditions
		and requires minimal maintenance. With so many homes featuring Hardie Board, knowing how to
		properly repair it is essential.</p> <strong class="-mb-2" data-svelte-h="svelte-1nasl0e">Our Repair Process:</strong> <ol data-svelte-h="svelte-3ik3zo"><li><strong>Inspection:</strong> We start with a thorough inspection to assess the damage and identify
			any underlying issues.</li> <li><strong>Preparation:</strong> Next, we prepare the area by removing damaged sections and cleaning
			the surface.</li> <li><strong>Repair:</strong> We replace damaged boards with new Hardie Boards, ensuring a perfect fit
			and secure installation.</li> <li><strong>Sealing:</strong> We seal the joints and edges to protect against moisture and ensure a
			smooth finish.</li> <li><strong>Painting:</strong> Finally, we paint the repaired area to match your existing siding, leaving
			your home looking as good as new.</li></ol> <p data-svelte-h="svelte-bk37ei">With our extensive experience and attention to detail, we are the experts you can trust for
		Hardie Board repairs. Our skilled team is dedicated to providing top-quality service, ensuring
		your home stays protected and looking great. Let us handle your repairs for a seamless and
		hassle-free experience.</p> ${validate_component(GalleryLinkBlock, "GalleryLinkBlock").$$render(
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
