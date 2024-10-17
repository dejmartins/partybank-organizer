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

export default function EventAnalytics({
  event,
  toggleAnalyticsView,
}: {
  event: Event;
  toggleAnalyticsView: () => void;
}) {
  return (
    <div className="px-6 py-3 h-[50rem]">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 w-1/3">
          <div
            className="min-w-[68px] min-h-[68px] border bg-cover bg-center rounded-[10px] overflow-hidden"
            style={{
              backgroundImage: `url("${event.image || "/defaultImage.png"}")`,
            }}
          ></div>
          <div>
            <p className="inline-block rounded-[4px] font-[400] px-2 py-[2px] text-sm bg-[#F7F6F7]">
              {event.series}
            </p>
            <h3 className="text-2xl font-bold">{event.name}</h3>
            <p className="text-[11px]">
              {moment(event.createdAt).format("MMM Do, YYYY - LTS")}
            </p>
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
                {formatNumber(event.analytics.totalTicketSales)}
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
                {formatNumber(event.analytics.totalTicketsSold)}
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
                  {formatNumber(event.analytics.totalValidatedTickets)}+
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
                  {formatNumber(event.analytics.totalCancelledTickets)}
                </p>
                <div>
                  <InvalidDot />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-4" />
      <div className="w-full py-2 my-4 flex items-center justify-end">
        <div className="w-1/3 flex items-center border border-partybank-border rounded-lg h-[44px] pr-2">
          <input
            placeholder="Enter search words here"
            className="w-full h-[40px] outline-none px-2 placeholder:text-partybank-text-black"
          />
          <FiSearch size={20} />
        </div>
      </div>
      <div className=" overflow-y-auto border rounded-[20px] my-4 max-h-[24rem]">
        <ul>
          {event.analytics.attendees.map((attendee) => (
            <div key={attendee.ticketID} className="border-b px-3 py-2">
              <li className="flex justify-between items-center gap-2">
                <div className="flex items-center gap-x-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center">
                    <BiSolidUserCircle size={40} />
                  </div>
                  <div>
                    <p className="font-[700] text-[15px]">Micheal Olamide</p>
                    <p className="font-[300] text-[15px]">{attendee.email}</p>
                  </div>
                </div>
                <div>
                  <p className="font-[400] text-[12px] text-right">
                    {new Date(attendee.purchasedAt).toLocaleString()}
                  </p>
                  <p className="font-[700] text-[15px] text-right">
                    {attendee.ticketName} - {attendee.ticketID}
                  </p>
                </div>
              </li>
            </div>
          ))}
        </ul>
      </div>

      <div className="my-4 flex items-center justify-end">
        <div className="flex items-center gap-x-4 pr-4 mt-2">
          <span className="font-bold cursor-pointer text-sm">Prev</span>
          <span className="font-bold cursor-pointer text-gray-400 text-sm">
            Next
          </span>
        </div>
      </div>
    </div>
  );
}
