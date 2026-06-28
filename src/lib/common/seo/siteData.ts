export const siteName = "https://www.klasekpainting.com";

export const businessName = "Klasek Painting";

// Stable node identifier so per-page Service schema can reference the single
// canonical business node (defined site-wide in KlasekJsonSchema) via @id.
export const businessId = `${siteName}/#business`;

// Typical exterior-painting project price band (Google's priceRange convention).
export const priceRange = "$$";

// Google rating as publicly displayed on the Google Business Profile.
// SOURCE: Google's public listing (4.0 / 13 reviews). The live profile is
// bot-blocked from automated fetch, so confirm against the GBP dashboard and
// update if it has changed. Google's structured-data policy requires this to
// match the rating Google actually displays, so it reflects the full public
// aggregate — NOT a recompute that drops sub-3-star reviews (that number would
// appear nowhere public and risks a manual action).
export const googleRating = {
  ratingValue: "4.0",
  reviewCount: "13",
};

// The 15 named suburbs served, for schema `areaServed`. Kept here so the
// business schema and per-page Service schema stay in sync.
export const serviceAreaCities = [
  "Burr Ridge, IL",
  "Hinsdale, IL",
  "Oak Brook, IL",
  "Western Springs, IL",
  "La Grange, IL",
  "Clarendon Hills, IL",
  "Downers Grove, IL",
  "Orland Park, IL",
  "Riverside, IL",
  "Oak Park, IL",
  "Berwyn, IL",
  "Westmont, IL",
  "Willowbrook, IL",
  "Willow Springs, IL",
  "Forest Park, IL",
] as const;

export const destinationPhone = "(708) 267-0682";

// Real Lyons, IL location. The previous value used coordinates in western
// Kansas (@38.34,-100.91), which mislabeled the footer address link and the
// schema `sameAs` profile. Keep these coords in lockstep with `businessGeo`.
export const googleMapsHref =
  "https://www.google.com/maps/place/Klasek+Painting/@41.81041,-87.839737,17z/";

export const publicLogoUrl = `${siteName}/public/klasek-painting.png`;

// Radius in meters for service area
export const serviceAreaRadius = 17000;

// Experience / history — single source of truth. Established 1992; derive years
// from the current year so the "30+ years" claim never goes stale.
export const establishedYear = 1992;
export const experienceYears = `${Math.floor((new Date().getFullYear() - establishedYear) / 5) * 5}+`;

// Business address (NAP) — keep in lockstep with the schema PostalAddress.
export const businessAddress = {
  streetAddress: "4415 S. Custer",
  addressLocality: "Lyons",
  addressRegion: "IL",
  postalCode: "60534",
  addressCountry: "US",
};

// Real Lyons, IL coordinates. Mirrors the areaServed geoMidpoint so the
// business location and service-area center never drift apart.
export const businessGeo = {
  latitude: "41.81041",
  longitude: "-87.839737",
};

// Real operating hours, centralized for schema + on-page display.
export const openingHours = [
  {
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "07:00",
    closes: "17:00",
  },
] as const;

// Verified business profiles for schema `sameAs` (replaces the personal
// Facebook profile). GBP is the Google Maps place link above.
export const businessProfiles = [
  googleMapsHref,
  "https://www.bbb.org/us/il/lyons/profile/painting-contractors/klasek-painting-decorating-0654-12010246",
  "https://www.yelp.com/biz/klasek-painting-lyons",
  "https://www.houzz.com/professionals/painters/klasek-painting-pfvwus-pf~790460312",
  "https://www.angi.com/companylist/us/il/lyons/klasek-painting-and-services-reviews-386795.htm",
];
