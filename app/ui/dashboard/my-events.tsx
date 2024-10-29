"use client";

import { events } from "@/app/lib/placeholder-data";
import { IEventResponseArr } from "@/services/models/event-response";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useEffect, useState } from "react";

const getCurrentDate = () => new Date();

export default function MyEvents({ eventList }: any) {
  const [statusFilter, setStatusFilter] = useState("upcoming");
  const currentDate = getCurrentDate();

  const filterEvents = (filter: string) => {
    setStatusFilter(filter);
  };

  const PublishedEvents = () => {
    const eventStatusBased = eventList.filter(
      (obj: any) => obj.status.toLowerCase() === statusFilter
    );
    return (
      <>
        {eventStatusBased.length ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {eventStatusBased.map((event: any, index: number) => (
              <div
                key={index}
                className="border flex items-center gap-3 p-3 rounded-[10px]"
              >
                <div
                  className="min-w-[60px] min-h-[60px] border bg-cover bg-center rounded-[10px] overflow-hidden"
                  style={{
                    backgroundImage: `url("${
                      event.image_url || "/defaultImage.png"
                    }")`,
                  }}
                ></div>
                <div>
                  <p className="inline-block max-w-max border rounded-[5px] px-2 font-[500]">
                    {event.series_name}
                  </p>
                  <h4 className="font-[600] text-[20px] line-clamp-1">
                    {event.event_name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No {statusFilter} events available.</p>
        )}
      </>
    );
  };

  // useEffect(() => {
  //   console.log("events==>", eventList);
  // }, []);

  return (
    <>
      <div className="px-6">
        <div className="flex items-start md:items-center justify-between">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
            <h3 className="text-2xl font-bold">My Events</h3>

            <div className="flex items-center gap-4">
              <button
                className={`px-4 rounded-md border border-[#DDE0E3] 
                              ${
                                statusFilter === "active"
                                  ? "bg-[var(--pb-c-light-red)] text-[var(--pb-c-red)] font-[600]"
                                  : ""
                              }`}
                onClick={() => filterEvents("active")}
              >
                Active
              </button>
              <button
                className={`px-4 rounded-md border border-[#DDE0E3]
                                  ${
                                    statusFilter === "upcoming"
                                      ? "bg-[var(--pb-c-light-red)] text-[var(--pb-c-red)] font-[600]"
                                      : ""
                                  }`}
                onClick={() => filterEvents("upcoming")}
              >
                Upcoming
              </button>
            </div>
          </div>

          <Link
            href={"/dashboard/events"}
            className="flex items-center gap-2 py-1 px-5 rounded-md bg-[var(--pb-c-light-red)] text-[var(--pb-c-red)] font-[600] mt-1 md:mt-0"
          >
            <span className="hidden md:block">See all events</span>
            <ChevronDoubleRightIcon className="w-4 stroke-2" />
          </Link>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-col md:flex-row items-center"></div>
        </div>

        {eventList.length && <PublishedEvents />}
      </div>
    </>
  );
}
