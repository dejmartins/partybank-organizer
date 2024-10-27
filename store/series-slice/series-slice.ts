import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState: any = {
  data: {},
};
const seriesSice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    loadSeries: (state, param) => {
      const { payload } = param;
      state.data = payload;
    },

    clearSeriesState: (state) => {
      state.data = {};
    },
  },
});

const { actions } = seriesSice;
export const { loadSeries, clearSeriesState } = actions;
export default seriesSice.reducer;
