import VerifyEmailForm from '@/app/ui/auth/verify-form';

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
                    <span className="underline underline-offset-4 text-[var(--pb-c-red)] cursor-pointer">
                        Change Email
                    </span>
                </div>

                <VerifyEmailForm />

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
