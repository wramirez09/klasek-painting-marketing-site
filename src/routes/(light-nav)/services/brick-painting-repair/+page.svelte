<script lang="ts">
  import RootServiceHero from "$lib/services/root/RootServiceHero.svelte";
  import RootServiceSection from "$lib/services/root/RootServiceSection.svelte";
  import { serviceRoutes } from "$lib/common/routing/routes";
  import WhyChooseUsSection from "$lib/home/WhyChooseUsSection.svelte";
  import ServiceAreaSection from "$lib/common/sections/ServiceAreaSection.svelte";
  import PaintingPromisesSection from "$lib/services/PaintingPromisesSection.svelte";
  import ColumnTemplateSection from "$lib/common/sections/ColumnTemplateSection.svelte";
  import src from "$images/services/brick-painting-staining-service.webp";
  import repair from "$images/services/exterior-brick-house-repair.webp";
  import OtherServicesSection from "$lib/common/sections/OtherServicesSection.svelte";
  import ViewOurWorkSection from "$lib/home/ViewOurWorkSection.svelte";
  import CtaBannerSection from "$lib/common/sections/CtaBannerSection.svelte";
  import FaqSection from "$lib/common/sections/FaqSection.svelte";
  import type { FaqData } from "$lib/common/sections/subcomponents/Faq.svelte";

  const paintingStainingService = [
    serviceRoutes["brick-painting"],
    serviceRoutes["brick-staining"],
  ];

  const faqData: FaqData[] = [
    {
      question:
        "Who paints and repairs exterior brick in the western Chicago suburbs?",
      answer:
        "Klasek Painting paints, stains, and repairs exterior brick across the western Cook County and DuPage suburbs from our base in Lyons, IL, with more than 30 years of experience.",
    },
    {
      question: "Should I paint or stain my exterior brick?",
      answer:
        "Painting gives brick a solid, opaque color, while staining is breathable and keeps the natural brick texture visible. We offer both and recommend the right option based on your brick and the look you want.",
    },
    {
      question: "Can you repair brick before painting or staining?",
      answer:
        "Yes. We repair damaged brick and mortar first so the surface is sound before any coating goes on. Doing the repair up front protects the finish and the masonry underneath.",
    },
    {
      question: "How long does painted or stained brick last?",
      answer:
        "With proper surface preparation and quality products, exterior brick coatings last for many years. We use premium Sherwin-Williams, Benjamin Moore, Valspar, and Behr products suited to masonry.",
    },
    {
      question: "How much does exterior brick painting or staining cost?",
      answer:
        "Cost depends on the size of the surface, its condition, how much repair is needed, and whether you choose paint or stain. We provide a free, written estimate before any work begins.",
    },
  ];
</script>

<RootServiceHero
  data={{
    h1: "Trusted Brick Painting & Repair Services for Chicago Homeowners",
    listItems: [
      "Detailed Prep Work",
      "Experienced Painters",
      "Curb Appeal Boost",
      "Long-Lasting Results",
    ],
    image: {
      src,
      alt: "New exterior brick painting project house with fresh coat of paint by Klasek Painting",
    },
  }}
/>

<ColumnTemplateSection class="bg-off-white">
  <div slot="left-column">
    <h2>Brick Painting & Staining&nbsp;Services</h2>

    <p>
      At Klasek Painting, we firmly believe that our brick painting & staining
      services are second to none in Illinois! We provide a wide selection of
      painting services and are dedicated to being #1.
    </p>
  </div>

  <div slot="right-column">
    <ul>
      {#each paintingStainingService as { text, href }}
        <li>
          <a {href}>{text}</a>
        </li>
      {/each}
    </ul>
  </div>
</ColumnTemplateSection>

<RootServiceSection
  class="bg-white"
  reverse={true}
  data={{
    heading: "Brick Repair Services",
    description:
      "Choosing Klasek Painting for your brick repair services ensures that you receive top-quality workmanship and attention to detail. Our experienced team uses the best materials and techniques to restore your brick masonry to its original beauty and strength. We provide reliable, affordable services with a commitment to customer satisfaction and long-lasting results.",
    href: serviceRoutes["brick-repair"].href,
    image: repair,
  }}
/>

<OtherServicesSection class="bg-off-white" showBrick={false} />

<CtaBannerSection />

<PaintingPromisesSection />

<ViewOurWorkSection class="bg-off-white" />

<WhyChooseUsSection />

<FaqSection {faqData} />

<ServiceAreaSection />
