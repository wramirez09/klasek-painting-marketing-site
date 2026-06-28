<script lang="ts">
  import NavBar from "$lib/common/nav/NavBar.svelte";
  import Footer from "$lib/common/footer/Footer.svelte";
  import CityFaqSection from "$lib/about/cities/CityFaqSection.svelte";
</script>

<NavBar />
<slot />
<!-- Buyer-intent FAQ + FAQPage schema on service-area city pages (no-op elsewhere) -->
<CityFaqSection />
<Footer />
