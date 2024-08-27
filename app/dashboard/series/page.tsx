import { series } from "@/app/lib/placeholder-data";
import EmptyState from "@/app/ui/dashboard/empty-state"
import Card from "@/app/ui/series/card";

export default async function Page() {
    const seriesOfEvent = series;

    return (
        <div className="">
            <div className="inline-block md:hidden bg-[var(--pb-c-soft-grey)] w-full px-6 py-3">
                <h3 className="font-[700] text-[25px]">Series</h3>
            </div>

            <div className="py-3 px-6 border-0 border-b-[3px] border-[var(--pb-c-soft-grey)]">
                <p className="text-[23px] md:text-[30px] md:font-[700]">My Series</p>
            </div>

            <div className="p-6 lg:p-8 border">
                {series.length > 0 ? (
                    <div className="flex flex-wrap gap-6">
                        {seriesOfEvent.map((serie) => (
                            <div key={serie.id} className="">
                                <Card imageUrl={serie.image_url} name={serie.name} description={serie.description}/>
                            </div>
                        ))}
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

