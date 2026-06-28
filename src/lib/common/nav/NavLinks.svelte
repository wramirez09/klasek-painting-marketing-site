<script lang="ts">
  import NavItem from "./subcomponents/NavItem.svelte";
  import ServicesMegaDropdown from "./subcomponents/ServicesMegaDropdown.svelte";
  import TextMegaDropdown from "./subcomponents/TextMegaDropdown.svelte";
  import { MessageSquareQuote, CircleHelp } from "lucide-svelte";
  import {
    routes,
    aboutUsRoutes,
    serviceAreaRoutes,
  } from "$lib/common/routing/routes";
</script>

<!-- About us (jumbo dropdown, no icons) -->
<TextMegaDropdown
  trigger={routes["about"]}
  heading="About us"
  items={[
    { ...aboutUsRoutes["testimonials"], icon: MessageSquareQuote },
    { ...aboutUsRoutes["faq"], icon: CircleHelp },
  ]}
  class="xl:block lg:hidden block"
/>

<!-- Services (jumbo dropdown with thumbnails) -->
<ServicesMegaDropdown />

<!-- Service Area (jumbo dropdown, no icons) -->
<TextMegaDropdown
  trigger={aboutUsRoutes["service-area"]}
  heading="Areas we serve"
  items={Object.values(serviceAreaRoutes)}
/>

<!-- Gallery -->
<NavItem data={routes["gallery"]} class="xl:block lg:hidden block" />

<!-- Blog -->
<NavItem data={aboutUsRoutes["blog"]} class="xl:block lg:hidden block" />

<!-- Careers -->
<NavItem data={routes["careers"]} class="xl:block lg:hidden block" />
