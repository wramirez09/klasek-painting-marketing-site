<script lang="ts">
  import FooterCta from "./FooterCta.svelte";
  import EmailSignup from "../EmailSignup.svelte";
  import logo from "$images/logos/klasek-painting.webp?enhanced";
  import Map from "../other/Map.svelte";
  import Button from "$components/button/button.svelte";
  import FooterLinksColumn from "./FooterLinksColumn.svelte";
  import ClickToCall from "../other/ClickToCall.svelte";
  import { routes } from "../routing/routes";
  import type { Link } from "../routing/routing";
  import PhoneIcon from "$images/icons/PhoneIcon.svelte";
  import LocationIcon from "$images/icons/LocationIcon.svelte";
  import { googleMapsHref } from "../seo/siteData";
  import FooterSocialLinks from "./FooterSocialLinks.svelte";

  const usefulLinks: Link[] = [
    routes["contact"],
    routes["service-area"],
    routes["careers"],
    routes["privacy"],
  ];

  export let showEmailSignup = true;
</script>

<footer class="flex flex-col items-center bg-secondary px-6">
  {#if showEmailSignup}
    <EmailSignup />
  {/if}
  <FooterCta />

  <div
    class="w-full py-8 p-x grid lg:grid-cols-4 grid-cols-2 lg:gap-x-12 gap-y-8 xs:gap-x-4"
  >
    <!-- Logo & Social Links -->
    <div
      class="flex flex-col gap-6 lg:col-span-1 col-span-2 max-w-[200px] mx-auto"
    >
      <a href="/">
        <enhanced:img
          src={logo}
          alt="Klasek Painting"
          class="w-full h-auto"
          loading="lazy"
        />
      </a>

      <FooterSocialLinks />
    </div>
    <div
      class="lg:grid grid-cols-1 grid-rows-[150px_auto] gap-2 lg:col-span-1 w-full"
    >
      <Map lazy={true} class="w-full h-[200px] mb-2" />

      <Button
        href="https://www.google.com/maps/dir/?api=1&destination=41.81041,-87.839737"
        target="_blank"
        variant="outline">Get Directions</Button
      >
    </div>

    <!-- Contact Us -->
    <FooterLinksColumn title="Contact Us">
      <li class="mb-2 relative">
        <PhoneIcon
          class="size-4 absolute top-1/2 -translate-y-1/2 right-[calc(100%+6px)]"
        />
        <ClickToCall variant="link" />
      </li>

      <li class="relative">
        <LocationIcon class="size-5 absolute top-1 right-[calc(100%+6px)]" />
        <a
          class="underline underline-offset-2"
          href={googleMapsHref}
          target="_blank"
        >
          4415 S. Custer,<br />Lyons, IL 60534
        </a>
      </li>
    </FooterLinksColumn>

    <!-- Useful Links -->
    <FooterLinksColumn title="Useful Links">
      {#each usefulLinks as { href, text }}
        <li>
          <a {href}>{text}</a>
        </li>
      {/each}
    </FooterLinksColumn>
  </div>

  <!-- Bottom banner -->
  <div class="w-full bg-secondary-dark py-4 grid place-items-center p-x">
    <p class="text-white italic text-xs text-center [&>span]:whitespace-nowrap">
      <span>Copyright {new Date().getFullYear()}.</span>
      <span>All Rights Reserved.</span>
    </p>
  </div>
</footer>
