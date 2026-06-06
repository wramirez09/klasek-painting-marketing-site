<script lang="ts">
  import "../app.css";
  import { onMount } from "svelte";
  import type { PageData } from "./$types";
  import { MetaTags, type MetaTagsProps } from "svelte-meta-tags";
  import merge from "lodash/merge";
  import { page } from "$app/stores";
  import KlasekJsonSchema from "$lib/common/seo/KlasekJsonSchema.svelte";
  import { isMobileStore } from "$lib/stores/isMobileStore";
  import ClickToCall from "$lib/common/other/ClickToCall.svelte";
  import { scale } from "svelte/transition";
  import PhoneIcon from "$images/icons/PhoneIcon.svelte";

  export let data: PageData;

  onMount(() => {
    // Show fixed CTA on mobile devices
    showClickToCall = $isMobileStore;

    // Hide fixed CTA on mobile devices when user scrolls to the bottom of the page
    window.addEventListener("scroll", () => {
      // If scrolled to bottom
      if (
        window.innerHeight + Math.round(window.scrollY) >=
        document.body.offsetHeight
      ) {
        // Hide CTA
        showClickToCall = false;
      } else {
        showClickToCall = true;
      }
    });
  });

  let metaTags: MetaTagsProps;

  // Merge base tags with page-specific meta tags
  $: metaTags = merge(
    {},
    data.baseMetaTags,
    $page.data.pageMetaTags,
  ) as MetaTagsProps;

  let showClickToCall = false;

  // Pages with their own sticky mobile call bar
  $: hasOwnMobileCta =
    $page.url.pathname.startsWith("/services/gutter-installation-repair") ||
    $page.url.pathname.startsWith(
      "/services/siding-painting-repair/hardie-board-painting",
    );
</script>

<!-- Dynamic meta tags -->
{#if !$page.error}
  <MetaTags {...metaTags} />
{/if}

<!-- JSON-LD structured data (SEO schema) -->
<KlasekJsonSchema />

<!-- Mobile click to call -->
{#if showClickToCall && !hasOwnMobileCta}
  <div
    transition:scale={{ duration: 200 }}
    class="z-[100] fixed bottom-2 left-1/2 -translate-x-1/2 lg:hidden"
  >
    <ClickToCall variant="outline" class="bg-secondary text-white gap-2">
      <PhoneIcon class="size-4" />
      Call for a Free Estimate
    </ClickToCall>
  </div>
{/if}

<slot />
