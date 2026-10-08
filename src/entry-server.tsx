// Build-time prerender entry. Not shipped to the browser.
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider, type HelmetServerState } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import AppRoutes from "./AppRoutes";
import { PRERENDER_ROUTES } from "./prerenderRoutes";

export { PRERENDER_ROUTES };

export function render(url: string) {
  const helmetContext: { helmet?: HelmetServerState } = {};
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <QueryClientProvider client={new QueryClient()}>
        <TooltipProvider>
          <StaticRouter location={url}>
            <AppRoutes />
          </StaticRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>,
  );
  const h = helmetContext.helmet;
  const head = h ? [h.title.toString(), h.meta.toString(), h.link.toString()].join("\n    ") : "";
  return { html, head };
}
