<script lang="ts">
  import Marquee from "svelte-fast-marquee";
  import RibbonWrapper from "$lib/common/other/RibbonWrapper.svelte";
  import behr from "$images/logos/trusted-brands/behr.png?enhanced";
  import benjaminMoore from "$images/logos/trusted-brands/benjamin-moore.png?enhanced";
  import sherwinWilliams from "$images/logos/trusted-brands/sherwin-williams.png?enhanced";
  import valspar from "$images/logos/trusted-brands/valspar.png?enhanced";
  import pdca from "$images/logos/trusted-brands/pdca.png?enhanced";
  import leadSafe from "$images/logos/trusted-brands/lead-safe.png?enhanced";
  import { isMobileStore } from "$lib/stores/isMobileStore";
  import { onMount } from "svelte";
  import type { EnhancedImage } from "$lib/common/types/image";

  const images: EnhancedImage[] = [
    {
      src: valspar,
      alt: "Valspar",
    },
    {
      src: behr,
      alt: "Behr",
    },
    {
      src: leadSafe,
      alt: "Lead Safe",
    },
    {
      src: benjaminMoore,
      alt: "Benjamin Moore",
    },
    {
      src: pdca,
      alt: "PDCA",
    },
    {
      src: sherwinWilliams,
      alt: "Sherwin Williams",
    },
  ];

  // Marquee play state
  let play = false;

  onMount(() => {
    play = $isMobileStore;
  });
</script>

<section class="md:pb-0 p-b md:px-12 bg-white">
  <div
    class="container max-w-screen-lg relative md:-top-12 flex flex-col items-center gap-2"
  >
    <RibbonWrapper
      class="z-10 md:!w-fit !w-full after:md:block before:md:block"
    >
      <h2
        class="text-center lg:text-3xl text-2xl text-white font-semibold bg-primary-dark px-6 py-2 md:rounded-lg md:mx-2 relative md:-top-2 z-10"
      >
        Our Trusted Brand Partners
      </h2>
    </RibbonWrapper>

    <div
      class="relative w-full bg-white md:shadow-subtle md:rounded-lg lg:p-8 md:py-8 py-2 z-0 shadow-md"
    >
      <Marquee
        speed={play ? 100 : 0}
        gap={play ? "16px" : "0px"}
        class="flex [&>.marquee]:justify-around"
      >
        {#each images as { src, alt }}
          <enhanced:img class="h-[100px] w-auto" {src} {alt} loading="lazy" />
        {/each}
      </Marquee>
    </div>

    <!-- Readable, machine-extractable version of the trust badges above -->
    <p class="max-w-screen-md text-center text-sm text-gray-600 lg:text-base">
      Klasek Painting is <strong>EPA Lead-Safe Certified</strong> and a
      <strong>member of the PDCA</strong> (Painting &amp; Decorating Contractors
      of America). We paint with premium Sherwin-Williams, Benjamin Moore, Valspar,
      and Behr products.
    </p>
  </div>
</section>
