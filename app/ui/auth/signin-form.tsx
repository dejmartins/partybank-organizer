import Image from "next/image";

export default function SigninForm() {
    return (
        <form className='text-left'>
          <label className="text-[18px] font-[500]">Email</label>
          <input className="w-full rounded-[10px] p-[10px] mt-[8px] mb-[30px] focus:outline-none focus:ring-2 focus:ring-[var(--pb-c-red)] focus:border-[var(--pb-c-red)]" placeholder="dej@email.com" />

          <button className='w-full p-[10px] rounded-[10px] bg-[var(--pb-c-red)] text-[var(--pb-c-white)] text-[18px] font-bold'>Continue with Email</button>

          <hr className='my-8 border-[1px]' />
          <button className='flex items-center rounded-[10px] justify-center w-full p-[10px] bg-[var(--pb-c-white)] text-[18px] font-[500]'>
            <Image src="/google-icon.png" alt='Google Icon' width={20} height={20} className='mr-4' />
            Continue with Google</button>
        </form>
    );
}