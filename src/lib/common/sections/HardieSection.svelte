<script lang="ts">
  import { cn } from "../utils";
  import Button from "$components/button/button.svelte";
  import { serviceRoutes } from "$lib/common/routing/routes";
  import hardieImg from "$images/services/hardie/hardie-suburban-home-exterior.jpg";

  let classes = "";
  export { classes as class };
</script>

<section class={cn("bg-off-white p-y p-x", classes)}>
  <div class="container py-6">
    <div class="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
      <!-- Image -->
      <div class="lg:w-1/2 order-last lg:order-first">
        <img
          src={hardieImg}
          alt="Suburban home with freshly painted James Hardie fiber-cement siding by Klasek Painting"
          class="rounded-lg w-full h-auto object-cover bord"
          loading="lazy"
        />
      </div>

      <!-- Copy -->
      <div class="lg:w-1/2">
        <h2 class="lg:text-4xl text-3xl font-semibold mb-4 text-secondary-dark">
          James Hardie Board Painting &amp; Repair
        </h2>
        <p class="text-lg text-gray-600 mb-6 leading-relaxed">
          Hardie board (fiber-cement) siding holds paint beautifully — when it
          is prepped right. For 30+ years we have repaired and refinished Hardie
          siding across Chicago's western suburbs: we replace and repair damaged
          panels first, then refinish with premium Sherwin-Williams, Benjamin
          Moore, Valspar, and Behr products for a factory-smooth, long-lasting
          finish.
        </p>
        <div class="flex flex-wrap gap-3">
          <Button href={serviceRoutes["hardie-painting"].href}>
            Explore Hardie Board Painting
          </Button>
          <Button
            variant="outline"
            href="/contact-us"
            class="text-secondary-dark"
          >
            Get Free Estimate
          </Button>
        </div>
      </div>
    </div>
  </div>
</section>
