export const siteName = "https://www.klasekpainting.com";

export const businessName = "Klasek Painting";

export const destinationPhone = "(708) 267-0682";

export const googleMapsHref =
  "https://www.google.com/maps/place/Klasek+Painting/@38.346351,-100.9156525,5z/data=!4m5!3m4!1s0x0:0xc7bf3515e03f4afe!8m2!3d38.346351!4d-100.9156525?shorturl=1";

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
