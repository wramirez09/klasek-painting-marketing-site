import { c as create_ssr_component, v as validate_component, a as add_attribute, e as each } from "../../../../../../chunks/ssr.js";
import { S as SubServiceHero, F as FaqSection } from "../../../../../../chunks/FaqSection.js";
import { C as ColumnTemplateSection } from "../../../../../../chunks/ColumnTemplateSection.js";
import { B as BasicTemplateSection } from "../../../../../../chunks/BasicTemplateSection.js";
import { r as routes, g as galleryRoutes } from "../../../../../../chunks/routes.js";
import { H as HeadingAccent } from "../../../../../../chunks/HeadingAccent.js";
import { G as GalleryLinkBlock } from "../../../../../../chunks/GalleryLinkBlock.js";
const src = {
  sources: {
    avif: "/_app/immutable/assets/vinyl-siding-repair-service.BQsdArC0.avif 317w, /_app/immutable/assets/vinyl-siding-repair-service.CtUxU9ui.avif 633w",
    webp: "/_app/immutable/assets/vinyl-siding-repair-service.BH8cB_vK.webp 317w, /_app/immutable/assets/vinyl-siding-repair-service.DVn9QOnS.webp 633w",
    png: "/_app/immutable/assets/vinyl-siding-repair-service.B0wccCRc.png 317w, /_app/immutable/assets/vinyl-siding-repair-service.BV3Gcivv.png 633w"
  },
  img: {
    src: "/_app/immutable/assets/vinyl-siding-repair-service.BV3Gcivv.png",
    w: 633,
    h: 418
  }
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const faqData = [
    {
      question: "Can vinyl siding be repaired or does it need to be replaced entirely?",
      answer: "Vinyl siding can often be repaired without the need for complete replacement. Small cracks and damages can be fixed using vinyl adhesive or by replacing specific panels. A skilled siding contractor can assess the damage and recommend the best course of action."
    },
    {
      question: "How do I match the color of my existing siding for repairs?",
      answer: "Matching the color of your existing siding is crucial for a seamless look. Siding contractors often use color-matched replacement panels. They can also take a piece of your siding to paint stores for a perfect match using paint samples from various paint brands."
    },
    {
      question: "What causes damage to vinyl siding?",
      answer: "Vinyl siding can be damaged by various factors including extreme weather, impact from objects, and prolonged exposure to the sun. Mold and mildew growth can also cause deterioration. Regular maintenance and inspections can help prevent severe damage."
    },
    {
      question: "Can I paint over repaired vinyl siding?",
      answer: "Yes, you can paint over repaired vinyl siding. It's important to use high-quality acrylic paint that adheres well to vinyl. Professional siding contractors can help you choose the best paint brands and colors to match your home's exterior."
    },
    {
      question: "How does repairing vinyl siding improve curb appeal?",
      answer: "Repairing damaged vinyl siding enhances the overall appearance of your home, boosting curb appeal. Fixing cracks, replacing faded panels, and ensuring a consistent look with color-matched paint or panels can make a significant difference in your home's exterior."
    },
    {
      question: "What should I look for in a siding contractor for vinyl siding repair?",
      answer: "When choosing a siding contractor, look for experience, good reviews, and proper licensing and insurance. Reputable siding companies will provide detailed estimates, use high-quality materials, and offer a warranty on their work."
    },
    {
      question: "How do I prevent mold and mildew on vinyl siding?",
      answer: "To prevent mold and mildew, keep your vinyl siding clean and dry. Regularly clean the siding with a mild detergent and water, and ensure proper ventilation around your home. Trim back any vegetation that can trap moisture against the siding."
    },
    {
      question: "What is the average cost of vinyl siding repair?",
      answer: "The cost of vinyl siding repair varies based on the extent of the damage and the materials used. On average, homeowners can expect to pay between $300 and $1,000 for minor repairs. A siding contractor can provide a more accurate estimate after inspecting your home."
    },
    {
      question: "How long does it take to repair vinyl siding?",
      answer: "The time required for vinyl siding repair depends on the extent of the damage. Minor repairs can be completed in a few hours, while more extensive repairs may take a couple of days. Your siding contractor will give you a timeline based on your specific needs."
    },
    {
      question: "Can I perform vinyl siding repairs myself?",
      answer: "While minor repairs might be possible for DIY enthusiasts, it's generally recommended to hire a professional siding contractor. They have the expertise and tools needed to ensure the repairs are done correctly and match the existing siding, maintaining the integrity and appearance of your home's exterior."
    }
  ];
  return `${validate_component(SubServiceHero, "SubServiceHero").$$render(
    $$result,
    {
      data: {
        h1: "#1 Vinyl Siding Repair Service",
        listItems: [
          "Comprehensive Preparation",
          "High-Quality Materials",
          "Simple, Straight-Forward Pricing",
          "Long-Lasting Results"
        ]
      }
    },
    {},
    {}
  )} ${validate_component(ColumnTemplateSection, "ColumnTemplateSection").$$render($$result, { class: "lg:pt-12 pt-4" }, {}, {
    "right-column": () => {
      return `<div slot="right-column" data-svelte-h="svelte-1a1gz88"><h2>Restore Your Chicago Home&#39;s Vinyl Siding</h2> <p>Chicago&#39;s homes often feature original vinyl siding that requires repair and restoration. Over
			time, chipped paint and damaged siding can diminish your home&#39;s beauty and reduce its value.</p> <p>Beyond aesthetics, deteriorating siding can also impact energy efficiency and create a poor
			first impression. Klasek Painting is here to help you revitalize your home&#39;s exterior. Whether
			you need <a${add_attribute("href", routes["services"].href, 0)}>repairs, repainting, or staining,</a> our
			professional team delivers quality service backed by a satisfaction guarantee, ensuring your
			home looks beautiful and remains protected. <a${add_attribute("href", routes["contact"].href, 0)}>Contact us</a> to
			book your service now!</p></div>`;
    },
    "left-column": () => {
      return `<div slot="left-column" class="lg:order-first order-last">${typeof src === "string" ? `<img class="w-full h-auto bord rounded-lg max-w-[500px] mx-auto"${add_attribute("src", src.img.src, 0)} alt="Vinyl siding repair project by Klasek Painting"${add_attribute("width", src.img.w, 0)}${add_attribute("height", src.img.h, 0)}>` : `<picture>${each(Object.entries(src.sources), ([format, srcset]) => {
        return `<source${add_attribute("srcset", srcset, 0)}${add_attribute("type", "image/" + format, 0)}>`;
      })} <img class="w-full h-auto bord rounded-lg max-w-[500px] mx-auto"${add_attribute("src", src.img.src, 0)} alt="Vinyl siding repair project by Klasek Painting"${add_attribute("width", src.img.w, 0)}${add_attribute("height", src.img.h, 0)}></picture>`}</div>`;
    }
  })} ${validate_component(BasicTemplateSection, "BasicTemplateSection").$$render($$result, { class: "bg-off-white" }, {}, {
    default: () => {
      return `${validate_component(HeadingAccent, "HeadingAccent").$$render($$result, { extend: true, class: "sm:w-fit" }, {}, {
        default: () => {
          return `<h2 data-svelte-h="svelte-10n7e85">Preserve the Beauty of Your Vinyl Siding</h2>`;
        }
      })} <p data-svelte-h="svelte-1jvh54h">Vinyl siding is a popular choice for its durability and ease of maintenance, but over time, even
		the best materials can experience issues. Whether it&#39;s cracks, warping, or discoloration, Klasek
		Painting has the expertise to restore your vinyl siding to its original condition. We understand
		that damaged siding not only affects your home&#39;s appearance but can also lead to more serious
		problems if left unchecked.</p> <h3 data-svelte-h="svelte-18mmeog">What We Address:</h3> <ul data-svelte-h="svelte-16xe9mv"><li><strong>Cracks and Gaps:</strong> Prevent water infiltration and energy loss by sealing cracks
			and gaps in your siding</li> <li><strong>Warping and Buckling:</strong> Repair warping caused by heat or improper installation to
			restore a smooth, even surface</li> <li><strong>Discoloration:</strong> Match colors accurately to refresh faded or discolored areas, ensuring
			a consistent look across your home&#39;s exterior</li></ul> <h3 data-svelte-h="svelte-5uphke">Our Approach:</h3> <ol data-svelte-h="svelte-1qjrqzl"><li><strong>Detailed Assessment:</strong> We start with a thorough inspection to identify all areas
			needing attention</li> <li><strong>Seamless Repairs:</strong> Our team carefully matches the repair materials to your existing
			siding for a flawless finish</li> <li><strong>Final Inspection:</strong> We ensure that the repairs not only look great but also enhance
			the overall durability of your siding</li></ol> <p data-svelte-h="svelte-ayrzw0">Our professional painters are dedicated to providing excellent performance on every project.
		With years of experience, we ensure that your vinyl siding repairs are handled with the utmost
		care and precision. Klasek Painting proudly serves <a${add_attribute("href", routes["service-area"].href, 0)}>Cook County and the surrounding areas</a>, offering top-notch
		<a${add_attribute("href", routes["services"].href, 0)}>exterior painting and repair services</a> to keep your home looking
		its best. Trust us to deliver exceptional care and results for your vinyl siding.</p> ${validate_component(GalleryLinkBlock, "GalleryLinkBlock").$$render(
        $$result,
        {
          data: [galleryRoutes["past-projects"], galleryRoutes["siding-repair"]]
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
