import React from "react";
import { FaArrowRight } from "react-icons/fa6";

type PropT = {
  label: string;
  onClick: Function;
  className?: string;
  isDisabled?: boolean;
};

export default function ProceedButton({
  label,
  isDisabled,
  className,
  onClick,
}: PropT) {
  return (
    <button
      className={`bg-partybank-red flex items-center gap-x-2 disabled:bg-gray-400 text-white font-[500] px-4 border-[1px] border-[#4E0916] rounded-md h-[40px] ${className}`}
      onClick={() => onClick()}
      disabled={isDisabled}
    >
      {label}

      <FaArrowRight />
    </button>
  );
}
