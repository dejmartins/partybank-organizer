import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  data: {},
};
const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    saveEvent: (state, param) => {
      const { payload } = param;
      state.data.tempEvent = payload;
    },

    loadedTicket: (state, param) => {
      const { payload } = param;
      state.data.loadedTicket = payload;
    },

    clearEventState: () => {
      return initialState;
    },
  },
});

const { actions } = eventSlice;
export const { saveEvent, clearEventState } = actions;
export default eventSlice.reducer;
