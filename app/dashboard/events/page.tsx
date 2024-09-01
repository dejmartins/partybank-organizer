'use client';

import { useState } from "react";
import { events } from "@/app/lib/placeholder-data";
import AddMore from "@/app/ui/dashboard/add-more";
import EmptyState from "@/app/ui/dashboard/empty-state";
import Card from "@/app/ui/events/card";

export default function Page() {
  const [statusFilter, setStatusFilter] = useState("active");

  const filteredEvents = events.filter(event => event.status === statusFilter);

  return (
    <div className="flex flex-col border-0 md:border-x-[20px] border-[var(--pb-c-soft-grey)]">
      <div className="sticky top-0 z-10 w-full">
        <div className="inline-block md:hidden bg-[var(--pb-c-soft-grey)] w-full px-6 py-3">
          <h3 className="font-[700] text-[25px]">Events</h3>
        </div>

        <div className="py-3 px-6 border-0 border-b-[3px] border-[var(--pb-c-soft-grey)] flex justify-between items-center">
          <p className="text-[23px] md:text-[30px] md:font-[700]">Events Overview</p>

          <div className="flex gap-2 bg-[#F4F5F6] p-2">
            <button
              className={`px-4 h-8 rounded-md ${
                statusFilter === "active"
                  ? "bg-[var(--pb-c-red)] text-white font-[700] border-2 border-black"
                  : "bg-white border border-[var(--pb-c-soft-grey)] bg-[#DDE0E3]"
              }`}
              onClick={() => setStatusFilter("active")}
            >
              Active
            </button>
            <button
              className={`px-4 h-8 rounded-md ${
                statusFilter === "upcoming"
                  ? "bg-[var(--pb-c-red)] text-white font-[700] border-2 border-black"
                  : "bg-white border border-[var(--pb-c-soft-grey)] bg-[#DDE0E3]"
              }`}
              onClick={() => setStatusFilter("upcoming")}
            >
              Upcoming
            </button>
            <button
              className={`px-4 h-8 rounded-md ${
                statusFilter === "past"
                  ? "bg-[var(--pb-c-red)] text-white font-[700] border-2 border-black"
                  : "bg-white border border-[var(--pb-c-soft-grey)] bg-[#DDE0E3]"
              }`}
              onClick={() => setStatusFilter("past")}
            >
              Past
            </button>
          </div>
        </div>
      </div>

      <div className="flex-grow overflow-y-auto p-6 lg:p-8">
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center">
            {filteredEvents.map((event) => (
              <div key={event.id}>
                <Card
                  imageUrl={event.image}
                  name={event.name}
                  series={event.series}
                  location={event.location}
                  date={event.date}
                  startTime={event.startTime}
                />
              </div>
            ))}
            <div>
              <AddMore />
            </div>
          </div>
        ) : (
          <div className="md:mt-20">
            <EmptyState />
          </div>
        )}
      </div>
    </div>
  );
}
