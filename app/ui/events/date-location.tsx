import React, { useState, useEffect } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { IoMdInformationCircleOutline } from "react-icons/io";
import Tooltip from "@mui/joy/Tooltip";
import EventPlacesInput from "@/shared/components/event-places-input/event-places-input";
import { getVenueName } from "@/shared/utils/helper";
import { toast } from "react-toastify";

type PropT = {
  eventDateObj: {
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
  const { eventLocation } = eventDateObj;
  const [addressTooltipOpen, setAddressTooltipOpen] = useState(false);
  const [venueTooltipOpen, setVenueTooltipOpen] = useState(false);

  const openTooltip = (setTooltip: React.Dispatch<React.SetStateAction<boolean>>) => {
    setTooltip(true);
    setTimeout(() => setTooltip(false), 3000); // Auto-close after 3 seconds
  };

  useEffect(() => {
    const handleClickOutside = () => {
      setAddressTooltipOpen(false);
      setVenueTooltipOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div>
      <div className="w-full flex flex-col md:flex-row pb-6 border-b border-partybank-border p-0 xl:pb-0">
        <div className="w-full flex flex-col md:w-11/12 m-auto py-4 gap-y-4 md:gap-y-2">
          {/* --- Location --- */}
          <div className="w-full pb-2">
            <div className="flex gap-x-4 w-full items-center mb-4">
              <h3 className="font-[700] text-[24px]">Location</h3>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4">
              {/* Address */}
              <div className="w-full md:w-1/2">
                <div className="flex gap-x-4 w-full items-center">
                  <span className="bg-partybank-red h-6 flex items-center px-3 rounded border border-[#4E0916] text-white text-sm font-bold">
                    Address
                  </span>
                  <Tooltip
                    title="This is the exact location where the event will take place."
                    size="sm"
                    placement="top"
                    open={addressTooltipOpen}
                  >
                    <button onClick={() => openTooltip(setAddressTooltipOpen)}>
                      <IoMdInformationCircleOutline />
                    </button>
                  </Tooltip>
                </div>
                <div className="mt-2 w-full">
                  <EventPlacesInput
                    name="address"
                    value={eventLocation.address}
                    placeholder="Add event location"
                    handleGeoCode={(valueObj: any) => {
                      const { lat, lng, address } = valueObj;
                      setEventDateObj((prev: any) => ({
                        ...prev,
                        eventLocation: {
                          ...eventLocation,
                          lat,
                          lng,
                          geo: JSON.stringify({ valueObj }),
                        },
                      }));
                    }}
                    handleSelect={(value: any) => {
                      const { lat, lng, address } = value;
                      setEventDateObj((prev: any) => ({
                        ...prev,
                        eventLocation: {
                          ...eventLocation,
                          lat,
                          lng,
                          address,
                          venue: getVenueName(address),
                        },
                      }));
                    }}
                  />
                </div>
              </div>
              {/* Venue */}
              <div className="w-full md:w-1/2">
                <div className="flex gap-x-4 w-full items-center">
                  <span className="bg-partybank-red h-6 flex items-center px-3 rounded border border-[#4E0916] text-white text-sm font-bold">
                    Venue
                  </span>
                  <Tooltip
                    title="The name of the place hosting the event, like 'City Park'"
                    size="sm"
                    placement="top"
                    open={venueTooltipOpen}
                  >
                    <button onClick={() => openTooltip(setVenueTooltipOpen)}>
                      <IoMdInformationCircleOutline />
                    </button>
                  </Tooltip>
                </div>
                <div className="mt-2">
                  <div className="relative">
                    <div className="w-full h-20 p-4 flex items-center border border-partybank-border rounded-lg cursor-pointer">
                      <div className="flex items-center gap-x-2 w-full">
                        <IoLocationOutline size={20} />
                        <input
                          value={eventDateObj.eventLocation.venue}
                          className="w-full h-[44px] outline-none placeholder:text-partybank-text-black"
                          placeholder="Add event venue"
                          onChange={(event) => {
                            if (eventDateObj.eventLocation.address) {
                              setEventDateObj((prev: any) => ({
                                ...prev,
                                eventLocation: {
                                  ...eventDateObj.eventLocation,
                                  venue: event.target.value,
                                },
                              }));
                            } else {
                              toast.info("You need to fill in the event address");
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
