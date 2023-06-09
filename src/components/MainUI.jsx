import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import { MainLayout } from "../styled-components/layout.styled.component";
import { Chart } from "chart.js";
import { findType } from "../utils/findType";

let myChart;

function MainUI() {
  const chartContainer = useRef(null);
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
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => Math.floor(Math.random() * 1000) + 1),
        backgroundColor: "rgba(117, 255, 99, 0.5)",
      },
      {
        label: "Dataset 2",
        data: labels.map(() => Math.floor(Math.random() * 1000) + 1),
        backgroundColor: "rgba(53, 102, 235, 0.5)",
      },
    ],
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
  }, [filterState.kindOfGraph]);

  return (
    <MainLayout>
      <canvas ref={chartContainer} />
    </MainLayout>
  );
}

export { MainUI };
