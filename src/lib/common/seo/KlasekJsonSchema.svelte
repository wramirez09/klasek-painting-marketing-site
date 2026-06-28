<script lang="ts">
  import {
    publicLogoUrl,
    destinationPhone,
    serviceAreaRadius,
    businessName,
    establishedYear,
    experienceYears,
    businessGeo,
    openingHours,
    businessProfiles,
    businessAddress,
    businessId,
    priceRange,
    serviceAreaCities,
    googleRating,
  } from "$lib/common/seo/siteData";
  import type { HousePainter, WithContext } from "schema-dts";
  import { JsonLd } from "svelte-meta-tags";
  import { page } from "$app/stores";

  const schema = {
    "@context": "https://schema.org",
    "@type": "HousePainter",
    "@id": businessId,
    name: businessName,
    priceRange,
    description: `${businessName} is a family-owned exterior painting and siding repair specialist serving Chicago and Cook County since ${establishedYear} — ${experienceYears} years of historic-home painting, siding, brick, and stucco work. Call for a free estimate.`,
    image: publicLogoUrl,
    logo: publicLogoUrl,
    url: $page.url.origin,
    telephone: destinationPhone,
    sameAs: businessProfiles,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: googleRating.ratingValue,
      reviewCount: Number(googleRating.reviewCount),
    },
    openingHoursSpecification: openingHours.map((h) => ({
      "@type": "OpeningHoursSpecification" as const,
      dayOfWeek: h.dayOfWeek,
      opens: h.opens,
      closes: h.closes,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Exterior Home Painting Services",
      itemListElement: [
        // Exterior Home Painting Services
        {
          "@type": "OfferCatalog",
          name: "Exterior Home Painting Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Historic House Painting",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Exterior Paint Contractor",
              },
            },
          ],
        },
        // Siding Painting Services
        {
          "@type": "OfferCatalog",
          name: "Siding Painting Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Hardie Board Painting",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Aluminum Siding Painting",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Cedar Siding Painting",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Vinyl Siding Painting",
              },
            },
          ],
        },
        // Siding Repair Services
        {
          "@type": "OfferCatalog",
          name: "Siding Repair Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Hardie Board Repair",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Aluminum Siding Repair",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Cedar Siding Repair",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Vinyl Siding Repair",
              },
            },
          ],
        },
        // Exterior Brick Services
        {
          "@type": "OfferCatalog",
          name: "Exterior Brick Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Exterior Brick Painting",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Exterior Brick Staining",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Exterior Brick Repair",
              },
            },
          ],
        },
        // Stucco Services
        {
          "@type": "OfferCatalog",
          name: "Stucco Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Stucco Painting",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Stucco Repair",
              },
            },
          ],
        },
      ],
    },
    address: {
      "@type": "PostalAddress",
      ...businessAddress,
    },
    location: {
      "@type": "Place",
      geo: {
        "@type": "GeoCoordinates",
        latitude: businessGeo.latitude,
        longitude: businessGeo.longitude,
      },
    },
    areaServed: [
      {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: businessGeo.latitude,
          longitude: businessGeo.longitude,
        },
        geoRadius: serviceAreaRadius,
      },
      // The 15 named suburbs, so AI answer engines can match city-level queries.
      ...serviceAreaCities.map((city) => ({
        "@type": "City" as const,
        name: city,
      })),
    ],
  } satisfies WithContext<HousePainter>;
</script>

<!-- LocalBusiness (HousePainter) schema markup -->
<JsonLd {schema} />
