import { BanknotesIcon, CalendarIcon, TicketIcon, UserIcon } from "@heroicons/react/24/outline";

const iconMap = {
    attendees: UserIcon,
    purchase: TicketIcon,
    events: CalendarIcon,
    sales: BanknotesIcon
}

export default async function CardWrapper() {
    return (
        <>
            <Card title="Total Attendees" value={"100,102"} type="attendees" percentageIncrease={23.2} />
            <Card title="Total Ticket Purchase" value={300} type="purchase" percentageIncrease={23.2} />
            <Card title="Total Events" value={56} type="events" percentageIncrease={23.2} />
            <Card title="Total Sales" value={"1M+"} type="sales" percentageIncrease={23.2} />
        </>
    )
}

export function Card({ title, value, type, percentageIncrease }: {
    title: string,
    value: number | string,
    type: 'attendees' | 'purchase' | 'events' | 'sales',
    percentageIncrease: number | string
}) {

    const Icon = iconMap[type];

    return (
        <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
          <div className="flex p-4">
            {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
            <h3 className="ml-2 text-sm font-medium">{title}</h3>
          </div>
          <p
            className={`truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}>
            {value}
          </p>
        </div>
    );
}