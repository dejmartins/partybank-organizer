export default function VerifyEmail() {
    return (
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
    );
}