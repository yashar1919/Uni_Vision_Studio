import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./src/index.css";

// Initialize i18n
import "./src/i18n/config";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
