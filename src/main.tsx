import { createRoot } from "react-dom/client";
import emailjs from "@emailjs/browser";
import App from "./App.tsx";
import "./index.css";
import { initTracking } from "@/lib/tracking";

emailjs.init("vI6J5ok4M7FWI3QeS");

initTracking();

createRoot(document.getElementById("root")!).render(<App />);
