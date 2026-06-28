<script lang="ts">
  import RootServiceHero from "$lib/services/root/RootServiceHero.svelte";
  import { serviceRoutes } from "$lib/common/routing/routes";
  import WhyChooseUsSection from "$lib/home/WhyChooseUsSection.svelte";
  import ServiceAreaSection from "$lib/common/sections/ServiceAreaSection.svelte";
  import PaintingPromisesSection from "$lib/services/PaintingPromisesSection.svelte";
  import src from "$images/services/siding-painting-repair-services.webp";
  import ColumnTemplateSection from "$lib/common/sections/ColumnTemplateSection.svelte";
  import type { Link } from "$lib/common/routing/routing";
  import OtherServicesSection from "$lib/common/sections/OtherServicesSection.svelte";
  import ViewOurWorkSection from "$lib/home/ViewOurWorkSection.svelte";
  import CtaBannerSection from "$lib/common/sections/CtaBannerSection.svelte";
  import FaqSection from "$lib/common/sections/FaqSection.svelte";
  import type { FaqData } from "$lib/common/sections/subcomponents/Faq.svelte";

  const faqData: FaqData[] = [
    {
      question: "Who repairs and paints siding in the western Chicago suburbs?",
      answer:
        "Klasek Painting repairs and paints siding across the western Cook County and DuPage suburbs from our base in Lyons, IL, with more than 30 years of experience on cedar, Hardie board, aluminum, and vinyl homes.",
    },
    {
      question: "What types of siding does Klasek Painting work on?",
      answer:
        "We paint and repair cedar siding, Hardie board (fiber-cement) siding, aluminum siding, and vinyl siding. We assess each home and recommend the right products and prep for that material.",
    },
    {
      question:
        "How much does Hardie board or cedar siding painting cost in the Chicago suburbs?",
      answer:
        "Cost depends on the size of the home, the siding material and its condition, how much repair is needed, and the products selected. We provide a free, written estimate so you have accurate pricing before work begins.",
    },
    {
      question: "Should I repair or replace damaged siding?",
      answer:
        "It depends on how extensive the damage is. We assess the siding and repair where it makes sense or replace sections where needed, and the same crew handles both repair and painting for a consistent result.",
    },
    {
      question: "Do you repair siding before painting?",
      answer:
        "Yes. We repair damaged siding first so the new finish adheres properly and lasts. Skipping prep is the most common reason exterior paint fails early.",
    },
  ];

  const paintingServices: Link[] = [
    {
      text: "Hardie Board Painting",
      href: serviceRoutes["hardie-painting"].href,
    },
    {
      text: "Aluminum Painting",
      href: serviceRoutes["aluminum-painting"].href,
    },
    {
      text: "Cedar Painting",
      href: serviceRoutes["cedar-painting"].href,
    },
    {
      text: "Vinyl Painting",
      href: serviceRoutes["vinyl-painting"].href,
    },
  ];

  const repairServices: Link[] = [
    {
      text: "Hardie Board Installation",
      href: serviceRoutes["hardie-installation"].href,
    },
    {
      text: "Hardie Board Repair",
      href: serviceRoutes["hardie-repair"].href,
    },
    {
      text: "Aluminum Repair",
      href: serviceRoutes["aluminum-repair"].href,
    },
    {
      text: "Cedar Repair",
      href: serviceRoutes["cedar-repair"].href,
    },
    {
      text: "Vinyl Repair",
      href: serviceRoutes["vinyl-repair"].href,
    },
  ];
</script>

<RootServiceHero
  data={{
    h1: "Quality Siding Painting & Repair Services for Chicago Homeowners",
    listItems: [
      "100% Satisfaction Guaranteed",
      "Over 30 Years of Experience",
      "Meticulous Surface Preparation",
      "Quality Materials & Workmanship",
    ],
    image: {
      src,
      alt: "Exterior siding and painting repair project in progress, with ladders leaning against a freshly painted blue house",
    },
  }}
/>

<ColumnTemplateSection class="bg-off-white">
  <div slot="left-column">
    <h2>Siding Painting Services</h2>

    <p>
      Klasek Painting specializes in siding painting services and provides
      exceptional customer service when painting your house. Our team does
      everything we can to make your dreams come true. The different types of
      sidings we service include:
    </p>
  </div>

  <div slot="right-column">
    <ul>
      {#each paintingServices as { text, href }}
        <li>
          <a {href}>{text}</a>
        </li>
      {/each}
    </ul>
  </div>
</ColumnTemplateSection>

<ColumnTemplateSection>
  <div slot="left-column">
    <h2>Siding Repair Services</h2>

    <p>
      In additon to providing top-of-the line painting services, our technicians
      are specially trained to repair any damage to your house's siding. View
      our siding repair services below:
    </p>
  </div>

  <div slot="right-column">
    <ul>
      {#each repairServices as { text, href }}
        <li>
          <a {href}>{text}</a>
        </li>
      {/each}
    </ul>
  </div>
</ColumnTemplateSection>

<OtherServicesSection class="bg-off-white" showSidingPaintingRepair={false} />

<CtaBannerSection />

<ViewOurWorkSection />

<PaintingPromisesSection class="bg-off-white" />

<WhyChooseUsSection />

<FaqSection {faqData} />

<ServiceAreaSection />
