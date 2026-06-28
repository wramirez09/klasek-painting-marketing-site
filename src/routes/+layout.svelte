<script lang="ts">
  import "../app.css";
  import { onMount, tick } from "svelte";
  import { afterNavigate } from "$app/navigation";
  import type { PageData } from "./$types";
  import { MetaTags, type MetaTagsProps } from "svelte-meta-tags";
  import merge from "lodash/merge";
  import { page } from "$app/stores";
  import KlasekJsonSchema from "$lib/common/seo/KlasekJsonSchema.svelte";
  import { isMobileStore } from "$lib/stores/isMobileStore";
  import StickyCallBar from "$lib/common/components/StickyCallBar.svelte";
  import { scale } from "svelte/transition";

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

  // GA4 sends a page_view on the initial load (via gtag config in app.html),
  // but this is an SPA — client-side navigations don't reload the page, so
  // they go uncounted. Fire a page_view on each in-app navigation (skipping
  // the first load to avoid double-counting). gtag is a no-op off production.
  afterNavigate(async ({ from }) => {
    if (!from) return; // initial load already reported by gtag config
    await tick(); // let svelte-meta-tags update document.title first
    window.gtag?.("event", "page_view", {
      page_location: window.location.href,
      page_path: window.location.pathname + window.location.search,
      page_title: document.title,
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
      "/services/siding-painting-repair/hardie-board-services",
    );
</script>

<!-- Dynamic meta tags -->
{#if !$page.error}
  <MetaTags {...metaTags} />
{/if}

<!-- JSON-LD structured data (SEO schema) -->
<KlasekJsonSchema />

<!-- Sticky mobile call bar -->
{#if showClickToCall && !hasOwnMobileCta}
  <div transition:scale={{ duration: 200 }}>
    <StickyCallBar />
  </div>
{/if}

<slot />
