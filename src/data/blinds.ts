export interface BlindCategory {
  slug: string;
  path: string;
  name: string;
  shortDesc: string;
  description: string;
  features: string[];
  metaTitle: string;
  metaDescription: string;
}

export const blindsCategories: BlindCategory[] = [
  {
    slug: "zebra",
    path: "/blinds/zebra",
    name: "Zebra Blinds",
    shortDesc:
      "Alternating sheer and solid bands for adjustable light and privacy — beaded chain or motor operated, not available cordless.",
    description:
      "Zebra blinds are made from alternating bands of sheer and solid fabric on a single shade, so shifting the bands adjusts light and privacy without swapping treatments. Available in light-filtering or blackout fabric, in white, mushroom, beige, light grey, dark grey, khaki, wood, and charcoal. They're operated by a beaded chain or motor — zebra blinds are not available cordless. Fabric made in Korea by Harrom Textile. Custom made to measure, with a lead time of about two weeks.",
    features: [
      "Alternating sheer and solid fabric bands adjust light and privacy from one shade",
      "Available in light-filtering or blackout fabric",
      "Colors: white, mushroom, beige, light grey, dark grey, khaki, wood, charcoal",
      "Operated by beaded chain or motor — not available cordless",
      "Custom made to measure — about a two-week lead time",
    ],
    metaTitle: "Zebra Blinds Installation | Cyril Handyman & Door LLC",
    metaDescription:
      "Professional zebra blind installation in Forney, Mesquite, Sunnyvale, Rockwall, Heath, Terrell, Crandall, Kaufman, and Talty. Adjustable light and privacy with a modern, banded look.",
  },
  {
    slug: "roller",
    path: "/blinds/roller",
    name: "Roller Blinds",
    shortDesc:
      "A single flat fabric panel for clean, simple light control — available cordless, beaded chain, or motorized.",
    description:
      "Roller blinds are a single flat fabric panel that rolls neatly up and down — no bands, no slats. Available in light-filtering or blackout fabric, in white, ivory, sand, mocha, grey, and charcoal. Unlike zebra blinds, roller blinds are available cordless, along with beaded chain and motorized options. Fabric made in Korea by Harrom Textile. Custom made to measure, with a lead time of about two weeks.",
    features: [
      "Single flat fabric panel for a clean, minimalist look",
      "Available in light-filtering or blackout fabric",
      "Colors: white, ivory, sand, mocha, grey, charcoal",
      "Available cordless, plus beaded chain and motorized options",
      "Custom made to measure — about a two-week lead time",
    ],
    metaTitle: "Roller Blinds Installation | Cyril Handyman & Door LLC",
    metaDescription:
      "Custom roller blind and shade installation across Forney, Mesquite, Sunnyvale, Rockwall, Heath, Terrell, Crandall, Kaufman, and Talty. Simple, clean light control for any room.",
  },
  {
    slug: "blackout",
    path: "/blinds/blackout",
    name: "Blackout Blinds",
    shortDesc:
      "A blackout fabric option available on both our zebra and roller shades — no shade blocks 100% of light.",
    description:
      "Blackout isn't a separate hardware style — it's a fabric option available on both our zebra and roller shades, chosen when you pick your shade. Blackout fabric cuts outside light dramatically, but no blackout shade blocks 100% of light; how the shade is mounted — inside or outside the window frame, with or without side channels — matters just as much as the fabric for how much light still gets through. Fabric made in Korea by Harrom Textile. Custom made to measure, with a lead time of about two weeks.",
    features: [
      "Available as a fabric option on both zebra and roller blinds",
      "Cuts outside light dramatically, though no shade blocks 100% of it",
      "Mounting style (inside vs. outside frame, side channels) affects light blockage as much as the fabric",
      "A good fit for bedrooms, nurseries, and media rooms",
      "Custom made to measure — about a two-week lead time",
    ],
    metaTitle: "Blackout Blinds Installation | Cyril Handyman & Door LLC",
    metaDescription:
      "Blackout zebra and roller blind installation for bedrooms, nurseries, and media rooms in Forney, Mesquite, Sunnyvale, Rockwall, Heath, Terrell, Crandall, Kaufman, and Talty.",
  },
  {
    slug: "solar-patio-screens",
    path: "/blinds/solar-patio-screens",
    name: "Solar & Patio Screens",
    shortDesc:
      "Sunscreen fabric in 1% or 3% openness for heat and glare control, with daytime privacy.",
    description:
      "Solar and patio screens use a sunscreen fabric available in 1% or 3% openness. 1% openness blocks the most sun but gives a more restricted view outside; 3% openness lets in more sun in exchange for a clearer view through the screen. Like any screen, they provide privacy during the day only. Fabric made in Korea by Harrom Textile. Custom made to measure, with a lead time of about two weeks.",
    features: [
      "Sunscreen fabric available in 1% or 3% openness",
      "1% openness blocks the most sun, with a more restricted view",
      "3% openness allows a clearer view, with less sun blocked",
      "Daytime privacy only",
      "Custom made to measure — about a two-week lead time",
    ],
    metaTitle: "Solar & Patio Screens Installation | Cyril Handyman & Door LLC",
    metaDescription:
      "Solar screen and patio screen installation in Forney, Mesquite, Sunnyvale, Rockwall, Heath, Terrell, Crandall, Kaufman, and Talty. Block heat and glare while keeping your view.",
  },
];
