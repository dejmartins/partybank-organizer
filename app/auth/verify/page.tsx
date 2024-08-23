import styles from '../../ui/styles/auth.module.css';
import Image from 'next/image';

export default function Page() {
    return (
        <div className="flex flex-col items-center justify-between text-center bg-[var(--pb-c-soft-grey)] h-full rounded-[40px] p-12 text-[#080D18]">
            <div>
                <h3 className="text-[32px] font-[700] leading-[42.34px]">Verify Email Address</h3>
                <p className="text-[18px] font-[400] leading-[23.81px]">
                    A four digit code has been sent to your email address
                </p>
            </div>

            <div className="w-full">
                <div className="mb-10">
                    <p className="text-[18px] font-[600]">dej@gmail.com</p>
                    <span className="underline underline-offset-4 text-[var(--pb-c-red)]">
                        Change Email
                    </span>
                </div>

                <form className="text-left">
                    <input
                        className="w-full rounded-[10px] p-[10px] mt-[8px] mb-[30px] focus:outline-none focus:ring-2 focus:ring-[var(--pb-c-red)] focus:border-[var(--pb-c-red)]"
                        type="number"
                        maxLength={4}
                    />

                    <button className="w-full p-[10px] rounded-[10px] bg-[var(--pb-c-red)] text-[var(--pb-c-white)] text-[18px] font-bold">
                        Verify Email
                    </button>
                </form>
            </div>

            <p className="text-[18px] font-[400] leading-[23.81px]">
                Didn’t get code?{" "}
                <span className="text-[var(--pb-c-red)] font-[500] underline underline-offset-4 cursor-pointer">
                    Resend Code
                </span>
            </p>
        </div>
    );
}
