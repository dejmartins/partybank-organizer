import * as React from "react";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";

type PropT = {
  value: any;
  setvalue: Function;
  placeHolder: string;
  icon?: React.ReactNode;
  options: any[];
};

export default function PbSelect({
  value,
  setvalue,
  placeHolder,
  icon,
  options,
}: PropT) {
  const [isActive, setisActive] = useState(false);
  return (
    <div className="w-full">
      <div
        className="flex items-center w-full bg-white h-[44px] rounded-md px-2 transition-all duration-300 ease-in-out transform"
        style={{
          border: isActive ? "2px solid #080D18" : "",
        }}
      >
        {icon && <div className="w-5">{icon}</div>}
        <Select
          onChange={(event, value: any) => {
            try {
              if (Object.keys(value).length) {
                setvalue(value);
              }
            } catch (error) {}
          }}
          onFocus={() => setisActive(true)}
          onBlur={() => setisActive(false)}
          placeholder={placeHolder}
          indicator={<KeyboardArrowDown />}
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
