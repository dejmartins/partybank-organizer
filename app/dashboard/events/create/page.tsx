"use client";
import { useState } from "react";
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

export default function Page() {
  const [selectedImage, setSelectedImage] = useState("/defaultImage.png");
  const [backgroundPosition, setBackgroundPosition] = useState({
    x: 50,
    y: 50,
  });
  const [seriesName, setSeriesName] = useState("Event Name");
  const [seriesDescription, setSeriesDescription] = useState("Add Description");

  return (
    <div className="flex flex-col min-h-[calc(100vh-170px)] border-[var(--pb-c-soft-grey)]">
      <div className="sticky top-0 z-10 w-full">
        <div className="inline-block md:hidden bg-[var(--pb-c-soft-grey)] w-full px-6 py-3">
          <h3 className="font-[700] text-[25px]">Events</h3>
        </div>

        <div className="flex items-center py-3 px-6 justify-between border-0 border-b-[3px] border-[var(--pb-c-soft-grey)]">
          <div className="flex items-center gap-7">
            <BackButton href="/dashboard/events" />
            <p className="text-[23px] md:text-[30px] md:font-[700]">
              Create Events
            </p>
          </div>
          <div className="hidden md:block">
            {/* <ProceedToTicket /> */}
            <ProceedButton
              label="Procced to ticket"
              onClick={() => ""}
              isDisabled={false}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-grow overflow-hidden">
        <EventPreview
          selectedImage={selectedImage}
          backgroundPosition={backgroundPosition}
          eventName={seriesName}
          eventDescription={seriesDescription}
        />

        <div className="border-0 md:border-l border-partybank-soft-grey flex-grow overflow-y-auto  max-h-[calc(100vh-170px)] md:basis-[60%] lg:basis-[70%]">
          <EventCoverImage />

          <EventDateLocation />

          {/* <CoverImageUpload
            selectedImage={selectedImage}
            backgroundPosition={backgroundPosition}
            onImageChange={setSelectedImage}
            onPositionChange={setBackgroundPosition}
          /> */}

          {/* <SeriesDetails
            seriesName={seriesName}
            seriesDescription={seriesDescription}
            onSeriesNameChange={(e) => setSeriesName(e.target.value)}
            onSeriesDescriptionChange={(e) =>
              setSeriesDescription(e.target.value)
            }
          /> */}

          {/* <CreateSeries className="w-full h-[40px] my-10 block md:hidden" /> */}
        </div>
      </div>
    </div>
  );
}
