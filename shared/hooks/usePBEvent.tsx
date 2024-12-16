"use client";
import { IEventForm } from "@/services/models/event-model";
import { useSelector } from "@/store/store";
import React, { useEffect, useState } from "react";

export default function usePBEvent() {
  const event = useSelector((state) => state.createEvent);
  const tempEventObj = event.data.tempEvent;
  const tempTicketsArr = tempEventObj?.tickets;

  const [tempEvent, settempEvent] = useState({
    backgroundPosition: { x: "", y: "" },
    eventName: "",
    tickets: [],
    eventDescription: "",
    selectedImage: "",
  });
  const [tempTickets, settempTickets] = useState<any[]>([]);

  useEffect(() => {
    settempEvent(tempEventObj);
    settempTickets(tempTicketsArr);
  }, [event.data.tempEvent]);

  return { tempEvent, tempTickets };
}
