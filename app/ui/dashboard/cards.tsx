"use client";
import {
  ArrowTrendingUpIcon,
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

export default function CardWrapper() {
  return (
    <>
      <Card
        title="Total Attendees"
        value={"100,102"}
        type="attendees"
        percentageIncrease={23.2}
      />
      <Card
        title="Total Ticket Purchase"
        value={300}
        type="purchase"
        percentageIncrease={23.2}
      />
      <Card
        title="Total Events"
        value={56}
        type="events"
        percentageIncrease={23.2}
      />
      <Card
        title="Total Sales"
        value={"1M+"}
        type="sales"
        percentageIncrease={23.2}
      />
    </>
  );
}

export function Card({
  title,
  value,
  type,
  percentageIncrease,
}: {
  title: string;
  value: number | string;
  type: "attendees" | "purchase" | "events" | "sales";
  percentageIncrease: number | string;
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
          <div className="flex items-center gap-2 px-3 rounded-md bg-[#F3FFF8] text-[#13C65C]">
            <ArrowTrendingUpIcon className="w-6" />
            <p>{percentageIncrease}%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
