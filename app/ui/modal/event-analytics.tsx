import { formatNumber } from "@/app/lib/actions";
import { Event } from "@/app/lib/definitions";
import { ChevronDoubleLeftIcon } from "@heroicons/react/24/outline";
import moment from "moment";

export default function EventAnalytics({ event, toggleAnalyticsView }: { event: Event, toggleAnalyticsView: () => void }) {
  return (
    <div className="px-6 py-3">
        <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
                <div
                    className="min-w-[60px] min-h-[60px] border bg-cover bg-center rounded-[10px] overflow-hidden"
                    style={{
                        backgroundImage: `url("${event.image || '/defaultImage.png'}")`,
                    }}
                ></div>
                <div>
                    <p className="inline-block rounded-[4px] font-[400] px-2 py-[2px] text-sm bg-[#F7F6F7]">{event.series}</p>
                    <h3 className="text-2xl font-bold">{event.name}</h3>
                    <p className="text-[11px]">{moment(event.createdAt).format('MMM Do, YYYY - LTS')}</p>
                </div>
            </div>

            <div className="border rounded-[20px] p-3 flex items-center gap-4">
                <div className="flex flex-col">
                    <p>Sales</p>
                    <p className="font-[700] text-[24px]"><span className="text-[12px] mr-[2px]">NGN</span>{formatNumber(event.analytics.totalTicketSales)}</p>
                </div>
                <div className="flex flex-col">
                    <p>Tickets</p>
                    <p className="font-[700] text-[24px]">{formatNumber(event.analytics.totalTicketsSold)}</p>
                </div>
                <div className="flex flex-col">
                    <p>Validated</p>
                    <p className="font-[700] text-[24px]">{formatNumber(event.analytics.totalValidatedTickets)}</p>
                </div>
                <div className="flex flex-col">
                    <p>Cancelled</p>
                    <p className="font-[700] text-[24px]">{formatNumber(event.analytics.totalCancelledTickets)}</p>
                </div>
            </div>
        </div>
      
        <div className="max-h-[200px] overflow-y-auto border rounded-[20px] my-4">
            <ul>
            {event.analytics.attendees.map((attendee) => (
                <div className="border-b px-3 py-2">
                    <li key={attendee.ticketID} className="flex justify-between items-center gap-2">
                        <p className="font-[300] text-[15px]">{attendee.email}</p>
                        <div>
                            <p className="font-[400] text-[12px] text-right">{new Date(attendee.purchasedAt).toLocaleString()}</p>
                            <p className="font-[700] text-[15px] text-right">{attendee.ticketName} - {attendee.ticketID}</p>
                        </div>
                    </li>
                </div>
            ))}
            </ul>
        </div>

        <div className="my-4">
            <button onClick={toggleAnalyticsView} className="flex items-center text-sm gap-2 rounded-md text-[var(--pb-c-red)] font-[600]">
                <ChevronDoubleLeftIcon className="w-3 stroke-2" />
                Preview Analytics
            </button>
        </div>
    </div>

  );
}
