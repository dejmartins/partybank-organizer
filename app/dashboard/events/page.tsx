"use client";

import { useState } from "react";
import { events } from "@/app/lib/placeholder-data";
import AddMore from "@/app/ui/dashboard/add-more";
import EmptyState from "@/app/ui/dashboard/empty-state";
import Card from "@/app/ui/events/card";

export default function Page() {
  const [statusFilter, setStatusFilter] = useState("active");
  const [isPublished, setisPublished] = useState(false);

  const filteredEvents = events.filter((event) => {
    if (!isPublished) {
      return event.isPublished === isPublished;
    } else {
      return event.status === statusFilter;
    }
  });

  return (
    <div className="flex flex-col border-0 md:border-x-[20px] border-[var(--pb-c-soft-grey)]">
      <div className="sticky top-0 z-10 w-full">
        <div className="inline-block md:hidden bg-[var(--pb-c-soft-grey)] w-full px-6 py-3">
          <h3 className="font-[700] text-[25px]">Events</h3>
        </div>

        <div className="py-3 px-6 border-0 border-b-[3px] border-[var(--pb-c-soft-grey)] flex justify-between items-center overflow-hidden">
          <p className="text-[23px] md:text-[30px] md:font-[700] line-clamp-1">
            Events Overview
          </p>

          <div className="flex gap-0 md:gap-2 bg-[#F4F5F6] p-[2px] md:p-2">
            <button
              className={`px-4 h-6 md:h-8 rounded-md text-[13px] md:text-[16px] ${
                !isPublished
                  ? "bg-[var(--pb-c-red)] text-white font-[700] border-2 border-black"
                  : "bg-white border border-[var(--pb-c-soft-grey)] bg-[#DDE0E3]"
              }`}
              onClick={() => setisPublished(false)}
            >
              Pending Events
            </button>

            <button
              className={`px-4 h-6 md:h-8 rounded-md text-[13px] md:text-[16px] ${
                isPublished
                  ? "bg-[var(--pb-c-red)] text-white font-[700] border-2 border-black"
                  : "border border-[var(--pb-c-soft-grey)] bg-[#DDE0E3]"
              }`}
              onClick={() => setisPublished(true)}
            >
              Published
            </button>

            {/* <button
              className={`px-4 h-6 md:h-8 rounded-md text-[13px] md:text-[16px] ${
                statusFilter === "active"
                  ? "bg-[var(--pb-c-red)] text-white font-[700] border-2 border-black"
                  : "bg-white border border-[var(--pb-c-soft-grey)] bg-[#DDE0E3]"
              }`}
              onClick={() => setStatusFilter("active")}
            >
              Active
            </button>
            <button
              className={`px-4 h-6 md:h-8 rounded-md text-[13px] md:text-[16px] ${
                statusFilter === "upcoming"
                  ? "bg-[var(--pb-c-red)] text-white font-[700] border-2 border-black"
                  : "bg-white border border-[var(--pb-c-soft-grey)] bg-[#DDE0E3]"
              }`}
              onClick={() => setStatusFilter("upcoming")}
            >
              Upcoming
            </button>
            <button
              className={`px-4 h-6 md:h-8 rounded-md text-[13px] md:text-[16px] ${
                statusFilter === "past"
                  ? "bg-[var(--pb-c-red)] text-white font-[700] border-2 border-black"
                  : " border border-[var(--pb-c-soft-grey)] bg-[#DDE0E3]"
              }`}
              onClick={() => setStatusFilter("past")}
            >
              Past
            </button> */}
          </div>
        </div>
      </div>

      {isPublished && (
        <div className="w-full px-4 mt-4">
          <div className="flex gap-0 md:gap-2 p-[2px] md:p-2">
            <button
              className={`px-4 h-6 md:h-8 rounded-md text-[13px] md:text-[16px] ${
                statusFilter === "active"
                  ? "bg-[var(--pb-c-red)] text-white font-[700] border-2 border-black"
                  : "border border-[var(--pb-c-soft-grey)] bg-[#DDE0E3]"
              }`}
              onClick={() => setStatusFilter("active")}
            >
              Active
            </button>
            <button
              className={`px-4 h-6 md:h-8 rounded-md text-[13px] md:text-[16px] ${
                statusFilter === "upcoming"
                  ? "bg-[var(--pb-c-red)] text-white font-[700] border-2 border-black"
                  : "border border-[var(--pb-c-soft-grey)] bg-[#DDE0E3]"
              }`}
              onClick={() => setStatusFilter("upcoming")}
            >
              Upcoming
            </button>
            <button
              className={`px-4 h-6 md:h-8 rounded-md text-[13px] md:text-[16px] ${
                statusFilter === "past"
                  ? "bg-[var(--pb-c-red)] text-white font-[700] border-2 border-black"
                  : " border border-[var(--pb-c-soft-grey)] bg-[#DDE0E3]"
              }`}
              onClick={() => setStatusFilter("past")}
            >
              Past
            </button>
          </div>
        </div>
      )}

      <div className="flex-grow overflow-y-auto p-6 lg:p-8">
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center">
            <div>
              <AddMore
                href="events/create"
                mainText="New Event"
                subText="Create events to keep your events put together"
              />
            </div>
            {filteredEvents.map((event) => (
              <div key={event.id}>
                <Card event={event} />
              </div>
            ))}
          </div>
        ) : (
          <div className="md:mt-20">
            <EmptyState title="No records yet!" />
          </div>
        )}
      </div>
    </div>
  );
}
