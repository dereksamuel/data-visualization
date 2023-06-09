import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./styled-components/index.js";
import "./font-faces.css";
import "./index.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
