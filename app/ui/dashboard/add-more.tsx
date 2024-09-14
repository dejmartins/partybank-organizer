import { PlusIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

export default function AddMore ({ mainText, subText, href }: { mainText: string, subText: string, href: string }) {
    return (
        <Link key={'Create'} href={href}>
            <div className="cursor-pointer border rounded-[10px] h-[320px] p-6 flex flex-col items-center justify-center text-center">
                <div className="h-10 w-10 flex justify-center bg-[#F3F5F5] rounded-[10px] mb-10">
                    <PlusIcon className="w-5" />
                </div>
                <h3 className="font-[700] text-[22px]">{mainText}</h3>
                <p className="text-[14px] leading-[17px]">{subText}</p>
            </div>
        </Link>
    )
}