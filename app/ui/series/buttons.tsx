import { ArrowLongLeftIcon } from "@heroicons/react/24/outline";
import { PencilIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export function EditSeries({ id }: { id: string }) {
    return (
        <Link 
            className="z-50 border cursor-pointer absolute right-0 top-3 bg-[#F3F5F5] px-[10px] py-[5px] rounded-[15px]"
            href={`/dashboard/series/${id}/edit`}
        >
            <PencilIcon className="w-[20px] h-[30px]" />
        </Link>
    )
}

export function BackButton({ href }: { href: string }) {
    return (
        <Link
            className="border cursor-pointer bg-[#F3F5F5] px-[10px] py-[5px] rounded-[15px]"
            href={href}
        >
            <ArrowLongLeftIcon className="w-[20px] h-[30px] stroke stroke-[3px]"/>
        </Link>
    )
}