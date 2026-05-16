import { createRoot } from "react-dom/client";
import emailjs from "@emailjs/browser";
import App from "./App.tsx";
import "./index.css";

emailjs.init("vI6J5ok4M7FWI3QeS");

createRoot(document.getElementById("root")!).render(<App />);
