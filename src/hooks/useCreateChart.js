import { Chart } from "chart.js";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { findType } from "../utils/findType";
import db from "../assets/db/index.json";
import { fromToDateText, generateDate } from "../utils/dates";
import { config, onSwitchData } from "../utils/chartConfiguration";

let myChart;

const useCreateChart = (chartContainer) => {
  const filterState = useSelector((store) => store.filter);
  const startDate = filterState.perRange[0].startDate;
  const endDate = filterState.perRange[0].endDate;
  const defaultValueTitle = fromToDateText(startDate, endDate);
  const [title, setTitle] = useState(defaultValueTitle);

  const datasets =
    filterState.kindOfData === "Datos de ventas por región"
      ? config.datasetOne
      : config.datasetTwo;
  const filteredData = db.filter((country) => {
    return (
      generateDate(country.Date) >= new Date(startDate) &&
      generateDate(country.Date) <= new Date(endDate)
    );
  });
  const filterByDate = datasets.map((dataset) => ({
    ...dataset,
    data: onSwitchData(filteredData, dataset),
  }));
  const labels = filteredData.map((country) => country.Country);

  const data = {
    labels,
    datasets: filterByDate,
  };

  console.log(data);

  useEffect(() => {
    if (chartContainer.current) {
      const ctx = chartContainer.current.getContext("2d");
      if (myChart) {
        myChart.destroy();
      }
      myChart = new Chart(ctx, {
        type: findType(filterState.kindOfGraph),
        data,
        options: config.options,
      });
    }

    setTitle(defaultValueTitle);
  }, [filterState]);

  return [title, setTitle];
};

export { useCreateChart };
