import React, { ReactNode, useState } from "react";

type PropT = {
  value: any;
  setvalue: Function;
  placeHolder: string;
  icon?: ReactNode;
};
export default function PBTextArea({
  value,
  setvalue,
  placeHolder,
  icon,
}: PropT) {
  const [isActive, setisActive] = useState(false);
  return (
    <div className="w-full">
      {isActive}
      <div
        className="flex  w-full bg-white h-[64px] rounded-md px-2"
        style={{
          border: isActive ? "2px solid #ddd" : "",
        }}
      >
        {icon && <div className="w-5">{icon}</div>}
        <textarea
          value={value}
          placeholder={placeHolder}
          className="w-full h-[60px] placeholder:text-partybank-text-black outline-none rounded-md pl-2"
          onChange={(e: any) => setvalue(e.target.value)}
          onFocus={() => setisActive(true)}
          onBlur={() => setisActive(false)}
          minLength={20}
        />
      </div>
    </div>
  );
}
