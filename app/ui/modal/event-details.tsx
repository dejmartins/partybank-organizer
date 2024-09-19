import { useState } from "react";
import { ArrowLongLeftIcon, CalendarIcon, ClockIcon, MapPinIcon } from "@heroicons/react/24/outline";
import Modal from "./base-modal";
import { Event } from "@/app/lib/definitions";
import EventAnalytics from "./event-analytics";

export default function EventDetailsModal({
  event,
  onClose,
}: {
  event: Event;
  onClose: () => void;
}) {
  const [viewAnalytics, setViewAnalytics] = useState(false);

  const toggleAnalyticsView = () => {
    setViewAnalytics((prev) => !prev);
  };

  return (
    <Modal isOpen={true} onClose={onClose}>
      <div>
        <div className="flex justify-between px-6 py-4 border-0 border-b">
          <div className="flex items-center gap-3">
            <button
              onClick={viewAnalytics ? toggleAnalyticsView : onClose}
              className="border cursor-pointer bg-[#F3F5F5] px-[10px] py-[5px] rounded-[15px]"
            >
              <ArrowLongLeftIcon className="w-[20px] h-[30px] stroke stroke-[3px]" />
            </button>
            <h3 className="text-xl font-bold line-clamp-1">
              {viewAnalytics ? "Event Analytics" : "Event Details"}
            </h3>
          </div>
        </div>

        {viewAnalytics ? (
          <EventAnalytics event={event} />
        ) : (
          <EventDetails event={event} toggleAnalyticsView={toggleAnalyticsView} />
        )}
      </div>
    </Modal>
  );
}


export function EventDetails({
  event,
  toggleAnalyticsView,
}: {
  event: Event;
  toggleAnalyticsView: () => void;
}) {
  return (
    <div className="p-6 flex gap-3">
      <div className="hidden md:block">
        <div
          className="min-w-[200px] min-h-full border bg-cover bg-center rounded-[10px] overflow-hidden"
          style={{
            backgroundImage: `url("${event.image || '/defaultImage.png'}")`,
          }}
        ></div>
      </div>

      <div>
        <h3 className="text-2xl font-bold">{event.name}</h3>
        <p>{event.description}</p>
        <p>Created By: {event.series}</p>

        <div>
          <div className="mr-12 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <MapPinIcon className="w-6" />
              <div>
                <p className="text-[17px] font-[500]">
                  {event.location.city}, {event.location.country}
                </p>
                <p className="text-[15px] line-clamp-1">{event.venue}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-6" />
              <p className="text-[15px] line-clamp-2">{event.date}</p>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon className="w-6" />
              <p className="text-[15px] line-clamp-2">{event.startTime}</p>
            </div>
          </div>
        </div>

        <p>Privacy: Available to {event.privacy}</p>

        <button
          onClick={toggleAnalyticsView}
          className=""
        >
          Preview Analytics
        </button>
      </div>
    </div>
  );
}
