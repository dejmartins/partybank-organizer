import { BackButton } from "@/app/ui/series/buttons";

export default function Page() {
    return (
        <div className="flex flex-col border-0 md:border-x-[20px] border-[var(--pb-c-soft-grey)]">
            <div className="sticky top-0 z-10 w-full">
                <div className="inline-block md:hidden bg-[var(--pb-c-soft-grey)] w-full px-6 py-3">
                    <h3 className="font-[700] text-[25px]">Series</h3>
                </div>

                <div className="flex items-center py-3 px-6 gap-5 border-0 border-b-[3px] border-[var(--pb-c-soft-grey)]">
                    <BackButton href="/dashboard/series" />
                    <p className="text-[23px] md:text-[30px] md:font-[700]">Edit Series</p>
                </div>
            </div>
        </div>
    )
}