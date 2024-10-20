import { useState } from "react";
import {
  ArrowLongLeftIcon,
  CalendarIcon,
  ChevronDoubleRightIcon,
  ClockIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import Modal from "./base-modal";
import { Event } from "@/app/lib/definitions";
import EventAnalytics from "./event-analytics";
import moment from "moment";
import AnalyticsModal from "./base-analytics-modal";
import { HiDotsVertical } from "react-icons/hi";
import { IEventResponse } from "@/services/models/event-response";
import { convertIsoToDate, getTimeWithAmPm } from "@/shared/utils/helper";

export default function EventDetailsModal({
  event,
  onClose,
}: {
  event: IEventResponse;
  onClose: () => void;
}) {
  const [viewAnalytics, setViewAnalytics] = useState(false);
  //control view based on event analytics
  // const [isAnalytics, setisAnalytics] = useState(
  //   event.analytics.attendees.length ? true : false
  // );
  const [isAnalytics, setisAnalytics] = useState(false);

  const toggleAnalyticsView = () => {
    setViewAnalytics((prev) => !prev);
  };

  return (
    <>
      {isAnalytics ? (
        <AnalyticsModal isOpen={true} onClose={onClose}>
          <div>
            <div className="flex justify-between px-6 py-4 border-0 border-b items-center">
              <div className="flex items-center gap-3">
                <button
                  onClick={onClose}
                  className="border cursor-pointer bg-[#F3F5F5] px-[10px] py-[5px] rounded-[15px]"
                >
                  <ArrowLongLeftIcon className="w-[20px] h-[30px] stroke stroke-[3px]" />
                </button>
                <h3 className="text-xl font-bold line-clamp-1">
                  Event Analytics
                </h3>
              </div>
              <div className="p-1 cursor-pointer">
                <HiDotsVertical size={20} />
              </div>
            </div>

            {/* <EventAnalytics
              event={event}
              toggleAnalyticsView={toggleAnalyticsView}
            /> */}
          </div>
        </AnalyticsModal>
      ) : (
        <Modal isOpen={true} onClose={onClose}>
          <div>
            <div className="flex justify-between px-6 py-4 border-0 border-b">
              <div className="flex items-center gap-3">
                <button
                  //   onClick={viewAnalytics ? toggleAnalyticsView : onClose}
                  onClick={onClose}
                  className="border cursor-pointer bg-[#F3F5F5] px-[10px] py-[5px] rounded-[15px]"
                >
                  <ArrowLongLeftIcon className="w-[20px] h-[30px] stroke stroke-[3px]" />
                </button>
                <h3 className="text-xl font-bold line-clamp-1">
                  {isAnalytics ? "Event Analytics" : "Event Details"}
                </h3>
              </div>
            </div>

            <EventDetails
              event={event}
              toggleAnalyticsView={toggleAnalyticsView}
            />
          </div>
        </Modal>
      )}
    </>
  );
}

export function EventDetails({
  event,
  toggleAnalyticsView,
}: {
  event: IEventResponse;
  toggleAnalyticsView: () => void;
}) {
  return (
    <div className="p-6 flex gap-3">
      <div className="hidden md:block">
        <div
          className="min-w-[230px] min-h-full border bg-cover bg-center rounded-[10px] overflow-hidden"
          style={{
            backgroundImage: `url("${event.image_url || "/defaultImage.png"}")`,
          }}
        ></div>
      </div>

      <div>
        <p className="inline-block rounded-[4px] font-[400] px-2 py-[2px] text-sm bg-[#F7F6F7]">
          {event.series_name}
        </p>
        <h3 className="text-2xl font-bold">{event.event_name}</h3>
        <p className="pb-2">{event.description}</p>
        {/* <p>Created By: {event.series}</p> */}

        <div>
          <div className="mr-12 flex items-center justify-between gap-2 border-0 border-b border-t w-full py-2">
            <div className="flex items-center gap-2 w-1/3">
              <MapPinIcon className="w-6" />
              <div>
                <p className="text-[17px] font-[500]">
                  {event.location.city}, {event.location.state}
                </p>
                <p className="text-[15px] line-clamp-1">{event.venue}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-6" />
              <p className="text-[15px] line-clamp-2">
                {/* {moment(event.date).format("MMMM Do, YYYY")} */}
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

        <div className="py-2 border-0 border-b">
          <p className="font-[500]">
            Visibility:{" "}
            <span className="rounded-[4px] font-[400] px-2 text-sm bg-[#F7F6F7]">
              Available to public
            </span>
          </p>
        </div>

        <div className="py-2 flex justify-between">
          <p></p>
        </div>
      </div>
    </div>
  );
}
