<script lang="ts">
  import type { FaqData } from "$lib/common/sections/subcomponents/Faq.svelte";
  import ContactForm from "$lib/contact-us/ContactForm.svelte";
  import GoogleProof from "$lib/common/other/GoogleProof.svelte";
  import ClickToCall from "$lib/common/other/ClickToCall.svelte";
  import Map from "$lib/common/other/Map.svelte";
  import Button from "$components/button/button.svelte";
  import { serviceAreaRoutes } from "$lib/common/routing/routes";
  import heroSrc from "$images/galleries/exterior-hardie-board/exterior-hardie-board-1.webp?enhanced";
  import paintingTall from "$images/galleries/exterior-hardie-board/exterior-hardie-board-2.webp?enhanced";
  import paintingTop from "$images/galleries/exterior-hardie-board/exterior-hardie-board-3.webp?enhanced";
  import paintingBottom from "$images/galleries/exterior-hardie-board/exterior-hardie-board-4.webp?enhanced";
  import repairSrc from "$images/services/hardie-board-siding-repair-service.webp?enhanced";
  import trimSrc from "$images/galleries/exterior-hardie-board/exterior-hardie-board-5.webp?enhanced";
  import guideFront from "$images/galleries/exterior-hardie-board/exterior-hardie-board-6.webp?enhanced";
  import guideAngle from "$images/galleries/exterior-hardie-board/exterior-hardie-board-7.webp?enhanced";
  import galleryBeforeAfter from "$images/services/hardie-board-siding-painting-before-after-service.webp?enhanced";
  import gallery8 from "$images/galleries/exterior-hardie-board/exterior-hardie-board-8.webp?enhanced";
  import gallery9 from "$images/galleries/exterior-hardie-board/exterior-hardie-board-9.webp?enhanced";
  import gallery10 from "$images/galleries/exterior-hardie-board/exterior-hardie-board-10.webp?enhanced";
  import gallery11 from "$images/galleries/exterior-hardie-board/exterior-hardie-board-11.webp?enhanced";
  import gallery12 from "$images/galleries/exterior-hardie-board/exterior-hardie-board-12.webp?enhanced";
  import gallery13 from "$images/galleries/exterior-hardie-board/exterior-hardie-board-13.webp?enhanced";
  import gallery14 from "$images/galleries/exterior-hardie-board/exterior-hardie-board-14.webp?enhanced";
  import splash from "$images/backgrounds/orange-paint-splash.webp";
  import stars from "$images/5-stars.svg";
  import google from "$images/logos/Google-name-logo.svg";
  import valspar from "$images/logos/trusted-brands/valspar.png?enhanced";
  import behr from "$images/logos/trusted-brands/behr.png?enhanced";
  import benjaminMoore from "$images/logos/trusted-brands/benjamin-moore.png?enhanced";
  import sherwinWilliams from "$images/logos/trusted-brands/sherwin-williams.png?enhanced";
  import leadSafe from "$images/logos/trusted-brands/lead-safe.png?enhanced";
  import pdca from "$images/logos/trusted-brands/pdca.png?enhanced";
  import { isMobileStore } from "$lib/stores/isMobileStore";

  const heroChecks = [
    "Painted by our own crew",
    "Free written estimates",
    "100% satisfaction guarantee",
    "Lead-Safe Certified",
  ];

  const paintingChecks = [
    ["Edge & bare-spot priming", ""],
    ["Loxon masonry primer", "by Sherwin-Williams"],
    ["Premium acrylic latex", "topcoat"],
    ["Sprayed", "for full coverage"],
  ];

  const repairItems = [
    ["Set popped nails", "Reset and spot-primed before topcoat."],
    ["Caulk & seal gaps", "Joints sealed to keep moisture out."],
    ["Replace damaged board", "Deteriorated sections cut out and swapped."],
    ["Scrape loose paint", "Failing coats removed down to sound siding."],
  ];

  const problems = [
    {
      title: "Color fades in the sun",
      body: "The intense Chicago heat chalks and dulls factory color over time, leaving the whole house looking tired and washed-out.",
    },
    {
      title: "Cheap paint peels",
      body: "Factory primer is thin and never covers the cut edges. Paint over it without priming and the coat flakes off within a season.",
    },
    {
      title: "Moisture & ground contact",
      body: "Hardie board wicks moisture, and boards in direct contact with the ground can deteriorate — needing repair before any paint goes on.",
    },
  ];

  const guideCards = [
    {
      number: "1",
      label: "New board",
      title: "Prime the edges first.",
      body: "Factory primer is thin and never covers the cut edges, so an extra primer coat is a must. We use a masonry primer like Loxon by Sherwin-Williams, then top-coat in a high-quality acrylic latex exterior paint — Sherwin-Williams, Benjamin Moore, or Behr. You can roll it, but spraying drives paint into every groove for full, even coverage.",
    },
    {
      number: "2",
      label: "Faded board",
      title: "Prep beats the fade.",
      body: 'Hardie board is "hardy," but its color fades in our intense Chicago heat. A repaint is all about thorough prep: setting popped nails, scraping any loose or peeling paint, and caulking the gaps. The board wicks moisture well, but sections in direct ground contact can deteriorate — those get repaired or replaced before painting.',
    },
    {
      number: "3",
      label: "Trim work",
      title: "The icing on the cake.",
      body: "Once the siding is painted, the trim is what ties it together. We sand and scrape off loose paint, caulk large cracks, and replace any dry rot. Bare wood, doors, columns, or metal get a primer coat first — and we finish trim in a semi-gloss that looks sharp and stays cleaner.",
    },
  ];

  const stats = [
    {
      stat: "30+",
      title: "Years in business",
      body: "Serving Cook County exteriors since 1994 — we'll be here for the warranty.",
    },
    {
      stat: "0",
      title: "Subcontractors",
      body: "Your siding is painted by Klasek employees we trained and stand behind — led by owner Pete Klasek.",
    },
    {
      stat: "$0",
      title: "Estimate cost",
      body: "Free, written, itemized — so you know exactly what you're paying for.",
    },
    {
      stat: "100%",
      title: "Satisfaction guarantee",
      body: "We're not done until the color is even, the trim is crisp, and you're happy with the finish.",
    },
  ];

  const galleryImages = [
    { src: galleryBeforeAfter, alt: "Hardie board painting before and after" },
    { src: gallery8, alt: "Painted Hardie board siding" },
    { src: gallery9, alt: "Hardie board home exterior" },
    { src: gallery10, alt: "Freshly painted fiber cement siding" },
    { src: gallery11, alt: "Hardie board siding detail" },
    { src: gallery12, alt: "Painted Hardie board home" },
    { src: gallery13, alt: "Hardie board exterior project" },
    { src: gallery14, alt: "Completed Hardie board painting project" },
  ];

  const partnerLogos = [
    { src: valspar, alt: "Valspar", height: "h-7 sm:h-8" },
    { src: behr, alt: "Behr", height: "h-7 sm:h-8" },
    { src: benjaminMoore, alt: "Benjamin Moore", height: "h-8 sm:h-10" },
    { src: sherwinWilliams, alt: "Sherwin-Williams", height: "h-8 sm:h-10" },
    { src: leadSafe, alt: "Lead-Safe Certified", height: "h-9 sm:h-11" },
    { src: pdca, alt: "PDCA", height: "h-8 sm:h-10" },
  ];

  const faqData: FaqData[] = [
    {
      question: "What is Hardie board siding made of?",
      answer:
        "Hardie board is a fiber-cement siding made from mechanical pulp. You'll also hear it called HardiePlank, concrete siding, cement-fiber siding, or fiber cement cladding. It comes in finishes that mimic chipboard, plywood, or real wood grain.",
    },
    {
      question: "Do I need to prime new Hardie board before painting?",
      answer:
        "Yes. Even though new Hardie board ships with a factory primer, the coating is thin and doesn't cover the cut edges — so a high-quality primer coat is essential for proper coverage. We recommend a masonry primer like Loxon by Sherwin-Williams.",
    },
    {
      question: "What type of paint should I use on Hardie board siding?",
      answer:
        "A high-quality acrylic latex exterior paint. Sticking with a trusted brand like Sherwin-Williams, Benjamin Moore, or Behr keeps the siding protected and helps the finish last much longer.",
    },
    {
      question: "Can I roll on paint when painting Hardie board?",
      answer:
        "You can roll it, but we spray. Spraying drives paint into every crack and groove of the board's texture and ensures the entire surface is covered evenly — a roller tends to skip the recesses.",
    },
    {
      question: "How should I prepare faded Hardie board for painting?",
      answer:
        "Thorough prep is everything. That means setting any popped nails, scraping off loose or peeling paint, and caulking significant gaps. If a section in direct ground contact has deteriorated, it should be repaired or replaced before painting.",
    },
    {
      question: "What are the best practices for painting Hardie board trim?",
      answer:
        "Finish the trim after the siding. Sand and scrape loose paint, caulk large cracks, and replace any dry rot. Prime all bare wood or metal first, and use a semi-gloss sheen — it looks best on trim and stays cleaner over time.",
    },
  ];

  // FAQ accordion state — first item open, one at a time (matches design)
  let openFaq = 0;
