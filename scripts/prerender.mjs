// Build step: render every route to static HTML so crawlers, link previews and
// Google Ads' landing-page checks get real content + per-page meta without JS.
// Runs after `vite build` (client) and `vite build --ssr` (server entry).
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const ssrEntry = path.join(root, "dist-ssr", "entry-server.js");

const { render, PRERENDER_ROUTES } = await import(pathToFileURL(ssrEntry).href);
const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");

const attr = (head, re) => (head.match(re) || [])[1];

for (const route of PRERENDER_ROUTES) {
  const { html, head } = render(route);
  const title = attr(head, /<title[^>]*>([^<]*)<\/title>/);
  const desc = attr(head, /<meta[^>]*name="description"[^>]*content="([^"]*)"/);
  if (!title || !desc) throw new Error(`Missing title/description for ${route}`);

  let out = template
    // Drop the template's generic title/description; Helmet's go in instead.
    .replace(/<title>[\s\S]*?<\/title>\s*/, "")
    .replace(/<meta name="description"[^>]*>\s*/, "")
    // Social cards should describe the page being shared.
    .replace(/(<meta property="og:title" content=")[^"]*/, `$1${title}`)
    .replace(/(<meta name="twitter:title" content=")[^"]*/, `$1${title}`)
    .replace(/(<meta property="og:description" content=")[^"]*/, `$1${desc}`)
    .replace(/(<meta name="twitter:description" content=")[^"]*/, `$1${desc}`)
    .replace("</head>", `    ${head}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);

  const file = route === "/" ? "index.html" : `${route.slice(1)}.html`;
  const target = path.join(dist, file);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, out);
  console.log(`prerendered ${route} -> dist/${file}`);
}

fs.rmSync(path.join(root, "dist-ssr"), { recursive: true, force: true });
