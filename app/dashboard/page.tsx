"use client";
import CardWrapper from "@/app/ui/dashboard/cards";
import MyEvents from "@/app/ui/dashboard/my-events";
import Analytics from "@/app/ui/dashboard/analytics";
import useAuth from "@/shared/hooks/useAuth";
import { useEffect, useState } from "react";
import EmptyState from "../ui/dashboard/empty-state";
import Loader from "../ui/loaders/loader";
import {
  IEventResponse,
  IEventResponseArr,
  IEventTicketRes,
} from "@/services/models/event-response";
import { getOrgEvents } from "@/services/event-services/event-service";
import { toast } from "react-toastify";
import { getOrgStats } from "@/services/dashboard-services/dashboard-service";
import { IDashboardStat } from "@/services/models/stats-model";

export default function Page() {
  const { USER } = useAuth();
  const [isClient, setisClient] = useState(false);
  const [isLoaderModalOpen, setIsLoaderModalOpen] = useState(true);
  const [actionText, setactionText] = useState("");
  const [eventList, seteventList] = useState<IEventResponseArr>([]);
  const [dashboardStat, setdashboardStat] = useState<IDashboardStat>();

  const fetchEvents = () => {
    setactionText("Fetching events");
    setIsLoaderModalOpen(true);
    return getOrgEvents({
      organizerId: USER.id,
      page: 1,
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
          const notPublishedArr = transformed.filter(
            (evnt) => evnt.isPublished === false
          );
          seteventList(transformed);
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
  };

  const fetchOrgStats = () => {
    setIsLoaderModalOpen(true);
    setactionText("Loading stats...");
    return getOrgStats(USER.id).subscribe({
      next: (res) => {
        if (res) {
          const response: IDashboardStat = res.data;
          setdashboardStat(response);
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
        fetchEvents();
      },
    });
  };

  useEffect(() => {
    // const eventSubscription = fetchEvents();
    const statSubscription = fetchOrgStats();
    setisClient(true);
    return () => {
      // eventSubscription.unsubscribe();
      statSubscription.unsubscribe();
    };
  }, []);

  return (
    <>
      {isClient && (
        <main className="flex flex-col flex-grow h-full border-0 border-x-[20px] border-[var(--pb-c-soft-grey)]">
          <div className="inline-block md:hidden bg-[var(--pb-c-soft-grey)] w-full px-6 py-3">
            <h3 className="font-[700] text-[25px]">Dashboard</h3>
          </div>

          <div className="py-3 px-6 border-0 border-b-[3px] border-[var(--pb-c-soft-grey)]">
            <p className="text-[23px] md:text-[30px]">
              Welcome aboard,{" "}
              <span className="font-[700]">
                {USER?.username && USER?.username + "!"}
              </span>
            </p>
          </div>

          {!isLoaderModalOpen && (
            <div>
              {eventList.length === 0 ? (
                <div className="md:mt-20 p-6 lg:p-8">
                  <EmptyState title="No records yet!" />
                </div>
              ) : (
                <div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4">
                      Account Overview
                    </h3>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                      <CardWrapper {...dashboardStat!} />
                    </div>
                  </div>

                  <div className="border-0 border-t-2 border-b-2 border-[var(--pb-c-soft-grey)] p-6">
                    <MyEvents eventList={eventList} />
                  </div>

                  <div className="p-6">
                    <Analytics />
                  </div>
                </div>
              )}
            </div>
          )}

          {isLoaderModalOpen && (
            <Loader isOpen={isLoaderModalOpen} message={actionText} />
          )}
        </main>
      )}
    </>
  );
}
