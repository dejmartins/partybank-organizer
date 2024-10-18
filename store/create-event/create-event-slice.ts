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

    saveTicket: (state, param) => {
      const { payload } = param;
      const { tickets } = state.data.tempEvent;
      const newTicketsArr = [payload, ...tickets];
      state.data.tempEvent.tickets = newTicketsArr;
    },

    removeTicket: (state, param) => {
      const { payload } = param;
      const { tickets } = state.data.tempEvent;
      const newTicketsArr = tickets.filter(
        (obj: any) =>
          obj.id !== payload.id || obj.ticketName !== payload.ticketName
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
