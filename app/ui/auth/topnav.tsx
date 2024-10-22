import Image from "next/image";
import Link from "next/link";

export default function TopNav() {
  return (
    <div className="bg-[var(--pb-c-white)] h-[64px] w-full px-[24px] py-[16px]">
      <Link href="/">
        <Image
          src="/logo.svg"
          width={65.95}
          height={32.36}
          alt="Partybank Logo"
        />
      </Link>
    </div>
  );
}