</script>

<!-- ===================== HERO ===================== -->
<section class="relative bg-secondary-dark text-white overflow-hidden">
  <div
    class="absolute inset-0 bg-gradient-to-br from-secondary/60 via-secondary-dark to-secondary-dark"
    aria-hidden="true"
  />
  <div
    class="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full bg-primary/10 blur-3xl"
    aria-hidden="true"
  />
  <div
    class="container relative grid lg:grid-cols-[440px_1fr] gap-10 lg:gap-14 items-center py-14 lg:py-20 p-x"
  >
    <!-- left: framed photo + google review card -->
    <div class="order-2 lg:order-1">
      <div class="relative">
        <enhanced:img
          class="w-full h-auto aspect-[4/3] object-cover ring-4 ring-white/10 rounded-xl shadow-2xl"
          src={heroSrc}
          alt="Home with Hardie board siding painted by Klasek Painting"
          loading={$isMobileStore ? "lazy" : "eager"}
        />
        <GoogleProof
          class="bg-white rounded-xl border p-4 sm:absolute sm:-bottom-8 sm:-right-4 mt-4 sm:mt-0 w-full sm:w-[340px] shadow-2xl"
        />
      </div>
    </div>

    <!-- right: copy -->
    <div class="order-1 lg:order-2 max-w-xl">
      <span class="tab mb-5">#1 Hardie Board Painters · Cook County</span>
      <h1
        class="text-4xl leading-[1.05] sm:text-5xl font-extrabold text-white"
        data-testid="page-heading"
      >
        Hardie board siding,<br class="hidden sm:block" /> painted to last by
        <span class="text-primary">our own crew.</span>
      </h1>
      <p class="mt-5 text-lg text-white/75 leading-relaxed max-w-lg">
        Fiber cement is tough — but its factory color fades under the Chicago
        sun, and a botched repaint peels in a season. Klasek primes the edges,
        preps every board, and sprays on premium acrylic latex so your siding
        looks new again and stays that way for years.
      </p>
      <ul class="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
        {#each heroChecks as check}
          <li class="flex items-center gap-2.5 text-white/90 font-semibold">
            <svg
              class="text-primary shrink-0"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"><path d="M20 6L9 17l-5-5" /></svg
            >
            {check}
          </li>
        {/each}
      </ul>
      <div class="mt-8 flex flex-wrap items-center gap-3">
        <Button href="#estimate" class="text-lg h-14 px-7">
          Get a Free Estimate
        </Button>
        <ClickToCall variant="outline" class="text-lg h-14 px-6" />
      </div>
    </div>
  </div>
</section>

<!-- ===================== ESTIMATE FORM BAND ===================== -->
<section id="estimate" class="bg-off-white p-y p-x scroll-mt-24">
  <div class="container">
    <div
      class="bg-white rounded-2xl shadow-subtle border overflow-hidden grid lg:grid-cols-[1fr_1.15fr]"
    >
      <!-- pitch side -->
      <div
        class="bg-secondary-dark text-white p-8 sm:p-10 flex flex-col justify-center relative overflow-hidden"
      >
        <div
          class="absolute -bottom-16 -left-10 w-64 h-64 rounded-full bg-primary/15 blur-2xl"
          aria-hidden="true"
        />
        <span class="tab self-start mb-5">Free · No obligation</span>
        <h2
          class="text-3xl sm:text-4xl leading-[1.08] font-extrabold text-white relative"
        >
          Get your free siding estimate.
        </h2>
        <p class="mt-4 text-white/75 leading-relaxed relative max-w-sm">
          Tell us about your home and we'll schedule a walk-through, then
          deliver a free, written estimate for you to evaluate. Same crew from
          quote to clean-up.
        </p>
        <div class="mt-6 relative">
          <ClickToCall
            variant="link"
            class="!text-xl !font-bold text-white hover:!text-primary"
          />
        </div>
      </div>
      <!-- form side -->
      <div class="p-7 sm:p-10">
        <ContactForm />
      </div>
    </div>
  </div>
</section>

<!-- ===================== TRUST STRIP ===================== -->
<section class="bg-white border-y">
  <div
    class="container py-5 p-x flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center"
  >
    <span class="flex items-center gap-2">
      <img class="w-[80px] h-[14px]" src={stars} alt="5 stars" />
      <span class="text-sm font-bold text-gray-700">5.0 on Google</span>
    </span>
    <span class="hidden sm:block w-px h-5 bg-gray-200" aria-hidden="true" />
    <span
      class="text-sm font-bold text-gray-700 inline-flex items-center gap-2"
    >
      <svg
        width="17"
        height="17"
        viewBox="0 0 24 24"
        fill="none"
        stroke="hsl(var(--primary-dark))"
        stroke-width="2.2"
        stroke-linecap="round"
        stroke-linejoin="round"
        ><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg
      >
      Lead-Safe Certified
    </span>
    <span class="hidden sm:block w-px h-5 bg-gray-200" aria-hidden="true" />
    <span
      class="text-sm font-bold text-gray-700 inline-flex items-center gap-2"
    >
      <svg
        width="17"
        height="17"
        viewBox="0 0 24 24"
        fill="none"
        stroke="hsl(var(--primary-dark))"
        stroke-width="2.2"
        stroke-linecap="round"
        stroke-linejoin="round"
        ><path
          d="M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
        /></svg
      >
      100% Satisfaction Guarantee
    </span>
    <span class="hidden sm:block w-px h-5 bg-gray-200" aria-hidden="true" />
    <span
      class="text-sm font-bold text-gray-700 inline-flex items-center gap-2"
    >
      <svg
        width="17"
        height="17"
        viewBox="0 0 24 24"
        fill="none"
        stroke="hsl(var(--primary-dark))"
        stroke-width="2.2"
        stroke-linecap="round"
        stroke-linejoin="round"
        ><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg
      >
      Serving Chicagoland since 1994
    </span>
  </div>
</section>

<!-- ===================== PROBLEM / AGITATION ===================== -->
<section class="bg-white p-y p-x">
  <div class="container">
    <div class="text-center max-w-2xl mx-auto mb-11 flex flex-col items-center">
      <div class="ribbon mb-4">
        <span class="flag flag-l" aria-hidden="true" />
        <h2
          class="text-3xl sm:text-4xl leading-[1.1] font-extrabold text-secondary-dark"
        >
          Why Hardie board needs a real paint job
        </h2>
        <span class="flag flag-r" aria-hidden="true" />
      </div>
      <p class="text-lg text-gray-600 leading-relaxed">
        Fiber cement is built to last — but the finish on it isn't forever. Skip
        the prep, and a fresh coat peels before the next summer's out.
      </p>
    </div>
    <div class="grid sm:grid-cols-3 gap-5">
      {#each problems as problem, i}
        <div class="rounded-xl border p-6 bg-off-white">
          <div
            class="w-12 h-12 rounded-lg bg-primary-light/40 text-primary-dark flex items-center justify-center mb-4"
          >
            {#if i === 0}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.2"
                stroke-linecap="round"
                stroke-linejoin="round"
                ><path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6" /></svg
              >
            {:else if i === 1}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.2"
                stroke-linecap="round"
                stroke-linejoin="round"
                ><path
                  d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                /><path d="M3 13h18" /></svg
              >
            {:else}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.2"
                stroke-linecap="round"
                stroke-linejoin="round"
                ><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" /></svg
              >
            {/if}
          </div>
          <h3 class="font-bold text-xl text-secondary-dark">{problem.title}</h3>
          <p class="mt-2 text-gray-600 leading-relaxed">{problem.body}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- ===================== PAINTING (HERO OFFERING) ===================== -->
<section
  id="painting"
  class="relative bg-secondary-dark text-white p-y p-x scroll-mt-20 overflow-hidden"
>
  <div
    class="absolute inset-0 bg-gradient-to-tr from-secondary-dark via-secondary-dark to-secondary/70"
    aria-hidden="true"
  />
  <div
    class="container relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
  >
    <div>
      <span class="tab mb-5">Our signature service</span>
      <h2 class="text-3xl sm:text-5xl leading-[1.06] font-extrabold text-white">
        Primed, prepped, and sprayed — the way fiber cement should be painted.
      </h2>
      <p class="mt-5 text-lg text-white/75 leading-relaxed max-w-lg">
        A Hardie board repaint lives or dies on prep. We set popped nails,
        scrape loose paint, caulk the gaps, and prime the bare edges — then
        spray on premium acrylic latex so paint works into every groove and the
        whole wall cures to one even finish.
      </p>
      <ul class="mt-7 grid sm:grid-cols-2 gap-x-6 gap-y-3.5">
        {#each paintingChecks as [bold, rest]}
          <li class="flex items-start gap-3">
            <svg
              class="mt-0.5 shrink-0 text-primary"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.8"
              stroke-linecap="round"
              stroke-linejoin="round"><path d="M20 6L9 17l-5-5" /></svg
            >
            <span class="text-white/85">
              <b class="text-white font-bold">{bold}</b>
              {rest}
            </span>
          </li>
        {/each}
      </ul>
      <div class="mt-8 flex flex-wrap items-center gap-4">
        <Button href="#estimate" class="text-lg h-14 px-7">
          Price My Repaint
        </Button>
        <p class="text-sm text-white/55 max-w-[14rem]">
          Painted by Klasek employees — never subcontracted out.
        </p>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-4">
      <enhanced:img
        class="w-full h-full aspect-[3/4] object-cover rounded-lg ring-2 ring-white/10"
        src={paintingTall}
        alt="Spraying Hardie board siding"
        loading="lazy"
      />
      <div class="grid grid-rows-2 gap-4">
        <div class="relative rounded-lg overflow-hidden ring-2 ring-white/10">
          <enhanced:img
            class="absolute inset-0 w-full h-full object-cover"
            src={paintingTop}
            alt="Priming Hardie board cut edges"
            loading="lazy"
          />
        </div>
        <div class="relative rounded-lg overflow-hidden ring-2 ring-white/10">
          <enhanced:img
            class="absolute inset-0 w-full h-full object-cover"
            src={paintingBottom}
            alt="Finished Hardie lap siding"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ===================== REPAIR ===================== -->
<section id="repair" class="bg-white p-y p-x scroll-mt-20">
  <div class="container grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
    <enhanced:img
      class="order-2 lg:order-1 w-full h-auto aspect-[4/3] object-cover rounded-lg"
      src={repairSrc}
      alt="Hardie board siding repair before painting"
      loading="lazy"
    />
    <div class="order-1 lg:order-2">
      <span class="tab mb-5">Repair before painting</span>
      <h2
        class="text-3xl sm:text-4xl leading-[1.08] font-extrabold text-secondary-dark"
      >
        We fix the failing boards first — then paint over solid siding.
      </h2>
      <p class="mt-4 text-lg text-gray-600 leading-relaxed">
        Painting over rotted or cracked board just hides the problem. Where
        siding has deteriorated — often where it meets the ground — we repair or
        replace the damaged section so the finish goes on solid and lasts.
      </p>
      <div class="mt-7 grid sm:grid-cols-2 gap-x-6 gap-y-4">
        {#each repairItems as [title, body]}
          <div class="flex items-start gap-3">
            <span
              class="mt-1.5 w-2 h-2 rounded-full bg-primary-dark shrink-0"
              aria-hidden="true"
            />
            <p>
              <b class="font-bold text-secondary-dark">{title}</b><br />
              <span class="text-gray-600 text-[15px]">{body}</span>
            </p>
          </div>
        {/each}
      </div>
      <Button
        href="#estimate"
        variant="secondary"
        class="mt-8 text-lg h-14 px-7 bg-secondary-dark hover:bg-secondary"
      >
        Book a Repair Visit
      </Button>
    </div>
  </div>
</section>

<!-- ===================== TRIM, FASCIA & SOFFIT ===================== -->
<section id="trim" class="bg-off-white p-y p-x scroll-mt-20">
  <div class="container">
    <div
      class="rounded-2xl bg-white border shadow-subtle overflow-hidden grid lg:grid-cols-[1.1fr_1fr]"
    >
      <div class="p-8 sm:p-12">
        <span class="tab mb-5">The finishing touch</span>
        <h2
          class="text-3xl sm:text-4xl leading-[1.08] font-extrabold text-secondary-dark"
        >
          Trim, fascia &amp; soffit — the detail that makes it pop.
        </h2>
        <p class="mt-4 text-lg text-gray-600 leading-relaxed max-w-md">
          Crisp trim is the icing on the cake. We sand and scrape loose paint,
          caulk the cracks, replace any dry rot, and prime every bare spot —
          then finish in a semi-gloss that frames the house and wipes clean.
        </p>
        <div class="mt-6 flex flex-wrap gap-3">
          <span
            class="rounded-md bg-off-white border px-4 py-2 text-sm font-bold text-secondary-dark"
          >
            Sand &amp; scrape
          </span>
          <span
            class="rounded-md bg-off-white border px-4 py-2 text-sm font-bold text-secondary-dark"
          >
            Caulk &amp; prime bare wood
          </span>
          <span
            class="rounded-md bg-off-white border px-4 py-2 text-sm font-bold text-secondary-dark"
          >
            Semi-gloss finish
          </span>
        </div>
        <Button href="#estimate" class="mt-8 text-lg h-14 px-7">
          Get a Trim Quote
        </Button>
      </div>
      <div class="relative min-h-[260px]">
        <enhanced:img
          class="absolute inset-0 w-full h-full object-cover"
          src={trimSrc}
          alt="Fresh trim on Hardie board siding"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</section>

<!-- ===================== ALL ABOUT / KNOWLEDGE GUIDE ===================== -->
<section id="guide" class="bg-white p-y p-x scroll-mt-20">
  <div class="container">
    <div class="grid lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-16 items-center">
      <!-- intro copy -->
      <div>
        <span class="tab mb-5">A quick field guide</span>
        <h2
          class="text-3xl sm:text-4xl leading-[1.07] font-extrabold text-secondary-dark"
        >
          All about painting exterior Hardie board siding.
        </h2>
        <p class="mt-5 text-lg text-gray-600 leading-relaxed">
          Hardie board is a dense fiber-cement board made from mechanical pulp —
          you'll also hear it called HardiePlank, cement-fiber siding, or fiber
          cement cladding. It's all over the Chicago suburbs in finishes that
          mimic coarse chipboard, plywood, or real wood grain.
        </p>
        <p class="mt-4 text-lg text-gray-600 leading-relaxed">
          Because the siding almost always ships
          <b class="text-secondary-dark font-bold">pre-primed</b> to protect it in
          transit, a great paint job is less about the color and more about the prep.
          Here's how we approach each situation.
        </p>
      </div>
      <!-- overlapping photos -->
      <div class="relative h-[380px] sm:h-[440px]">
        <enhanced:img
          class="absolute top-0 left-0 w-[68%] aspect-[5/4] object-cover rounded-lg ring-[6px] ring-primary-dark shadow-2xl"
          src={guideFront}
          alt="Hardie board home — front view"
          loading="lazy"
        />
        <enhanced:img
          class="absolute bottom-0 right-0 w-[60%] aspect-[4/3] object-cover rounded-lg ring-[6px] ring-primary-dark shadow-2xl"
          src={guideAngle}
          alt="Hardie board home — angle view"
          loading="lazy"
        />
      </div>
    </div>

    <!-- recommendation columns -->
    <div class="mt-14 grid md:grid-cols-3 gap-6">
      {#each guideCards as { number, label, title, body }}
        <div class="rounded-2xl border bg-off-white p-7">
          <span
            class="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.12em] text-primary-dark"
          >
            <span
              class="w-6 h-6 rounded-full bg-primary-dark text-white flex items-center justify-center text-[13px]"
            >
              {number}
            </span>
            {label}
          </span>
          <h3 class="mt-4 font-bold text-xl text-secondary-dark">{title}</h3>
          <p class="mt-3 text-gray-600 leading-relaxed">{body}</p>
        </div>
      {/each}
    </div>

    <!-- serving chicagoland note -->
    <div
      class="mt-10 rounded-2xl bg-secondary-dark text-white p-7 sm:p-9 flex flex-col sm:flex-row sm:items-center gap-6 justify-between"
    >
      <div class="max-w-2xl">
        <h3 class="font-bold text-xl sm:text-2xl text-white">
          Klasek Painting, serving Chicagoland for 30+ years.
        </h3>
        <p class="mt-2 text-white/75 leading-relaxed">
          Owner Pete Klasek is happy to answer any questions about your Hardie
          board project. We're known for high-quality work, dependable service,
          a satisfaction guarantee, and on-time completion — at competitive
          pricing.
        </p>
      </div>
      <Button href="#estimate" class="text-lg h-14 px-7 shrink-0">
        Contact Klasek
      </Button>
    </div>
  </div>
</section>

<!-- ===================== WHY KLASEK ===================== -->
<section id="why" class="bg-white p-y p-x scroll-mt-20">
  <div class="container">
    <div class="text-center max-w-2xl mx-auto mb-11">
      <div
        class="inline-block bg-primary-dark text-white px-7 py-2.5 -skew-x-6 shadow-subtle mb-5"
      >
        <span
          class="inline-block skew-x-6 font-extrabold text-lg sm:text-xl uppercase tracking-wide"
        >
          Why Choose Klasek
        </span>
      </div>
      <h2
        class="text-3xl sm:text-4xl leading-[1.08] font-extrabold text-secondary-dark"
      >
        Three decades on Chicagoland ladders. One crew, start to finish.
      </h2>
    </div>
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {#each stats as { stat, title, body }}
        <div
          class="rounded-xl border p-6 text-center hover:shadow-subtle transition"
        >
          <div class="font-extrabold text-4xl text-primary-dark">{stat}</div>
          <h3 class="mt-2 font-bold text-lg text-secondary-dark">{title}</h3>
          <p class="mt-2 text-gray-600 text-[15px] leading-relaxed">{body}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- ===================== BEFORE / AFTER GALLERY ===================== -->
<section class="bg-off-white p-y p-x">
  <div class="container">
    <div class="text-center mb-9 flex flex-col items-center">
      <span class="tab mb-4">Our work</span>
      <h2
        class="text-3xl sm:text-4xl leading-[1.08] font-extrabold text-secondary-dark"
      >
        Before &amp; after, around the neighborhood.
      </h2>
    </div>
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {#each galleryImages as { src, alt }}
        <enhanced:img
          class="w-full h-full aspect-square object-cover rounded-lg"
          {src}
          {alt}
          loading="lazy"
        />
      {/each}
    </div>
    <div class="mt-9 flex flex-col items-center gap-3">
      <p class="flex items-center gap-2 text-sm font-bold text-gray-700">
        Review us
        <img class="w-[80px] h-[14px]" src={stars} alt="5 stars" />
        on
      </p>
      <img class="w-[92px] h-auto" src={google} alt="Google" />
    </div>
  </div>
</section>

<!-- ===================== SERVICE AREA ===================== -->
<section id="area" class="bg-white p-y p-x scroll-mt-20">
  <div class="container">
    <div class="mb-10">
      <div class="ribbon">
        <span class="flag flag-l" aria-hidden="true" />
        <h2
          class="text-3xl sm:text-4xl leading-[1.08] font-extrabold text-secondary-dark text-center"
        >
          Areas We Serve
        </h2>
        <span class="flag flag-r" aria-hidden="true" />
      </div>
    </div>
    <div class="grid lg:grid-cols-[1fr_1.1fr] gap-12 items-center">
      <div>
        <h3 class="font-bold text-2xl text-secondary-dark">
          Hardie board painting across the western Cook County suburbs.
        </h3>
        <p class="mt-4 text-lg text-gray-600 leading-relaxed max-w-md">
          Based at 4415 S. Custer in Lyons, IL — a short drive from your home.
          If your town isn't listed, call us; we likely cover it.
        </p>
        <div
          class="mt-6 rounded-xl bg-off-white border p-5 flex items-start gap-3"
        >
          <svg
            class="mt-0.5 shrink-0"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="hsl(var(--primary-dark))"
            stroke-width="2.2"
            stroke-linecap="round"
            stroke-linejoin="round"
            ><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle
              cx="12"
              cy="10"
              r="3"
            /></svg
          >
          <div>
            <p class="font-bold text-secondary-dark">
              Klasek Painting · Lyons, IL
            </p>
            <p class="text-gray-600 text-[15px]">
              4415 S. Custer, Lyons, IL 60534
            </p>
            <ClickToCall
              variant="link"
              class="!text-primary-dark !font-bold !no-underline hover:!underline !text-[15px]"
            />
          </div>
        </div>
        <div class="mt-5 flex flex-wrap items-center gap-3">
          <Button href="#estimate" class="text-lg px-6">
            Request Estimate
          </Button>
          <ClickToCall
            variant="secondary"
            class="text-lg px-6 bg-secondary-dark hover:bg-secondary text-white"
          >
            Call the Crew
          </ClickToCall>
        </div>
      </div>
      <div>
        <ul
          class="grid grid-cols-2 sm:grid-cols-3 gap-x-5 gap-y-2.5 text-[15px] font-semibold text-gray-700"
        >
          {#each Object.values(serviceAreaRoutes) as { text, href }}
            <li class="flex items-center gap-2">
              <span
                class="w-1.5 h-1.5 rounded-full bg-primary-dark shrink-0"
                aria-hidden="true"
              />
              <a class="hover:text-primary-dark hover:underline" {href}>
                {text}
              </a>
            </li>
          {/each}
        </ul>
        <div class="mt-6 h-44 rounded-lg overflow-hidden">
          <Map lazy={true} />
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ===================== BRAND PARTNERS ===================== -->
<section class="bg-off-white py-14 border-y p-x">
  <div class="container">
    <div class="mb-8">
      <div class="ribbon">
        <span class="flag flag-l" aria-hidden="true" />
        <p
          class="font-bold text-lg text-secondary-dark uppercase tracking-wide text-center"
        >
          Our Trusted Brand Partners
        </p>
        <span class="flag flag-r" aria-hidden="true" />
      </div>
    </div>
    <div
      class="flex flex-wrap items-center justify-center gap-x-10 sm:gap-x-14 gap-y-7"
    >
      {#each partnerLogos as { src, alt, height }}
        <enhanced:img
          class="{height} w-auto object-contain opacity-75 hover:opacity-100 transition"
          {src}
          {alt}
          loading="lazy"
        />
      {/each}
    </div>
  </div>
</section>

<!-- ===================== FAQ ===================== -->
<section id="faq" class="bg-white p-y p-x scroll-mt-20">
  <div class="container max-w-3xl">
    <div class="mb-10">
      <div class="ribbon">
        <span class="flag flag-l" aria-hidden="true" />
        <h2
          class="text-3xl sm:text-4xl leading-[1.08] font-extrabold text-secondary-dark text-center"
        >
          Frequently Asked Questions
        </h2>
        <span class="flag flag-r" aria-hidden="true" />
      </div>
    </div>
    <div class="divide-y border-y">
      {#each faqData as { question, answer }, i}
        <div class="py-5">
          <button
            type="button"
            class="flex w-full items-center justify-between gap-4 text-left"
            aria-expanded={openFaq === i}
            on:click={() => (openFaq = openFaq === i ? -1 : i)}
          >
            <span class="font-bold text-lg text-secondary-dark">
              {question}
            </span>
            <span
              class="shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition {openFaq ===
              i
                ? 'rotate-45 bg-primary-dark text-white border-primary-dark'
                : 'bg-off-white text-gray-600'}"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"><path d="M12 5v14M5 12h14" /></svg
              >
            </span>
          </button>
          {#if openFaq === i}
            <p class="mt-3 text-gray-600 leading-relaxed">{answer}</p>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- ===================== FINAL CTA ===================== -->
<section class="relative bg-secondary-dark text-white p-y p-x overflow-hidden">
  <div
    class="absolute inset-0 bg-gradient-to-br from-secondary/60 via-secondary-dark to-secondary-dark"
    aria-hidden="true"
  />
  <img
    src={splash}
    alt=""
    aria-hidden="true"
    class="pointer-events-none select-none absolute -top-10 right-2 w-72 opacity-25 rotate-12 hidden sm:block"
  />
  <div
    class="container relative grid lg:grid-cols-[1fr_460px] gap-12 lg:gap-16 items-center"
  >
    <div>
      <span class="tab mb-5">No-pressure, no-cost</span>
      <h2 class="text-4xl sm:text-5xl leading-[1.05] font-extrabold text-white">
        Ready to help your property look its best?
      </h2>
      <p class="mt-5 text-lg text-white/75 leading-relaxed max-w-md">
        Send us your details and we'll schedule a walk-through, then deliver a
        free written estimate for you to evaluate. Call the best.
      </p>
      <div
        class="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-white/85 font-semibold"
      >
        <ClickToCall
          variant="link"
          class="!text-2xl !font-bold text-white hover:!text-primary"
        />
        <span class="inline-flex items-center gap-2">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="hsl(var(--primary))"
            stroke-width="2.2"
            stroke-linecap="round"
            stroke-linejoin="round"
            ><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle
              cx="12"
              cy="10"
              r="3"
            /></svg
          >
          4415 S. Custer, Lyons, IL
        </span>
      </div>
    </div>
    <div class="bg-white rounded-2xl shadow-2xl p-6 sm:p-7">
      <p class="font-bold text-xl text-secondary-dark mb-1">
        Get a Free Estimate
      </p>
      <p class="text-sm text-gray-600 mb-5">
        We'll reach out to schedule your walk-through.
      </p>
      <div class="flex flex-col gap-3">
        <Button href="#estimate" class="w-full text-lg h-14">
          Request My Free Estimate
        </Button>
        <ClickToCall
          variant="secondary"
          class="w-full text-lg h-14 bg-secondary-dark hover:bg-secondary text-white"
        />
      </div>
    </div>
  </div>
</section>

<!-- ===================== STICKY MOBILE BAR ===================== -->
<div
  class="lg:hidden fixed bottom-0 inset-x-0 z-50 bg-white border-t shadow-[0_-6px_24px_rgba(20,18,55,.14)]"
>
  <div
    class="grid grid-cols-2 gap-2 p-2.5"
    style="padding-bottom:calc(0.625rem + env(safe-area-inset-bottom));"
  >
    <ClickToCall
      variant="secondary"
      class="bg-secondary-dark hover:bg-secondary text-white"
    >
      Call
    </ClickToCall>
    <Button href="#estimate">Free Estimate</Button>
  </div>
</div>

<style>
  /* orange right-pointing tab label (design's .tab) */
  .tab {
    display: inline-flex;
    align-items: center;
    background: hsl(var(--primary-dark));
    color: white;
    font-weight: 700;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    padding: 0.375rem 1.75rem 0.375rem 1rem;
    clip-path: polygon(0 0, 100% 0, calc(100% - 13px) 50%, 100% 100%, 0 100%);
  }

  /* centered ribbon header with swallowtail flags (design's .ribbon) */
  .ribbon {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.875rem;
  }
  .flag {
    width: 42px;
    height: 17px;
    background: hsl(var(--primary-dark));
    flex: none;
  }
  .flag-l {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 15px 50%);
  }
  .flag-r {
    clip-path: polygon(0 0, 100% 0, calc(100% - 15px) 50%, 100% 100%, 0 100%);
  }
</style>
