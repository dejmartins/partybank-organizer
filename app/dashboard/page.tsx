import EmptyState from "../ui/dashboard/empty-state"

export default async function Page() {
    return (
        <main className="flex flex-col flex-grow h-full border-0 border-x-[20px] border-[var(--pb-c-soft-grey)]">
            <div className="inline-block md:hidden bg-[var(--pb-c-soft-grey)] w-full px-6 py-3">
                <h3 className="font-[700] text-[25px]">Dashboard</h3>
            </div>

            <div className="py-3 px-6 border-0 border-b-[3px] border-[var(--pb-c-soft-grey)]">
                <p className="text-[23px] md:text-[30px]">Welcome aboard, <span className="font-[700]">Michael!</span></p>
            </div>

            <div className="md:mt-20 p-6 lg:p-8">
                <EmptyState />
            </div>
        </main>
    )
}
