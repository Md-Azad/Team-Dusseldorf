import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="px-8 py-2">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
