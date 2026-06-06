<script lang="ts">
  import NavItem from "./subcomponents/NavItem.svelte";
  import Dropdown from "./subcomponents/Dropdown.svelte";
  import DropdownItem from "./subcomponents/DropdownItem.svelte";
  import ServicesMegaDropdown from "./subcomponents/ServicesMegaDropdown.svelte";
  import {
    routes,
    aboutUsRoutes,
    serviceAreaRoutes,
  } from "$lib/common/routing/routes";
</script>

<!-- About us -->
<Dropdown data={routes["about"]} class="xl:block lg:hidden block">
  <DropdownItem data={aboutUsRoutes["testimonials"]} />
  <DropdownItem data={aboutUsRoutes["faq"]} />
</Dropdown>

<!-- Services (jumbo dropdown with thumbnails) -->
<ServicesMegaDropdown />

<!-- Service Area -->
<Dropdown data={aboutUsRoutes["service-area"]}>
  {#each Object.values(serviceAreaRoutes) as data}
    <DropdownItem {data} />
  {/each}
</Dropdown>

<!-- Gallery -->
<NavItem data={routes["gallery"]} class="xl:block lg:hidden block" />

<!-- Blog -->
<NavItem data={aboutUsRoutes["blog"]} class="xl:block lg:hidden block" />
