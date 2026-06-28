<script lang="ts">
  import { page } from "$app/stores";
  import { serviceAreaRoutes } from "$lib/common/routing/routes";
  import { cityContent } from "./cities.data";

  // Derive the city key from the URL slug (e.g. "hinsdale-house-painting" ->
  // "hinsdale"), then render unique, town-specific lead copy. No-op if the
  // route has no matching entry.
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
</script>

{#if data}
  <h2>Exterior Painters Who Know {data.name}, IL</h2>
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
{/if}
