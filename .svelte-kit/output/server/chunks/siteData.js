const siteName = "https://www.klasekpainting.com";
const businessName = "Klasek Painting";
const destinationPhone = "(708) 267-0682";
const googleMapsHref = "https://www.google.com/maps/place/Klasek+Painting/@38.346351,-100.9156525,5z/data=!4m5!3m4!1s0x0:0xc7bf3515e03f4afe!8m2!3d38.346351!4d-100.9156525?shorturl=1";
const publicLogoUrl = `${siteName}/public/klasek-painting.png`;
const serviceAreaRadius = 17e3;
const establishedYear = 1992;
const experienceYears = `${Math.floor(((/* @__PURE__ */ new Date()).getFullYear() - establishedYear) / 5) * 5}+`;
const businessAddress = {
  streetAddress: "4415 S. Custer",
  addressLocality: "Lyons",
  addressRegion: "IL",
  postalCode: "60534",
  addressCountry: "US"
};
const businessGeo = {
  latitude: "41.81041",
  longitude: "-87.839737"
};
const openingHours = [
  {
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "07:00",
    closes: "17:00"
  }
];
const businessProfiles = [
  googleMapsHref,
  "https://www.bbb.org/us/il/lyons/profile/painting-contractors/klasek-painting-decorating-0654-12010246",
  "https://www.yelp.com/biz/klasek-painting-lyons",
  "https://www.houzz.com/professionals/painters/klasek-painting-pfvwus-pf~790460312",
  "https://www.angi.com/companylist/us/il/lyons/klasek-painting-and-services-reviews-386795.htm"
];
export {
  serviceAreaRadius as a,
  businessGeo as b,
  businessAddress as c,
  businessProfiles as d,
  destinationPhone as e,
  businessName as f,
  establishedYear as g,
  experienceYears as h,
  googleMapsHref as i,
  openingHours as o,
  publicLogoUrl as p,
  siteName as s
};
