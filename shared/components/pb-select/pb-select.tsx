import * as React from "react";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import Tooltip from "@mui/joy/Tooltip";
type PropT = {
  value: any;
  setvalue: Function;
  placeHolder: string;
  icon?: React.ReactNode;
   tooltip?: string;
  label?: string;
  options: any[];
};

export default function PbSelect({
  value,
  setvalue,
  placeHolder,
  icon,
  options,
  tooltip, label
}: PropT) {
  const [isActive, setisActive] = useState(false);
  return (
    <div className="w-full">
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
        <Select
          // value={value}
          onChange={(event, value: any) => {
            try {
              if (Object.keys(value).length) {
                setvalue(value);
              }
            } catch (error) {}
          }}
          onFocus={() => setisActive(true)}
          onBlur={() => setisActive(false)}
          placeholder={value.length ? value : placeHolder}
          indicator={<KeyboardArrowDown />}
          required={value.length ? false : true}
          sx={{
            width: "100%",
            height: "40px",
            border: "none",
            background: "none",
            [`& .${selectClasses.indicator}`]: {
              transition: "0.2s",
              [`&.${selectClasses.expanded}`]: {
                transform: "rotate(-180deg)",
              },
            },
          }}
        >
          {options.map((obj) => (
            <Option value={obj}>{obj?.label}</Option>
          ))}
        </Select>
      </div>
    </div>
  );
}
