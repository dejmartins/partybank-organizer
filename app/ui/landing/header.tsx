'use client'
import Image from "next/image";
import Link from "next/link";
import useAuth from "@/shared/hooks/useAuth";

export default function Header() {
  const { USER } = useAuth();
  return (
    <header className="fixed top-0 left-0 w-full bg-[#FFFFFF] border-b text-[#080D18] py-4 z-50">
      <div className="flex justify-between items-center px-6">
          <div className="flex items-center gap-10">
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
  
              <nav className="hidden md:flex space-x-6">
                  <a href="https://thepartybank.com/" className="hover:text-red-500 transition">Attend Event</a>
                  <Link href="/faqs" className="hover:text-red-500 transition">FAQs</Link>
                  <a href="mailto:partybankexperience@gmail.com" className="hover:text-red-500 transition">Contact</a>
              </nav>
          </div>

        {!USER.username && (
          <div className="space-x-4">
            <Link href="/auth/signin" className="bg-[var(--pb-c-red)] text-white font-[500] border-[2px] border-[#4E0916] p-3 rounded-[8px] px-10 font-[700]">Sign In</Link>
          </div>
        )}
      </div>
    </header>
  );
}
