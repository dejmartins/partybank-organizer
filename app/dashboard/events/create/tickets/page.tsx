"use client";
import { useEffect, useState } from "react";
import { BackButton } from "@/app/ui/series/buttons";
import { CreateSeries } from "@/app/ui/series/buttons";
import Preview from "@/app/ui/series/preview";
import SeriesDetails from "@/app/ui/series/series-details";
import CoverImageUpload from "@/app/ui/series/cover-image";
import EventPreview from "@/app/ui/events/event-preview";
import { CreateEvent, ProceedToTicket } from "@/app/ui/events/buttons";
import Button from "@/app/ui/buttons/button";
import ProceedButton from "@/shared/components/buttons/proceed-button";
import EventCoverImage from "@/app/ui/events/cover-image";
import EventDateLocation from "@/app/ui/events/date-location";
import EventDetails from "@/app/ui/events/event-details";
import { getTimeWithAmPm } from "@/shared/utils/helper";

export default function TicketPage() {
  const [selectedImage, setSelectedImage] = useState<null | string>(null);
  const [backgroundPosition, setBackgroundPosition] = useState({
    x: 50,
    y: 50,
  });
  const [eventName, setEventName] = useState("Event Name");
  const [eventDescription, setEventDescription] = useState("Add Description");
  const [eventDateObj, seteventDateObj] = useState({
    eventDate: new Date(),
    startTime: new Date(),
    endTime: new Date(),
    eventLocation: {
      address: "",
      lat: "",
      lng: "",
    },
  });
  const [eventDetailsObj, seteventDetailsObj] = useState({
    eventName: "Event Name",
    eventDescription: "Add Description",
    eventContact: "",
    eventVisibility: "",
    selectedSeries: {
      name: "",
      id: "",
    },
  });

  useEffect(() => {}, [eventDetailsObj]);

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
        <EventPreview
          selectedImage={selectedImage ?? "/defaultImage.png"}
          backgroundPosition={backgroundPosition}
          eventName={eventDetailsObj.eventName}
          eventDescription={eventDetailsObj.eventDescription}
        />

        <div className="border-0 md:border-l border-partybank-soft-grey flex-grow overflow-y-auto  max-h-[calc(100vh-170px)] md:basis-[60%] lg:basis-[70%]">
          {/* here */}
        </div>
      </div>
    </div>
  );
}
