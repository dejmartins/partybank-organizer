'use client'

import { events } from "@/app/lib/placeholder-data";
import { useState } from "react";

const getCurrentDate = () => new Date();

export default function MyEvents() {
    const [statusFilter, setStatusFilter] = useState("active");

    const currentDate = getCurrentDate();

    const filterEvents = (filter: string) => {
        setStatusFilter(filter);
    };

    const filteredEvents = events
        .filter(event => 
            (statusFilter === "active" && event.status === "active") || 
            (statusFilter === "upcoming" && new Date(event.date) > currentDate)
        )
        .slice(0, 5);

    return (
        <div>
            <div className="flex justify-between">
                <div className="flex items-center gap-7">
                    <h3>My Events</h3>
                    <div className="flex gap-4 my-4">
                        <button
                            className={`px-4 h-6 md:h-8 rounded-md text-[13px] md:text-[16px] 
                                ${statusFilter === 'active' 
                                    ? 'bg-[var(--pb-c-red)] text-white font-[700] border-2 border-black' 
                                    : 'bg-white border border-[var(--pb-c-soft-grey)] bg-[#DDE0E3]'}`}
                            onClick={() => filterEvents('active')}
                        >
                            Active
                        </button>
                        <button
                            className={`px-4 h-6 md:h-8 rounded-md text-[13px] md:text-[16px] 
                                ${statusFilter === 'upcoming' 
                                    ? 'bg-[var(--pb-c-red)] text-white font-[700] border-2 border-black' 
                                    : 'bg-white border border-[var(--pb-c-soft-grey)] bg-[#DDE0E3]'}`}
                            onClick={() => filterEvents('upcoming')}
                        >
                            Upcoming
                        </button>
                    </div>
                </div>

                <p>See all Events</p>
            </div>
            
            {filteredEvents.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {filteredEvents.map((event, index) => (
                        <div key={index} className="border p-4 rounded-md shadow-md">
                            <h4 className="font-bold mb-2">{event.name}</h4>
                            <p>{event.date}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No {statusFilter} events available.</p>
            )}
        </div>
    );
}
