import { c as create_ssr_component, v as validate_component, a as add_attribute, e as each } from "../../../../../../chunks/ssr.js";
import { S as SubServiceHero, F as FaqSection } from "../../../../../../chunks/FaqSection.js";
import { C as ColumnTemplateSection } from "../../../../../../chunks/ColumnTemplateSection.js";
import { i as installGutters } from "../../../../../../chunks/expert-historic-house-painting.js";
import { G as GalleryLinkBlock } from "../../../../../../chunks/GalleryLinkBlock.js";
import { g as galleryRoutes } from "../../../../../../chunks/routes.js";
const src = {
  sources: {
    avif: "/_app/immutable/assets/historic-house-remodeling.BYH-5Gb5.avif 299w, /_app/immutable/assets/historic-house-remodeling.BbWb1RV7.avif 598w",
    webp: "/_app/immutable/assets/historic-house-remodeling.D5jGVKlY.webp 299w, /_app/immutable/assets/historic-house-remodeling.Bmj1Rd8E.webp 598w",
    png: "/_app/immutable/assets/historic-house-remodeling.8bsSiXud.png 299w, /_app/immutable/assets/historic-house-remodeling.Bvl7JXil.png 598w"
  },
  img: {
    src: "/_app/immutable/assets/historic-house-remodeling.Bvl7JXil.png",
    w: 598,
    h: 598
  }
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const faqData = [
    {
      question: "What are the benefits of painting an older home?",
      answer: "Painting an older home can bring several benefits. First, it can improve the appearance, making the house look fresh and well-maintained. This can also increase its curb appeal and potentially raise its value. Painting can also protect the exterior from weather damage, like rain or sun, which can wear down the paint and even the structure over time. Additionally, if you use quality paint, it can act as a barrier against pests and mold, keeping your home healthier. Overall, painting is a relatively affordable way to give your older home a new lease on life, both aesthetically and functionally."
    },
    {
      question: "Does restoring paint on older homes in Illinois increase property value?",
      answer: "Absolutely! Restoring the paint on older homes in Illinois can increase their value significantly. A new coat of paint can make the house look modern and inviting, which can attract more buyers and drive up the property's worth. It's a relatively simple and cost-effective way to enhance curb appeal and overall marketability."
    },
    {
      question: "Do weather conditions in Illinois impact the paint on historic homes?",
      answer: "Absolutely, the weather in Illinois plays a role in the condition of paint on historic homes. The heat, cold, rain, and snow can all take a toll on the exterior paint, causing it to crack, peel, or fade over time. Proper preparation, including using weather-resistant paint and conducting routine maintenance, can help protect historic home exteriors from these weather-related issues."
    },
    {
      question: "How do we ensure your historic home looks beautiful?",
      answer: "Above all, it's our job to make sure your home looks beautiful. That includes restoring stately columns and ornate moldings. We also restore porches and decks. So rest assured, we do it all. Along with preparation, we also repair or replace any rotted or missing wood. Additionally, we are a lead-safe and EPA-certified firm."
    },
    {
      question: "How can our expert color consultation enhance your historic home?",
      answer: "Not only do we provide a free written estimate, but we also offer expert color consultation. With our 30-plus years of experience painting older homes in Chicago, we know how to use color. One tip we give our customers is on combining colors. Specifically, choose either warm or cool tones. Take your time and be selective in your choice of colors; it's worth it. The right combination will make your historic home look incredible. We're here to help you in your selection."
    },
    {
      question: "Why are bold colors expected for Chicago's heritage homes?",
      answer: "An interesting aspect of painting historical homes is color. As a rule, the bolder the better. Specifically, bright colors aren't just 'accepted'—in fact, they are 'expected.' This allows your personality to be expressed, and most of all, your pride of ownership will show. Meanwhile, Pete stays informed on Painted Lady trends and color combinations from San Francisco to Chicago. Locally, we have a few favorite neighborhoods, such as Oak Park and LaGrange, IL. Keep in mind, we can make your older home beautiful again, from the top of your roof to your stately porch."
    },
    {
      question: "Why choose us for custom exterior painting in Chicago?",
      answer: "To sum it up, we are available to paint the exterior of all homes. Especially in Chicago, we specialize in Painted Ladies and Victorian homes, Craftsman and Bungalows, Framed Two-Flat and Cottages, Greystones, and Colonials. We can help with all your exterior painting needs. Klasek Painting is proud to use the best paint products, we have the top craftsmen, and of course, we guarantee your satisfaction on all our work."
    }
  ];
  return `${validate_component(SubServiceHero, "SubServiceHero").$$render(
    $$result,
    {
      data: {
        h1: "#1 Historic House Painting Service",
        listItems: [
          "Free Design & Consultation",
          "Simple, Straight-Forward Proposals",
          "High Quality Materials",
          "Experienced Painters"
        ]
      }
    },
    {},
    {}
  )} ${validate_component(ColumnTemplateSection, "ColumnTemplateSection").$$render($$result, { class: "lg:pt-12 pt-4" }, {}, {
    "right-column": () => {
      return `<div slot="right-column">${typeof src === "string" ? `<img class="w-full h-auto max-w-[500px] mx-auto"${add_attribute("src", src.img.src, 0)} alt="House remodeling project"${add_attribute("width", src.img.w, 0)}${add_attribute("height", src.img.h, 0)}>` : `<picture>${each(Object.entries(src.sources), ([format, srcset]) => {
        return `<source${add_attribute("srcset", srcset, 0)}${add_attribute("type", "image/" + format, 0)}>`;
      })} <img class="w-full h-auto max-w-[500px] mx-auto"${add_attribute("src", src.img.src, 0)} alt="House remodeling project"${add_attribute("width", src.img.w, 0)}${add_attribute("height", src.img.h, 0)}></picture>`}</div>`;
    },
    "left-column": () => {
      return `<div slot="left-column" data-svelte-h="svelte-1bnrey6"><h2>Professional Historic Painting In Cook County</h2> <p>First of all, <a href="/">Klasek Painting</a> specializes in historic house painting. In fact,
			we have over 30 years experience. Specifically, we restore older homes. And, we bring them back
			to their former beauty. We&#39;re experts in both paint and stain finishes.</p> <p>For those reasons, we are the leading company for restoring Chicagoland exteriors.</p> <h3>Custom Painting Services For Older Homes</h3> <p>The owner, Pete Klasek, loves making older homes look new again. As a result, our painters
			take extra care in every step of the process.</p> <p>Chicago&#39;s Klasek Painting brings out character and architectural design in homes. Our goal is
			to increase value and curb appeal.</p></div>`;
    }
  })} ${validate_component(ColumnTemplateSection, "ColumnTemplateSection").$$render($$result, { class: "bg-off-white" }, {}, {
    "right-column": () => {
      return `<div slot="right-column"><h2 data-svelte-h="svelte-1xe6cgx">Expert Exterior Painting Services In Cook County</h2> <p data-svelte-h="svelte-1kntxje">The lasting value of your exterior finish begins with prep. Because of that, being thorough is
			particularly important for historical home painting. As a result, our house painters
			completely clean the exterior walls. That includes getting rid of dirt, cobwebs, and mildew.
			Plus, it covers power washing.</p> <p data-svelte-h="svelte-cnntpt">Next, once cleaning is complete, sanding and scraping begin. When getting an older home ready
			for paint, preparation can take quite a bit of time. But it’s worth it. In fact, for the paint
			to stick properly, the surface must be clean and smooth. At this point, we would apply a
			high-quality primer to any raw surface.</p> ${validate_component(GalleryLinkBlock, "GalleryLinkBlock").$$render($$result, { data: [galleryRoutes["victorian"]] }, {}, {})}</div>`;
    },
    "left-column": () => {
      return `<div slot="left-column" class="lg:row-start-1 row-start-2">${typeof installGutters === "string" ? `<img class="w-full h-auto rounded-lg bord max-w-[525px] mx-auto"${add_attribute("src", installGutters.img.src, 0)} alt="Freshly painted house exterior snowy winter weather"${add_attribute("width", installGutters.img.w, 0)}${add_attribute("height", installGutters.img.h, 0)}>` : `<picture>${each(Object.entries(installGutters.sources), ([format, srcset]) => {
        return `<source${add_attribute("srcset", srcset, 0)}${add_attribute("type", "image/" + format, 0)}>`;
      })} <img class="w-full h-auto rounded-lg bord max-w-[525px] mx-auto"${add_attribute("src", installGutters.img.src, 0)} alt="Freshly painted house exterior snowy winter weather"${add_attribute("width", installGutters.img.w, 0)}${add_attribute("height", installGutters.img.h, 0)}></picture>`}</div>`;
    }
  })} ${validate_component(FaqSection, "FaqSection").$$render($$result, { faqData }, {}, {})}`;
});
export {
  Page as default
};
