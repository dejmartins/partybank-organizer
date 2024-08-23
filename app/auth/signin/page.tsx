import styles from '../../ui/styles/auth.module.css';

export default function Page() {
    return (
      <div className="flex flex-col items-center justify-between text-center bg-[var(--pb-c-soft-grey)] h-full rounded-[40px] p-12 text-[#080D18]">
        <div>
          <h3 className='text-[32px] font-[700] leading-[42.34px]'>Welcome to Partybank</h3>
          <p className='text-[18px] font-[400] leading-[23.81px]'>Please sign in or sign up below</p>
        </div>

        <form>
          <label>Email Address</label>
          <input className='w-full' placeholder="dej@email.com" />

          <button>Continue with Email</button>
          <button>Continue with Google</button>
        </form>
        

        <p>By continuing, you agree to have read and accepted party bank terms and conditions</p>
      </div>
    );
  }