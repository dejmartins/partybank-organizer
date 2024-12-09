import React, { ReactNode, useState } from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import Tooltip from "@mui/joy/Tooltip";

type PropT = {
  value: any;
  setvalue: Function;
  placeHolder: string;
  icon?: ReactNode;
  tooltip?: string;
  label?: string;
};
export default function PBTextArea({
  value,
  setvalue,
  placeHolder,
  icon,
  tooltip, label
}: PropT) {
  const [isActive, setisActive] = useState(false);
  return (
    <div className="w-full">
      {isActive}
      {label && tooltip && (
        <div className="flex gap-x-4 w-full items-center mb-2">
          <span className="bg-partybank-red h-6 flex items-center px-3 rounded border border-[#4E0916] text-white text-sm font-bold">
            {label}
          </span>

          <Tooltip
            title={tooltip}
            size="sm"
            placement="top"
            // open={addressTooltipOpen}
          >
            <button>
              <IoMdInformationCircleOutline />
            </button>
          </Tooltip>
        </div>
      )}
      <div
        className="flex  w-full bg-white h-[64px] rounded-md px-2 transition-all duration-300 ease-in-out transform"
        style={{
          border: isActive ? "2px solid #080D18" : "",
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
