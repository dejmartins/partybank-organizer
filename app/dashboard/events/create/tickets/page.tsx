"use client";
import { useEffect, useState } from "react";
import { BackButton } from "@/app/ui/series/buttons";

import { useRouter } from "next/navigation";
import usePBEvent from "@/shared/hooks/usePBEvent";
import EventTicketPreview from "@/app/ui/events/event-ticket-preview";
import EventCoverImage from "@/app/ui/events/cover-image";
import TicketCategory from "@/app/ui/events/ticket-category";
import TicketSales from "@/app/ui/events/ticket-sales";
import TicketDetails from "@/app/ui/events/ticket-details";

export default function TicketPage() {
  const [ticketDateObj, settickDateObj] = useState({
    startDate: new Date().toISOString(),
    endDate: new Date().toISOString(),
    startTime: new Date().toISOString(),
    endTime: new Date().toISOString(),
  });
  const { tempEvent } = usePBEvent();
  const router = useRouter();

  useEffect(() => {
    if (tempEvent === undefined) {
      router.back();
    }
  }, []);

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
          <TicketCategory />
          <TicketSales
            ticketDateObj={{ ...ticketDateObj }}
            setticketDateObj={settickDateObj}
          />

          <TicketDetails
            ticketDateObj={{ ...ticketDateObj }}
            setticketDateObj={settickDateObj}
          />
        </div>
      </div>
    </div>
  );
}
