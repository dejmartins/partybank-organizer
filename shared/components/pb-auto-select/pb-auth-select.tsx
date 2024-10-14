import React, { ReactNode, useState } from "react";
import Autocomplete from "@mui/joy/Autocomplete";
import { IoIosArrowDown } from "react-icons/io";

type PropT = {
  value: any;
  setvalue: Function;
  placeHolder: string;
  icon?: ReactNode;
};
export default function PBAutoSelect({
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
        className="flex items-center w-full bg-white h-[44px] rounded-md px-2"
        style={{
          border: isActive ? "2px solid #ddd" : "",
        }}
      >
        {icon && <div className="w-5">{icon}</div>}
        <Autocomplete
          placeholder={placeHolder}
          options={top100Films}
          value={value}
          onChange={(value) => setvalue(value)}
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

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
];
