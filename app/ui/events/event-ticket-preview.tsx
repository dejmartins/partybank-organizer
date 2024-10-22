"use client";
import usePBEvent from "@/shared/hooks/usePBEvent";
import { createEllipsis } from "@/shared/utils/helper";
import { removeTicket } from "@/store/create-event/create-event-slice";
import { useDispatch } from "@/store/store";
import { useEffect } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function EventTicketPreview() {
  const { tempEvent } = usePBEvent();
  const dispatch = useDispatch();
  const {
    backgroundPosition,
    eventName,
    tickets,
    eventDescription,
    selectedImage,
  } = tempEvent;

  const handleRemoveTicket = (payload: any) => {
    dispatch(removeTicket(payload));
  };

  // useEffect(() => {
  //   console.log("temp event", tempEvent);
  // }, [tempEvent]);

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
                  backgroundColor: "#FAF9F9",
                }}
              >
                <div>
                  <span className="text-lg block">
                    {obj.ticketDetailsObj.ticketName}
                  </span>
                  <span className="text-sm">
                    {createEllipsis(obj.ticketDetailsObj.ticketDescription, 30)}
                  </span>
                </div>
                <div>
                  <RiDeleteBin6Line
                    size={20}
                    onClick={() => handleRemoveTicket(obj)}
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
