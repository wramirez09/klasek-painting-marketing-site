import { c as create_ssr_component, a as add_attribute, b as escape } from "./ssr.js";
import { s as stars } from "./5-stars.js";
import { g as google } from "./Google-name-logo.js";
const GoogleProof = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: classes = "bg-white rounded-lg border lg:px-6 sm:p-4 p-3" } = $$props;
  let { borderClasses = "bg-border" } = $$props;
  let { textClasses = "text-gray-600" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && classes !== void 0) $$bindings.class(classes);
  if ($$props.borderClasses === void 0 && $$bindings.borderClasses && borderClasses !== void 0) $$bindings.borderClasses(borderClasses);
  if ($$props.textClasses === void 0 && $$bindings.textClasses && textClasses !== void 0) $$bindings.textClasses(textClasses);
  return `<div class="${"flex sm:flex-row flex-col items-stretch sm:gap-6 gap-2 " + escape(classes, true)}"><div class="flex sm:flex-col sm:gap-1 gap-4 items-center justify-center flex-shrink-0" data-svelte-h="svelte-161k0s1"> <img class="w-[100px] h-[39px]"${add_attribute("src", google, 0)} alt="Google">  <img class="w-[80px] h-[14px]"${add_attribute("src", stars, 0)} alt="5 stars"></div>  <div class="${escape(borderClasses, true) + " sm:w-0.5 sm:h-16 w-full h-0.5 sm:my-auto flex-shrink-0"}" aria-hidden="true"></div>  <p class="${"lg:text-sm text-xs col-span-2 !leading-relaxed " + escape(textClasses, true)}">&quot;Klasek painting came out and did a great job. Can&#39;t thank these guys enough! Highly recommend.&quot; <br> <span class="pl-2 pt-1 block font-semibold" data-svelte-h="svelte-4ix1k4">- Nick</span></p></div>`;
});
export {
  GoogleProof as G
};
