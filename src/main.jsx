import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, } from "react-router-dom";
import './assets/sass/main.scss'
import routes from "./routes/routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
