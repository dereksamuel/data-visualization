import { Chart } from "chart.js";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { findType } from "../utils/findType";
import db from "../assets/db/index.json";
import randomColor from "randomcolor";
import { fromToDateText } from "../utils/dates";

let myChart;

const useCreateChart = (chartContainer) => {
  const filterState = useSelector((store) => store.filter);
  const [title, setTitle] = useState(
    fromToDateText(
      filterState.perRange[0].startDate,
      filterState.perRange[0].endDate,
    ),
  );
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
        display: false,
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

    setTitle(
      fromToDateText(
        filterState.perRange[0].startDate,
        filterState.perRange[0].endDate,
      ),
    );
  }, [filterState]);

  return [title, setTitle];
};

export { useCreateChart };
