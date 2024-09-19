import { Event } from "@/app/lib/definitions";

export default function EventAnalytics({ event }: { event: Event }) {
    return (
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-4">Event Analytics</h3>
        <p>Total Ticket Sales: N{event.analytics.totalTicketSales}</p>
        <p>Total Tickets Sold: {event.analytics.totalTicketsSold}</p>
        <p>Total Validated Tickets: {event.analytics.totalValidatedTickets}</p>
        <p>Total Cancelled Tickets: {event.analytics.totalCancelledTickets}</p>
  
        <h4 className="mt-4 text-xl font-bold">Attendees</h4>
        <ul>
          {event.analytics.attendees.map((attendee) => (
            <li key={attendee.ticketID} className="border-b py-2">
              <p>Email: {attendee.email}</p>
              <p>Ticket: {attendee.ticketName} (ID: {attendee.ticketID})</p>
              <p>Purchased At: {new Date(attendee.purchasedAt).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  