// Zebra
import zebraDining2 from "@/assets/Zebra-Shades-Dining-2.webp";
import zebraDining4 from "@/assets/Zebra-Shades-Dining-4.webp";
import zebraDining8 from "@/assets/Zebra-Shades-Dining-8.webp";
import zebraLiving2 from "@/assets/Zebra-Shades-Living-Room-2.webp";
import zebraLiving8 from "@/assets/Zebra-Shades-Living-Room-8.webp";
// Roller
import roller2 from "@/assets/Roller-Shades-2.webp";
import roller5 from "@/assets/Roller-Shades-5.webp";
import roller7 from "@/assets/Roller-Shades-7.webp";
import roller14 from "@/assets/Roller-Shades-14.webp";
import roller22 from "@/assets/Roller-Shades-22.webp";
import roller25 from "@/assets/Roller-Shades-25.webp";
// Blackout
import blackout20 from "@/assets/Blackout-Shades-20.webp";
import blackout21 from "@/assets/Blackout-Shades-21.webp";
import blackout22 from "@/assets/Blackout-Shades-22.webp";
import blackout23 from "@/assets/Blackout-Shades-23.webp";
import blackout24 from "@/assets/Blackout-Shades-24.webp";
import blackout25 from "@/assets/Blackout-Shades-25.webp";
// Solar & patio screens
import patioScreen1 from "@/assets/Patio-Screen-1.webp";
import patioScreen2 from "@/assets/Patio-Screen-2.webp";

export interface GalleryImage {
  /** Imported asset URL (Vite resolves the import to a string). */
  src: string;
  /** Descriptive alt text for screen readers — written from the photo itself. */
  alt: string;
  /** Short label shown on hover and beneath the lightbox image. */
  caption: string;
}

export interface BlindCategory {
  slug: string;
  path: string;
  name: string;
  shortDesc: string;
  description: string;
  features: string[];
  /** Optional showroom photos. When present, the detail page renders a gallery. */
  images?: GalleryImage[];
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
    images: [
      {
        src: zebraDining2,
        alt: "Grey zebra shades lowered across a wall of tall dining-room windows behind a glass-top table, wood bench, and ring chandelier",
        caption: "Grey zebra shades in a bright dining room",
      },
      {
        src: zebraLiving2,
        alt: "Grey zebra shades on floor-to-ceiling windows in a vaulted living room with a brown leather sofa",
        caption: "Grey zebra shades in a vaulted living room",
      },
      {
        src: zebraDining8,
        alt: "Charcoal grey zebra shades on kitchen and breakfast-nook windows above a glass dining table",
        caption: "Charcoal zebra shades in a breakfast nook",
      },
      {
        src: zebraDining4,
        alt: "Beige zebra shades on a row of sunlit windows in a dining area with a dark live-edge wood table",
        caption: "Beige zebra shades in a sunlit dining area",
      },
      {
        src: zebraLiving8,
        alt: "Light grey zebra shades half-raised over two bedroom windows above a cream textured dresser",
        caption: "Light grey zebra shades in a bedroom",
      },
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
    images: [
      {
        src: roller7,
        alt: "Cream roller shades on a bay of windows overlooking a backyard pool, with a ceiling fan above an empty room",
        caption: "Cream roller shades over a poolside bay window",
      },
      {
        src: roller2,
        alt: "Ivory roller shades on four tall stairwell windows above a carpeted staircase with a dark handrail",
        caption: "Ivory roller shades along a stairwell",
      },
      {
        src: roller25,
        alt: "White sheer roller shades half-lowered on a row of grid-pane windows beside a grey sofa",
        caption: "White sheer roller shades in a sunny living room",
      },
      {
        src: roller22,
        alt: "Ivory roller shades on three windows at a curved stair landing with a black iron railing",
        caption: "Ivory roller shades at a curved stair landing",
      },
      {
        src: roller14,
        alt: "White light-filtering roller shade over a window above a freestanding soaking tub in a warm-lit bathroom",
        caption: "White roller shade above a freestanding tub",
      },
      {
        src: roller5,
        alt: "White light-filtering roller shades half-lowered on three grid-pane windows in a grey-carpeted upstairs room",
        caption: "White roller shades in a bright upstairs room",
      },
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
    images: [
      {
        src: blackout20,
        alt: "Black blackout roller shades fully lowered on bedroom bay windows, with daylight outlining the edges",
        caption: "Black blackout shades in a bedroom bay",
      },
      {
        src: blackout23,
        alt: "Charcoal grey woven blackout shades on dining-room windows behind a dark wood table and leather chairs",
        caption: "Charcoal blackout shades in a dining room",
      },
      {
        src: blackout21,
        alt: "Dark brown blackout roller shades raised above tall sliding glass patio doors in a living room",
        caption: "Brown blackout shades over patio doors",
      },
      {
        src: blackout22,
        alt: "Navy blue blackout roller shades half-lowered on three windows in a bright empty room",
        caption: "Navy blackout shades on three windows",
      },
      {
        src: blackout25,
        alt: "Black blackout roller shades half-lowered on four bay windows in an empty room with light wood floors",
        caption: "Black blackout shades on a window bay",
      },
      {
        src: blackout24,
        alt: "Light grey blackout roller shades lowered on two bedroom windows beside a grey upholstered bed",
        caption: "Light grey blackout shades in a bedroom",
      },
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
    images: [
      {
        src: patioScreen1,
        alt: "Charcoal exterior solar screen lowered over a large gabled patio opening beside a pool",
        caption: "Exterior solar screen enclosing a poolside patio",
      },
      {
        src: patioScreen2,
        alt: "Dark exterior solar screen lowered across the corner of a covered patio on a two-story home",
        caption: "Solar screen on a covered backyard patio",
      },
    ],
    metaTitle: "Solar & Patio Screens Installation | Cyril Handyman & Door LLC",
    metaDescription:
      "Solar screen and patio screen installation in Forney, Mesquite, Sunnyvale, Rockwall, Heath, Terrell, Crandall, Kaufman, and Talty. Block heat and glare while keeping your view.",
  },
];
