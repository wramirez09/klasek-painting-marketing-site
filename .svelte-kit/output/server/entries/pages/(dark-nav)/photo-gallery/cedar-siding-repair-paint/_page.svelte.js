import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/ssr.js";
import { B as Breadcrumb } from "../../../../../chunks/Breadcrumb.js";
import { C as ColorHero } from "../../../../../chunks/ColorHero.js";
import { G as GalleryPage } from "../../../../../chunks/GalleryPage.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `${validate_component(ColorHero, "ColorHero").$$render(
    $$result,
    {
      h1: "Cedar Siding Repair & Paint Gallery"
    },
    {},
    {}
  )} ${validate_component(Breadcrumb, "Breadcrumb").$$render($$result, {}, {}, {})} ${validate_component(GalleryPage, "GalleryPage").$$render(
    $$result,
    {
      eagerImages: data.eagerImages,
      lazyImages: data.lazyImages
    },
    {},
    {}
  )}`;
});
export {
  Page as default
};
