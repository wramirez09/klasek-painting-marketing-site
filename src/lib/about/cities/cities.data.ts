// Per-town content for the service-area (city) pages. Every field is unique
// per town — housing stock, architecture, local character, a town-anchored
// services framing, and an "about" paragraph — so the 15 city pages render as
// genuinely distinct pages rather than near-duplicate templates (the cause of
// the "Crawled - currently not indexed" status in Search Console).
//
// Keys match the serviceAreaRoutes keys (and the URL slug minus
// "-house-painting"). `nearby` references other keys for internal links.

export type CityContent = {
  name: string;
  intro: string;
  housing: string;
  character: string;
  services: string;
  about: string;
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
    services:
      "On Burr Ridge's large estate homes we coordinate the full exterior — repairing and repainting cedar, refinishing stucco, painting or staining brick, and refinishing Hardie board — so every material on the elevation ages evenly. We prep thoroughly and use coatings rated for the Chicago climate.",
    about:
      "Straddling the Cook–DuPage county line, Burr Ridge is a quiet, upscale community where well-kept exteriors are part of the neighborhood's character.",
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
    services:
      "Hinsdale's older homes call for patient, repair-first work: we restore wood clapboard and cedar, patch and repaint stucco, and carefully refinish trim and detail so historic exteriors are protected rather than papered over. New construction gets the same meticulous prep.",
    about:
      "One of Chicago's most established western suburbs, Hinsdale is known for its historic district, mature trees, and a housing stock worth preserving.",
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
    services:
      "Oak Brook's large custom homes often combine several exterior materials at once, so we sequence repair and refinishing across brick, stucco, cedar, and trim for a uniform result. Big elevations get extra attention to prep, access, and product selection.",
    about:
      "Home to corporate campuses, Graue Mill, and sprawling residential lots, Oak Brook sets a high bar for presentation that homeowners work to match.",
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
    services:
      "Many Western Springs homes are a century old, so we lead with surface repair — restoring wood and stucco and rebuilding worn trim — before applying durable finishes that stand up to Midwest freeze-thaw cycles.",
    about:
      "Nicknamed “Tower Town” for its iconic standpipe, Western Springs is a close-knit, historic community where preserving original homes is a point of local pride.",
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
    services:
      "On La Grange's Victorian and early-1900s homes we repair wood siding and stucco and restore period trim before repainting, choosing colors and coatings that suit historic exteriors and last.",
    about:
      "With a lively, walkable downtown and a designated historic district, La Grange blends old-house character with everyday community life.",
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
    services:
      "Across Clarendon Hills' mix of historic bungalows and newer custom homes we match the approach to the material — repairing wood and stucco on older houses and refinishing Hardie board and brick on newer ones.",
    about:
      "A small, walkable village built around Prospect Park and its Metra stop, Clarendon Hills has a tight-knit feel where well-kept homes anchor the neighborhood.",
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
    services:
      "Downers Grove's wide range of homes means we see everything from historic wood and stucco to mid-century brick and modern Hardie board — and we repair each correctly before refinishing for a lasting result.",
    about:
      "One of the larger western suburbs, Downers Grove pairs a historic downtown and the landmark Tivoli Theatre with neighborhoods spanning a century of architecture.",
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
    services:
      "On Orland Park's newer homes we refinish vinyl and Hardie board, repaint trim and accents, and repair brick and siding so the whole exterior looks crisp and stays protected.",
    about:
      "A major southwest-suburban hub with extensive shopping and parks, Orland Park is defined by its well-planned residential neighborhoods.",
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
    services:
      "Riverside's historic wood-sided and stucco homes demand restraint and skill — we repair original siding, rebuild trim, and refinish with breathable, period-appropriate coatings that respect the landmark setting.",
    about:
      "Designed by Frederick Law Olmsted and designated a National Historic Landmark, Riverside is one of the country's first planned communities, and its homes are part of that legacy.",
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
    services:
      "On Oak Park's Prairie, Victorian, and foursquare homes we do the detailed, repair-first work historic exteriors require — restoring wood and stucco, rebuilding ornate trim, and refinishing with care for the architecture.",
    about:
      "Famous as the home of Frank Lloyd Wright's studio and a remarkable collection of Prairie-style architecture, Oak Park takes its historic homes seriously.",
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
    services:
      "Berwyn is brick country, so our work here centers on masonry: tuckpointing and repairing brick, applying breathable stain or paint, and refinishing trim and stucco accents on its classic bungalows and two-flats.",
    about:
      "Known as a bungalow capital, Berwyn's dense rows of 1920s brick homes give the town a distinctive, walkable character worth keeping in good shape.",
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
    services:
      "Westmont's blend of older and newer homes means we repair wood, stucco, and brick on established houses and refinish Hardie board and trim on newer ones, matching prep and product to each.",
    about:
      "A friendly DuPage village with a revitalized downtown and Ty Warner Park, Westmont mixes long-time homes with newer development.",
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
    services:
      "On Willowbrook's later-20th-century homes we refinish vinyl, Hardie board, and cedar accents, repaint trim and soffits, and repair brick and siding for a clean, durable finish.",
    about:
      "A compact DuPage village near the I-55 corridor, Willowbrook is a settled residential community of subdivisions and townhomes.",
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
    services:
      "Given Willow Springs' wooded, river-valley setting, we prep especially carefully against moisture — repairing cedar, wood, and stucco and refinishing with coatings built to resist damp conditions.",
    about:
      "Set along the Des Plaines River and the historic I&M Canal, Willow Springs has a green, low-key character shaped by its waterways and woods.",
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
    services:
      "Forest Park's brick bungalows and two-flats put masonry first: we tuckpoint and repair brick, apply breathable stain or paint, and refinish stucco accents and trim for a finish that lasts.",
    about:
      "A dense, walkable near-west suburb known for its Madison Street corridor and historic cemeteries, Forest Park has a classic Chicago-bungalow feel.",
    nearby: ["oak-park", "berwyn", "riverside"],
  },
};
