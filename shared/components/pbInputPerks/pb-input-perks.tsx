import React, { ReactNode, useState } from "react";
import { IoMdAdd } from "react-icons/io";

type PropT = {
  value: any;
  setvalue: Function;
  placeHolder: string;
  icon?: ReactNode;
};
export default function PBInputPerks({
  value,
  setvalue,
  placeHolder,
  icon,
}: PropT) {
  const [isActive, setisActive] = useState(false);
  const [currentValue, setcurrentValue] = useState("");
  return (
    <div className="w-full">
      {isActive}
      <div
        className="flex items-center justify-between w-full bg-white h-[44px] rounded-md px-2 transition-all duration-300 ease-in-out transform"
        style={{
          border: isActive ? "2px solid #080D18" : "",
        }}
      >
        {icon && <div className="w-5">{icon}</div>}
        <input
          value={currentValue}
          placeholder={placeHolder}
          className="w-7/12 md:w-8/12 h-[40px] placeholder:text-partybank-text-black outline-none rounded-md pl-2"
          onChange={(e: any) => setcurrentValue(e.target.value)}
          onFocus={() => setisActive(true)}
          onBlur={() => setisActive(false)}
        />

        <button
          className="p-[0.4rem] md:py-2 md:px-3 bg-partybank-red rounded-md text-white flex items-center gap-2 text-sm"
          onClick={() => {
            if (currentValue.length) {
              setvalue(currentValue);
              setcurrentValue("");
            }
          }}
        >
          <IoMdAdd size={20} />
          Add Perks
        </button>
      </div>
    </div>
  );
}
