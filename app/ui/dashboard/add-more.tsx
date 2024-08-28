import { PlusIcon } from "@heroicons/react/24/outline"

export default function AddMore () {
    return (
        <div className="cursor-pointer border rounded-[10px] h-[320px] p-6 flex flex-col items-center justify-center text-center">
            <div className="h-10 w-10 flex justify-center bg-[#F3F5F5] rounded-[10px] mb-10">
                <PlusIcon className="w-5" />
            </div>
            <h3 className="font-[700] text-[22px]">Add More Event</h3>
            <p className="text-[14px] leading-[17px]">Add more events to keep your series put together</p>
        </div>
    )
}