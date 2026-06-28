<script lang="ts">
  import RootServiceHero from "$lib/services/root/RootServiceHero.svelte";
  import WhyChooseUsSection from "$lib/home/WhyChooseUsSection.svelte";
  import ServiceAreaSection from "$lib/common/sections/ServiceAreaSection.svelte";
  import src from "$images/services/new-exteior-commercial-painting-job-klasek-painting.webp";
  import PaintingPromisesSection from "$lib/services/PaintingPromisesSection.svelte";
  import commercial from "$images/services/exterior-commercial-painting-service.webp?enhanced";
  import OtherServicesSection from "$lib/common/sections/OtherServicesSection.svelte";
  import ViewOurWorkSection from "$lib/home/ViewOurWorkSection.svelte";
  import CtaBannerSection from "$lib/common/sections/CtaBannerSection.svelte";
  import ColumnTemplateSection from "$lib/common/sections/ColumnTemplateSection.svelte";
  import FaqSection from "$lib/common/sections/FaqSection.svelte";
  import type { FaqData } from "$lib/common/sections/subcomponents/Faq.svelte";

  const faqData: FaqData[] = [
    {
      question: "Who does commercial exterior painting in Cook County?",
      answer:
        "Klasek Painting handles commercial exterior painting across Cook County and the western Chicago suburbs from our base in Lyons, IL, with more than 30 years of experience on everything from small storefronts to large office complexes.",
    },
    {
      question: "Can you work around our business hours?",
      answer:
        "Yes. We schedule commercial projects to minimize disruption to your operations and customers, and we set the timeline with you before work begins.",
    },
    {
      question: "What types of commercial buildings do you paint?",
      answer:
        "We paint the exteriors of storefronts, offices, and multi-unit and mixed-use buildings, including stucco, siding, and brick surfaces. We assess each property and recommend the right prep and products.",
    },
    {
      question: "How much does commercial exterior painting cost?",
      answer:
        "Cost depends on the size of the building, the surfaces involved, how much prep and repair is needed, and the products selected. We provide a free, written quote with straightforward pricing.",
    },
  ];
</script>

<RootServiceHero
  data={{
    h1: "#1 Exterior Commercial Painter in Cook\xa0County,\xa0IL",
    listItems: [
      "Simple, Straight-Forward Pricing",
      "Long-Lasting Results",
      "100% Satisfaction Guaranteed",
      "Free Design Consultation & Quote",
    ],
    image: {
      src,
      alt: "New exterior commercial painting job",
    },
  }}
/>

<ColumnTemplateSection class="bg-off-white">
  <div slot="left-column" class="lg:order-first order-last">
    <enhanced:img
      class="bord max-w-[400px] w-full h-auto rounded-lg mx-auto"
      src={commercial}
      alt="Exterior commercial painting job"
    />
  </div>

  <div slot="right-column">
    <h2>Commercial Exterior Painting Services in Cook County</h2>

    <p>
      Enhance your property's curb appeal and protect it from the elements with
      Klasek Painting's expert commercial exterior painting services. Our
      skilled team understands the unique needs of businesses and works
      diligently to deliver exceptional results tailored to your property. From
      small storefronts to large office complexes, we're here to make your
      building stand out.
    </p>
  </div>
</ColumnTemplateSection>

<CtaBannerSection />

<WhyChooseUsSection class="bg-off-white" />

<PaintingPromisesSection />

<ViewOurWorkSection class="bg-off-white" />

<FaqSection {faqData} />

<ServiceAreaSection />

<OtherServicesSection />
