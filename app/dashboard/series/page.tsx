import { series } from "@/app/lib/placeholder-data";
import AddMore from "@/app/ui/dashboard/add-more";
import EmptyState from "@/app/ui/dashboard/empty-state"
import Card from "@/app/ui/series/card";

export default async function Page() {
    const seriesOfEvent = series;

    return (
        <div className="flex flex-col h-screen border-0 md:border-x-[20px] border-[var(--pb-c-soft-grey)]">
            <div className="sticky top-0 z-10 w-full">
                <div className="inline-block md:hidden bg-[var(--pb-c-soft-grey)] w-full px-6 py-3">
                    <h3 className="font-[700] text-[25px]">Series</h3>
                </div>

                <div className="py-3 px-6 border-0 border-b-[3px] border-[var(--pb-c-soft-grey)]">
                    <p className="text-[23px] md:text-[30px] md:font-[700]">My Series</p>
                </div>
            </div>

            <div className="flex-grow overflow-y-auto p-6 lg:p-8">
                {series.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center">
                        {seriesOfEvent.map((serie) => (
                            <div key={serie.id}>
                                <Card imageUrl={serie.image_url} name={serie.name} description={serie.description} id={serie.id} />
                            </div>
                        ))}
                        <div>
                            <AddMore />
                        </div>
                    </div>
                ) : (
                    <div className="md:mt-20">
                        <EmptyState />
                    </div>
                )}
            </div>
        </div>
    );
}

