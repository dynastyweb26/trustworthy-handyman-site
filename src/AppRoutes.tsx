import { Navigate, Route, Routes } from "react-router-dom";
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
import PatioScreens from "./pages/PatioScreens";
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
      <Route path="/patio-screens" element={<PatioScreens />} />
      <Route path="/blinds/solar-patio-screens" element={<Navigate to="/patio-screens" replace />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <MobileCallBar />
  </>
);

export default AppRoutes;
