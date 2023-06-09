import React from "react";
import { Bar } from "react-chartjs-2";

import { MainLayout } from "../styled-components/layout.styled.component";

function MainUI() {
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

  return (
    <MainLayout>
      <Bar options={options} data={data} />
    </MainLayout>
  );
}

export { MainUI };
