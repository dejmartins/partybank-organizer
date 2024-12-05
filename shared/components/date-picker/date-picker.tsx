import React, { useRef, useState } from "react";

import { IoIosArrowDown } from "react-icons/io";
import { IoAlarmOutline } from "react-icons/io5";
import { IoIosCalendar } from "react-icons/io";
import DatePicker from "react-multi-date-picker";

type PropT = {
  setDateValue: Function;
  value: any;
  label?: string;
};

const PBDatePicker = ({ setDateValue, value, label = "Event Time" }: PropT) => {
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
        <IoIosCalendar />
        <span className="text-partybank-text-black font-bold text-xs">
          {label}
        </span>
      </div>
      <div
        className="flex items-center justify-between flex-grow "
        // onClick={handleClick}
      >
        <div className="flex items-center">
          <div>
            <DatePicker
              // ref={timeInputRef}
              disableDayPicker={false}
              value={value}
              minDate={new Date(new Date().getDate() - 1)}
              maxDate={new Date().setDate(205)}
              onChange={(value: any) => {
                try {
                  setDateValue(value);
                } catch (error) {}
              }}
              mapDays={({
                date,
                today,
                selectedDate,
                currentMonth,
                isSameDate,
              }) => {
                let props: any = {};

                props.style = {
                  borderRadius: "3px",
                };

                if (isSameDate(date, today))
                  props.style = {
                    color: "#fff",
                    backgroundColor: "#ccc",
                  };
                if (isSameDate(date, selectedDate))
                  props.style = {
                    ...props.style,
                    color: "#fff",
                    backgroundColor: "#E91B41",
                    fontWeight: "bold",
                  };

                return props;
              }}
              style={{
                border: "none",
                fontSize: "0.8rem",
                fontWeight: "bold",
                outline: "none",
                width: "12rem",
                height: "2rem",
                zIndex: "10",
              }}
            />
          </div>
        </div>

        {/* <div style={{ paddingRight: "0.4rem" }}>
          <IoIosArrowDown />
        </div> */}
      </div>
    </div>
  );
};

export default PBDatePicker;
