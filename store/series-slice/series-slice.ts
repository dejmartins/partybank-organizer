import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState: any = {
  data: {},
  myseries: {},
};
const seriesSice = createSlice({
  name: "series",
  initialState,
  reducers: {
    loadSeries: (state, param) => {
      const { payload } = param;
      state.data = payload;
    },

    saveMySeries: (state, param) => {
      const { payload } = param;
      state.myseries = payload;
    },

    clearSeriesState: (state) => {
      state.data = {};
    },
  },
});

const { actions } = seriesSice;
export const { loadSeries, clearSeriesState, saveMySeries } = actions;
export default seriesSice.reducer;
