import styles from '../../ui/styles/auth.module.css';
import Image from 'next/image';

export default function Page() {
    return (
      <div className="flex flex-col items-center justify-between text-center bg-[var(--pb-c-soft-grey)] h-full rounded-[40px] p-12 text-[#080D18]">
        <div>
          <h3 className='text-[32px] font-[700] leading-[42.34px]'>Welcome to Partybank</h3>
          <p className='text-[18px] font-[400] leading-[23.81px]'>Please sign in or sign up below</p>
        </div>

        <form className='text-left'>
          <label className="text-[18px] font-[500]">Email</label>
          <input className="w-full rounded-[10px] p-[10px] mt-[8px] mb-[30px]" placeholder="dej@email.com" />

          <button className='w-full p-[10px] rounded-[10px] bg-[var(--pb-c-red)] text-[var(--pb-c-white)] text-[18px] font-bold'>Continue with Email</button>

          <hr className='my-8 border-[1px]' />
          <button className='flex items-center rounded-[10px] justify-center w-full p-[10px] bg-[var(--pb-c-white)] text-[18px] font-[500]'>
            <Image src="/google-icon.png" alt='Google Icon' width={20} height={20} className='mr-4' />
            Continue with Google</button>
        </form>
        

        <p className='text-[18px] font-[400] leading-[23.81px]'>By continuing, you agree to have read and accepted party bank <span className='text-[var(--pb-c-red)] font-[500] underline underline-offset-4 cursor-pointer'>terms and conditions</span></p>
      </div>
    );
  }