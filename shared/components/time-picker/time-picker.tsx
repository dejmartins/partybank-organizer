import React, { useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoAlarmOutline } from "react-icons/io5";
import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";

type PropT = {
  label: string;
  setTimeValue: Function;
  value: any;
  title?: string;
};

const PBTimePicker = ({
  label,
  setTimeValue,
  value,
  title = "Event Time",
}: PropT) => {
  const timeInputRef: any = useRef(null);

  const handleClick = () => {
    timeInputRef.current.click();
    if (timeInputRef.current) {
      timeInputRef.current.openCalendar();
    }
  };

  return (
    <div className="w-full md:w-1/3 border border-partybank-border flex items-center gap-x-2">
      <div className="flex items-center p-2 bg-[#DDE0E3] gap-x-2 w-[38%]">
        <IoAlarmOutline />
        <span className="text-partybank-text-black font-bold text-xs">
          {title}
        </span>
      </div>
      <div
        className="flex items-center justify-between flex-grow "
        onClick={handleClick}
      >
        <div className="flex items-center">
          <span className="block text-xs font-bold">{label} - </span>
          <div>
            <DatePicker
              ref={timeInputRef}
              disableDayPicker
              value={value}
              // minDate={new Date()}
              format="hh:mm:ss A"
              onChange={(value: any) => {
                setTimeValue(value);
              }}
              arrow
              plugins={[<TimePicker position="top" />]}
              style={{
                border: "none",
                fontSize: "0.8rem",
                fontWeight: "bold",
                outline: "none",
                width: "6rem",
              }}
            />
          </div>
        </div>

        <div style={{ paddingRight: "0.4rem" }}>
          <IoIosArrowDown />
        </div>
      </div>
    </div>
  );
};

export default PBTimePicker;
