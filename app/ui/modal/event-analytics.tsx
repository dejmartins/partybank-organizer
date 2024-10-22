import { formatNumber } from "@/app/lib/actions";
import { Event } from "@/app/lib/definitions";
import { FaRegCalendar } from "react-icons/fa";
import moment from "moment";
import TagIcon from "@/shared/components/icons/tag-icon";
import { GrValidate } from "react-icons/gr";
import { FaDotCircle } from "react-icons/fa";
import ValidDot from "@/shared/components/icons/valid-dot";
import InvalidDot from "@/shared/components/icons/invalid-dot";
import { FiSearch } from "react-icons/fi";
import { BiSolidUserCircle } from "react-icons/bi";
import { IEventResponse } from "@/services/models/event-response";
import EmptyState from "../dashboard/empty-state";
import { useEffect, useState } from "react";
import Loader from "../loaders/loader";
import { toast } from "react-toastify";
import { getEventAnalytics } from "@/services/event-services/event-service";
import {
  IEventAnalytics,
  IEventAttendeesAnaly,
  IPagination,
} from "@/services/models/event-analytics-model";
import useDebounce from "@/shared/hooks/useDebounce";

export default function EventAnalytics({
  event,
  toggleAnalyticsView,
}: {
  event: IEventResponse;
  toggleAnalyticsView: () => void;
}) {
  const [mergedParams, setmergedParams] = useState({
    q: "",
  });
  const debouncedParams = useDebounce(mergedParams, 900);
  const [isLoaderModalOpen, setIsLoaderModalOpen] = useState(false);
  const [analyticsData, setanalyticsData] = useState<IEventAnalytics>();
  const [actionText, setactionText] = useState("");
  const [paginationObj, setpaginationObj] = useState<IPagination>();

  const fetchEventAnalytics = (page?: number) => {
    setIsLoaderModalOpen(true);
    setactionText("Fetching event data");
    return getEventAnalytics({
      id: event.event_reference,
      page: page ?? 0,
      size: 10,
      ...mergedParams,
    }).subscribe({
      next: (res) => {
        if (res) {
          const response: IEventAnalytics = res.data;
          const { hasMore, currentPage, totalPages, totalItems } =
            response.pageDto;
          const pagination = {
            hasMore,
            currentPage,
            totalPages,
            totalItems,
          };
          setpaginationObj(pagination);
          console.log("===>", response);
          setanalyticsData(response);
          setIsLoaderModalOpen(false);
          setactionText("");
          // onClose();
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
        setactionText("");
      },
    });
  };

  useEffect(() => {
    const Subscription = fetchEventAnalytics();
    return () => {
      Subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    const Subscription = fetchEventAnalytics(paginationObj?.currentPage);
    return () => {
      Subscription.unsubscribe();
    };
  }, [debouncedParams]);

  return (
    <>
      <div className="px-6 py-3 max-h-[50rem]">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 w-1/3">
            <div
              className="min-w-[68px] min-h-[68px] border bg-cover bg-center rounded-[10px] overflow-hidden"
              style={{
                backgroundImage: `url("${
                  event.image_url || "/defaultImage.png"
                }")`,
              }}
            ></div>
            <div>
              <p className="inline-block rounded-[4px] font-[400] px-2 py-[2px] text-sm bg-[#F7F6F7]">
                {event.series_name}
              </p>
              <h3 className="text-2xl font-bold">{event.event_name}</h3>
              <p className="text-[11px]">{event.date}</p>
            </div>
          </div>

          <div className="rounded-[20px] p-3 flex items-center gap-4 w-[60%]">
            <div className="flex w-1/3 items-start gap-x-2">
              <div className="mt-1">
                <TagIcon />
              </div>
              <div className="flex flex-col ">
                <p>Sales</p>
                <p className="font-[700] text-[24px]">
                  <span className="text-[12px] mr-[2px]">NGN</span>
                  {formatNumber(analyticsData?.totalTicketSales ?? 0)}
                </p>
              </div>
            </div>

            <div className="flex w-1/3 items-start gap-x-2">
              <div className="mt-1">
                <FaRegCalendar size={20} />
              </div>
              <div className="flex flex-col">
                <p>Tickets</p>
                <p className="font-[700] text-[24px]">
                  {formatNumber(analyticsData?.totalTicketSold ?? 0)}
                </p>
              </div>
            </div>

            <div className="flex w-1/3 items-start gap-x-2">
              <div className="mt-1">
                <GrValidate size={20} />
              </div>
              <div className="flex flex-col w-1/3">
                <p>Scanned</p>
                <div className="flex items-center gap-x-2">
                  <p className="font-[700] text-[24px]">
                    {formatNumber(analyticsData?.totalTicketValidated ?? 0)}
                  </p>
                  <div>
                    <ValidDot />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-1/3 items-start gap-x-2">
              <div className="mt-1">
                <GrValidate size={20} />
              </div>
              <div className="flex flex-col w-1/3">
                <p>Unscanned</p>

                <div className="flex items-center gap-x-2">
                  <p className="font-[700] text-[24px]">
                    {formatNumber(analyticsData?.totalTicketNotValidated ?? 0)}
                  </p>
                  <div>
                    <InvalidDot />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* -----------------------≠≠ */}
        <hr className="mt-4" />
        <div className="w-full py-2 my-4 flex items-center justify-end">
          <div className="w-1/3 flex items-center border border-partybank-border rounded-lg h-[44px] pr-2">
            <input
              placeholder="Enter search words here"
              className="w-full h-[40px] outline-none px-2 placeholder:text-partybank-text-black"
              value={mergedParams.q}
              onChange={(event) =>
                setmergedParams((prev: any) => {
                  return { ...prev, q: event.target.value };
                })
              }
            />
            <FiSearch size={20} />
          </div>
        </div>
        {analyticsData?.pageDto.data.length ? (
          <>
            <div className=" overflow-y-auto border rounded-[20px] my-4 max-h-[24rem] py-4">
              <ul>
                {analyticsData?.pageDto.data.map(
                  (attendee: IEventAttendeesAnaly, index: number) => (
                    <div key={index} className="border-b px-3 py-2">
                      <li className="flex justify-between items-center gap-2">
                        <div className="flex items-center gap-x-3">
                          <div className="w-10 h-10 rounded-full flex items-center justify-center">
                            <BiSolidUserCircle size={40} />
                          </div>
                          <div>
                            <p className="font-[700] text-[15px]">
                              {attendee.fullName}
                            </p>
                            <p className="font-[300] text-[15px]">
                              {attendee.email}
                            </p>
                          </div>
                        </div>
                        <div>
                          <p className="font-[400] text-[12px] text-right">
                            {attendee.date}
                          </p>
                          <p className="font-[700] text-[15px] text-right">
                            {attendee.ticketType} - {attendee.ticketNumber}
                          </p>
                        </div>
                      </li>
                    </div>
                  )
                )}
              </ul>
              <div className="my-4 flex items-center justify-end"></div>
            </div>

            <div className="flex items-center justify-end">
              <div className="flex items-center gap-x-4 pr-4 mt-2">
                <button
                  disabled={paginationObj!?.currentPage > 0 ? false : true}
                  className="font-bold cursor-pointer text-sm"
                  style={{
                    color: paginationObj!?.currentPage > 0 ? "#1a1a1a" : "#ddd",
                  }}
                  onClick={() => {
                    if (paginationObj!.currentPage > 0) {
                      fetchEventAnalytics(paginationObj!.currentPage - 1);
                    }
                  }}
                >
                  Prev
                </button>
                <button
                  disabled={paginationObj?.hasMore ? false : true}
                  className="font-bold cursor-pointer text-sm"
                  style={{
                    color: paginationObj?.hasMore ? "#1a1a1a" : "#ddd",
                  }}
                  onClick={() => {
                    if (paginationObj?.hasMore) {
                      fetchEventAnalytics(paginationObj.currentPage + 1);
                    }
                  }}
                >
                  Next
                </button>
              </div>
            </div>
          </>
        ) : (
          <EmptyState title="No records yet!" />
        )}
      </div>
      <Loader isOpen={isLoaderModalOpen} message={actionText} />
    </>
  );
}
