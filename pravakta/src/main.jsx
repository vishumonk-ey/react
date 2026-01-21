import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
// import { ToastProvider } from "@heroui/toast";
// import {  Herou} from "@heroui/";
// import { HeroUIProvider } from "@heroui/react";
// import { HeroUIProvider } from "@heroui/system";
// import "@heroui/react/styles";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <HeroUIProvider> */}
      {/* <ToastProvider> */}
        <Home />
        {/* <div>Hello</div> */}
      {/* </ToastProvider> */}
    {/* // </HeroUIProvider> */}
  </StrictMode>,
);
