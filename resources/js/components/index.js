import React from "react";
import ReactDOM from "react-dom/client";
import App from "../../../../MedicineStore/src/App.js";
import { BrowserRouter } from "react-router-dom";
import app from "../app.jsx";

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <BrowserRouter>
    <app />
  </BrowserRouter>
);
