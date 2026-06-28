<script lang="ts">
  import Button from "$components/button/button.svelte";
  import HeadingAccent from "$lib/common/other/HeadingAccent.svelte";
  import { routes } from "$lib/common/routing/routes";
  import { cn } from "$lib/common/utils";
  import src from "$images/backgrounds/why-choose-klasek-painting.webp";
  import { inview, type Options } from "svelte-inview";

  let classes = "";
  export { classes as class };

  let isInView = false;
  const options: Options = {
    rootMargin: "300px",
    unobserveOnEnter: true,
  };
</script>

<section class={cn("p-y p-x bg-white", classes)}>
  <div
    class="container grid lg:grid-cols-[6fr_5fr] grid-cols-1 lg:grid-rows-1 xs:grid-rows-[auto_325px] grid-rows-[auto_250px]"
  >
    <!-- Image container -->
    <div
      use:inview={options}
      on:inview_enter={() => (isInView = true)}
      class="w-full lg:h-full xs:h-[325px] h-[250px] bord border-primary-dark lg:max-w-none max-w-[500px] mx-auto rounded-lg overflow-clip bg-gray-100 lg:order-first order-last"
    >
      {#if isInView}
        <div
          style={`background-image: url(${src});`}
          class="size-full bg-cover bg-center"
        />
      {/if}
    </div>

    <!-- Content container -->
    <div class="flex flex-col lg:gap-6 gap-4 lg:py-6 pb-6 [&>*]:sm:ml-12">
      <HeadingAccent class="lg:!w-[calc(100%-25px)] sm:!ml-0 sm:!pl-12 w-fit">
        <h2 class="lg:text-4xl xs:text-3xl text-2xl">Why Choose Us?</h2>
      </HeadingAccent>

      <p
        class="leading-relaxed [&>a]:font-semibold [&>a]:underline [&>a]:underline-offset-2 [&>a]:text-secondary-dark [&>a]:whitespace-nowrap"
      >
        For more than 30 years, Klasek Painting has kept homes across Chicago's
        western Cook County suburbs looking their best. From <a
          href={routes["exterior-home-painting"].href}>exterior painting</a
        >
        to <a href={routes["stucco-painting-repair"].href}>stucco services</a>,
        <a href={routes["cedar-repair"].href}>cedar siding repair</a>, and brick
        work — plus seamless gutters we fabricate and install ourselves with no
        subcontractors — our team covers the whole exterior. We are licensed,
        EPA Lead-Safe Certified, and PDCA members, and we work exclusively with
        premium Sherwin-Williams, Benjamin Moore, Valspar, and Behr products
        paired with time-tested methods that last.
      </p>

      <p class="leading-relaxed">
        Every customized service starts with a free, written estimate that walks
        you through your options. We serve 15 nearby communities — including
        Hinsdale, La Grange, Oak Park, Burr Ridge, and Downers Grove — and treat
        you and your space with care and respect from the first visit to the
        final walkthrough.
      </p>

      <Button
        variant="outline"
        class="w-fit text-secondary-dark"
        href={routes["about"].href}
      >
        About Us
      </Button>
    </div>
  </div>
</section>
