"use client";
import { useEffect, useState } from "react";
import { BackButton } from "@/app/ui/series/buttons";

import { useRouter } from "next/navigation";
import usePBEvent from "@/shared/hooks/usePBEvent";
import EventTicketPreview from "@/app/ui/events/event-ticket-preview";
import EventCoverImage from "@/app/ui/events/cover-image";
import TicketCategory from "@/app/ui/events/ticket-category";
import { ticketCategoryData } from "@/app/lib/placeholder-data";
import TicketSales from "@/app/ui/events/ticket-sales";
import TicketDetails from "@/app/ui/events/ticket-details";
import { useDispatch } from "@/store/store";
import { saveTicket } from "@/store/create-event/create-event-slice";

const ticketTypeData = [
  { id: 1, title: "Free" },
  { id: 2, title: "Paid" },
  { id: 3, title: "By Invite" },
];

export default function TicketPage() {
  const [selectedType, setselectedType] = useState(ticketTypeData[0]);
  const [ticketCategory, setticketCategory] = useState(ticketCategoryData[0]);
  const [perks, setperks] = useState<string[]>([]);
  const [ticketDetailsObj, settickDetailsObj] = useState({
    ticketName: "",
    ticketDescription: "",
    ticketCapacity: "",
    ticketStock: "", //change to obj
    ticketPurchaseLimit: "", //chnage to obj
  });

  const [ticketDateObj, settickDateObj] = useState({
    salesStartDate: new Date().toISOString(),
    salesEndDate: new Date().toISOString(),
    salesStartTime: new Date().toISOString(),
    salesEndTime: new Date().toISOString(),
  });
  const { tempEvent } = usePBEvent();
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSaveTicket = () => {
    const ticketData = {
      ...ticketDateObj,
      ...ticketDetailsObj,
      ticketCategory,
      ticketType: selectedType,
      perks,
      id: Date.now(),
    };
    dispatch(saveTicket(ticketData));
    settickDetailsObj((prev: any) => {
      return { ...prev, ticketName: "" };
    });
  };

  useEffect(() => {
    if (tempEvent === undefined) {
      router.back();
    }
  }, []);

  useEffect(() => {
    // console.log("==>ticket data", ticketDateObj);
  }, [
    ticketDateObj,
    ticketCategory,
    ticketCategory,
    ticketDetailsObj,
    selectedType,
  ]);

  return (
    <div className="flex flex-col min-h-[calc(100vh-170px)] border-[var(--pb-c-soft-grey)]">
      <div className="sticky top-0 z-10 w-full">
        <div className="inline-block md:hidden bg-[var(--pb-c-soft-grey)] w-full px-6 py-3">
          <h3 className="font-[700] text-[25px]">Events</h3>
        </div>

        <div className="flex items-center py-3 px-6 justify-between border-0 border-b-[3px] border-[var(--pb-c-soft-grey)]">
          <div className="flex items-center gap-7">
            <BackButton href="/dashboard/events/create" />
            <p className="text-[23px] md:text-[30px] md:font-[700]">
              Create Events<span className="font-light text-lg">/Tickets</span>
            </p>
          </div>
          <div className="hidden md:block">
            <button
              className={`bg-partybank-red flex items-center gap-x-2 text-white  px-4 border-[1px] border-[#4E0916] disabled:border-[#FEEFF2] rounded-md h-[40px] font-bold disabled:bg-[#FEEFF2] disabled:text-[#F5B4C0]`}
              onClick={() => ""}
              disabled={true}
            >
              Create Event
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-grow overflow-hidden">
        <EventTicketPreview />

        <div className="border-0 md:border-l border-partybank-soft-grey flex-grow overflow-y-auto  max-h-[calc(100vh-170px)] md:basis-[60%] lg:basis-[70%]">
          <TicketCategory
            selectedCategory={ticketCategory}
            setselectedCategory={setticketCategory}
          />
          <TicketSales
            ticketDateObj={{ ...ticketDateObj }}
            setticketDateObj={settickDateObj}
          />

          <TicketDetails
            ticketDetailsObj={{ ...ticketDetailsObj }}
            setticketDetailsObj={settickDetailsObj}
            selectedType={selectedType}
            setselectedType={setselectedType}
            perks={perks}
            setperks={setperks}
          />

          <div className="w-full flex lex-col md:flex-row  p-4 md:p-0 xl:py-2 mb-20">
            <div className="w-full flex flex-col items-center md:flex-row md:w-11/12 gap-y-4 md:gap-y-0 m-auto py-4">
              <button
                className="bg-partybank-red border border-partybank-text-black rounded py-2 px-12 text-white font-bold"
                onClick={handleSaveTicket}
              >
                Save Ticket
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
