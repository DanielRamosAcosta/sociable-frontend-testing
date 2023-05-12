import React from "react";
import ReactDOM from "react-dom/client";
import "./reset.css";
import "./main.css";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./navigation/AppRoutes.jsx";

const root = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
