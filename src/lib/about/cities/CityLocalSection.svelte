<script lang="ts">
  import { page } from "$app/stores";
  import {
    serviceAreaRoutes,
    serviceRoutes,
    routes,
  } from "$lib/common/routing/routes";
  import ClickToCall from "$lib/common/other/ClickToCall.svelte";
  import { cityContent } from "./cities.data";

  // Derive the city key from the URL slug (e.g. "hinsdale-house-painting" ->
  // "hinsdale"), then render unique, town-specific content. No-op if the route
  // has no matching entry. This replaces the old templated city-page body so
  // each of the 15 pages is genuinely distinct.
  $: slug =
    $page.url.pathname
      .split("/")
      .filter(Boolean)
      .pop()
      ?.replace("-house-painting", "") ?? "";
  $: data = cityContent[slug];
  $: nearby = (data?.nearby ?? [])
    .map((key) => serviceAreaRoutes[key])
    .filter(Boolean);

  const serviceLinks = [
    serviceRoutes["exterior-home-painting"],
    serviceRoutes["siding-painting-repair"],
    serviceRoutes["brick-painting-repair"],
    serviceRoutes["stucco-painting-repair"],
    serviceRoutes["gutters"],
    serviceRoutes["design-consultation"],
  ];
</script>

{#if data}
  <h2>Painting {data.name} Homes</h2>
  <p>{data.intro}</p>
  <p>{data.housing}</p>
  <p>{data.character}</p>

  {#if nearby.length}
    <p>
      We also serve nearby communities:
      {#each nearby as route, i}<a href={route.href}>{route.text}</a>{i <
        nearby.length - 1
          ? ", "
          : "."}{/each}
    </p>
  {/if}

  <h2>Exterior Painting &amp; Repair in {data.name}, IL</h2>
  <p>{data.services}</p>
  <ul>
    {#each serviceLinks as service}
      <li><a href={service.href}>{service.text}</a></li>
    {/each}
  </ul>

  <h2>About {data.name}, IL</h2>
  <p>{data.about}</p>

  <p>
    Ready for a free estimate in {data.name}? Call <ClickToCall
      class="!font-semibold"
      variant="link"
    /> or
    <a href={routes["contact"].href}>request a quote online</a>, and we'll walk
    you through your options with no obligation.
  </p>
{/if}
