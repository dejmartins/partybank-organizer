import React, { useState } from "react";
import { IoIosCalendar } from "react-icons/io";
import { IoAlarmOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import PBTimePicker from "@/shared/components/time-picker/time-picker";
import PBDatePicker from "@/shared/components/date-picker/date-picker";
import { IoLocationOutline } from "react-icons/io5";
import PlacesInput from "@/shared/components/places/PlacesInput";
import EventPlacesInput from "@/shared/components/event-places-input/event-places-input";
import { getVenueName } from "@/shared/utils/helper";
import Switch from "@mui/joy/Switch";
import { toast } from "react-toastify";

type PropT = {
  eventDateObj: {
    eventDate: any;
    startTime: any;
    endTime: any;
    eventLocation: {
      address: string;
      lat: any;
      lng: any;
      geo: string;
      venue: string;
      venueGeo: string;
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
      <div className="w-full flex lex-col md:flex-row pb-6 border-b border-partybank-border p-0 xl:pb-0">
        <div className="w-full flex flex-col md:w-11/12 m-auto py-4 gap-y-4 md:gap-y-2">
          {/* --- date ---- */}
          <div className="w-full pb-6">
            <div className="w-full">
              <h3 className="font-[700] text-[24px]">Date</h3>
            </div>
            <div className="mt-2 flex flex-col gap-3 md:gap-2 md:flex-row">
              <PBDatePicker
                setDateValue={(val: any) => {
                  setEventDateObj((prev: any) => {
                    return { ...prev, eventDate: new Date(val).toISOString() };
                  });
                }}
                label="Event Date"
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
          <div className="w-full pb-2">
            <div className="flex gap-x-4 w-full items-center mb-4">
              <h3 className="font-[700] text-[24px]">Location</h3>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4">
              {/* ------ addresss */}
              <div className="w-full md:w-1/2">
                <div className="flex gap-x-4 w-full items-center">
                  <span className="bg-partybank-red h-6 flex items-center px-3 rounded border border-[#4E0916] text-white text-sm font-bold">
                    Address
                  </span>
                </div>
                <div className="mt-2 w-full">
                  <EventPlacesInput
                    autoComplete="none"
                    name="address"
                    value={eventLocation.address}
                    placeholder="Add event location"
                    handleGeoCode={(valueObj: any) => {
                      const { lat, lng, address } = valueObj;
                      console.log("placesx", valueObj);
                      setEventDateObj((prev: any) => {
                        return {
                          ...prev,
                          eventLocation: {
                            ...eventLocation,
                            lat,
                            lng,
                            geo: JSON.stringify({ valueObj }),
                          },
                        };
                      });
                    }}
                    handleSelect={(value: any) => {
                      if (typeof value === "object") {
                        const { lat, lng, address, city, state, country } =
                          value;
                        console.log("value==>", {
                          lat,
                          lng,
                          address,
                          city,
                          state,
                          country,
                        });
                        setEventDateObj((prev: any) => {
                          return {
                            ...prev,
                            eventLocation: {
                              ...eventLocation,
                              lat,
                              lng,
                              city,
                              state,
                              country,
                              address,
                              geo: JSON.stringify({ value }),
                              venue: getVenueName(address),
                            },
                          };
                        });
                      } else {
                        setEventDateObj((prev: any) => {
                          return {
                            ...prev,
                            eventLocation: {
                              ...eventLocation,
                              address: value,
                            },
                          };
                        });
                      }
                    }}
                  />
                </div>
              </div>
              {/* ------------ */}

              {/* ------ Venue */}
              <div className="w-full md:w-1/2">
                <div className="flex gap-x-4 w-full items-center">
                  <span className="bg-partybank-red h-6 flex items-center px-3 rounded border border-[#4E0916] text-white text-sm font-bold">
                    Venue
                  </span>
                </div>
                <div className="mt-2">
                  <div className="relative">
                    <div className="w-full  h-20 p-4 flex items-center border border-partybank-border rounded-lg cursor-pointer">
                      <div className="flex items-center gap-x-2 w-full">
                        <IoLocationOutline size={20} />
                        <input
                          value={eventDateObj.eventLocation.venue}
                          className="w-full h-[44px] outline-none placeholder:text-partybank-text-black"
                          placeholder="Add event venue"
                          onChange={(event) => {
                            if (eventDateObj.eventLocation.address) {
                              setEventDateObj((prev: any) => {
                                return {
                                  ...prev,
                                  eventLocation: {
                                    ...eventDateObj.eventLocation,
                                    venue: event.target.value,
                                  },
                                };
                              });
                            } else {
                              toast.info("You nned to fill in event address");
                            }
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ------------ */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
