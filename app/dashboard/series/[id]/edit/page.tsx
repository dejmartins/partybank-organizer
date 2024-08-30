import { BackButton } from "@/app/ui/series/buttons";

export default function Page() {
    return (
        <div className="flex flex-col border-[var(--pb-c-soft-grey)]">
            <div className="sticky top-0 z-10 w-full">
                <div className="inline-block md:hidden bg-[var(--pb-c-soft-grey)] w-full px-6 py-3">
                    <h3 className="font-[700] text-[25px]">Series</h3>
                </div>

                <div className="flex items-center py-3 px-6 gap-5 border-0 border-b-[3px] border-[var(--pb-c-soft-grey)]">
                    <BackButton href="/dashboard/series" />
                    <p className="text-[23px] md:text-[30px] md:font-[700]">Edit Series</p>
                </div>
            </div>

            <div className="flex border border-black">
                <div className="border border-red-400">
                    <h2>Preview</h2>
                    <p>Changes you make will appear here</p>
                    <p>Event Card Here</p>
                </div>

                <div>
                    <div className="border border-yellow-500">
                        <h2>Add Cover</h2>
                        <p>Upload a high-quality image to represent your collection at the top of the page and in ad campaigns. Images should be at least 1272px wide, and will be cropped at at a 3:1 aspect ratio.</p>
                        <p>Image Div Here</p>
                    </div>

                    <div className="border border-blue-500">
                        <h2>Series Details</h2>
                        <div>
                            <input value={'Michael Event'} />
                            <input value={'Add Decription'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}