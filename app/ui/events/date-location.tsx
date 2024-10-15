import React, { useState } from "react";
import { IoIosCalendar } from "react-icons/io";
import { IoAlarmOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import PBTimePicker from "@/shared/components/time-picker/time-picker";
import PBDatePicker from "@/shared/components/date-picker/date-picker";
import { IoLocationOutline } from "react-icons/io5";
import PlacesInput from "@/shared/components/places/PlacesInput";
import EventPlacesInput from "@/shared/components/event-places-input/event-places-input";

type PropT = {
  eventDateObj: {
    eventDate: any;
    startTime: any;
    endTime: any;
    eventLocation: {
      address: string;
      lat: any;
      lng: any;
    };
  };
  setEventDateObj: Function;
};

export default function EventDateLocation({
  eventDateObj,
  setEventDateObj,
}: PropT) {
  const { startTime, eventDate, endTime, eventLocation } = eventDateObj;
  return (
    <div>
      <div className="w-full flex lex-col md:flex-row pb-6 border-b border-partybank-border p-4 xl:pb-6">
        <div className="w-full flex flex-col md:w-11/12 m-auto py-4 gap-y-4">
          {/* --- date ---- */}
          <div className="w-full pb-6">
            <div className="w-full">
              <h3 className="font-[700] text-[20px]">Date</h3>
            </div>
            <div className="mt-2 flex flex-col gap-3 md:gap-2 md:flex-row">
              <PBDatePicker
                setDateValue={(val: any) => {
                  setEventDateObj((prev: any) => {
                    return { ...prev, eventDate: new Date(val).toISOString() };
                  });
                }}
                value={eventDate}
              />

              <PBTimePicker
                label="Starts"
                setTimeValue={(val: any) => {
                  setEventDateObj((prev: any) => {
                    return { ...prev, startTime: new Date(val).toISOString() };
                  });
                }}
                value={startTime}
              />

              <PBTimePicker
                label="Ends"
                setTimeValue={(val: any) => {
                  setEventDateObj((prev: any) => {
                    return { ...prev, endTime: new Date(val).toISOString() };
                  });
                }}
                value={endTime}
              />
            </div>
          </div>
          <hr />
          {/* ---location----- */}
          <div className="w-full pb-6">
            <div className="flex gap-x-4 w-full items-center">
              <h3 className="font-[700] text-[20px]">Location</h3>
              <span className="bg-partybank-red h-6 flex items-center px-3 rounded border border-[#4E0916] text-white text-sm font-bold">
                Venue
              </span>
            </div>
            <div className="mt-4">
              <EventPlacesInput
                autoComplete="none"
                name="dropoff.address"
                value={eventLocation.address}
                placeholder="Add event location"
                handleGeoCode={(valueObj: any) => {
                  const { lat, lng, address } = valueObj;
                  setEventDateObj((prev: any) => {
                    return {
                      ...prev,
                      eventLocation: {
                        ...eventLocation,
                        lat: lat,
                        lng: lng,
                        address,
                      },
                    };
                  });
                }}
                handleSelect={(ev: any) => {
                  setEventDateObj((prev: any) => {
                    return {
                      ...prev,
                      eventLocation: {
                        ...eventLocation,
                        address: ev,
                      },
                    };
                  });
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
