import { createSlice } from "@reduxjs/toolkit";
import { generateDate, sortedDb } from "../../utils/dates";

console.log(generateDate(sortedDb[0].Date));

export const FilterEmptyState = {
  kindOfGraph: "Barras",
  kindOfData: "Datos de ventas por región",
  perRange: [
    {
      startDate: `${generateDate(sortedDb[sortedDb.length - 1].Date)}`,
      endDate: `${generateDate(sortedDb[0].Date)}`,
      key: "selection",
    },
  ],
};

export const filtersSlice = createSlice({
  name: "filter",
  initialState: FilterEmptyState,
  reducers: {
    change: (state, action) => ({ ...state, ...action.payload }),
  },
});

export const { change } = filtersSlice.actions;
