<script lang="ts">
  import CityLocalSection from "./CityLocalSection.svelte";
</script>

<section class="lg:pt-0 pt-4 p-b p-x bg-white main-container lg:-mt-0.5">
  <div class="container max-w-screen-lg">
    <!-- Unique, town-specific lead content (de-duplicates the city pages) -->
    <CityLocalSection />
    <slot />
  </div>
</section>

<style lang="postcss">
  @import "$lib/common/sections/subcomponents/template-styles.css";

  .main-container :global(h3) {
    @apply mt-6;
  }
</style>
