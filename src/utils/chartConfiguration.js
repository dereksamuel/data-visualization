import randomColor from "randomcolor";

export const onSwitchData = (filteredData, dataset) => {
  const actions = {
    Basic: filteredData.map((country) => country["Cost Per Month - Basic ($)"]),
    Premium: filteredData.map(
      (country) => country["Cost Per Month - Premium ($)"],
    ),
    Standard: filteredData.map(
      (country) => country["Cost Per Month - Standard ($)"],
    ),
    Películas: filteredData.map((country) => country["No. of Movies"]),
    Series: filteredData.map((country) => country["No. of TV Shows"]),
  };

  return actions[dataset.label];
};

export const config = {
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
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
  },
  datasetOne: [
    {
      label: "Basic",
      backgroundColor: randomColor(),
      fill: true,
    },
    {
      label: "Premium",
      backgroundColor: randomColor(),
      fill: true,
    },
    {
      label: "Standard",
      backgroundColor: randomColor(),
      fill: true,
    },
  ],
  datasetTwo: [
    {
      label: "Películas",
      backgroundColor: randomColor(),
      fill: true,
    },
    {
      label: "Series",
      backgroundColor: randomColor(),
      fill: true,
    },
  ],
};
