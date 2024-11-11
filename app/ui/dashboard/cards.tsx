"use client";
import { formatNumber } from "@/app/lib/actions";
import { IDashboardStat } from "@/services/models/stats-model";
import {
  BanknotesIcon,
  CalendarIcon,
  TicketIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const iconMap = {
  attendees: UserIcon,
  purchase: TicketIcon,
  events: CalendarIcon,
  sales: BanknotesIcon,
};

export default function CardWrapper({ ...statsObj }: IDashboardStat) {
  return (
    <>
      <Card
        title="Total Buyers"
        value={statsObj.totalAttendees}
        type="attendees"
      />
      <Card
        title="Total Ticket Purchase"
        value={statsObj.totalTicketsPurchase}
        type="purchase"
      />
      <Card
        title="Total Events"
        value={statsObj.totalEvents}
        type="events"
      />
      <Card
        title="Total Sales"
        value={formatNumber(statsObj.totalSales)}
        type="sales"
      />
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: "attendees" | "purchase" | "events" | "sales";
}) {
  const Icon = iconMap[type];

  return (
    <div className="flex border gap-4 rounded-[20px] p-5 shadow-sm">
      <div className="flex items-center justify-center h-10 w-12 rounded-[8px] bg-[#F4F5F6]">
        {Icon ? <Icon className="w-7" /> : null}
      </div>
      <div className="w-full">
        <div className="flex">
          <h3 className="text-[20px] font-medium font-[400]">{title}</h3>
        </div>
        <div className="flex items-center justify-between">
          <p
            className={`truncate rounded-xl bg-white text-center text-[32px] font-[700]`}
          >
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}
