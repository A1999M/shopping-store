import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AnimatePresence mode="wait" initial="true">
        <App />
      </AnimatePresence>
    </BrowserRouter>
  </React.StrictMode>
);
