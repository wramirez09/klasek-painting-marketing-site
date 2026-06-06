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
    avif: "/_app/immutable/assets/aluminum-siding-repair-service.e_F8kGC-.avif 301w, /_app/immutable/assets/aluminum-siding-repair-service.DOz1DB4e.avif 602w",
    webp: "/_app/immutable/assets/aluminum-siding-repair-service.Bk2DfLLD.webp 301w, /_app/immutable/assets/aluminum-siding-repair-service.DG3oCdfR.webp 602w",
    png: "/_app/immutable/assets/aluminum-siding-repair-service.CD_s_yvz.png 301w, /_app/immutable/assets/aluminum-siding-repair-service.DZIYrh8z.png 602w"
  },
  img: {
    src: "/_app/immutable/assets/aluminum-siding-repair-service.DZIYrh8z.png",
    w: 602,
    h: 429
  }
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isMobileStore, $$unsubscribe_isMobileStore;
  $$unsubscribe_isMobileStore = subscribe(isMobileStore, (value) => $isMobileStore = value);
  const faqData = [
    {
      question: "What common issues with aluminum siding need repair?",
      answer: "Aluminum siding can get dents, scratches, and fade over time due to weather and regular wear and tear. Heat treatment can sometimes cause the siding to warp. These problems often need fixing to keep your siding looking good and protecting your home. Regular check-ups can help spot and fix issues early."
    },
    {
      question: "How does aluminum siding hold up compared to vinyl siding?",
      answer: "Both aluminum and vinyl siding are durable, but they handle the elements differently. Aluminum siding can get dented and scratched more easily but is resistant to fire and insects. Vinyl siding is less likely to dent but can become brittle in very cold weather. Your choice depends on your home's needs and the local climate."
    },
    {
      question: "What types of siding are available, and how do I pick the right one?",
      answer: "You have many options, including aluminum, vinyl, and wood siding. Aluminum siding is budget-friendly and low-maintenance, while vinyl siding comes in many colors and textures. Wood siding looks natural but needs more upkeep. Consider durability, maintenance, appearance, and budget when choosing."
    },
    {
      question: "Why should I hire a professional siding contractor for repairs?",
      answer: "A professional siding contractor ensures the job is done right and safely. They know how to work with different siding materials like aluminum and vinyl and can spot issues you might miss. Plus, they can give you tips on maintaining your siding to avoid future damage."
    },
    {
      question: "How is aluminum siding repaired?",
      answer: "Repairing aluminum siding involves cleaning the damaged area, removing the damaged part, and replacing it with new siding. Minor damage like small dents or scratches can be fixed with special tools or fillers. For bigger issues, a contractor might need to replace larger sections. Heat treatment can help straighten warped siding."
    },
    {
      question: "How can I protect my home's aluminum siding from damage?",
      answer: "Regular maintenance is key to protecting your home's aluminum siding. Clean it periodically, check for wear and tear, and fix any damage right away. Using a high-quality paint, like from Benjamin Moore, can also help protect the siding from weather and extend its life."
    },
    {
      question: "What affects the cost of aluminum siding repair?",
      answer: "The cost of repairing aluminum siding depends on the extent of the damage, the grade of aluminum, and the labor needed. It also varies based on whether the siding needs painting after the repair and the materials required. Getting quotes from a few contractors can help you find a cost-effective option."
    },
    {
      question: "Can aluminum siding be painted, and what paint should be used?",
      answer: "Yes, you can paint aluminum siding to refresh its look or change its color. Use high-quality paint designed for metal surfaces, like those from Benjamin Moore. Proper preparation, including cleaning and priming, is important for good adhesion and a lasting finish."
    },
    {
      question: "How does the aluminum grade affect the repair process?",
      answer: "The grade of aluminum in your siding can influence the repair process. Higher-grade aluminum is usually more durable and may need different repair techniques than lower-grade aluminum. A professional contractor can determine the best approach based on the aluminum grade."
    },
    {
      question: "What are the benefits of aluminum siding over other types of siding?",
      answer: "Aluminum siding is lightweight, fire-resistant, and low-maintenance. It's also a cost-effective option compared to some other types of siding. Plus, it can be painted for a fresh look. While it's more prone to dents than vinyl siding, its durability and easy repair make it a popular choice for many homeowners."
    }
  ];
  $$unsubscribe_isMobileStore();
  return `${validate_component(SubServiceHero, "SubServiceHero").$$render(
    $$result,
    {
      data: {
        h1: "#1 Aluminum Siding Repair Service",
        listItems: [
          "Attention to Detail",
          "Curb Appeal Boost",
          "High-Quality Materials",
          "100% Satisfaction Guaranteed"
        ]
      }
    },
    {},
    {}
  )} ${validate_component(ColumnTemplateSection, "ColumnTemplateSection").$$render($$result, { class: "lg:pt-12 pt-4" }, {}, {
    "left-column": () => {
      return `<div slot="left-column" data-svelte-h="svelte-ncp8k"><h2>Repairing Aluminum Siding</h2> <p>Aluminum siding is a popular choice for many homeowners due to its durability and low
			maintenance. However, over time, it can become dented, scratched, or weathered. At Klasek
			Painting, we specialize in repairing aluminum siding to restore its appearance and
			functionality. Our skilled team has the expertise to handle all types of aluminum siding
			repairs, ensuring your home looks its best and is well-protected from the elements.</p></div>`;
    },
    "right-column": () => {
      return `<div slot="right-column">${typeof src === "string" ? `<img class="w-full h-auto bord rounded-lg max-w-[500px] mx-auto"${add_attribute("src", src.img.src, 0)} alt="Aluminum siding house with fresh coat of paint"${add_attribute("loading", $isMobileStore ? "lazy" : "eager", 0)}${add_attribute("width", src.img.w, 0)}${add_attribute("height", src.img.h, 0)}>` : `<picture>${each(Object.entries(src.sources), ([format, srcset]) => {
        return `<source${add_attribute("srcset", srcset, 0)}${add_attribute("type", "image/" + format, 0)}>`;
      })} <img class="w-full h-auto bord rounded-lg max-w-[500px] mx-auto"${add_attribute("src", src.img.src, 0)} alt="Aluminum siding house with fresh coat of paint"${add_attribute("loading", $isMobileStore ? "lazy" : "eager", 0)}${add_attribute("width", src.img.w, 0)}${add_attribute("height", src.img.h, 0)}></picture>`}</div>`;
    }
  })} ${validate_component(BasicTemplateSection, "BasicTemplateSection").$$render($$result, { class: "bg-off-white" }, {}, {
    default: () => {
      return `${validate_component(HeadingAccent, "HeadingAccent").$$render($$result, { extend: true, class: "sm:w-fit" }, {}, {
        default: () => {
          return `<h2 data-svelte-h="svelte-em99o6">Our Expert Aluminum Siding Repair Process</h2>`;
        }
      })} <p data-svelte-h="svelte-1ul3vuz">At Klasek Painting, we follow a thorough and precise process to repair your aluminum siding,
		ensuring a flawless finish and long-lasting results. Here&#39;s how we do it:</p> <ol data-svelte-h="svelte-slwme5"><li><strong>Initial Inspection:</strong> We start with a detailed inspection of your aluminum siding
			to identify any damage and assess the extent of the repairs needed.</li> <li><strong>Surface Cleaning:</strong> We clean the siding thoroughly using a specialized aluminum
			siding cleaner to remove dirt, mildew, and oxidation.</li> <li><strong>Dent and Damage Repair:</strong> Small dents are carefully smoothed out using sandpaper
			and scrapers. For larger damages, we replace the affected panels with matching aluminum siding.</li> <li><strong>Priming:</strong> We apply a high-quality metal primer to the repaired areas, ensuring
			excellent paint adhesion and long-lasting protection.</li> <li><strong>Sealing:</strong> We use weather-resistant sealant to fill any gaps and prevent moisture
			infiltration, protecting your home from water damage.</li> <li><strong>Painting:</strong> Finally, we touch up the repaired areas with high-quality paint that
			matches the existing siding color, ensuring a seamless and cohesive appearance.</li></ol> <p data-svelte-h="svelte-73nc75">Our professional painters are dedicated to providing excellent performance on every project.
		With years of experience, we ensure that your aluminum siding repairs are handled with the
		utmost care and precision. Klasek Painting proudly serves <a${add_attribute("href", routes["service-area"].href, 0)}>Cook County and the surrounding areas,</a>
		offering top-notch aluminum siding repair services to keep your home looking its best.
		<a${add_attribute("href", routes["contact"].href, 0)}>Contact us</a> today to schedule your repair!</p> ${validate_component(GalleryLinkBlock, "GalleryLinkBlock").$$render(
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
