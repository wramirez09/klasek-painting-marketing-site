import { c as create_ssr_component, v as validate_component, e as each, b as escape, g as subscribe, a as add_attribute } from "./ssr.js";
import { R as RibbonWrapper } from "./RibbonWrapper.js";
import { B as Breadcrumb } from "./Breadcrumb.js";
import { B as Button } from "./button.js";
import { r as routes } from "./routes.js";
import { a as Accordion_trigger, b as Accordion_content, R as Root, A as Accordion_item } from "./index4.js";
import { c as cn } from "./utils2.js";
import "dequal";
import "./create.js";
import "clsx";
import { i as isMobileStore } from "./isMobileStore.js";
const SubServiceHero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `<section class="p-y px-4 lg:bg-gradient-to-b from-off-white to-white bg-secondary-dark"><div class="container flex flex-col lg:gap-8 gap-6 sm:items-center justify-center">${validate_component(RibbonWrapper, "RibbonWrapper").$$render($$result, {}, {}, {
    default: () => {
      return `<h1 class="lg:text-secondary-dark text-white font-bold sm:text-center xl:text-4xl xs:text-3xl text-2xl sm:px-6" data-testid="page-heading">${escape(data.h1)} in Cook County</h1>`;
    }
  })} <ul class="grid md:grid-cols-2 md:grid-rows-2 lg:text-secondary-dark text-white font-semibold lg:text-xl text-lg gap-y-4 gap-x-8">${each(data.listItems, (item) => {
    return `<li class="disc">${escape(item)}</li>`;
  })}</ul> ${validate_component(Button, "Button").$$render($$result, { href: routes["contact"].href }, {}, {
    default: () => {
      return `Get Free Estimate`;
    }
  })}</div></section> ${validate_component(Breadcrumb, "Breadcrumb").$$render($$result, { class: "border-y lg:py-4 py-2 pl-2" }, {}, {})}`;
});
const Faq = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `${validate_component(Accordion_trigger, "Accordion.Trigger").$$render($$result, {}, {}, {
    default: () => {
      return `${escape(data.question)}`;
    }
  })} ${validate_component(Accordion_content, "Accordion.Content").$$render($$result, {}, {}, {
    default: () => {
      return `${escape(data.answer)}`;
    }
  })}`;
});
const FaqSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isMobileStore, $$unsubscribe_isMobileStore;
  $$unsubscribe_isMobileStore = subscribe(isMobileStore, (value2) => $isMobileStore = value2);
  let { class: classes = "" } = $$props;
  let { faqData } = $$props;
  let value = $isMobileStore ? "" : "faq-1";
  if ($$props.class === void 0 && $$bindings.class && classes !== void 0) $$bindings.class(classes);
  if ($$props.faqData === void 0 && $$bindings.faqData && faqData !== void 0) $$bindings.faqData(faqData);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<section${add_attribute("class", cn("p-y lg:px-12 xs:px-4 px-2 bg-white", classes), 0)}><div class="container max-w-screen-lg flex flex-col lg:gap-8 gap-4"><h2 class="text-center mx-auto lg:text-4xl xs:text-3xl text-2xl font-bold" data-svelte-h="svelte-1v6oz3c">Frequently Asked Questions</h2> ${validate_component(Root, "Accordion.Root").$$render(
      $$result,
      { class: "flex flex-col gap-4", value },
      {
        value: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${each(faqData, (data, i) => {
            return `${validate_component(Accordion_item, "Accordion.Item").$$render($$result, { value: `faq-${i}` }, {}, {
              default: () => {
                return `${validate_component(Faq, "Faq").$$render($$result, { data }, {}, {})} `;
              }
            })}`;
          })}`;
        }
      }
    )}</div></section>`;
  } while (!$$settled);
  $$unsubscribe_isMobileStore();
  return $$rendered;
});
export {
  FaqSection as F,
  SubServiceHero as S
};
