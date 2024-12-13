"use client";
import { useEffect, useState } from "react";
import { BackButton } from "@/app/ui/series/buttons";
import { QuickActions } from "@/app/ui/events/quick-actions";

import EventPreview from "@/app/ui/events/event-preview";
import EventStats from "@/app/ui/events/event-stats";
import EventContent from "@/app/ui/events/event-content";
import ProceedButton from "@/shared/components/buttons/proceed-button";
import EventCoverImage from "@/app/ui/events/cover-image";
import EventDateLocation from "@/app/ui/events/date-location";
import EventDetails from "@/app/ui/events/event-details";
import { getTimeWithAmPm } from "@/shared/utils/helper";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "@/store/store";
import { saveEvent } from "@/store/create-event/create-event-slice";
import { IEventForm } from "@/services/models/event-model";
import useAuth from "@/shared/hooks/useAuth";
import { MdArrowForwardIos } from "react-icons/md";
import EventMobilePreview from "@/shared/components/event-mobile-preview/event-mobile-preview";
import DeleteEvent from "../../../ui/modal/delete-event";
import UnpublishEvent from "../../../ui/modal/unpublish-event";
import ConfirmUnpublishEvent from "../../../ui/modal/confirm-unpublish-event";
import { FaCalendarAlt } from "react-icons/fa";

export default function Page() {
  const { USER } = useAuth();
  const event = useSelector((state) => state.event);
  const tempEventObj: IEventForm = event?.data?.tempEvent;
  const [isFormValid, setisFormValid] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isUnpublishOpen, setIsUnpublishOpen] = useState(false);
  const [isConfirmUnpublishOpen, setIsConfirmUnpublishOpen] =
    useState(false);
  const [selectedImage, setSelectedImage] = useState("/defaultImage.png");
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
    eventName: "",
    eventDescription: "",
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
  const [isClient, setisClient] = useState(false);
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
      tickets: tempEventObj.tickets,
      id: event.data.tempEvent.id,
      is_notification_enabled: tempEventObj.is_notification_enabled,
    };

    dispatch(saveEvent(eventObj));
    router.push("./edit/tickets");
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
      eventContact?.length > 5 &&
      eventDescription?.length > 10 &&
      eventLocation.address?.length > 5 &&
      selectedSeries.label?.length > 0 &&
      eventVisibility.label?.length > 0;
    setisFormValid(isValid);
  };

  useEffect(() => {
    handleValidation();
  }, [eventDetailsObj, eventDateObj, selectedImage]);

  useEffect(() => {
    if (!tempEventObj) return;
    const { selectedImage, eventDate } = tempEventObj;
    setSelectedImage(selectedImage);
    seteventDateObj({
      eventDate: tempEventObj.eventDate,
      startTime: tempEventObj.startTime,
      endTime: tempEventObj.endTime,
      eventLocation: {
        address: tempEventObj.eventLocation.address ?? "",
        lat: tempEventObj.eventLocation.lat,
        city: tempEventObj.eventLocation.city,
        state: tempEventObj.eventLocation.state,
        country: tempEventObj.eventLocation.country,
        lng: tempEventObj.eventLocation.lng,
        geo: tempEventObj.eventLocation.geo,
        venue: tempEventObj.eventLocation.venue,
        venueGeo: tempEventObj.eventLocation.geo,
      },
    });

    seteventDetailsObj({
      eventName: tempEventObj.eventName ?? "",
      eventDescription: tempEventObj.eventDescription,
      eventContact: tempEventObj.eventContact,
      eventVisibility: {
        label: tempEventObj.eventVisibility.label,
        title: tempEventObj.eventVisibility.label,
        id: tempEventObj.eventVisibility.id,
      },
      selectedSeries: {
        label: tempEventObj.selectedSeries.label,
        id: tempEventObj.selectedSeries.id!,
      },
    });
    // console.log("==>", tempEventObj);
    setisClient(true);
  }, [tempEventObj]);

  return (
    <>
      {isClient && (
        <>
          <div className="flex flex-col  border-[var(--pb-c-soft-grey)]">
            <div className="z-10 w-full">
                
              <div className="flex items-center gap-2 md:hidden bg-[var(--pb-c-soft-grey)] w-full px-6 py-3">
                <FaCalendarAlt className='text-2xl'/>
                <h3 className="font-[700] text-[25px]">Events</h3>
              </div>

              <div className="flex items-center py-3 px-6 justify-between border-0 border-b-[3px] border-[var(--pb-c-soft-grey)]">
                <div className="flex items-center gap-7">
                  <BackButton href="/dashboard/events" />
                  <p className="text-[23px] md:text-[30px] md:font-[700]">
                    Event Details
                  </p>
                </div>
                <div className="">
                  <QuickActions
                    setIsDeleteOpen={setIsDeleteOpen}
                    setIsUnpublishOpen={setIsUnpublishOpen}
                    isUnpublishOpen={isUnpublishOpen}
                  />
                </div>
              </div>
              <EventStats />
            </div>
            <hr className="mt-4 mx-12" />
          </div>
          <EventContent />
          {showMobilePreview && (
            <EventMobilePreview
              selectedImage={selectedImage ?? tempEventObj.selectedImage}
              backgroundPosition={backgroundPosition}
              eventName={eventDetailsObj.eventName}
              eventDescription={eventDetailsObj.eventDescription}
              setShow={setshowMobilePreview}
            />
          )}
          <DeleteEvent
            isOpen={isDeleteOpen}
            onClose={() => setIsDeleteOpen(false)}
            onDelete={() => true}
          />
          {isUnpublishOpen ? (
            <UnpublishEvent
              isOpen={isUnpublishOpen}
              onClose={() => setIsUnpublishOpen(false)}
              setIsConfirmUnpublishOpen={setIsConfirmUnpublishOpen}
            />
          ) : (
            ""
          )}

          <ConfirmUnpublishEvent
            isOpen={isConfirmUnpublishOpen}
            onClose={() => setIsConfirmUnpublishOpen(false)}
            onDelete={() => setIsConfirmUnpublishOpen(true)}
          />
        </>
      )}
    </>
  );
}
