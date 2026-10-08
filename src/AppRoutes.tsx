import { Route, Routes } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import MobileCallBar from "@/components/MobileCallBar";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Blinds from "./pages/Blinds";
import GarageDoors from "./pages/GarageDoors";
import ZebraBlinds from "./pages/blinds/ZebraBlinds";
import RollerBlinds from "./pages/blinds/RollerBlinds";
import BlackoutBlinds from "./pages/blinds/BlackoutBlinds";
import SolarPatioScreens from "./pages/blinds/SolarPatioScreens";
import NotFound from "./pages/NotFound";

/** Routes + global UI, shared by the browser app and the build-time prerenderer. */
const AppRoutes = () => (
  <>
    <Toaster />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/services" element={<Services />} />
      <Route path="/garage-doors" element={<GarageDoors />} />
      <Route path="/blinds" element={<Blinds />} />
      <Route path="/blinds/zebra" element={<ZebraBlinds />} />
      <Route path="/blinds/roller" element={<RollerBlinds />} />
      <Route path="/blinds/blackout" element={<BlackoutBlinds />} />
      <Route path="/blinds/solar-patio-screens" element={<SolarPatioScreens />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <MobileCallBar />
  </>
);

export default AppRoutes;
