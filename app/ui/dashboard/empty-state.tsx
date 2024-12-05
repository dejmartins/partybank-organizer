import Image from "next/image";

export default function EmptyState({ title }: { title: string }) {
    return (
        <div className="w-full flex flex-col items-center mt-12 md:mt-0">
            <div className="bg-[#F8F9F9] rounded-[50px] w-[200px] h-[200px] flex items-center justify-center mb-3">
                <Image src='/empty-state.png' width={130} height={130} alt="Blank Phone Screens" />
            </div>
            <p className="font-[700]">{title}</p>
            <p className="text-[12px] md:text-[16px]">But we got you, when you start creating events</p>
        </div>
    )
}