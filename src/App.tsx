import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Blinds from "./pages/Blinds";
import ZebraBlinds from "./pages/blinds/ZebraBlinds";
import RollerBlinds from "./pages/blinds/RollerBlinds";
import BlackoutBlinds from "./pages/blinds/BlackoutBlinds";
import SolarPatioScreens from "./pages/blinds/SolarPatioScreens";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blinds" element={<Blinds />} />
            <Route path="/blinds/zebra" element={<ZebraBlinds />} />
            <Route path="/blinds/roller" element={<RollerBlinds />} />
            <Route path="/blinds/blackout" element={<BlackoutBlinds />} />
            <Route path="/blinds/solar-patio-screens" element={<SolarPatioScreens />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
