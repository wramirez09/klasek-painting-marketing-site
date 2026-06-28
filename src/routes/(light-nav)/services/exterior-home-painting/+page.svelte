<script lang="ts">
  import RootServiceHero from "$lib/services/root/RootServiceHero.svelte";
  import RootServiceSection from "$lib/services/root/RootServiceSection.svelte";
  import { serviceRoutes } from "$lib/common/routing/routes";
  import WhyChooseUsSection from "$lib/home/WhyChooseUsSection.svelte";
  import ServiceAreaSection from "$lib/common/sections/ServiceAreaSection.svelte";
  import src from "$images/services/exterior-home-painting.webp";
  import PaintingPromisesSection from "$lib/services/PaintingPromisesSection.svelte";
  import historic from "$images/services/historic-house-painting.webp";
  import exterior from "$images/services/exterior-house-painting-services.webp";
  import OtherServicesSection from "$lib/common/sections/OtherServicesSection.svelte";
  import ViewOurWorkSection from "$lib/home/ViewOurWorkSection.svelte";
  import CtaBannerSection from "$lib/common/sections/CtaBannerSection.svelte";
  import EmailSignup from "$lib/common/EmailSignup.svelte";
  import FaqSection from "$lib/common/sections/FaqSection.svelte";
  import type { FaqData } from "$lib/common/sections/subcomponents/Faq.svelte";

  const faqData: FaqData[] = [
    {
      question:
        "Who does exterior house painting in the western Cook County suburbs?",
      answer:
        "Klasek Painting has painted exterior homes across the western Chicago suburbs for more than 30 years from our base in Lyons, IL. We serve 15 communities including Hinsdale, La Grange, Burr Ridge, Oak Park, and Downers Grove.",
    },
    {
      question:
        "How much does exterior house painting cost in the Chicago suburbs?",
      answer:
        "The price depends on the size of the home, the siding material, how much surface prep and repair is required, and the products chosen. We provide a free, written estimate after assessing your property, so the price is accurate before any work starts.",
    },
    {
      question: "How long does an exterior repaint take?",
      answer:
        "Most single-family exterior repaints take a few days to about a week, depending on the size of the home, the amount of repair needed, and the weather. Your written estimate includes a projected timeline.",
    },
    {
      question:
        "When is the best time of year to paint a house exterior in the Chicago area?",
      answer:
        "Exterior painting in the Chicago area is typically done from late spring through fall, when temperatures and humidity let the paint cure properly. We schedule projects around the weather to protect the finish.",
    },
    {
      question: "Do you paint historic and older homes?",
      answer:
        "Yes. Klasek Painting regularly paints historic and Victorian-era homes, with careful surface preparation and products matched to older exteriors. Ask about our historic house painting service.",
    },
  ];
</script>

<RootServiceHero
  data={{
    h1: "Experienced House Painters in Cook\xa0County,\xa0IL",
    listItems: [
      "Over 30 Years of Experience",
      "Meticulous Surface Preparation",
      "Quality Materials & Workmanship",
      "Free Design Consultation & Quote",
    ],
    image: {
      src,
      alt: "Exterior Home Painting",
    },
  }}
/>

<EmailSignup />

<RootServiceSection
  class="bg-white"
  reverse={true}
  data={{
    heading: "Exterior House Painting\xa0Services",
    description:
      "At Klasek Painting, we dedicate our all to each project to ensure your vision comes true. We provide Industry-leading equipment and specially trained painters to deliver efficient and timely services.",
    href: serviceRoutes["exterior-paint-contractor"].href,
    image: exterior,
  }}
/>

<RootServiceSection
  data={{
    heading: "Historic House Painting\xa0Services",
    description:
      "When It comes to Historic Houses, Klasek knows how to provide top-notch painting services to your home's delicate exterior. Painting historic homes require attention to detail and finesse, that can be found at Klasek Painting.",
    href: serviceRoutes["historic-house-painting"].href,
    image: historic,
  }}
/>

<OtherServicesSection showExteriorPainting={false} />

<WhyChooseUsSection class="bg-off-white" />

<CtaBannerSection />

<PaintingPromisesSection />

<ViewOurWorkSection class="bg-off-white" />

<FaqSection {faqData} />

<ServiceAreaSection />
