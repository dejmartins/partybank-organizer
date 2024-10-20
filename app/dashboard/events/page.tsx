"use client";

import { useEffect, useState } from "react";
import AddMore from "@/app/ui/dashboard/add-more";
import EmptyState from "@/app/ui/dashboard/empty-state";
import Card from "@/app/ui/events/card";
import { getOrgEvents } from "@/services/event-services/event-service";
import { toast } from "react-toastify";
import useAuth from "@/shared/hooks/useAuth";
import { Subscription } from "rxjs";
import {
  IEventResponse,
  IEventResponseArr,
  IEventTicketRes,
} from "@/services/models/event-response";
import Loader from "@/app/ui/loaders/loader";
import { useRouter } from "next/navigation";

export default function Page() {
  const { USER } = useAuth();
  const [statusFilter, setStatusFilter] = useState("active");
  const [isPublished, setisPublished] = useState(false);
  const [isLoaderModalOpen, setIsLoaderModalOpen] = useState(true);
  const [currentPage, setcurrentPage] = useState(1);
  const [eventList, seteventList] = useState<IEventResponseArr>([]);

  const router = useRouter();
  const filteredEvents = eventList.filter((event) => {
    if (!isPublished) {
      return event.isPublished === isPublished;
    } else {
      return event.status === statusFilter;
    }
  });

  const EmptyEventState = () => {
    return (
      <div className="md:mt-20 flex flex-col justify-center">
        <EmptyState title="No records yet!" />
        <div className="mt-2 flex justify-center">
          <button
            className="bg-partybank-red py-2 px-4 rounded-lg text-white"
            onClick={() => {
              router.push("/dashboard/events/create");
            }}
          >
            Create Event
          </button>
        </div>
      </div>
    );
  };

  const fetchEvents = () => {
    setIsLoaderModalOpen(true);
    return getOrgEvents({
      organizerId: USER.id,
      page: currentPage,
      size: 10,
    }).subscribe({
      next: (res) => {
        if (res) {
          const transformed: IEventResponseArr = res.map(
            (obj: IEventResponse) => {
              return {
                id: obj.id,
                series_id: obj.series_id,
                series_name: obj.series_name ?? "---",
                message: obj.message,
                event_name: obj.event_name ?? "---",
                location: {
                  lng: obj.location.lng,
                  lat: obj.location.lat,
                  address: obj.location.address,
                  city: obj.location.city,
                  state: obj.location.state,
                  country: obj.location.country,
                },
                date: obj.date,
                time: obj.time,
                contact_information: obj.contact_information,
                description: obj.description,
                status: obj.status,
                event_theme: obj.event_theme ?? "---",
                venue: obj.venue ?? "---",
                image_url: obj.image_url ?? "---",
                event_reference: obj.event_reference ?? "---",
                created_by: obj.created_by ?? "---",
                tickets: obj.tickets.map((tic: IEventTicketRes) => {
                  return {
                    ticket_type: tic.ticket_type ?? "---",
                    name: tic.name ?? "---",
                    capacity: tic.capacity ?? 0,
                    stock: tic.stock ?? "---",
                    price: tic.price ?? 0,
                    purchase_limit: tic.purchase_limit ?? 0,
                    ticket_reference: tic.ticket_reference ?? "---",
                    colour: tic.colour ?? "---",
                    ticket_sale_end_date: tic.ticket_sale_end_date ?? "---",
                    ticket_sales_end_time: tic.ticket_sales_end_time ?? "---",
                    ticket_sale_start_date: tic.ticket_sale_start_date ?? "---",
                    ticket_sale_start_time: tic.ticket_sale_start_time ?? "---",
                    ticket_perks: tic.ticket_perks ?? [],
                  };
                }),
                publication_state: obj.publication_state,
                isPublished:
                  obj.publication_state === "PUBLISHED" ? true : false,
              };
            }
          );
          seteventList(transformed);
          // console.log("events==>", res);
        } else {
          toast.info(res.error);
          setIsLoaderModalOpen(false);
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
  };

  useEffect(() => {
    const subscription: Subscription = fetchEvents();
    return () => {
      subscription.unsubscribe(); // Cleanup the subscription
    };
  }, []);

  return (
    <div>
      <div className="flex flex-col border-0 md:border-x-[20px] border-[var(--pb-c-soft-grey)]">
        <div className="sticky top-0 z-10 w-full">
          <div className="inline-block md:hidden bg-[var(--pb-c-soft-grey)] w-full px-6 py-3">
            <h3 className="font-[700] text-[25px]">Events</h3>
          </div>

          <div className="py-3 px-6 border-0 border-b-[3px] border-[var(--pb-c-soft-grey)] flex justify-between items-center overflow-hidden">
            <p className="text-[23px] md:text-[30px] md:font-[700] line-clamp-1">
              Events Overview
            </p>

            <div className="flex gap-0 md:gap-2 bg-[#F4F5F6] p-[2px] md:p-2">
              <button
                className={`px-4 h-6 md:h-8 rounded-md text-[13px] md:text-[16px] ${
                  !isPublished
                    ? "bg-[var(--pb-c-red)] text-white font-[700] border-2 border-black"
                    : " border border-[var(--pb-c-soft-grey)] bg-[#DDE0E3]"
                }`}
                onClick={() => setisPublished(false)}
              >
                Pending Events
              </button>

              <button
                className={`px-4 h-6 md:h-8 rounded-md text-[13px] md:text-[16px] ${
                  isPublished
                    ? "bg-[var(--pb-c-red)] text-white font-[700] border-2 border-black"
                    : "border border-[var(--pb-c-soft-grey)] bg-[#DDE0E3]"
                }`}
                onClick={() => setisPublished(true)}
              >
                Published
              </button>
            </div>
          </div>
        </div>

        {isPublished && (
          <div className="w-full px-4 mt-4">
            <div className="flex gap-0 md:gap-2 p-[2px] md:p-2">
              <button
                className={`px-4 h-6 md:h-8 rounded-md text-[13px] md:text-[16px] ${
                  statusFilter === "active"
                    ? "bg-[var(--pb-c-red)] text-white font-[700] border-2 border-black"
                    : "border border-[var(--pb-c-soft-grey)] bg-[#DDE0E3]"
                }`}
                onClick={() => setStatusFilter("active")}
              >
                Active
              </button>
              <button
                className={`px-4 h-6 md:h-8 rounded-md text-[13px] md:text-[16px] ${
                  statusFilter === "upcoming"
                    ? "bg-[var(--pb-c-red)] text-white font-[700] border-2 border-black"
                    : "border border-[var(--pb-c-soft-grey)] bg-[#DDE0E3]"
                }`}
                onClick={() => setStatusFilter("upcoming")}
              >
                Upcoming
              </button>
              <button
                className={`px-4 h-6 md:h-8 rounded-md text-[13px] md:text-[16px] ${
                  statusFilter === "past"
                    ? "bg-[var(--pb-c-red)] text-white font-[700] border-2 border-black"
                    : " border border-[var(--pb-c-soft-grey)] bg-[#DDE0E3]"
                }`}
                onClick={() => setStatusFilter("past")}
              >
                Past
              </button>
            </div>
          </div>
        )}

        <div className="flex-grow overflow-y-auto p-6 lg:p-8">
          {eventList.length ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center">
              <div>
                <AddMore
                  href="events/create"
                  mainText="New Event"
                  subText="Create events to keep your events put together"
                />
              </div>
              {eventList.map((event) => (
                <div key={event.id}>
                  <Card event={event} />
                </div>
              ))}
            </div>
          ) : (
            <></>
          )}

          {!eventList.length ? <EmptyEventState /> : <></>}
        </div>
      </div>

      <Loader isOpen={isLoaderModalOpen} message="fetching events" />
    </div>
  );
}
