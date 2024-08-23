export default function Page() {
    return (
      <div className="bg-[var(--pb-c-soft-grey)] h-full rounded-[40px] p-12">
        <h3>Welcome to Partybank</h3>
        <p>Please sign in or sign up below</p>

        <form>
          <label>Email Address</label>
          <input placeholder="dej@email.com" />

          <button>Continue with Email</button>

          <button>Continue with Google</button>

          <p>By continuing, you agree to have read and accepted party bank terms and conditions</p>
        </form>
      </div>
    );
  }