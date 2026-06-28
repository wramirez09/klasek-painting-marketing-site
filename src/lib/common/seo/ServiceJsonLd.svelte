<script lang="ts">
  import type { Service, WithContext } from "schema-dts";
  import { page } from "$app/stores";
  import { serviceRoutes } from "$lib/common/routing/routes";
  import { serializeSchema } from "./serializeSchema";
  import {
    businessId,
    businessName,
    siteName,
    serviceAreaCities,
  } from "./siteData";

  // Match the current route to a known service so each /services/* page emits
  // its own Service node that references the single canonical business (@id).
  $: pathname = $page.url.pathname;
  $: service = Object.values(serviceRoutes).find((r) => r.href === pathname);

  $: schema = service
    ? ({
        "@context": "https://schema.org",
        "@type": "Service",
        name: service.text,
        serviceType: service.text,
        url: `${siteName}${service.href}`,
        provider: {
          "@type": "HousePainter",
          "@id": businessId,
          name: businessName,
        },
        areaServed: serviceAreaCities.map((city) => ({
          "@type": "City" as const,
          name: city,
        })),
      } satisfies WithContext<Service>)
    : null;
</script>

<svelte:head>
  {#if schema}
    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    {@html serializeSchema(schema)}
  {/if}
</svelte:head>
