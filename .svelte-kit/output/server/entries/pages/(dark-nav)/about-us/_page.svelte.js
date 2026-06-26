import { c as create_ssr_component, a as add_attribute, v as validate_component, e as each, b as escape } from "../../../../chunks/ssr.js";
import { R as RibbonWrapper } from "../../../../chunks/RibbonWrapper.js";
import { H as HeadingAccent } from "../../../../chunks/HeadingAccent.js";
import { r as routes } from "../../../../chunks/routes.js";
import { B as Button } from "../../../../chunks/button.js";
import { s as src$1 } from "../../../../chunks/klasek-before-after-gallery.js";
import { P as PaintingPromisesSection } from "../../../../chunks/PaintingPromisesSection.js";
import { T as TestimonialsSection } from "../../../../chunks/TestimonialsSection.js";
const src = "/_app/immutable/assets/about-klasek-painting.C7nfp2vF.webp";
const AboutUsHero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="p-b p-x bg-secondary-dark hero-gradient" data-svelte-h="svelte-jsg6p0"><div class="container flex flex-col items-center gap-6"><div${add_attribute("style", `background-image: url(${src})`, 0)} class="relative lg:w-3/4 sm:w-[90%] w-full grid place-items-center lg:py-36 sm:py-24 py-16 bg-black/50 bg-blend-multiply bg-cover bg-top ribbon-bottom"><h1 data-testid="page-heading" class="lg:text-6xl text-4xl text-white font-semibold">About Us</h1></div> <div class="font-semibold"><p class="lg:text-4xl xs:text-2xl text-xl text-primary text-center mb-4 lg:w-full xs:w-4/5 mx-auto">“Our painting company continues to prove <br class="lg:inline hidden"> its quality work for
				residential projects.”</p> <p class="w-full text-right text-white lg:text-xl text-lg">— Peter Klasek</p></div></div></section>`;
});
const YourReliableSubcontractorSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const listItems = [
    "Design & Color Consultation",
    "Surface Repair & Preparation",
    "Brick, Siding, & Stucco Refinishing",
    "Paint, Limewash, & Stain",
    "Professional Communication"
  ];
  return `<section class="bg-white p-y p-x"><div class="container grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10 gap-4">${validate_component(RibbonWrapper, "RibbonWrapper").$$render($$result, { class: "lg:col-span-2 lg:mx-auto" }, {}, {
    default: () => {
      return `<h2 class="lg:text-5xl sm:text-4xl text-3xl lg:px-6 font-semibold" data-svelte-h="svelte-18kxasa">Your Reliable Contractor</h2>`;
    }
  })}  <div class="flex flex-col gap-4" data-svelte-h="svelte-wdum1m"><p>You can rely on our team of experts to bring your home to life. Klasek Painting has been in
				the Chicago painting business for over 30 years. We are most well-known for our high quality
				work, dependable service, superior products, satisfaction guarantee, and the ability to meet
				your deadline. We also give the best warranty in the business. We are committed to providing
				you superior exterior painting services at competitive pricing. You can rely on our team of
				experts to bring your home to life.</p> <p>At Klasek Painting we offer reliable, professional painting services for exterior surfaces.
				Our company was established in 1992 and with over 30 years of experience, our company
				continues to provide top-quality work for residential projects. We use the most
				state-of-the-art materials from Sherwin Williams to assure a long-lasting paint job. We work
				from 7am to 5pm to complete your project in a timely fashion.</p></div>  <div>${validate_component(HeadingAccent, "HeadingAccent").$$render($$result, {}, {}, {
    default: () => {
      return `<h3 class="lg:text-3xl sm:text-2xl text-xl font-semibold text-left" data-svelte-h="svelte-17cyhls">Our work encompasses:</h3>`;
    }
  })} <ul class="font-semibold text-secondary-dark lg:text-2xl text-lg flex flex-col mt-4 lg:gap-4 gap-2 xl:w-3/4 lg:w-full sm:w-3/4 w-full">${each(listItems, (item) => {
    return `<li class="disc lg:[--top:14px] [--top:12px]">${escape(item)}</li>`;
  })}</ul></div></div></section>`;
});
const PreviousProjectsSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="p-y p-x bg-off-white"><div class="container grid lg:grid-cols-2 lg:gap-12 gap-4"> <div class="flex flex-col lg:gap-6 gap-4">${validate_component(HeadingAccent, "HeadingAccent").$$render($$result, { extend: true }, {}, {
    default: () => {
      return `<h2 class="lg:text-4xl xs:text-3xl text-2xl" data-svelte-h="svelte-16bfgip">Previous Projects</h2>`;
    }
  })} <p data-svelte-h="svelte-17j0qol">At Klasek Painting, we pride ourselves on delivering exceptional painting and repair
				services that transform spaces and exceed our clients&#39; expectations. Our photo gallery
				showcases the remarkable transformations we achieve through our attention to detail and
				commitment to quality. Each project reflects our dedication to enhancing the beauty and
				value of every property we work on.</p> <p data-svelte-h="svelte-1oudh6n">Our before and after photos illustrate the skill and craftsmanship that define Klasek
				Painting. Let these images inspire your next painting project and give you confidence in our
				ability to deliver outstanding results.</p> ${validate_component(Button, "Button").$$render(
    $$result,
    {
      class: "text-secondary-dark w-fit",
      variant: "outline",
      href: routes["gallery"].href
    },
    {},
    {
      default: () => {
        return `View Our Gallery`;
      }
    }
  )}</div>  <div${add_attribute("style", `background-image: url(${src$1});`, 0)} class="bg-cover bg-center bord rounded-lg w-full lg:h-full h-[250px]"></div></div></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(AboutUsHero, "AboutUsHero").$$render($$result, {}, {}, {})} ${validate_component(YourReliableSubcontractorSection, "YourReliableSubcontractorSection").$$render($$result, {}, {}, {})} ${validate_component(PreviousProjectsSection, "PreviousProjectsSection").$$render($$result, {}, {}, {})} ${validate_component(PaintingPromisesSection, "PaintingPromisesSection").$$render($$result, {}, {}, {})} ${validate_component(TestimonialsSection, "TestimonialsSection").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
