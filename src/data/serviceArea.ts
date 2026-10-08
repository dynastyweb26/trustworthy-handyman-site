// Single source of truth for the cities Cyril serves.
// Visible copy uses the full list; meta descriptions use SERVICE_AREA_SHORT
// because Google truncates descriptions around 155 characters.

export const SERVICE_AREA_CITIES = [
  "Forney",
  "Mesquite",
  "Rockwall",
  "Garland",
  "Dallas",
  "Plano",
  "Frisco",
  "McKinney",
  "Sunnyvale",
  "Heath",
  "Terrell",
  "Crandall",
  "Kaufman",
  "Talty",
] as const;

export const SERVICE_AREA_TEXT = `${SERVICE_AREA_CITIES.slice(0, -1).join(", ")}, and ${
  SERVICE_AREA_CITIES[SERVICE_AREA_CITIES.length - 1]
}`;

export const SERVICE_AREA_SHORT = "Forney, Rockwall, Mesquite, Garland, Dallas, and across DFW";
