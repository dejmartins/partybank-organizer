import Button from "@/app/ui/buttons/button";
import React from "react";
import Spinner from "../Spinner";

type PropT = {
  isloading: boolean;
  title: string;
  isDisabled: boolean;
  onClick: Function;
};
export default function PrimaryButton({
  isDisabled = false,
  title,
  isloading,
  onClick,
}: PropT) {
  return (
    <Button
      disabled={isDisabled}
      className="bg-[var(--pb-c-red)] text-[var(--pb-c-white)] text-[18px] font-bold "
      onClick={() => onClick()}
    >
      <div className="flex items-center justify-center">
        {isloading ? <Spinner color="#fff" /> : title}
      </div>
    </Button>
  );
}
