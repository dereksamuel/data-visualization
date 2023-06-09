import { createSlice } from "@reduxjs/toolkit";

export const FilterEmptyState = {
  kindOfGraph: "Barras",
  kindOfData: "Datos de ventas por región",
  perRange: [
    {
      startDate: `${new Date()}`,
      endDate: `${new Date()}`,
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
