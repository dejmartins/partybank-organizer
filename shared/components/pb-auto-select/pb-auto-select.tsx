import React, { ReactNode, useState } from "react";
import Autocomplete from "@mui/joy/Autocomplete";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdInformationCircleOutline } from "react-icons/io";
import Tooltip from "@mui/joy/Tooltip";

type PropT = {
  value: any;
  setvalue: Function;
  placeHolder: string;
  icon?: ReactNode;
  tooltip?: string;
  label?: string;
  options: any[];
};
export default function PBAutoSelect({
  value,
  setvalue,
  placeHolder,
  icon,
  options,
  label,
  tooltip,
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
        className="flex items-center w-full bg-white h-[44px] rounded-md px-2 transition-all duration-300 ease-in-out transform"
        style={{
          border: isActive ? "2px solid #080D18" : "",
        }}
      >
        {icon && <div className="w-5">{icon}</div>}
        <Autocomplete
          placeholder={placeHolder}
          value={value}
          options={options}
          clearIcon={false}
          onChange={(event, value) => {
            try {
              if (Object.keys(value).length) {
                setvalue(value);
              }
            } catch (error) {}
          }}
          onFocus={() => setisActive(true)}
          onBlur={() => setisActive(false)}
          sx={{
            width: "100%",
            border: "none",
            "& input::placeholder": {
              color: "#080d18",
              opacity: 1,
            },
            "& input": {
              outline: "none",
              border: "none",
              boxShadow: "none",
            },
            "& .MuiInputBase-root": {
              outline: "none",
            },
            "& .MuiInputBase-root:focus-visible": {
              outline: "none",
              border: "none",
              boxShadow: "none",
            },
          }}
          popupIcon={<IoIosArrowDown />}
        />
      </div>
    </div>
  );
}
