<script lang="ts">
  import stars from "$images/5-stars.svg";
  import google from "$images/logos/Google-name-logo.svg";
  import { googleRating } from "$lib/common/seo/siteData";

  // Default styles
  let classes = "bg-white rounded-lg border lg:px-6 sm:p-4 p-3";
  export { classes as class };

  export let borderClasses = "bg-border";
  export let textClasses = "text-gray-600";
</script>

<div class="flex sm:flex-row flex-col items-stretch sm:gap-6 gap-2 {classes}">
  <div
    class="flex sm:flex-col sm:gap-1 gap-2 items-center justify-center flex-shrink-0"
  >
    <!-- Google -->
    <img class="w-[100px] h-[39px]" src={google} alt="Google" />

    <!-- Stars (decorative; the rating is stated as text below for machines) -->
    <img class="w-[80px] h-[14px]" src={stars} alt="" aria-hidden="true" />

    <!-- Machine-readable aggregate rating text -->
    <p
      class="text-xs font-semibold text-secondary-dark text-center leading-tight"
    >
      {googleRating.ratingValue} out of 5
      <span class="block font-normal text-gray-600">
        {googleRating.reviewCount} Google reviews
      </span>
    </p>
  </div>

  <!-- Border -->
  <div
    class="{borderClasses} sm:w-0.5 sm:h-16 w-full h-0.5 sm:my-auto flex-shrink-0"
    aria-hidden="true"
  />

  <!-- Quote -->
  <p class="lg:text-sm text-xs col-span-2 !leading-relaxed {textClasses}">
    "Klasek painting came out and did a great job. Can't thank these guys
    enough! Highly recommend." <br />
    <span class="pl-2 pt-1 block font-semibold">- Nick</span>
  </p>
</div>
