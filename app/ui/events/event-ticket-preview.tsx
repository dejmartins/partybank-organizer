"use client";
import { IEventForm } from "@/services/models/event-model";
import usePBEvent from "@/shared/hooks/usePBEvent";
import { createEllipsis } from "@/shared/utils/helper";
import { removeTicket } from "@/store/create-event/create-event-slice";
import { useDispatch, useSelector } from "@/store/store";
import { loadTicket } from "@/store/ticket-slice/ticket-slice";
import { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

type PropT = {
  loadedTicket: any;
};
export default function EventTicketPreview({ loadedTicket }: PropT) {
  const event = useSelector((state) => state.event);
  const tempEvent: IEventForm = event.data.tempEvent;
  const dispatch = useDispatch();
  const {
    backgroundPosition,
    eventName,
    tickets,
    eventDescription,
    selectedImage,
  } = tempEvent;

  // const handleRemoveTicket = (payload: any) => {
  //   dispatch(removeTicket(payload));
  // };

  useEffect(() => {
    console.log("currently loaded==>", loadedTicket);
    // setloadedTicket(loadedTicketObj);
  }, [loadedTicket]);

  return (
    <div className="border p-10 flex-grow flex flex-col hidden md:block md:basis-[40%] lg:basis-[30%] overflow-y-auto  max-h-[calc(100vh-170px)]">
      <h3 className="font-[700] text-[20px] mb-1">Preview</h3>
      <div className="border flex flex-col p-4 h-[300px] w-full rounded-[10px]">
        <div
          className="h-[200px] border bg-cover bg-center rounded-[10px] overflow-hidden"
          style={{
            backgroundImage: `url("${selectedImage}")`,
            backgroundPosition: `${backgroundPosition?.x}% ${backgroundPosition?.y}%`,
          }}
        ></div>
        <div className="flex items-center justify-between pt-3 relative">
          <div className="mr-12">
            <h4 className="text-xl font-bold line-clamp-1">{eventName}</h4>
            <p className="text-[15px] line-clamp-2">{eventDescription}</p>
          </div>
        </div>
      </div>

      <hr className="mt-8" />
      <div className="mt-4">
        <h3 className="font-[700] text-[20px] mb-1">My Tickets</h3>
        {tickets.length ? (
          <div className="flex flex-col mt-4">
            {tickets.map((obj: any, index: number) => (
              <div
                key={index}
                className="w-full flex items-center justify-between cursor-pointer p-2 rounded-lg border border-[#f1f0f0]"
                style={{
                  backgroundColor:
                    loadedTicket &&
                    Object.keys(loadedTicket).length &&
                    loadedTicket.id === obj.id
                      ? "#E91B41"
                      : "#FAF9F9",
                  color:
                    loadedTicket &&
                    Object.keys(loadedTicket).length &&
                    loadedTicket.id === obj.id
                      ? "#fff"
                      : "#000",
                  border:
                    loadedTicket &&
                    Object.keys(loadedTicket).length &&
                    loadedTicket.id === obj.id
                      ? "1px solid red"
                      : "none",
                }}
                onClick={(ev) => {
                  ev.stopPropagation();
                  console.log("===>", tempEvent);
                  if (loadedTicket.id !== obj.id) {
                    dispatch(loadTicket(obj));
                  }
                }}
              >
                <div>
                  <span className="text-lg block">
                    {obj.ticketDetailsObj.ticketName}
                  </span>
                  {/* <span className="text-sm">
                    {createEllipsis(obj.ticketDetailsObj.ticketDescription, 30)}
                  </span> */}
                </div>
                <div>
                  <RiDeleteBin6Line
                    size={20}
                    onClick={(ev) => {
                      ev.stopPropagation();
                      dispatch(removeTicket(obj));
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="w-full flex items-center justify-center p-2 rounded-lg border border-[#f1f0f0] text-sm">
            No ticket added
          </div>
        )}
      </div>
    </div>
  );
}
