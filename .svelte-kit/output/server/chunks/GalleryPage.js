import { c as create_ssr_component, a as add_attribute, e as each, v as validate_component, A as is_promise, k as noop, b as escape } from "./ssr.js";
import { B as Button } from "./button.js";
const SpinnerIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: classes = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && classes !== void 0) $$bindings.class(classes);
  return `<svg${add_attribute("class", classes, 0)} version="1.1" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="m599.74 300.77c155.22 0 299.5 133.72 299.5 299.24-0.29688 15.039-1.2695 29.664-3.1211 42.637-5.582 36.566-25.414 45.133-41.855 43.676-8.3633-0.74219-15.867-4.625-20.797-10.918-4.6875-5.9844-7.5938-14.285-5.7188-26.516 0.39062-1.6953 0.53906-3.582 0.78125-5.1992 2.7148-14.023 4.6797-28.629 4.6797-43.676 0-128.67-104.82-232.94-233.46-232.94-128.37 0-232.94 104.27-232.94 232.94 0 128.39 104.55 232.94 232.94 232.94 28.965 0 56.418-5.1719 81.633-14.559 41.438-17.535 68.426 38.508 26.258 60.836-32.844 15.523-75.301 19.781-107.89 20.02-165.23 0-298.98-133.72-298.98-299.24 2.8398-173.45 151.29-296.78 298.98-299.24z" fill-rule="evenodd"></path></svg>`;
});
const GalleryPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let showLazyImages;
  let { eagerImages } = $$props;
  let { lazyImages = void 0 } = $$props;
  const loadImages = async () => {
    if (!lazyImages) return;
    const entries = Object.entries(lazyImages);
    const resolvedEntries = Object.fromEntries(await Promise.all(entries.map(async ([key, value]) => [key, await value()])));
    return resolvedEntries;
  };
  if ($$props.eagerImages === void 0 && $$bindings.eagerImages && eagerImages !== void 0) $$bindings.eagerImages(eagerImages);
  if ($$props.lazyImages === void 0 && $$bindings.lazyImages && lazyImages !== void 0) $$bindings.lazyImages(lazyImages);
  showLazyImages = false;
  return `<section class="lg:pb-8 pb-6 p-x bg-white"><div class="container flex flex-col items-center gap-6"><ul class="w-full grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">  ${each(Object.entries(eagerImages), ([_path, module]) => {
    return `<li class="overflow-clip">${typeof module.default === "string" ? `<img class="h-auto w-full hover:scale-105 duration-300 ease-out"${add_attribute("src", module.default.img.src, 0)} alt=""${add_attribute("width", module.default.img.w, 0)}${add_attribute("height", module.default.img.h, 0)}>` : `<picture>${each(Object.entries(module.default.sources), ([format, srcset]) => {
      return `<source${add_attribute("srcset", srcset, 0)}${add_attribute("type", "image/" + format, 0)}>`;
    })} <img class="h-auto w-full hover:scale-105 duration-300 ease-out"${add_attribute("src", module.default.img.src, 0)} alt=""${add_attribute("width", module.default.img.w, 0)}${add_attribute("height", module.default.img.h, 0)}> </picture>`} </li>`;
  })}  ${showLazyImages ? ` ${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `  <li class="xl:col-span-4 md:col-span-3 sm:col-span-2 grid place-items-center">${validate_component(SpinnerIcon, "SpinnerIcon").$$render(
        $$result,
        {
          class: "size-12 text-secondary-dark animate-spin"
        },
        {},
        {}
      )}</li> `;
    }
    return function(images) {
      return `  ${images ? ` ${each(Object.entries(images), ([_path, module]) => {
        return `<li class="overflow-clip">${typeof module.default === "string" ? `<img class="h-auto w-full hover:scale-105 duration-300 ease-out"${add_attribute("src", module.default.img.src, 0)} alt=""${add_attribute("width", module.default.img.w, 0)}${add_attribute("height", module.default.img.h, 0)}>` : `<picture>${each(Object.entries(module.default.sources), ([format, srcset]) => {
          return `<source${add_attribute("srcset", srcset, 0)}${add_attribute("type", "image/" + format, 0)}>`;
        })} <img class="h-auto w-full hover:scale-105 duration-300 ease-out"${add_attribute("src", module.default.img.src, 0)} alt=""${add_attribute("width", module.default.img.w, 0)}${add_attribute("height", module.default.img.h, 0)}> </picture>`} </li>`;
      })}` : ``} `;
    }(__value);
  }(loadImages())}` : ``}</ul>  ${lazyImages ? `${validate_component(Button, "Button").$$render($$result, { class: "mx-auto", variant: "secondary" }, {}, {
    default: () => {
      return `${escape(showLazyImages ? "Hide Images" : "Show More Images")}`;
    }
  })}` : ``}</div></section>`;
});
export {
  GalleryPage as G
};
