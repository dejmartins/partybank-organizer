import { BackButton } from "@/app/ui/series/buttons"
import { CreateSeries } from "@/app/ui/series/buttons"

export default async function Page() {
    return (
        <div className="flex flex-col min-h-[calc(100vh-170px)] border-[var(--pb-c-soft-grey)]">
            <div className="sticky top-0 z-10 w-full">
                <div className="inline-block md:hidden bg-[var(--pb-c-soft-grey)] w-full px-6 py-3">
                    <h3 className="font-[700] text-[25px]">Series</h3>
                </div>

                <div className="flex items-center py-3 px-6 justify-between border-0 border-b-[3px] border-[var(--pb-c-soft-grey)]">
                    <div className='flex items-center gap-7'>
                        <BackButton href="/dashboard/series" />
                        <p className="text-[23px] md:text-[30px] md:font-[700]">Create Event</p>
                    </div>
                    <div className='hidden md:block'>
                        <CreateSeries className='w-[210px] h-[40px]' />
                    </div>
                </div>
            </div>
        </div>
    )
}