import { createRoot } from "react-dom/client";
import emailjs from "@emailjs/browser";
import App from "./App.tsx";
import "./index.css";

emailjs.init("85cJPouE9Emv7bxKK");

createRoot(document.getElementById("root")!).render(<App />);
