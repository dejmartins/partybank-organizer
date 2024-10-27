import { PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function AddMore({
  mainText,
  subText,
  href,
  size = "250px",
}: {
  mainText: string;
  subText: string;
  href: string;
  size?: string;
}) {
  return (
    <Link key={"Create"} href={href}>
      <div
        className={`cursor-pointer h-[${size}]  border rounded-[10px]  p-6 flex flex-col items-center justify-center text-center gap-y-8`}
      >
        <div className="h-10 w-10 flex justify-center bg-[#F3F5F5] rounded-[10px]">
          <PlusIcon className="w-5" />
        </div>
        <div className="w-full text-center flex flex-col gap-y-2">
          <h3 className="font-[700] text-[22px]">{mainText}</h3>
          <p className="text-[14px] leading-[17px] w-9/12 m-auto text-center">
            {subText}
          </p>
        </div>
      </div>
    </Link>
  );
}
