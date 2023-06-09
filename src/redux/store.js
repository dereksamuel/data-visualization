import { configureStore } from "@reduxjs/toolkit";
import { filtersSlice } from "./states/filter";

const store = configureStore({
  reducer: {
    filter: filtersSlice.reducer,
  },
});

export { store };
