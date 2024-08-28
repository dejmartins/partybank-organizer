import Image from "next/image"
import { BellIcon, ChevronDownIcon, MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/react/24/solid'

export default function Header() {
    return (
        <div className="flex items-center justify-between fixed top-0 left-0 right-0 bg-[var(--pb-c-white)] h-[64px] w-full px-[24px] py-[16px] z-50 border-0 border-b-4 border-[var(--pb-c-soft-grey)]">
            <div>
                <Image
                    src="/logo.svg"
                    width={65.95}
                    height={32.36}
                    alt="Partybank Logo"
                />
            </div>

            <div className="flex gap-4">
                <MagnifyingGlassIcon className="w-5 stroke-black stroke-1 cursor-pointer" />
                <BellIcon className="w-5 text-white stroke-black stroke-2 cursor-pointer" />
                <div className="flex items-center gap-3 cursor-pointer">
                    <div className="flex items-center gap-2">
                        <div className="relative w-8 h-8 rounded-full overflow-hidden">
                            <div className="absolute inset-0  bg-gradient-to-b from-[#950ECD] to-[#5CF4D8]"></div>
                            <div className="absolute inset-[4px] bg-white rounded-full flex items-center justify-center">
                                <UserCircleIcon className="w-7 stroke-black stroke-1" />
                            </div>
                        </div>

                        <p className="font-[600] text-[16px] md:text-[18px]">Michael O.</p>
                    </div>
                    <ChevronDownIcon className="w-5 stroke-black stroke-1" />
                </div>
            </div>
        </div>
    )
}