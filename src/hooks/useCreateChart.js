import { Chart } from "chart.js";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import { findType } from "../utils/findType";
import db from "../assets/db/index.json";
import randomColor from "randomcolor";

let myChart;

const useCreateChart = (chartContainer) => {
  const filterState = useSelector((store) => store.filter);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          // This more specific font property overrides the global property
          font: {
            family: "Poppins",
            size: 16,
          },
        },
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };
  const labels = db.map((country) => country.Country);
  const datasets =
    filterState.kindOfData === "Datos de ventas por región"
      ? [
          {
            label: "Basic",
            data: db.map((country) => country["Cost Per Month - Basic ($)"]),
            backgroundColor: randomColor(),
          },
          {
            label: "Premium",
            data: db.map((country) => country["Cost Per Month - Premium ($)"]),
            backgroundColor: randomColor(),
          },
          {
            label: "Standard",
            data: db.map((country) => country["Cost Per Month - Standard ($)"]),
            backgroundColor: randomColor(),
          },
        ]
      : [
          {
            label: "Películas",
            data: db.map((country) => country["No. of Movies"]),
            backgroundColor: randomColor(),
          },
          {
            label: "Series",
            data: db.map((country) => country["No. of TV Shows"]),
            backgroundColor: randomColor(),
          },
        ];
  const data = {
    labels,
    datasets,
  };

  useEffect(() => {
    if (chartContainer.current) {
      const ctx = chartContainer.current.getContext("2d");
      if (myChart) {
        myChart.destroy();
      }
      myChart = new Chart(ctx, {
        type: findType(filterState.kindOfGraph),
        data,
        options,
      });
    }
  }, [filterState.kindOfGraph, filterState.kindOfData]);
};

export { useCreateChart };

// FIXME: To fix data range filter and clean
