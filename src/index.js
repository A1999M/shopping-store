import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Provider } from "react-redux";
import store from "./store/index";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AnimatePresence mode="wait" initial="true">
        <Provider store={store}>
          <App />
        </Provider>
      </AnimatePresence>
    </BrowserRouter>
  </React.StrictMode>
);
