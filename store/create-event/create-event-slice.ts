import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

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

    saveTicket: (state, param) => {
      const { payload } = param;
      const { tickets } = state.data.tempEvent;
      const exstn = tickets.filter(
        (obj: any) => obj.ticketName === payload.ticketName
      );
      if (exstn.length) {
        toast.error("Ticket already exisit, please change ticket name");
      } else {
        const newTicketsArr = [payload, ...tickets];
        state.data.tempEvent.tickets = newTicketsArr;
      }
    },

    removeTicket: (state, param) => {
      const { payload } = param;
      const { tickets } = state.data.tempEvent;
      const newTicketsArr = tickets.filter(
        (obj: any) => obj.ticketName !== payload.ticketName
      );
      state.data.tempEvent.tickets = newTicketsArr;
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
export const { saveEvent, clearEventState, saveTicket, removeTicket } = actions;
export default eventSlice.reducer;
