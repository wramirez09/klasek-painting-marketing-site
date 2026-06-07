<script lang="ts">
  import NavBar from "$lib/common/nav/NavBar.svelte";
  import Footer from "$lib/common/footer/Footer.svelte";
  import FooterFunnel from "$lib/common/footer/FooterFunnel.svelte";
  import { page } from "$app/stores";

  // Landing funnel pages get a compact dark footer instead of the standard one
  const funnelFooters: Record<
    string,
    { description: string; services: { text: string; href: string }[] }
  > = {
    "/services/gutter-installation-repair": {
      description:
        "Exterior repair & seamless gutter specialists serving Chicago and Cook County for 30+ years.",
      services: [
        { text: "Seamless installation", href: "#install" },
        { text: "Repair & storm damage", href: "#repair" },
        { text: "Cleaning & maintenance", href: "#cleaning" },
        { text: "Gutter guards", href: "#faq" },
      ],
    },
    "/services/siding-painting-repair/hardie-board-services": {
      description:
        "Exterior painting & Hardie board siding specialists serving Chicago and Cook County for 30+ years.",
      services: [
        { text: "Hardie board painting", href: "#painting" },
        { text: "Repair before painting", href: "#repair" },
        { text: "Trim & soffit painting", href: "#trim" },
        { text: "Painting guide", href: "#guide" },
      ],
    },
  };

  $: funnelFooter = Object.entries(funnelFooters).find(([path]) =>
    $page.url.pathname.startsWith(path),
  )?.[1];
</script>

<NavBar lightNav={true} />
<slot />
{#if funnelFooter}
  <FooterFunnel {...funnelFooter} />
{:else}
  <Footer />
{/if}
