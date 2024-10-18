import React, { ReactNode, useState } from "react";
import Autocomplete from "@mui/joy/Autocomplete";
import { IoIosArrowDown } from "react-icons/io";

type PropT = {
  value: any;
  setvalue: Function;
  placeHolder: string;
  icon?: ReactNode;
  options: any[];
};
export default function PBAutoSelect({
  value,
  setvalue,
  placeHolder,
  icon,
  options,
}: PropT) {
  const [isActive, setisActive] = useState(false);
  return (
    <div className="w-full">
      {isActive}
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
