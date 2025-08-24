<script lang="ts">
  import { cn } from "../utils";
  import stuccoImg from "$images/galleries/stucco-repair/stucco-feature.avif";
  import Button from "$components/button/button.svelte";
  let classes = "";
  export { classes as class };
</script>

<section class={cn("bg-white p-y p-x relative bg-gradient", classes)}>
  <style>
    .bg-gradient {
      background-color: (rgb(40, 40, 77), rgb(45, 45, 113));
    }
  </style>
  <div class="container z-10 py-10">
    <div class="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
      <div class="w-2/4">
        <h2 class="text-4xl font-semibold mb-2 text-white mb-5">
          Refresh and Protect Your Home with Expert Stucco Painting.
        </h2>
        <p class="text-lg text-gray-100 mb-5">
          Get a Free Estimate and Discover How Our Detailed Process Ensures a
          Beautiful and Durable Finish for Your Spanish, Mediterranean, or
          Southwestern-Style Home.
        </p>
        <Button href="/contact" class="btn btn-primary mt-2"
          >Get Free Estimate</Button
        >
      </div>
      <div class="w-2/4">
        <img src={stuccoImg} alt="stucco-repair" class="rounded-lg w-full" />
      </div>
    </div>
  </div>
</section>

<style>
  @import "./subcomponents/template-styles.css";
</style>
