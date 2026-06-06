import { c as create_ssr_component, g as subscribe, v as validate_component, e as each, b as escape } from "../../../../../chunks/ssr.js";
import { C as ColorHero } from "../../../../../chunks/ColorHero.js";
import { R as Root, A as Accordion_item, a as Accordion_trigger, b as Accordion_content } from "../../../../../chunks/index4.js";
import { i as isMobileStore } from "../../../../../chunks/isMobileStore.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isMobileStore, $$unsubscribe_isMobileStore;
  $$unsubscribe_isMobileStore = subscribe(isMobileStore, (value2) => $isMobileStore = value2);
  const faqData = [
    {
      question: "What causes paint bubbling or blistering?",
      answer: [
        "Painting a damp, dirty, or hot surface",
        "Applying oil-based or alkyd paint over latex paint",
        "Improper surface preparation",
        "Excessive moisture",
        "Exposing latex paint to moisture shortly after paint has dried"
      ]
    },
    {
      question: "How to prevent paint from bubbling?",
      answer: [
        "Make sure the surface is clean and dry",
        "Apply primer-sealer over any stains and let it dry completely",
        "Prime new joint compound with flat latex paint or latex primer",
        "Avoid painting in hot or humid conditions",
        "Let paint dry completely before exposing the surface to moisture",
        "Consider installing vents or exhaust fans in humid areas"
      ]
    },
    {
      question: "How to fix paint bubbles?",
      answer: [
        "If the blisters do not go all the way down to the substrate, remove them by scraping and sanding. Once the problem area has a smooth finish, coat with primer before applying a quality acrylic latex exterior paint",
        "If the blisters go down to the substrate, you will need to remove the source of moisture, if possible",
        "Repair loose caulking and consider installing vents or exhaust fans to lower the humidity in the house",
        "Dry paint sometimes cracks or flakes due to aging or improper application. Here's how to fix the problem.",
        "Cracks in paint can start off small but will worsen over time if they’re not fixed. In its early stages, the problem appears as hairline cracks. Later, the paint begins to flake off."
      ]
    },
    {
      question: "What causes paint cracking or flaking?",
      answer: [
        "The use of low-quality paint, results in inadequate adhesion and flexibility",
        "Oil-based paint applied over latex paint",
        "The paint was spread too thin during application",
        "Poor surface preparation, especially when the paint is applied to bare wood without priming",
        "Paint drying too fast due to environmental conditions",
        "Paint becoming brittle with age, failing to expand and contract with temperature and humidity changes",
        `Extreme cracking, sometimes called "alligatoring," is caused when a second or third coat of paint is applied before the previous coat dries completely, or when the undercoat is incompatible with the finished coat`
      ]
    },
    {
      question: "How to fix cracked or flaking paint?",
      answer: [
        "If the cracking does not go down to the substrate, remove the loose or flaking paint with a scraper or wire brush, sand the area to feather the edges, prime any bare spots, and repaint the surface",
        "If the flaking occurs in multiple layers of paint, you may need to use a filler",
        "If the cracking goes down to the substrate, remove all of the paint by scraping or using a heat gun, sand the surface until smooth and even, prime, and repaint with a quality latex paint"
      ]
    }
  ];
  let value = $isMobileStore ? "" : "faq-1";
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(ColorHero, "ColorHero").$$render($$result, { h1: "Frequently Asked Questions" }, {}, {
      default: () => {
        return `<p data-svelte-h="svelte-1hjo929">Explore some of the most asked exterior home painting questions by our clients.</p>`;
      }
    })} <section class="bg-white p-y p-x"><div class="container">${validate_component(Root, "Accordion.Root").$$render(
      $$result,
      { class: "space-y-4", value },
      {
        value: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${each(faqData, ({ question, answer }, i) => {
            return `${validate_component(Accordion_item, "Accordion.Item").$$render($$result, { value: `faq-${i}` }, {}, {
              default: () => {
                return `${validate_component(Accordion_trigger, "Accordion.Trigger").$$render($$result, {}, {}, {
                  default: () => {
                    return `${escape(question)} `;
                  }
                })} ${validate_component(Accordion_content, "Accordion.Content").$$render($$result, {}, {}, {
                  default: () => {
                    return `<ul class="flex flex-col gap-2">${each(answer, (listItem) => {
                      return `<li class="disc [--top:11px]">${escape(listItem)}</li>`;
                    })}</ul> `;
                  }
                })} `;
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
  Page as default
};
