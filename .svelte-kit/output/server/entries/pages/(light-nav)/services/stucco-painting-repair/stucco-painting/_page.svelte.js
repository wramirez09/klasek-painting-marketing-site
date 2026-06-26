import { c as create_ssr_component, g as subscribe, v as validate_component, a as add_attribute, e as each } from "../../../../../../chunks/ssr.js";
import { S as SubServiceHero, F as FaqSection } from "../../../../../../chunks/FaqSection.js";
import { E as EmailSignup } from "../../../../../../chunks/EmailSignup.js";
import { C as ColumnTemplateSection } from "../../../../../../chunks/ColumnTemplateSection.js";
import { B as BasicTemplateSection } from "../../../../../../chunks/BasicTemplateSection.js";
import { r as routes, b as serviceRoutes, g as galleryRoutes } from "../../../../../../chunks/routes.js";
import { H as HeadingAccent } from "../../../../../../chunks/HeadingAccent.js";
import { i as isMobileStore } from "../../../../../../chunks/isMobileStore.js";
import { G as GalleryLinkBlock } from "../../../../../../chunks/GalleryLinkBlock.js";
const src = {
  sources: {
    avif: "/_app/immutable/assets/exterior-stucco-painting-service.C5WJG5eC.avif 285w, /_app/immutable/assets/stucco-feature.DjbCYtpG.avif 569w",
    webp: "/_app/immutable/assets/exterior-stucco-painting-service.DM0Cd0m4.webp 285w, /_app/immutable/assets/exterior-stucco-painting-service.CUeHgcoi.webp 569w",
    png: "/_app/immutable/assets/exterior-stucco-painting-service.BcyiEkRL.png 285w, /_app/immutable/assets/exterior-stucco-painting-service.yT46RlRe.png 569w"
  },
  img: {
    src: "/_app/immutable/assets/exterior-stucco-painting-service.yT46RlRe.png",
    w: 569,
    h: 455
  }
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isMobileStore, $$unsubscribe_isMobileStore;
  $$unsubscribe_isMobileStore = subscribe(isMobileStore, (value) => $isMobileStore = value);
  const faqData = [
    {
      question: "What type of paint is best for exterior stucco?",
      answer: "High-quality acrylic latex paint is the best for exterior stucco. It provides a durable, flexible, and water-resistant coat of paint that adheres well to stucco's porous surface."
    },
    {
      question: "What are the drying times for stucco paint?",
      answer: "The drying times for stucco paint depend on weather conditions but generally range from 4 to 6 hours for the paint to be dry to the touch. Full curing can take up to 30 days."
    },
    {
      question: "How do I prepare stucco for painting?",
      answer: "Proper prep work is essential. This includes cleaning the surface with soap and water, repairing any cracks, and applying a primer to ensure the paint adheres well to the porous surface."
    },
    {
      question: "What are the best painting techniques for stucco?",
      answer: "Spray painting is a common technique for stucco because it provides even coverage. However, brush and roller methods can also be effective, especially for detailed work."
    },
    {
      question: "Can stucco be painted in a wide range of colors?",
      answer: "Yes, stucco can be painted in a wide range of colors. High-quality paint allows for vibrant and long-lasting color options."
    },
    {
      question: "How does weather affect stucco painting?",
      answer: "Weather significantly impacts stucco painting. It's best to paint in mild, dry conditions to ensure optimal drying times and adhesion."
    },
    {
      question: "Is painted stucco easy to maintain?",
      answer: "Painted stucco is relatively easy to maintain. Regular cleaning with soap and water helps keep the surface looking fresh."
    },
    {
      question: "How often should exterior stucco be painted?",
      answer: "Exterior stucco should be painted every 5 to 10 years, depending on the quality of the previous paint job and environmental factors."
    },
    {
      question: "Why is it important to use a primer on stucco?",
      answer: "Using a primer on stucco is crucial because it seals the porous surface, ensuring better paint adhesion and a more even finish."
    }
  ];
  $$unsubscribe_isMobileStore();
  return `${validate_component(SubServiceHero, "SubServiceHero").$$render(
    $$result,
    {
      data: {
        h1: "#1 Stucco Painting Company",
        listItems: [
          "Free Design & Consultation",
          "Detailed Prep Work",
          "Experienced Painters",
          "Durable Finishes"
        ]
      }
    },
    {},
    {}
  )} ${validate_component(EmailSignup, "EmailSignup").$$render($$result, {}, {}, {})} ${validate_component(ColumnTemplateSection, "ColumnTemplateSection").$$render($$result, { class: "lg:pt-12 pt-4" }, {}, {
    "right-column": () => {
      return `<div slot="right-column" data-svelte-h="svelte-128tg1l"><h2>Reliable Stucco Painting Services</h2> <p>Stucco painting is an excellent way to refresh and protect the exterior of
      homes with stucco finishes. This type of painting is commonly found on
      Spanish, Mediterranean, and Southwestern-style homes, providing a unique
      and attractive appearance. At Klasek Painting, we specialize in stucco
      painting, ensuring that your home&#39;s exterior remains beautiful and
      well-protected against the elements. Our skilled team is experienced in
      handling all types of stucco surfaces, guaranteeing a flawless and durable
      finish.</p> <p>Interested in revitalizing your stucco exterior? <a${add_attribute("href", routes["contact"].href, 0)}>Contact us</a> today to discuss your project with our expert painters.</p></div>`;
    },
    "left-column": () => {
      return `<div slot="left-column" class="lg:row-start-1 row-start-2">${typeof src === "string" ? `<img class="w-full h-auto max-w-[500px] bord rounded-lg"${add_attribute("src", src.img.src, 0)} alt="White exterior stucco painting project in progress by Klasek Painting"${add_attribute("loading", $isMobileStore ? "lazy" : "eager", 0)}${add_attribute("width", src.img.w, 0)}${add_attribute("height", src.img.h, 0)}>` : `<picture>${each(Object.entries(src.sources), ([format, srcset]) => {
        return `<source${add_attribute("srcset", srcset, 0)}${add_attribute("type", "image/" + format, 0)}>`;
      })} <img class="w-full h-auto max-w-[500px] bord rounded-lg"${add_attribute("src", src.img.src, 0)} alt="White exterior stucco painting project in progress by Klasek Painting"${add_attribute("loading", $isMobileStore ? "lazy" : "eager", 0)}${add_attribute("width", src.img.w, 0)}${add_attribute("height", src.img.h, 0)}></picture>`}</div>`;
    }
  })} ${validate_component(BasicTemplateSection, "BasicTemplateSection").$$render($$result, { class: "bg-off-white" }, {}, {
    default: () => {
      return `${validate_component(HeadingAccent, "HeadingAccent").$$render($$result, { extend: true, class: "sm:w-fit" }, {}, {
        default: () => {
          return `<h2 data-svelte-h="svelte-5r9ci7">How We Prepare for Stucco Painting</h2>`;
        }
      })} <p data-svelte-h="svelte-im1ken">Proper preparation is essential for a successful stucco painting project. At
    Klasek Painting, we are dedicated to providing exceptional <a${add_attribute("href", serviceRoutes["stucco-painting-repair"].href, 0)}>stucco painting and repair services</a>. Our meticulous preparation process ensures that your stucco surface is
    ready for a flawless paint job.</p> <h3 data-svelte-h="svelte-j4r2ir">Here&#39;s a detailed look at the process:</h3> <ol data-svelte-h="svelte-1na44ip"><li><strong>Initial Inspection:</strong> We begin with a thorough inspection of
      the stucco surface to identify any cracks, holes, or areas that need repair.</li> <li><strong>Cleaning:</strong> The stucco is cleaned using a power washer to remove
      dirt, mold, and loose particles. This step ensures that the paint adheres properly
      to the surface.</li> <li><strong>Repairing Cracks and Holes:</strong> Any cracks or holes in the stucco
      are filled with a high-quality stucco patching compound. This helps to create
      a smooth and even surface for painting.</li> <li><strong>Surface Priming:</strong> We apply a specialized primer designed for
      stucco surfaces. This primer helps the paint adhere better and provides a more
      uniform finish.</li> <li><strong>Masking and Covering:</strong> We cover windows, doors, and other areas
      that should not be painted. This step ensures clean lines and protects your
      home&#39;s features from paint splatters.</li> <li><strong>Final Inspection:</strong> Before painting, we conduct a final inspection
      to ensure that all repairs are complete and the surface is perfectly prepared
      for painting.</li></ol>`;
    }
  })} ${validate_component(BasicTemplateSection, "BasicTemplateSection").$$render($$result, { class: "pb-0" }, {}, {
    default: () => {
      return `${validate_component(HeadingAccent, "HeadingAccent").$$render($$result, { extend: true, class: "sm:w-fit" }, {}, {
        default: () => {
          return `<h2 data-svelte-h="svelte-1oqnc0d">Our Painting Process</h2>`;
        }
      })} <p data-svelte-h="svelte-1yd0502">At Klasek Painting, we believe that achieving exceptional results starts
    with a meticulous process and the highest quality materials. Our goal is to
    ensure your stucco looks fantastic and is protected against the elements.</p> <h3 data-svelte-h="svelte-z2m20v">Here&#39;s how we achieve outstanding results:</h3> <ol data-svelte-h="svelte-fz01zo"><li><strong>Initial Consultation:</strong> We begin with a thorough consultation
      to understand your needs and preferences. This includes a detailed inspection
      of your stucco to identify any areas that need special attention or repair.</li> <li><strong>Surface Preparation:</strong> Proper preparation is key to a successful
      stucco painting project. We clean the surface thoroughly to remove dirt, mildew,
      and any loose or flaking paint. This ensures that the new paint will adhere
      properly and look smooth.</li> <li><strong>Priming:</strong> For stucco, we use a specialized primer designed
      to bond with the stucco surface. This primer helps the paint adhere better
      and ensures a more durable finish.</li> <li><strong>Painting:</strong> We apply high-quality acrylic latex paint, specifically
      formulated for exterior stucco surfaces. This paint is durable, flexible, and
      resistant to peeling and cracking. We apply two coats to ensure complete coverage
      and a rich, even finish.</li> <li><strong>Final Inspection:</strong> After painting, we conduct a meticulous
      final inspection to ensure every detail is perfect. Our team checks for consistency,
      coverage, and overall quality. We take pride in our work and strive to deliver
      complete customer satisfaction.</li></ol> <p data-svelte-h="svelte-mcvl0v">Our professional painters are dedicated to providing excellent performance
    on every project. With years of experience, we ensure that your stucco
    painting and repairs are handled with the utmost care and precision. Klasek
    Painting proudly serves <a${add_attribute("href", routes["service-area"].href, 0)}>Cook County and the surrounding areas</a>, offering top-notch
    <a${add_attribute("href", routes["stucco-painting-repair"].href, 0)}>stucco painting and repair services</a>
    to keep your home looking its best.
    <a${add_attribute("href", routes["contact"].href, 0)}>Contact us</a> today for a free consultation.</p> ${validate_component(GalleryLinkBlock, "GalleryLinkBlock").$$render(
        $$result,
        {
          data: [
            galleryRoutes["stucco-repair-paint"],
            galleryRoutes["stucco-trim"],
            galleryRoutes["stucco-cedar-siding"],
            galleryRoutes["siding-stucco"],
            galleryRoutes["cedar-shingle-stucco-repair"],
            galleryRoutes["stucco-repair"]
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
