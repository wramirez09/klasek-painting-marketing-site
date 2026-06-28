<script lang="ts">
  import RootServiceHero from "$lib/services/root/RootServiceHero.svelte";
  import RootServiceSection from "$lib/services/root/RootServiceSection.svelte";
  import { routes } from "$lib/common/routing/routes";
  import WhyChooseUsSection from "$lib/home/WhyChooseUsSection.svelte";
  import ServiceAreaSection from "$lib/common/sections/ServiceAreaSection.svelte";
  import Button from "$components/button/button.svelte";
  import PaintingPromisesSection from "$lib/services/PaintingPromisesSection.svelte";
  import src from "$images/services/design-and-color-consultation-services.webp";
  import design from "$images/services/design-consultation-service.webp";
  import color from "$images/services/color-consultation-service.webp";
  import OtherServicesSection from "$lib/common/sections/OtherServicesSection.svelte";
  import ViewOurWorkSection from "$lib/home/ViewOurWorkSection.svelte";
  import CtaBannerSection from "$lib/common/sections/CtaBannerSection.svelte";
  import FaqSection from "$lib/common/sections/FaqSection.svelte";
  import type { FaqData } from "$lib/common/sections/subcomponents/Faq.svelte";

  const faqData: FaqData[] = [
    {
      question: "Is the design and color consultation free?",
      answer:
        "Yes. Klasek Painting provides a free design and color consultation, along with a written proposal that includes pricing, so you can plan your exterior project with no upfront cost.",
    },
    {
      question: "What happens during a color consultation?",
      answer:
        "We review your home, its exterior surfaces, and its surroundings, then help you choose colors that suit the architecture and your goals. You leave with a written proposal and clear next steps.",
    },
    {
      question:
        "Who provides exterior color consultation in the western Chicago suburbs?",
      answer:
        "Klasek Painting offers exterior design and color consultation across the western Cook County and DuPage suburbs from our base in Lyons, IL, drawing on more than 30 years of exterior painting experience.",
    },
    {
      question:
        "Do I have to commit to a painting project to get a consultation?",
      answer:
        "No. The consultation and written proposal come with no obligation, so you can decide on the project after you have seen the colors and the pricing.",
    },
  ];
</script>

<RootServiceHero
  data={{
    h1: "Free Design & Color Consultation by Curb Appeal Experts",
    listItems: [
      "Design Pros - 30+ Years of Experience",
      "Visualize the Best Version of Your Home",
      "Get a Free, Written Proposal with Pricing",
      "Increase Your Home's Value with Lasting Results",
    ],
    image: {
      src: src,
      alt: "White house with black accents, recently completed design consultation project by Klasek Painting",
    },
  }}
/>

<RootServiceSection
  data={{
    heading: "Design Services",
    description:
      "Choose Klasek Painting for your design services and experience top-notch quality and attention to detail. Our pros work with you to create beautiful designs that make your home look and feel amazing. Our focus is giving you great service at a fair price, with results that last.",
    image: design,
  }}
>
  <Button class="mt-2 lg:w-fit" href={routes["contact"].href}
    >Book Service</Button
  >
</RootServiceSection>

<RootServiceSection
  class="bg-white"
  reverse={true}
  data={{
    heading: "Color Consultation Services",
    description:
      "Choose Klasek Painting for your color consultation and get expert advice and personal attention. Our team helps you pick the perfect colors to match your style and space. We offer reliable and affordable services, making sure you're happy with the stunning, long-lasting results. Klasek Painting has all your painting and design needs covered.",
    image: color,
  }}
>
  <Button class="mt-2 lg:w-fit" href={routes["contact"].href}
    >Book Service</Button
  >
</RootServiceSection>

<OtherServicesSection class="bg-off-white" showDesignConsultation={false} />

<CtaBannerSection />

<ViewOurWorkSection class="bg-off-white" />

<PaintingPromisesSection />

<WhyChooseUsSection class="bg-off-white" />

<FaqSection {faqData} />

<ServiceAreaSection />
