<script lang="ts">
  import HomepageHero from "$lib/home/HomepageHero.svelte";
  import ViewOurWorkSection from "$lib/home/ViewOurWorkSection.svelte";
  import WhyChooseUsSection from "$lib/home/WhyChooseUsSection.svelte";
  import ServiceAreaSection from "$lib/common/sections/ServiceAreaSection.svelte";
  import TestimonialsSection from "$lib/common/sections/TestimonialsSection.svelte";
  import TrustedBrandsSection from "$lib/home/TrustedBrandsSection.svelte";
  import NavBar from "$lib/common/nav/NavBar.svelte";
  import CtaBannerSection from "$lib/common/sections/CtaBannerSection.svelte";
  import ServiceGridSection from "$lib/services/ServiceGridSection.svelte";
  import OtherServicesSection from "$lib/common/sections/OtherServicesSection.svelte";
  import EmailSignup from "$lib/common/EmailSignup.svelte";
  import Footer from "$lib/common/footer/Footer.svelte";
  import StuccoSection from "$lib/common/sections/StuccoSection.svelte";
  import ReliableServiceSection from "$lib/common/sections/ReliableServiceSection.svelte";
  import FaqSection from "$lib/common/sections/FaqSection.svelte";
  import type { FaqData } from "$lib/common/sections/subcomponents/Faq.svelte";

  const faqData: FaqData[] = [
    {
      question:
        "Who does exterior house painting in the western Chicago suburbs?",
      answer:
        "Klasek Painting is a family-owned exterior painting and repair contractor based in Lyons, IL, serving the western Cook County and DuPage suburbs for more than 30 years. We paint and repair stucco, siding, and brick homes across 15 nearby communities including Hinsdale, La Grange, Oak Park, Berwyn, and Downers Grove.",
    },
    {
      question:
        "How much does it cost to repaint a house exterior in the Chicago suburbs?",
      answer:
        "Exterior repaint pricing depends on the size of the home, the siding material, how much prep and repair is needed, and the products selected. Klasek Painting provides a free, written estimate after assessing your property, so you get accurate pricing with no surprises.",
    },
    {
      question: "How long does an exterior repaint take?",
      answer:
        "Most single-family exterior repaints take a few days to about a week, depending on the size of the home, the amount of surface repair required, and the weather. We include a projected timeline in your written estimate before work begins.",
    },
    {
      question: "Is Klasek Painting licensed and certified?",
      answer:
        "Yes. Klasek Painting is licensed, EPA Lead-Safe Certified, and a member of the PDCA (Painting and Decorating Contractors of America). We paint with premium Sherwin-Williams, Benjamin Moore, Valspar, and Behr products.",
    },
    {
      question: "Do you install seamless gutters without subcontractors?",
      answer:
        "Yes. We fabricate and install seamless gutters in-house using our own on-site gutter machine, with no subcontractors. One accountable crew handles your gutters alongside any exterior painting or repair work.",
    },
  ];
</script>

<NavBar />
<HomepageHero />
<EmailSignup class="-mt-8 relative z-10" />
<WhyChooseUsSection />
<ReliableServiceSection class="bg-off-white" />
<StuccoSection />
<ServiceAreaSection />
<CtaBannerSection />
<ViewOurWorkSection class="pb-0" />
<TestimonialsSection />
<TrustedBrandsSection />
<FaqSection {faqData} />
<Footer />
