<script lang="ts">
  import { page } from "$app/stores";
  import { serviceAreaRoutes } from "$lib/common/routing/routes";
  import FaqSection from "$lib/common/sections/FaqSection.svelte";
  import type { FaqData } from "$lib/common/sections/subcomponents/Faq.svelte";

  // Match the current route to a known service-area city so each city page
  // gets buyer-intent FAQs wired to FAQPage schema (via FaqSection). No-op on
  // any other route.
  $: pathname = $page.url.pathname;
  $: city = Object.values(serviceAreaRoutes).find(
    (r) => r.href === pathname,
  )?.text;

  function buildCityFaq(c: string): FaqData[] {
    return [
      {
        question: `Does Klasek Painting serve ${c}, IL?`,
        answer: `Yes. Klasek Painting provides exterior house painting, siding, stucco, and brick services in ${c} and the surrounding western Cook County and DuPage suburbs, with more than 30 years of experience from our base in Lyons, IL.`,
      },
      {
        question: `How much does exterior house painting cost in ${c}?`,
        answer: `The price depends on the size of the home, the siding material, how much prep and repair is needed, and the products selected. We provide a free, written estimate for ${c} homeowners so the price is accurate before any work begins.`,
      },
      {
        question: `How long does an exterior repaint take?`,
        answer: `Most single-family exterior repaints take a few days to about a week, depending on the size of the home, the amount of surface repair, and the weather. Your written estimate includes a projected timeline.`,
      },
      {
        question: `What exterior services does Klasek Painting offer in ${c}?`,
        answer: `In ${c} we handle exterior house painting, siding painting and repair (cedar, Hardie board, aluminum, and vinyl), stucco painting and repair, brick painting, staining and repair, and self-performed seamless gutter installation.`,
      },
      {
        question: `Is Klasek Painting licensed and certified?`,
        answer: `Yes. Klasek Painting is licensed, EPA Lead-Safe Certified, and a member of the PDCA, and we paint with premium Sherwin-Williams, Benjamin Moore, Valspar, and Behr products.`,
      },
    ];
  }
</script>

{#if city}
  <FaqSection faqData={buildCityFaq(city)} />
{/if}
