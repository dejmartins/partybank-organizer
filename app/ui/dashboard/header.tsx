"use client";
import Image from "next/image";
import {
  BellIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import ProfileIcon from "../auth/profile-icon";

export default function Header() {
  return (
    <div className="flex items-center justify-between fixed top-0 left-0 right-0 bg-[var(--pb-c-white)] h-[64px] w-full px-[24px] py-[16px] z-50 border-0 border-b-4 border-[var(--pb-c-soft-grey)]">
      <div>
        <Link href="/">
          <Image
            src="/logo.svg"
            width={65.95}
            height={32.36}
            alt="Partybank Logo"
          />
        </Link>
      </div>

      <div className="flex gap-4">
        {/* <MagnifyingGlassIcon className="w-5 stroke-black stroke-1 cursor-pointer" /> */}
        {/* <BellIcon className="w-5 text-white stroke-black stroke-2 cursor-pointer" /> */}
        <ProfileIcon />
      </div>
    </div>
  );
}
