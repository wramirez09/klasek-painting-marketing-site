<script lang="ts">
  import SubServiceHero from "$lib/services/SubServiceHero.svelte";
  import EmailSignup from "$lib/common/EmailSignup.svelte";
  import ColumnTemplateSection from "$lib/common/sections/ColumnTemplateSection.svelte";
  import FaqSection from "$lib/common/sections/FaqSection.svelte";
  import type { FaqData } from "$lib/common/sections/subcomponents/Faq.svelte";
  import BasicTemplateSection from "$lib/common/sections/BasicTemplateSection.svelte";
  import { routes, galleryRoutes } from "$lib/common/routing/routes";
  import HeadingAccent from "$lib/common/other/HeadingAccent.svelte";
  import src from "$images/services/exterior-stucco-repair-service.webp?enhanced";
  import { isMobileStore } from "$lib/stores/isMobileStore";
  import GalleryLinkBlock from "$lib/services/GalleryLinkBlock.svelte";

  const faqData: FaqData[] = [
    {
      question: "How should I prepare my stucco for a paint job?",
      answer:
        "Proper prep work is crucial for a successful exterior painting project. Start by using a pressure washer to clean the stucco surface and remove any dirt, debris, or loose paint. This will ensure better adhesion of the new paint and result in a smoother finish.",
    },
    {
      question:
        "Can stucco repair be included in an exterior painting service?",
      answer:
        "Yes, many professional exterior painting services include stucco repair as part of their offerings. Before beginning the painting process, professional painters can address any cracks, holes, or damage to the exterior stucco, ensuring a seamless and durable finish.",
    },
    {
      question: "What is the drying time for stucco patching before painting?",
      answer:
        "The drying time for stucco patching can vary depending on the type of patching material used and weather conditions in Chicago, IL. Generally, it takes about 24-48 hours for the stucco patch to dry completely before applying a second coat or starting the exterior house painting.",
    },
    {
      question:
        "Is pressure washing necessary before an exterior house painting project?",
      answer:
        "Yes, pressure washing is an essential step before any exterior house painting. It helps to clean the surface thoroughly, removing any mold, mildew, and dirt, which allows the new paint to adhere better and last longer.",
    },
    {
      question:
        "What should I expect from a professional exterior painting contractor in terms of attention to detail?",
      answer:
        "A reputable painting contractor will pay close attention to detail throughout the entire process. This includes thorough prep work, such as stucco repair and pressure washing, precise application of the paint using brushes, rollers, or a paint sprayer, and meticulous final touches to ensure a flawless finish.",
    },
    {
      question:
        "Can professional painters apply a second coat of paint on my home's exterior?",
      answer:
        "Yes, applying a second coat of paint is often recommended for better coverage and durability. Professional painters will ensure that the first coat is completely dry before applying the second coat, resulting in a long-lasting and vibrant finish for your home's exterior.",
    },
  ];
</script>

<SubServiceHero
  data={{
    h1: "#1 Stucco Repair Service",
    listItems: [
      "Curb Appeal Boost",
      "Simple, Straight-Forward Pricing",
      "Clear Communication",
      "Meticulous Surface Care",
    ],
  }}
/>

<EmailSignup />

<ColumnTemplateSection class="lg:pt-12 pt-4">
  <div slot="right-column">
    <enhanced:img
      class="w-full h-auto max-w-[500px] mx-auto bord rounded-lg"
      {src}
      alt="Pete Klasek working on a stucco repair exterior house project"
      loading={$isMobileStore ? "lazy" : "eager"}
    />
  </div>

  <div slot="left-column">
    <h2>Expert Stucco Repair</h2>

    <p>
      Stucco has become a popular choice across the United States due to its
      affordability and durability. However, harsh weather conditions like
      storms and blizzards can leave your stucco looking worn and damaged. To
      restore its beauty or prepare for a fresh coat of paint, Klasek Painting
      offers expert stucco repair services in Cook County. Our specialists are
      here to help you bring your stucco back to life, ensuring it remains both
      functional and attractive.
    </p>
  </div>
</ColumnTemplateSection>

<BasicTemplateSection class="bg-off-white">
  <HeadingAccent extend={true} class="sm:w-fit">
    <h2>Trust Us to Handle Your Stucco Restoration in Cook&nbsp;County</h2>
  </HeadingAccent>

  <p>
    With all the options for different colors, styles, patterns, and designs, it
    is no wonder that so many residents select stucco as their primary choice of
    exterior surfacing for their house. Even though stucco is an excellent
    substance to use on the outside of your home, it is still prone to damage
    after many years of weathering. If your home’s stucco has eroded from snow,
    ice, wind, hail, rain, and scorching sun, you will need to invest in
    thorough stucco repairs.
  </p>

  <p>
    You may be wondering whether this process is something you could tackle by
    yourself, since online videos often make stucco applications look relatively
    easy. However, this is unfortunately not the case, since stucco can be quite
    finicky if it is not handled by professionals with many years of experience.
    By allowing our experts to take care of your repairs, you can have peace of
    mind knowing it is done right.
  </p>

  <h3>Customizing Your New Stucco Surfaces</h3>

  <p>
    When applying new stucco, Klasek Painting offers a range of customization
    options to suit your unique style and preferences. Our team can tailor
    colors, textures, and finishes to match your vision, ensuring that no detail
    is out of reach. Whether you want to complement your home's existing design
    or create something entirely new, we use advanced techniques to deliver
    results that enhance your home's exterior.
  </p>

  <strong>Customization options include:</strong>

  <ul>
    <li>Applying stucco over various surfaces, including brick and concrete</li>
    <li>Selecting from diverse designs and patterns</li>
    <li>
      Adding creative detailing to windowsills, door frames, trim, and more
    </li>
    <li>Matching textures, styles, and colors for a cohesive look</li>
  </ul>

  <p>
    For high-quality stucco workmanship in Cook County, <a
      href={routes["contact"].href}>contact Klasek Painting</a
    > to explore your options.
  </p>

  <GalleryLinkBlock
    data={[
      galleryRoutes["stucco-repair-paint"],
      galleryRoutes["stucco-trim"],
      galleryRoutes["stucco-cedar-siding"],
      galleryRoutes["siding-stucco"],
      galleryRoutes["cedar-shingle-stucco-repair"],
      galleryRoutes["stucco-repair"],
    ]}
  />
</BasicTemplateSection>

<FaqSection {faqData} />
