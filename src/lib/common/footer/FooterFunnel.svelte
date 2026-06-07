<script lang="ts">
  import logo from "$images/logos/klasek-painting.webp?enhanced";
  import stars from "$images/5-stars.svg";
  import Button from "$components/button/button.svelte";
  import ClickToCall from "../other/ClickToCall.svelte";
  import { routes } from "../routing/routes";
  import { googleMapsHref } from "../seo/siteData";

  // Compact dark footer for landing funnel pages — no email signup, map, or full CTA band
  export let description: string;
  export let services: { text: string; href: string }[];
</script>

<footer class="bg-[#15133a] text-white/70 py-12 p-x">
  <div class="container grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
    <!-- Logo, blurb & rating -->
    <div>
      <a href="/" class="inline-block mb-4">
        <enhanced:img
          src={logo}
          alt="Klasek Painting"
          class="h-11 w-auto"
          loading="lazy"
        />
      </a>
      <p class="text-sm leading-relaxed text-white/55">{description}</p>
      <div class="mt-4 flex items-center gap-2">
        <img class="w-[80px] h-[14px]" src={stars} alt="5 stars" />
        <span class="text-xs text-white/50">5.0 on Google</span>
      </div>
    </div>

    <!-- Services -->
    <div>
      <p class="font-bold text-white text-sm uppercase tracking-wider mb-3">
        Services
      </p>
      <ul class="space-y-2 text-sm">
        {#each services as { href, text }}
          <li><a {href} class="hover:text-primary transition">{text}</a></li>
        {/each}
      </ul>
    </div>

    <!-- Contact -->
    <div>
      <p class="font-bold text-white text-sm uppercase tracking-wider mb-3">
        Contact
      </p>
      <ul class="space-y-2 text-sm">
        <li>
          <ClickToCall
            variant="link"
            class="!text-sm !no-underline !text-white/70 hover:!text-primary transition"
          />
        </li>
        <li>
          <a
            href={googleMapsHref}
            target="_blank"
            class="hover:text-primary transition"
          >
            4415 S. Custer,<br />Lyons, IL 60534
          </a>
        </li>
      </ul>
    </div>

    <!-- CTAs -->
    <div>
      <p class="font-bold text-white text-sm uppercase tracking-wider mb-3">
        Ready when you are
      </p>
      <Button href={routes["contact"].href} class="w-full">
        Get a Free Estimate
      </Button>
      <Button
        href="https://www.google.com/maps/dir/?api=1&destination=41.81041,-87.839737"
        target="_blank"
        variant="outline"
        class="w-full mt-3"
      >
        Get Directions
      </Button>
    </div>
  </div>

  <!-- Bottom bar -->
  <div
    class="container mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-white/40"
  >
    <p>© {new Date().getFullYear()} Klasek Painting. All rights reserved.</p>
    <p>Lead-Safe Certified · 100% Satisfaction Guarantee</p>
  </div>
</footer>
