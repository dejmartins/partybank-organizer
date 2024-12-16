"use client";
import { useEffect, useState } from "react";
import { BackButton } from "@/app/ui/series/buttons";
import { QuickActions } from "@/app/ui/events/quick-actions";
import { Subscription } from "rxjs";

import EventStats from "@/app/ui/events/event-stats";
import EventContent from "@/app/ui/events/event-content";
import { useRouter } from "next/navigation";
import DeleteEvent from "../../../ui/modal/delete-event";
import UnpublishEvent from "../../../ui/modal/unpublish-event";
import ConfirmUnpublishEvent from "../../../ui/modal/confirm-unpublish-event";
import { FaCalendarAlt } from "react-icons/fa";
import { usePathname } from "next/navigation";
import {
  getEventById,
  unpublishEvents,
  deleteEvent,
  publishEvents,
} from "@/services/event-services/event-service";
import {toast} from 'react-toastify'
import Loader from "@/app/ui/loaders/loader";

export default function Page() {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isUnpublishOpen, setIsUnpublishOpen] = useState(false);
  const [isConfirmUnpublishOpen, setIsConfirmUnpublishOpen] = useState(false);
  const [isLoaderModalOpen, setIsLoaderModalOpen] = useState(true);
  const [loaderText, setLoaderText] = useState("Fetching event");
  const [unpublishReason, setUnpublishReason] = useState("event_postponed");
  const pathName = usePathname();
  const eventId = pathName.split("/")[3];
  const [event, setEvent] = useState(null)
  const router = useRouter()

  const getEvent = async()=>{
    setIsLoaderModalOpen(true);
     getEventById({id: eventId }).subscribe({
        next: (res) => {
          if (res) {
            setEvent(res)
          } else {
            toast.info(res.error);
          }
        },
        error: (msg) => {
          toast.error(msg.message);
          setIsLoaderModalOpen(false);
        },
        complete: () => {
          setIsLoaderModalOpen(false);
        },
      });
  }

  useEffect(() => {
    getEvent();
  }, []);

  const unpublishEvent = async () => {
    if(!unpublishReason){
      toast.info('Unpublication reason is required')
    }
    setLoaderText('Unpublishing Event');
    setIsLoaderModalOpen(true);

    const payload = {
      reason: unpublishReason,
    };
     unpublishEvents({ id: eventId, payload }).subscribe({
       next: (res) => {
         if (res) {
           setEvent((prev: any) => ({
             ...prev,
             publication_state: "UNPUBLISHED",
           }));
           setIsConfirmUnpublishOpen(false);
           toast.success("Event has been successfully unpublished!");
         } else {
           toast.info(res.error);
         }
       },
       error: (msg) => {
         toast.error(msg.message);
         setIsLoaderModalOpen(false);
       },
       complete: () => {
         setIsLoaderModalOpen(false);
       },
     });
  }
  const deleteEventById = async () => {
    setLoaderText('Deleteing Event');
    setIsLoaderModalOpen(true);
     deleteEvent({ id: eventId }).subscribe({
       next: (res) => {
           toast.success("Event has been successfully deleted!");
            router.push("/dashboard/events");
       },
       error: (msg) => {
         toast.error(msg.message);
         setIsLoaderModalOpen(false);
       },
       complete: () => {
         setIsLoaderModalOpen(false);
       },
     });
  }

   const publishEvent = async () => {
    setLoaderText('Unpublishing Event');
    setIsLoaderModalOpen(true);
     publishEvents({ id: eventId }).subscribe({
       next: (res) => {
         if (res) {
           toast.success("Event has been successfully published!");
         } else {
           toast.info(res.error);
         }
       },
       error: (msg) => {
         toast.error(msg.message);
         setIsLoaderModalOpen(false);
       },
       complete: () => {
         setIsLoaderModalOpen(false);
       },
     });
  }


  return (
    <>
      {!isLoaderModalOpen && event && (
        <>
          <div className="flex flex-col  border-[var(--pb-c-soft-grey)]">
            <div className="z-10 w-full">
              <div className="flex items-center gap-2 md:hidden bg-[var(--pb-c-soft-grey)] w-full px-6 py-3">
                <FaCalendarAlt className="text-2xl" />
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
                    event={event}
                    setEvent={setEvent}
                    publishEvent={publishEvent}
                  />
                </div>
              </div>
              <EventStats event={event} />
            </div>
            <hr className="mt-4 mx-12" />
          </div>
          <EventContent event={event} />

          <DeleteEvent
            isOpen={isDeleteOpen}
            onClose={() => setIsDeleteOpen(false)}
            onDelete={() => deleteEventById()}
          />
          <UnpublishEvent
            isOpen={isUnpublishOpen}
            onClose={() => setIsUnpublishOpen(false)}
            setIsConfirmUnpublishOpen={setIsConfirmUnpublishOpen}
            setUnpublishReason={setUnpublishReason}
            unpublishReason={unpublishReason}
          />

          <ConfirmUnpublishEvent
            isOpen={isConfirmUnpublishOpen}
            onClose={() => setIsConfirmUnpublishOpen(false)}
            onDelete={() => unpublishEvent()}
          />
        </>
      )}
      <Loader isOpen={isLoaderModalOpen} message={loaderText} />
    </>
  );
}
