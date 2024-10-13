import React, { useState } from "react";
import { IoIosCalendar } from "react-icons/io";
import { IoAlarmOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import PBTimePicker from "@/shared/components/time-picker/time-picker";
import PBDatePicker from "@/shared/components/date-picker/date-picker";

export default function EventDateLocation() {
  const [time, setTime] = useState("10:00");
  const [eventDate, seteventDate] = useState(new Date());
  const [startTime, setstartTime] = useState<any>(new Date());
  return (
    <div>
      <div className="w-full flex lex-col md:flex-row pb-6 border-b border-partybank-border p-4 xl:pb-6">
        <div className="w-full flex flex-col items-center md:flex-row md:w-11/12 m-auto py-4">
          {/* --- date ---- */}
          <div className="w-full">
            <div className="w-full">
              <h3 className="font-[700] text-[20px]">Date</h3>
            </div>
            <div className="mt-2 flex flex-col gap-3 md:gap-2 md:flex-row">
              <PBDatePicker setDateValue={seteventDate} value={eventDate} />

              <PBTimePicker
                label="Starts"
                setTimeValue={setstartTime}
                value={startTime}
              />

              <PBTimePicker
                label="Ends"
                setTimeValue={(value: any) => {
                  console.log(value);
                }}
                value={startTime}
              />
            </div>
          </div>

          {/* --location */}
        </div>
      </div>
    </div>
  );
}
