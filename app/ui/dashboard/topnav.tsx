import Image from "next/image"
import { BellAlertIcon, BellIcon, ChevronDownIcon, MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/react/24/solid'

export default function TopNav() {
    return (
        <div className="flex items-center justify-between bg-[var(--pb-c-white)] h-[64px] w-full px-[24px] py-[16px]">
            <div>
                <Image
                    src="/logo.svg"
                    width={65.95}
                    height={32.36}
                    alt="Partybank Logo"
                />
            </div>

            <div className="flex gap-4">
                <MagnifyingGlassIcon className="w-5 stroke-black stroke-1" />
                <BellIcon className="w-5 text-white stroke-black stroke-2" />
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                        <div className="relative w-8 h-8 rounded-full overflow-hidden">
                            <div className="absolute inset-0  bg-gradient-to-b from-[#950ECD] to-[#5CF4D8]"></div>
                            <div className="absolute inset-[4px] bg-white rounded-full flex items-center justify-center">
                                <UserCircleIcon className="w-7 stroke-black stroke-1" />
                            </div>
                        </div>


                        <p>Michael O.</p>
                    </div>
                    <ChevronDownIcon className="w-5 stroke-black stroke-1" />
                </div>
            </div>
        </div>
    )
}