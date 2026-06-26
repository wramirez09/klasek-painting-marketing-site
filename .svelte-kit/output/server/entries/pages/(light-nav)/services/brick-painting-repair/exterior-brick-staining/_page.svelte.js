import { c as create_ssr_component, v as validate_component, a as add_attribute, e as each } from "../../../../../../chunks/ssr.js";
import { S as SubServiceHero, F as FaqSection } from "../../../../../../chunks/FaqSection.js";
import { C as ColumnTemplateSection } from "../../../../../../chunks/ColumnTemplateSection.js";
import { B as BasicTemplateSection } from "../../../../../../chunks/BasicTemplateSection.js";
import { r as routes, b as serviceRoutes, g as galleryRoutes } from "../../../../../../chunks/routes.js";
import { H as HeadingAccent } from "../../../../../../chunks/HeadingAccent.js";
import { G as GalleryLinkBlock } from "../../../../../../chunks/GalleryLinkBlock.js";
const src = {
  sources: {
    avif: "/_app/immutable/assets/exterior-brick-staining-service.3J0QLfda.avif 356w, /_app/immutable/assets/exterior-brick-staining-service.C4FHCkaW.avif 711w",
    webp: "/_app/immutable/assets/exterior-brick-staining-service.h-Qiemtb.webp 356w, /_app/immutable/assets/exterior-brick-staining-service.PfdG0eBC.webp 711w",
    png: "/_app/immutable/assets/exterior-brick-staining-service.DQ2mQLGK.png 356w, /_app/immutable/assets/exterior-brick-staining-service.1MaXCLVY.png 711w"
  },
  img: {
    src: "/_app/immutable/assets/exterior-brick-staining-service.1MaXCLVY.png",
    w: 711,
    h: 416
  }
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const faqData = [
    {
      question: "How does brick stain work?",
      answer: "When stain is applied to brick, it gets absorbed into the surface, similar to how wood stain is absorbed into wood. Brick stain also works on stone and, unlike paint, it won't peel or chip away."
    },
    {
      question: "Can brick stain match existing brick or create a new look?",
      answer: "Yes, brick stain can match existing brick or create a new look. If you're unsure about the color, it's a good idea to get a few different samples and test them on loose bricks or in a hidden spot since bricks absorb the color."
    },
    {
      question: "Does brick stain have a strong odor, and can it be applied in winter?",
      answer: "Brick stain does not have a strong odor, so there's no need to leave the house during application. It can be applied in winter as long as the temperature isn't too low. Be sure to follow the temperature guidelines on the can."
    },
    {
      question: "Should I stain the mortar when staining bricks?",
      answer: "Yes, it's important to stain the mortar to match the newly stained brick for a consistent and even look. The same applies if you're painting brick or stone."
    },
    {
      question: "Can I stain bricks that are covered with a non-porous sealant?",
      answer: "No, you can't stain bricks covered with a non-porous sealant like paint or varnish because the pores are closed, preventing the stain from penetrating. In this case, you can paint the bricks instead."
    },
    {
      question: "How is the cost of brick staining determined?",
      answer: "The cost of brick staining depends on the job and contractor. Some contractors charge by the square foot, while others charge by the day or half-day. It's important to contact a trustworthy contractor who will give you a fair deal."
    },
    {
      question: "Is it difficult to remove brick stain once applied?",
      answer: "Yes, brick stain is designed to be absorbed into the brick and mortar, making it difficult to remove. If you want to change the color later, you may need to apply a coat of paint over the stained brick."
    },
    {
      question: "How long does it take for brick stain to dry completely?",
      answer: "The drying time for brick stain can vary depending on the product and environmental conditions, but it typically takes 24 to 48 hours to dry completely. Make sure to follow the manufacturer's instructions for the best results."
    },
    {
      question: "What are the steps to stain brick?",
      answer: "Staining brick involves several steps: 1) Clean the brick thoroughly to remove dirt and grime. 2) Test the stain on a small, hidden area. 3) Apply the stain evenly with a brush or sprayer. 4) Allow the stain to dry completely. 5) Repeat the application if necessary for a deeper color."
    }
  ];
  return `${validate_component(SubServiceHero, "SubServiceHero").$$render(
    $$result,
    {
      data: {
        h1: "#1 Exterior Brick Staining Company",
        listItems: [
          "Curb Appeal Boost",
          "Attention to Detail",
          "100% Satisfaction Guaranteed",
          "High-quality Materials"
        ]
      }
    },
    {},
    {}
  )} ${validate_component(ColumnTemplateSection, "ColumnTemplateSection").$$render($$result, { class: "lg:pt-12 pt-4" }, {}, {
    "right-column": () => {
      return `<div slot="right-column" data-svelte-h="svelte-1x3531d"><h2>Most Trusted Brick Staining Services</h2> <p>Exterior brick staining is an excellent way to refresh and modernize the look of your home
			while preserving the natural texture of the brick. Unlike <a${add_attribute("href", routes["brick-painting"].href, 0)}>painting brick</a>, staining penetrates the brick surface, providing a more natural and long-lasting finish. At
			Klasek Painting, we specialize in exterior brick staining, offering a variety of color options
			to enhance your home&#39;s curb appeal. Whether your home has traditional or contemporary
			architecture, our team can tailor the staining process to suit your style.</p></div>`;
    },
    "left-column": () => {
      return `<div slot="left-column" class="lg:order-first order-last">${typeof src === "string" ? `<img class="w-full h-auto max-w-[500px] mx-auto bord rounded-lg"${add_attribute("src", src.img.src, 0)} alt="Halfway complete brick staining project, white stain on brick house by Klasek Painting"${add_attribute("width", src.img.w, 0)}${add_attribute("height", src.img.h, 0)}>` : `<picture>${each(Object.entries(src.sources), ([format, srcset]) => {
        return `<source${add_attribute("srcset", srcset, 0)}${add_attribute("type", "image/" + format, 0)}>`;
      })} <img class="w-full h-auto max-w-[500px] mx-auto bord rounded-lg"${add_attribute("src", src.img.src, 0)} alt="Halfway complete brick staining project, white stain on brick house by Klasek Painting"${add_attribute("width", src.img.w, 0)}${add_attribute("height", src.img.h, 0)}></picture>`}</div>`;
    }
  })} ${validate_component(BasicTemplateSection, "BasicTemplateSection").$$render($$result, { class: "bg-off-white" }, {}, {
    default: () => {
      return `${validate_component(HeadingAccent, "HeadingAccent").$$render($$result, { extend: true, class: "sm:w-fit" }, {}, {
        default: () => {
          return `<h2 data-svelte-h="svelte-1xyu9xg">Materials Needed For Staining Exterior Brick</h2>`;
        }
      })} <p data-svelte-h="svelte-5iflv5">Staining exterior brick requires specific materials to achieve a uniform and durable finish.</p> <h3 data-svelte-h="svelte-1761fum">Here are the essential materials we use:</h3> <ul data-svelte-h="svelte-96v8x6"><li><strong>Brick Cleaner:</strong> To thoroughly clean the brick and remove any dirt, mildew, or efflorescence</li> <li><strong>Brick Stain:</strong> High-quality stain designed specifically for masonry surfaces</li> <li><strong>Sealant:</strong> A weather-resistant sealant to protect the stained brick from moisture
			and other elements</li> <li><strong>Brushes and Rollers:</strong> For applying the stain evenly and reaching all the brick&#39;s
			nooks and crannies</li> <li><strong>Drop Cloths and Tape:</strong> To protect surrounding areas and ensure a clean, professional
			finish</li></ul> <p data-svelte-h="svelte-11mmtq6">Using the right materials is crucial for achieving a beautiful and durable stained brick finish.
		At Klasek Painting, we ensure that every product we use meets the highest standards of quality.
		This attention to detail helps us deliver results that not only look stunning but also stand up
		to the test of time.</p>`;
    }
  })} ${validate_component(BasicTemplateSection, "BasicTemplateSection").$$render($$result, { class: "pb-0" }, {}, {
    default: () => {
      return `${validate_component(HeadingAccent, "HeadingAccent").$$render($$result, { extend: true, class: "sm:w-fit" }, {}, {
        default: () => {
          return `<h2 data-svelte-h="svelte-1985lz5">Our Brick Staining Process</h2>`;
        }
      })} <p data-svelte-h="svelte-1l6p2j0">At Klasek Painting, we follow a meticulous process to ensure that your exterior brick staining
		project is completed to the highest standard.</p> <h3 data-svelte-h="svelte-z2m20v">Here&#39;s how we achieve outstanding results:</h3> <ol data-svelte-h="svelte-gvpp0d"><li><strong>Initial Consultation:</strong> We start with a
			<a${add_attribute("href", serviceRoutes["design-consultation"].href, 0)}>comprehensive consultation</a> to understand
			your vision and assess the condition of your brick. This includes selecting the perfect stain color
			to complement your home&#39;s architecture.</li> <li><strong>Surface Cleaning:</strong> Proper surface preparation is essential. We clean the brick
			thoroughly using a specialized brick cleaner to remove dirt, mildew, and efflorescence, ensuring
			the stain adheres properly.</li> <li><strong>Stain Application:</strong> We apply the high-quality brick stain using brushes and rollers,
			ensuring even coverage and penetration into the brick. Multiple coats may be applied to achieve
			the desired color and depth.</li> <li><strong>Sealing:</strong> After the stain has dried, we apply a weather-resistant sealant to protect
			the brick from moisture and other elements, ensuring a long-lasting finish.</li> <li><strong>Final Inspection:</strong> We conduct a detailed final inspection to ensure the staining
			is flawless and meets your expectations. Our team checks for consistency, coverage, and overall
			quality to guarantee complete satisfaction.</li></ol> <p data-svelte-h="svelte-1ron7pn">Our professional painters are dedicated to providing excellent performance on every project.
		With years of experience, we ensure that your exterior brick staining is handled with the utmost
		care and precision. Klasek Painting proudly serves Cook County and the surrounding areas,
		offering top-notch exterior brick staining services to enhance your home&#39;s appearance and
		durability. Trust us to deliver exceptional care and results for your brick staining project.</p> ${validate_component(GalleryLinkBlock, "GalleryLinkBlock").$$render($$result, { data: [galleryRoutes["brick-painting"]] }, {}, {})}`;
    }
  })} ${validate_component(FaqSection, "FaqSection").$$render($$result, { faqData }, {}, {})}`;
});
export {
  Page as default
};
