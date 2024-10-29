"use client";
import SigninForm from "@/app/ui/auth/signin-form";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-between text-center bg-[var(--pb-c-soft-grey)] h-full rounded-[40px] p-8 md:p-12 text-[#080D18]">
      <div>
        <h3 className="text-[29px] md:text-[32px] font-[700] leading-[35.34px] md:leading-[42.34px]">
          Welcome to Partybank
        </h3>
        <p className="text-[15px] leading-[20.81px] md:text-[18px] font-[400] leading-[23.81px] mb-6">
          Please sign in or sign up below
        </p>
      </div>

      <SigninForm />

      <p className="text-[15px] leading-[20.81px] md:text-[18px] font-[400] md:leading-[23.81px] mt-8">
        By continuing, you agree to have read and accepted partybank{" "}
        <span className="text-[var(--pb-c-red)] font-[500] underline underline-offset-4 cursor-pointer">
          <Link href='/terms'>terms and conditions</Link>
        </span>
      </p>
    </div>
  );
}
