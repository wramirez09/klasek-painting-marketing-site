<script lang="ts">
  import type { FaqData } from "$lib/common/sections/subcomponents/Faq.svelte";
  import ContactForm from "$lib/contact-us/ContactForm.svelte";
  import GoogleProof from "$lib/common/other/GoogleProof.svelte";
  import ClickToCall from "$lib/common/other/ClickToCall.svelte";
  import Map from "$lib/common/other/Map.svelte";
  import Button from "$components/button/button.svelte";
  import { serviceAreaRoutes } from "$lib/common/routing/routes";
  import heroSrc from "$images/services/exterior-home-painting.webp?enhanced";
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

  const partnerLogos = [
    { src: valspar, alt: "Valspar", height: "h-7 sm:h-8" },
    { src: behr, alt: "Behr", height: "h-7 sm:h-8" },
    { src: benjaminMoore, alt: "Benjamin Moore", height: "h-8 sm:h-10" },
    { src: sherwinWilliams, alt: "Sherwin-Williams", height: "h-8 sm:h-10" },
    { src: leadSafe, alt: "Lead-Safe Certified", height: "h-9 sm:h-11" },
    { src: pdca, alt: "PDCA", height: "h-8 sm:h-10" },
  ];

  // FAQ accordion state — first item open, one at a time (matches design)
  let openFaq = 0;

  const heroChecks = [
    "Installed by our own crew",
    "Free written estimates",
    "100% satisfaction guarantee",
    "Lead-Safe Certified",
  ];

  const installChecks = [
    ["K-style & half-round", "profiles"],
    ["Copper", "for historic homes"],
    ["Properly-sized", "downspouts"],
    ["Engineered", "pitch & flow"],
  ];

  const repairItems = [
    ["Leaks & seam sealing", "Re-sealed joints and patched corners."],
    ["Sagging & pitch", "Re-hung and re-pitched to drain."],
    ["Fascia & soffit repair", "Rotted wood replaced before re-hang."],
    ["Storm damage & reattachment", "Pulled-away runs and downspouts."],
  ];

  const problems = [
    {
      title: "Foundation cracks",
      body: "Overflow pools against the slab, freezes, and heaves — opening cracks that let water into the basement.",
    },
    {
      title: "Fascia & soffit rot",
      body: "Water trapped behind a failing gutter soaks the wood it's bolted to, until the whole board needs replacing.",
    },
    {
      title: "Basement flooding",
      body: "Thousands of gallons a year dumped at the wrong spot is the #1 cause of wet basements and mold.",
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
      body: "Your gutters are installed by Klasek employees we trained and stand behind.",
    },
    {
      stat: "$0",
      title: "Estimate cost",
      body: "Free, written, itemized — so you know exactly what you're paying for.",
    },
    {
      stat: "100%",
      title: "Satisfaction guarantee",
      body: "We're not done until the water goes where it should and you're happy.",
    },
  ];

  const faqData: FaqData[] = [
    {
      question: "Do you install gutter guards?",
      answer:
        "Yes — we install leaf-guard and gutter-protection systems and can recommend the right one for your tree cover and roof type. Ask about guard options during your free estimate.",
    },
    {
      question: "What makes seamless gutters better than sectional?",
      answer:
        "Seams are where gutters leak. Because we roll each run to your exact roofline on-site, the only joints are at corners and downspouts — meaning far fewer leak points and a cleaner look.",
    },
    {
      question: "How do I know if my gutters need to be repaired or replaced?",
      answer:
        "Sagging sections, persistent leaks, rust, or water spilling over during rain are all signs your gutters need attention. During your free estimate, we inspect the entire system and give you a straightforward recommendation — repair what can be saved, and replace only what can't.",
    },
    {
      question: "How much does a new gutter system cost?",
      answer:
        "It depends on linear footage, profile (K-style, half-round, copper), and the number of downspouts and corners. That's exactly what your free written estimate spells out — no surprises after the work starts.",
    },
    {
      question: "Do you replace rotted fascia and soffit too?",
      answer:
        "We do. As an exterior repair company, we can replace damaged fascia and soffit before re-hanging your gutters, so the new system mounts to solid wood — not a problem waiting to come back.",
    },
    {
      question:
        "Do you replace gutters as part of an exterior painting project?",
      answer:
        "Yes. Many of our customers bundle gutter work with exterior painting or siding repair so everything is handled in one project, by one team, on one timeline.",
    },
    {
      question: "How soon can you come out for an estimate?",
      answer:
        "Usually within a few business days. Fill out the contact form or give us a call and we'll find a time to walk your property.",
    },
  ];
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
          alt="Home exterior with seamless gutters installed by Klasek Painting"
          loading={$isMobileStore ? "lazy" : "eager"}
        />
        <GoogleProof
          class="bg-white rounded-xl border p-4 sm:absolute sm:-bottom-8 sm:-right-4 mt-4 sm:mt-0 w-full sm:w-[340px] shadow-2xl"
        />
      </div>
    </div>

    <!-- right: copy -->
    <div class="order-1 lg:order-2 max-w-xl">
      <span class="tab mb-5">Cook County · 30+ Years · Family Crew</span>
      <h1
        class="text-4xl leading-[1.05] sm:text-5xl font-extrabold text-white"
        data-testid="page-heading"
      >
        Seamless gutters,<br class="hidden sm:block" /> cut on-site by
        <span class="text-primary">our own crew.</span>
      </h1>
      <p class="mt-5 text-lg text-white/75 leading-relaxed max-w-lg">
        No subcontractors. No leaky seams. Klasek rolls custom aluminum gutters
        right in your driveway and installs them with the correct pitch — so
        water ends up in the downspout, not against your foundation.
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
          Get your free gutter estimate.
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
          The hidden cost of bad gutters
        </h2>
        <span class="flag flag-r" aria-hidden="true" />
      </div>
      <p class="text-lg text-gray-600 leading-relaxed">
        When water can't drain the way it should, it finds the most expensive
        path instead — and the damage shows up where it's hardest to fix.
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

