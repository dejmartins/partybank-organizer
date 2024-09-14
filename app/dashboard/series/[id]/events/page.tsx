'use client'

import { series } from "@/app/lib/placeholder-data";
import EmptyState from "@/app/ui/dashboard/empty-state";
import Card from "@/app/ui/events/card";
import AddEventModal from "@/app/ui/modal/add-event";
import { PlusIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

export default function Page() {
    const pathName = usePathname();
    const serieId = pathName.split('/')[3];

    const selectedSeries = series.find((serie) => serie.id === serieId);

    const events = selectedSeries ? selectedSeries.events : [];

    return (
        <main className="flex flex-col flex-grow h-full border-0 border-x-[20px] border-[var(--pb-c-soft-grey)]">
            <div className="py-3 px-6 border-0 border-b-[3px] border-[var(--pb-c-soft-grey)]">
                <p className="text-[23px] md:text-[30px] md:font-[700]">{selectedSeries?.name}</p>
            </div>

            <div className="flex-grow overflow-y-auto p-6 lg:p-8">
                {events.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center">
                        {events.map((event) => (
                            <div key={event.id}>
                                <Card
                                    imageUrl={event.image}
                                    name={event.name}
                                    series={selectedSeries?.name}
                                    location={event.location}
                                    date={event.date}
                                    startTime={event.startTime}
                                    venue={event.venue}
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="md:mt-20 flex flex-col items-center">
                        <EmptyState title="No events added yet!" />

                        <AddEventModal />
                        
                        <button className="flex items-center justify-center gap-2 bg-[#E91B410D] text-[var(--pb-c-red)] font-[700] mt-7 rounded-[4px] w-[186px] py-2 cursor-pointer">
                            <PlusIcon className="w-5 stroke-[2px]" />
                            Add Event
                        </button>
                    </div>
                )}
            </div>
        </main>
    )
}
