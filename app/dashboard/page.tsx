import Image from "next/image"

export default async function Page() {
    return (
        <div className="">
            <div className="inline-block md:hidden bg-[var(--pb-c-soft-grey)] w-full px-6 py-3">
                <h3 className="font-[700] text-[22px]">Dashboard</h3>
            </div>

            <div className="py-3 px-6 border-0 border-b-[3px] border-[var(--pb-c-soft-grey)]">
                <p className="text-[23px] md:text-[30px]">Welcome aboard, <span className="font-[700]">Michael!</span></p>
            </div>

            <div className="md:mt-20 p-6 lg:p-8">
                <div className="w-full flex flex-col items-center mt-12 md:mt-0">
                    <div className="bg-[#F8F9F9] rounded-[50px] w-[200px] h-[200px] flex items-center justify-center mb-3">
                        <Image src='/empty-state.png' width={130} height={130} alt="Blank Phone Screens" />
                    </div>
                    <p className="font-[700]">No records yet!</p>
                    <p className="text-[12px] md:text-[16px]">But we got you, when you start creating events</p>
                </div>
            </div>
        </div>
    )
}