<!-- ===================== INSTALLATION (HERO OFFERING) ===================== -->
<section
  id="install"
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
        Seamless aluminum gutters, rolled in your driveway.
      </h2>
      <p class="mt-5 text-lg text-white/75 leading-relaxed max-w-lg">
        We bring the machine to you and form each run to the exact length of
        your roofline — so the only seams are at the corners and downspouts.
        Fewer seams mean fewer leaks, and far fewer callbacks down the road.
      </p>
      <ul class="mt-7 grid sm:grid-cols-2 gap-x-6 gap-y-3.5">
        {#each installChecks as [bold, rest]}
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
          Price My Gutters
        </Button>
        <p class="text-sm text-white/55 max-w-[14rem]">
          Installed by Klasek employees — never subcontracted out.
        </p>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-4">
      <div
        class="ph ph-dark aspect-[3/4] ring-2 ring-white/10"
        data-ph="on-site gutter machine"
      />
      <div class="grid grid-rows-2 gap-4">
        <div
          class="ph ph-dark ring-2 ring-white/10"
          data-ph="seamless K-style run"
        />
        <div class="ph ph-dark ring-2 ring-white/10" data-ph="copper detail" />
      </div>
    </div>
  </div>
</section>

<!-- ===================== REPAIR ===================== -->
<section id="repair" class="bg-white p-y p-x scroll-mt-20">
  <div class="container grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
    <div
      class="order-2 lg:order-1 ph aspect-[4/3]"
      data-ph="REPAIR — fascia / reattachment before-after"
    />
    <div class="order-1 lg:order-2">
      <span class="tab mb-5">Repair &amp; storm damage</span>
      <h2
        class="text-3xl sm:text-4xl leading-[1.08] font-extrabold text-secondary-dark"
      >
        Not ready to replace? We'll make what you have watertight again.
      </h2>
      <p class="mt-4 text-lg text-gray-600 leading-relaxed">
        Most gutter problems are fixable. Our crew diagnoses the real cause —
        not just the symptom — and gives you an honest call on repair vs.
        replacement.
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

<!-- ===================== CLEANING & MAINTENANCE ===================== -->
<section id="cleaning" class="bg-off-white p-y p-x scroll-mt-20">
  <div class="container">
    <div
      class="rounded-2xl bg-white border shadow-subtle overflow-hidden grid lg:grid-cols-[1.1fr_1fr]"
    >
      <div class="p-8 sm:p-12">
        <span class="tab mb-5">Easiest place to start</span>
        <h2
          class="text-3xl sm:text-4xl leading-[1.08] font-extrabold text-secondary-dark"
        >
          Gutter cleaning &amp; seasonal maintenance.
        </h2>
        <p class="mt-4 text-lg text-gray-600 leading-relaxed max-w-md">
          A quick, low-commitment way to meet the crew and protect your home. We
          clear every run, flush the downspouts, and flag anything that needs
          attention — before it becomes a repair.
        </p>
        <div class="mt-6 flex flex-wrap gap-3">
          <span
            class="rounded-md bg-off-white border px-4 py-2 text-sm font-bold text-secondary-dark"
          >
            🍂 Fall leaf clear-out
          </span>
          <span
            class="rounded-md bg-off-white border px-4 py-2 text-sm font-bold text-secondary-dark"
          >
            🌱 Spring flush &amp; inspect
          </span>
          <span
            class="rounded-md bg-off-white border px-4 py-2 text-sm font-bold text-secondary-dark"
          >
            📋 Free condition report
          </span>
        </div>
        <Button href="#estimate" class="mt-8 text-lg h-14 px-7">
          Schedule a Cleaning
        </Button>
      </div>
      <div
        class="ph !rounded-none min-h-[260px]"
        data-ph="CLEANING — crew clearing gutters in fall"
      />
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
      {#each Array.from({ length: 8 }, (_, i) => i + 1) as n}
        <div class="ph aspect-square" data-ph={`before / after 0${n}`} />
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
          Gutter service across the western Cook County suburbs.
        </h3>
        <p class="mt-4 text-lg text-gray-600 leading-relaxed max-w-md">
          Based at 4415 S. Custer in Lyons, IL — a short drive from your
          roofline. If your town isn't listed, call us; we likely cover it.
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
          Gutter FAQs
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

  /* striped photo placeholders (design's .ph) — swap for real photos */
  .ph {
    position: relative;
    background-color: #e7e8f3;
    background-image: repeating-linear-gradient(
      135deg,
      rgba(35, 32, 97, 0.06) 0 12px,
      rgba(35, 32, 97, 0) 12px 24px
    );
    border-radius: 0.5rem;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .ph::after {
    content: attr(data-ph);
    position: absolute;
    bottom: 10px;
    left: 10px;
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-size: 11px;
    letter-spacing: 0.02em;
    color: #5a5d7a;
    background: rgba(255, 255, 255, 0.85);
    padding: 3px 8px;
    border-radius: 5px;
  }
  .ph-dark {
    background-color: #2a2770;
    background-image: repeating-linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.06) 0 12px,
      rgba(255, 255, 255, 0) 12px 24px
    );
  }
  .ph-dark::after {
    color: #c8c9e6;
    background: rgba(21, 19, 58, 0.6);
  }
</style>
