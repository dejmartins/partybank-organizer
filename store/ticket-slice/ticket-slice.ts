import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState: any = {
  data: {},
};
const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    loadTicket: (state, param) => {
      const { payload } = param;
      console.log("to load ticket", payload);
      state.data = payload;
    },

    clearTicketState: (state) => {
      state.data = {};
    },
  },
});

const { actions } = ticketSlice;
export const { loadTicket, clearTicketState } = actions;
export default ticketSlice.reducer;
