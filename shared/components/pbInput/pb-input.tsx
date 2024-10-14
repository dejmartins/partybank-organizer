import React, { ReactNode, useState } from "react";

type PropT = {
  value: any;
  setvalue: Function;
  placeHolder: string;
  icon?: ReactNode;
};
export default function PBInput({ value, setvalue, placeHolder, icon }: PropT) {
  const [isActive, setisActive] = useState(false);
  return (
    <div className="w-full">
      {isActive}
      <div
        className="flex items-center w-full bg-white h-[44px] rounded-md px-2"
        style={{
          border: isActive ? "2px solid #ddd" : "",
        }}
      >
        {icon && <div className="w-5">{icon}</div>}
        <input
          value={value}
          placeholder={placeHolder}
          className="w-full h-[40px] placeholder:text-partybank-text-black outline-none rounded-md pl-2"
          onChange={(e: any) => setvalue(e.target.value)}
          onFocus={() => setisActive(true)}
          onBlur={() => setisActive(false)}
        />
      </div>
    </div>
  );
}
