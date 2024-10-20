"use client";
import { useEffect, useState } from "react";
import { ClockIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { CalendarIcon } from "@heroicons/react/24/solid";
import EventDetailsModal from "../modal/event-details";
import { Event } from "@/app/lib/definitions";
import { IEventResponse } from "@/services/models/event-response";
import { convertIsoToDate, getTimeWithAmPm } from "@/shared/utils/helper";

export default function Card({ event }: { event: IEventResponse }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const backgroundImageUrl = event.image_url || "/defaultImage.png";

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  useEffect(() => {
    console.log(event.time);
  }, []);

  return (
    <div>
      <div
        className="flex flex-col border p-4 h-[250px] rounded-[10px] cursor-pointer"
        onClick={toggleModal}
      >
        <div className="flex items-center gap-2 bg-[#F7F6F7] rounded-[10px]">
          <div
            className="min-w-[80px] min-h-[80px] border bg-cover bg-center rounded-[10px] overflow-hidden"
            style={{
              backgroundImage: `url("${backgroundImageUrl}")`,
            }}
          ></div>
          <div>
            <p className="text-[15px] line-clamp-1">{event.series_name}</p>
            <h4 className="text-xl font-bold line-clamp-1">
              {event.event_name}
            </h4>
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 relative">
          <div className="mr-12 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <MapPinIcon className="w-6" />
              <div>
                <p className="text-[17px] line-clamp-1 font-[500]">
                  {/* {event.location.city}, {event.location.country} */}
                </p>
                <p className="text-[15px] line-clamp-1">{event.venue}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-6" />
              <p className="text-[15px] line-clamp-2">
                {convertIsoToDate(event.date)}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon className="w-6" />
              <p className="text-[15px] line-clamp-2">
                {getTimeWithAmPm(event.time)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && <EventDetailsModal event={event} onClose={toggleModal} />}
    </div>
  );
}
