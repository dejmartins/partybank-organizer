import { createSlice, current } from "@reduxjs/toolkit";
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
        (obj: any) =>
          obj.ticketDetailsObj.ticketName ===
          payload.ticketDetailsObj.ticketName
      );

      if (exstn.length) {
        toast.error("Ticket already exist, please change ticket name");
      } else {
        const newTicketsArr = [...tickets, payload];
        state.data.tempEvent.tickets = newTicketsArr;
      }
    },

    removeTicket: (state, param) => {
      const { payload } = param;
      const { tickets } = current(state.data.tempEvent);
      const newTicketsArr = tickets.filter(
        (obj: any) =>
          obj.ticketDetailsObj.ticketName !==
          payload.ticketDetailsObj.ticketName
      );

      state.data.tempEvent.tickets = newTicketsArr;
    },

    updateTicket: (state, param) => {
      const { payload } = param;
      const { tickets } = current(state.data.tempEvent);
      const newTicketsArr = tickets.filter(
        (obj: any) => obj.fid !== payload.fid
      );
      //Tode: get the index before update
      const newArr = [...newTicketsArr, payload];
      state.data.tempEvent.tickets = newArr;
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
export const {
  saveEvent,
  clearEventState,
  saveTicket,
  removeTicket,
  updateTicket,
} = actions;
export default eventSlice.reducer;
