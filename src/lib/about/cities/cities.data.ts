// Per-town content for the service-area (city) pages. The goal is genuinely
// unique, factual copy per town — housing stock, architecture, local character
// — so the 15 city pages stop reading as near-duplicates (the cause of the
// "Crawled - currently not indexed" status in Search Console).
//
// Keys match the serviceAreaRoutes keys (and the URL slug minus
// "-house-painting"). `nearby` references other keys for internal links.

export type CityContent = {
  name: string;
  intro: string;
  housing: string;
  character: string;
  nearby: string[];
};

export const cityContent: Record<string, CityContent> = {
  "burr-ridge": {
    name: "Burr Ridge",
    intro:
      "Burr Ridge is known for its large custom and estate homes, and their tall, multi-gabled exteriors take a knowledgeable hand to paint well.",
    housing:
      "Many Burr Ridge homes are newer luxury builds that combine brick, stucco, cedar, and Hardie board fiber-cement on a single elevation — and each material needs different prep and products to hold up. We assess the whole exterior and finish it to match, using premium Sherwin-Williams, Benjamin Moore, Valspar, and Behr coatings.",
    character:
      "From the established subdivisions near County Line Road to the newer estates, we help Burr Ridge homeowners protect a major investment.",
    nearby: ["hinsdale", "willowbrook", "oak-brook"],
  },
  hinsdale: {
    name: "Hinsdale",
    intro:
      "Hinsdale's tree-lined streets are full of large Victorians, Tudors, and Georgians — many of them a century old — alongside newer custom builds.",
    housing:
      "Older Hinsdale homes often carry wood clapboard, cedar, and stucco that need careful surface repair before painting; skipping that prep is the most common reason exterior paint fails early. Our repair-first approach restores the surface, then refinishes it to match the home's historic character.",
    character:
      "We paint throughout Hinsdale, from Robbins Park and the in-town historic blocks to Golfview Hills.",
    nearby: ["clarendon-hills", "western-springs", "oak-brook"],
  },
  "oak-brook": {
    name: "Oak Brook",
    intro:
      "Oak Brook is defined by large estate homes on generous lots, ranging from mid-century designs to sprawling custom contemporaries.",
    housing:
      "These big elevations frequently mix brick, stucco, and cedar, and their scale makes meticulous prep and the right coatings essential for a finish that lasts. We handle the full exterior — siding, trim, soffits, and masonry.",
    character:
      "We serve Oak Brook homeowners near Graue Mill, Fullersburg, and the Oak Brook Club.",
    nearby: ["hinsdale", "burr-ridge", "downers-grove"],
  },
  "western-springs": {
    name: "Western Springs",
    intro:
      "Western Springs — long nicknamed “Tower Town” for its landmark standpipe — is full of century-old homes in neighborhoods like Old Town, Field Park, and Forest Hills.",
    housing:
      "Its Victorians, foursquares, and Tudors typically wear wood and stucco that benefit from thorough repair and repainting. We prep meticulously and finish with premium coatings built for the Chicago climate.",
    character:
      "From the Old Town district to Springdale, we help Western Springs owners keep historic homes looking their best.",
    nearby: ["la-grange", "hinsdale", "clarendon-hills"],
  },
  "la-grange": {
    name: "La Grange",
    intro:
      "La Grange pairs a walkable historic downtown with blocks of Victorian and early-1900s homes, many within its designated historic district.",
    housing:
      "These older exteriors are often wood clapboard, cedar, and stucco — surfaces that reward careful repair before paint. We restore the surface first, then refinish to suit the home's period detail.",
    character:
      "We paint across La Grange, from the Stone Avenue area to the historic blocks near the village center.",
    nearby: ["western-springs", "riverside", "hinsdale"],
  },
  "clarendon-hills": {
    name: "Clarendon Hills",
    intro:
      "Clarendon Hills is a small, walkable village around Prospect Park and the Metra line, mixing historic bungalows and foursquares with newer custom homes.",
    housing:
      "Its older homes often carry wood and stucco that need repair-first attention, while newer builds add Hardie board and brick. We match the prep and products to each surface.",
    character:
      "We serve Clarendon Hills homeowners from Prospect Park to the blocks near the downtown station.",
    nearby: ["hinsdale", "westmont", "downers-grove"],
  },
  "downers-grove": {
    name: "Downers Grove",
    intro:
      "Downers Grove spans a wide range of architecture — from Victorians and historic Sears kit homes near downtown to mid-century and newer builds.",
    housing:
      "That variety means cedar, wood, stucco, brick, and Hardie board all show up across town, each needing its own prep and coatings. We assess the specific home and finish it to last.",
    character:
      "We paint throughout Downers Grove, from the historic district near the Tivoli to the surrounding neighborhoods.",
    nearby: ["westmont", "clarendon-hills", "willowbrook"],
  },
  "orland-park": {
    name: "Orland Park",
    intro:
      "Orland Park is a larger southwest-suburban community of established subdivisions and newer custom homes.",
    housing:
      "Many homes here feature vinyl, Hardie board, brick, and cedar accents — materials we repair and repaint for a clean, durable finish. We handle the full exterior, siding through trim.",
    character:
      "We bring 30+ years of exterior experience to Orland Park homeowners across the village's neighborhoods.",
    nearby: ["willowbrook", "willow-springs", "westmont"],
  },
  riverside: {
    name: "Riverside",
    intro:
      "Riverside is a National Historic Landmark — a village planned by Frederick Law Olmsted, with curvilinear streets, mature trees, and gas-style lamps.",
    housing:
      "Its Victorian, Queen Anne, and Prairie-style homes are often more than a century old, with wood and stucco exteriors that demand patient, repair-first preparation. We refinish to honor the home's historic character.",
    character:
      "We paint throughout Riverside's historic landscape, from the Olmsted plan's winding streets to the blocks near the Des Plaines River.",
    nearby: ["berwyn", "la-grange", "oak-park"],
  },
  "oak-park": {
    name: "Oak Park",
    intro:
      "Oak Park holds one of the country's great concentrations of Frank Lloyd Wright and Prairie School architecture, alongside Victorians, foursquares, and bungalows.",
    housing:
      "Many of these homes are historic and detail-rich, with wood, stucco, and trim that require careful prep and respect for the original character. Our repair-first approach protects both the surface and the architecture.",
    character:
      "We serve Oak Park from the Frank Lloyd Wright–Prairie School Historic District to the neighborhoods near downtown.",
    nearby: ["forest-park", "berwyn", "riverside"],
  },
  berwyn: {
    name: "Berwyn",
    intro:
      "Berwyn is famous for its dense rows of 1920s Chicago-style brick bungalows — one of the largest concentrations anywhere — plus classic two-flats.",
    housing:
      "Brick and stucco dominate here, so masonry repair, breathable coatings, and careful trim work matter most. We repair before we paint or stain, so the finish lasts on these century-old exteriors.",
    character:
      "We paint throughout Berwyn, including the Berwyn Bungalow district and the Depot neighborhoods.",
    nearby: ["oak-park", "forest-park", "riverside"],
  },
  westmont: {
    name: "Westmont",
    intro:
      "Westmont blends older homes near its historic downtown with newer subdivisions across the village.",
    housing:
      "You'll find wood, stucco, brick, and Hardie board throughout — each needing its own prep and products for a lasting finish. We assess the whole exterior and match the approach to the home.",
    character:
      "We serve Westmont homeowners from the downtown area to the surrounding neighborhoods.",
    nearby: ["clarendon-hills", "downers-grove", "willowbrook"],
  },
  willowbrook: {
    name: "Willowbrook",
    intro:
      "Willowbrook is a DuPage village of established subdivisions, townhomes, and single-family homes built largely in the later 20th century.",
    housing:
      "Vinyl, Hardie board, brick, and cedar accents are common here — surfaces we repair and repaint for a crisp, durable result. We finish the full exterior, siding through soffits.",
    character:
      "We bring three decades of exterior experience to Willowbrook homeowners across the village.",
    nearby: ["burr-ridge", "westmont", "willow-springs"],
  },
  "willow-springs": {
    name: "Willow Springs",
    intro:
      "Willow Springs sits along the Des Plaines River and the historic I&M Canal corridor, with a wooded setting and a mix of older and newer homes.",
    housing:
      "Its varied housing means cedar, wood, stucco, and Hardie board all appear — each repaired and finished to suit. We prep thoroughly so coatings hold up against river-valley moisture.",
    character:
      "We serve Willow Springs homeowners throughout the village's wooded neighborhoods.",
    nearby: ["willowbrook", "orland-park", "la-grange"],
  },
  "forest-park": {
    name: "Forest Park",
    intro:
      "Forest Park is a dense near-west suburb known for its brick bungalows and two-flats and its lively Madison Street corridor.",
    housing:
      "Brick and stucco are everywhere here, so masonry repair, tuckpointing, and breathable finishes are central to a lasting result. We repair before painting or staining on these older exteriors.",
    character:
      "We paint throughout Forest Park, from the Madison Street area to the surrounding bungalow blocks.",
    nearby: ["oak-park", "berwyn", "riverside"],
  },
};
