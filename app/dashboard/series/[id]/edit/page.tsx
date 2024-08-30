import { BackButton } from "@/app/ui/series/buttons";

export default function Page() {
    const backgroundImageUrl = '/defaultImage.png';

    return (
        <div className="flex flex-col min-h-[calc(100vh-170px)] border-[var(--pb-c-soft-grey)]">
            <div className="sticky top-0 z-10 w-full">
                <div className="inline-block md:hidden bg-[var(--pb-c-soft-grey)] w-full px-6 py-3">
                    <h3 className="font-[700] text-[25px]">Series</h3>
                </div>

                <div className="flex items-center py-3 px-6 gap-7 border-0 border-b-[3px] border-[var(--pb-c-soft-grey)]">
                    <BackButton href="/dashboard/series" />
                    <p className="text-[23px] md:text-[30px] md:font-[700]">Edit Series</p>
                </div>
            </div>

            <div className="flex flex-grow overflow-hidden">
                <div className="p-10 flex-grow flex flex-col">
                    <h3>Preview</h3>
                    <div className="border flex flex-col p-4 h-[320px] w-[320px] rounded-[10px]">
                        <div className="h-[200px] border bg-cover bg-center rounded-[10px] overflow-hidden"
                            style={{
                                backgroundImage: `url("${backgroundImageUrl}")`,
                            }}
                        >
                        </div>
                        <div className="flex items-center justify-between pt-3 relative">
                            <div className="mr-12">
                                <h4 className="text-xl font-bold line-clamp-1">Michael Event</h4>
                                <p className="text-[15px] line-clamp-2">My Description</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-0 border-l flex-grow overflow-y-auto p-4 max-h-[calc(100vh-170px)]">
                    <h2>Add Cover</h2>
                    <p>Upload a high-quality image to represent your collection at the top of the page and in ad campaigns. Images should be at least 1272px wide, and will be cropped at a 3:1 aspect ratio.</p>
                    <p>Image Div Here</p>

                    <div className="border border-blue-500 mt-4">
                        <h2>Series Details</h2>
                        <div>
                            <input value={'Michael Event'} className="border w-full p-2 my-2" />
                            <input value={'Add Description'} className="border w-full p-2 my-2" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
