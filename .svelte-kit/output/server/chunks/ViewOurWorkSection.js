import { c as create_ssr_component, a as add_attribute, v as validate_component } from "./ssr.js";
import { H as HeadingAccent } from "./HeadingAccent.js";
import { r as routes } from "./routes.js";
import { B as Button } from "./button.js";
import { c as cn } from "./utils2.js";
import "./index3.js";
const ViewOurWorkSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: classes = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && classes !== void 0) $$bindings.class(classes);
  return `<section${add_attribute("class", cn("p-y p-x bg-white", classes), 0)}><div class="container grid lg:grid-cols-2 lg:gap-12 gap-4"> <div class="flex flex-col lg:gap-6 gap-4">${validate_component(HeadingAccent, "HeadingAccent").$$render($$result, { extend: true }, {}, {
    default: () => {
      return `<h2 class="lg:text-4xl xs:text-3xl text-2xl" data-svelte-h="svelte-1tt7i0">View Our Work</h2>`;
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
  )}</div>  <div class="w-full lg:h-full h-[250px]">${``}</div></div></section>`;
});
export {
  ViewOurWorkSection as V
};
