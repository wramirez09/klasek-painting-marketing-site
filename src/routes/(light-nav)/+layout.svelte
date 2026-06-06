<script lang="ts">
  import NavBar from "$lib/common/nav/NavBar.svelte";
  import Footer from "$lib/common/footer/Footer.svelte";
  import { page } from "$app/stores";

  // Landing funnel pages handle their own conversion CTAs — no email signup banner
  $: isFunnelPage =
    $page.url.pathname.startsWith("/services/gutter-installation-repair") ||
    $page.url.pathname.startsWith(
      "/services/siding-painting-repair/hardie-board-installation",
    );
</script>

<NavBar lightNav={true} />
<slot />
<Footer showEmailSignup={!isFunnelPage} />
