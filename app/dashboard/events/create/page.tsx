"use client";
import { useEffect, useState } from "react";
import { BackButton } from "@/app/ui/series/buttons";

import EventPreview from "@/app/ui/events/event-preview";
import ProceedButton from "@/shared/components/buttons/proceed-button";
import EventCoverImage from "@/app/ui/events/cover-image";
import EventDateLocation from "@/app/ui/events/date-location";
import EventDetails from "@/app/ui/events/event-details";
import { getTimeWithAmPm } from "@/shared/utils/helper";
import { useRouter } from "next/navigation";
import { useDispatch } from "@/store/store";
import { saveEvent } from "@/store/create-event/create-event-slice";
import { IEventForm } from "@/services/models/event-model";
import useAuth from "@/shared/hooks/useAuth";
import { MdArrowForwardIos } from "react-icons/md";
import EventMobilePreview from "@/shared/components/event-mobile-preview/event-mobile-preview";

export default function Page() {
  const { USER } = useAuth();
  const [isFormValid, setisFormValid] = useState(false);
  const [selectedImage, setSelectedImage] = useState<null | string>(null);
  const [selectedFile, setselectedFile] = useState<any>(null);
  const [backgroundPosition, setBackgroundPosition] = useState({
    x: 50,
    y: 50,
  });
  const [eventDateObj, seteventDateObj] = useState({
    eventDate: new Date().toISOString(),
    startTime: new Date().toISOString(),
    endTime: new Date().toISOString(),
    eventLocation: {
      address: "",
      lat: "",
      city: "",
      state: "",
      country: "",
      lng: "",
      geo: "",
      venue: "",
      venueGeo: "",
    },
  });
  const [eventDetailsObj, seteventDetailsObj] = useState({
    eventName: "Event Name",
    eventDescription: "Add Description",
    eventContact: "",
    eventVisibility: {
      label: "",
      title: "",
      id: "",
    },
    selectedSeries: {
      label: "",
      id: "",
    },
  });
  const [showMobilePreview, setshowMobilePreview] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  //@desc: dispatch event to store and navigate to ticket creation page
  const handleProceed = () => {
    localStorage.setItem("eventSelected", selectedImage!);
    const eventObj = {
      ...eventDateObj,
      ...eventDetailsObj,
      selectedImage,
      selectedFile,
      backgroundPosition,
      tickets: [],
    };
    // console.log({ ...eventObj });
    dispatch(saveEvent(eventObj));
    router.push("./create/tickets");
  };

  const handleValidation = () => {
    const {
      eventName,
      eventContact,
      eventDescription,
      eventVisibility,
      selectedSeries,
    } = eventDetailsObj;
    const { eventLocation } = eventDateObj;
    const isValid =
      eventName.length > 1 &&
      selectedImage !== null &&
      eventContact.length > 5 &&
      eventDescription.length > 10 &&
      eventLocation.address.length > 5 &&
      selectedSeries.label.length > 0 &&
      eventVisibility.label.length > 0;
    setisFormValid(isValid);
  };

  useEffect(() => {
    handleValidation();
  }, [eventDetailsObj, eventDateObj, selectedImage]);

  return (
    <>
      <div className="flex flex-col min-h-[calc(100vh-170px)] border-[var(--pb-c-soft-grey)]">
        <div className="sticky top-0 z-10 w-full">
          <div className="flex items-center justify-between md:hidden bg-[var(--pb-c-soft-grey)] w-full px-6 py-3">
            <h3 className="font-[700] text-[25px]">Events</h3>
            <div
              className="md:hidden text-bold flex items-center gap-x-1"
              onClick={() => setshowMobilePreview(!showMobilePreview)}
            >
              Preview
              <MdArrowForwardIos className="mt-[0.20rem]" />
            </div>
          </div>

          <div className="flex items-center py-3 px-6 justify-between border-0 border-b-[3px] border-[var(--pb-c-soft-grey)]">
            <div className="flex items-center gap-7">
              <BackButton href="/dashboard/events" />
              <p className="text-[23px] md:text-[30px] md:font-[700]">
                Create Events
              </p>
            </div>
            <div className="hidden md:block">
              <ProceedButton
                label="Proceed to ticket"
                onClick={handleProceed}
                isDisabled={!isFormValid}
              />
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

          <div className="border-0 md:border-l border-partybank-soft-grey flex-grow overflow-y-auto  max-h-[calc(100vh-170px)] md:basis-[60%] lg:basis-[70%] px-4 md:px-0">
            <EventCoverImage
              setselectedFile={setselectedFile}
              selectedImage={selectedImage}
              backgroundPosition={backgroundPosition}
              onImageChange={setSelectedImage}
              onPositionChange={setBackgroundPosition}
            />

            <EventDateLocation
              eventDateObj={eventDateObj}
              setEventDateObj={seteventDateObj}
            />

            <EventDetails
              eventDetailsObj={eventDetailsObj}
              seteventDetailsObj={seteventDetailsObj}
            />
          </div>
        </div>

        <div className="block md:hidden my-4 px-4">
          <div className="flex justify-center">
            <ProceedButton
              label="Proceed to ticket"
              onClick={handleProceed}
              isDisabled={!isFormValid}
            />
          </div>
        </div>
      </div>

      {showMobilePreview && (
        <div className="md:hidden">
          <EventMobilePreview
            selectedImage={selectedImage ?? "/defaultImage.png"}
            backgroundPosition={backgroundPosition}
            eventName={eventDetailsObj.eventName}
            eventDescription={eventDetailsObj.eventDescription}
            setShow={setshowMobilePreview}
          />
        </div>
      )}
    </>
  );
}
