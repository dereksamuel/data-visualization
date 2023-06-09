import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Chart, registerables } from "chart.js";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./styled-components/index.js";
import "./font-faces.css";
import "./index.css";

Chart.register(...registerables);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
