"use client";
import React, { useEffect, useState } from "react";
import PBInput from "@/shared/components/pbInput/pb-input";
import { MdEventNote } from "react-icons/md";
import PBAutoSelect from "@/shared/components/pb-auto-select/pb-auto-select";
import RandomIcon from "@/shared/components/icons/random-icon";
import PBTextArea from "@/shared/components/pb-text-area/pb-text-area";
import { FiEye } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import useAuth from "@/shared/hooks/useAuth";
import useSeries from "@/shared/hooks/useSeries";
import PbSelect from "@/shared/components/pb-select/pb-select";
import { MdOutlinePhoneAndroid } from "react-icons/md";

type PropT = {
  eventDetailsObj: {
    eventName: string;
    eventDescription: string;
    eventContact: string;
    eventVisibility: {
      id: string;
      label: string;
      title: string;
    };
    selectedSeries: {
      id: any;
      label: string;
    };
  };
  seteventDetailsObj: Function;
};

const dummySeries = [
  { label: "Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
];

const dummyVisibilityties = [
  { label: "Public", title: "Public", id: 1 },
  { label: "Private", title: "Private", id: 2 },
];

export default function EventDetails({
  eventDetailsObj,
  seteventDetailsObj,
}: PropT) {
  const [isClient, setisClient] = useState(false);
  const { USER } = useAuth();
  const { mySeries, seriesArr } = useSeries();
  const { series } = USER;

  const handlePhone = (val: any) => {
    if (isNaN(val) || val.length > 11) return;
    else {
      seteventDetailsObj((prev: any) => {
        return { ...prev, eventContact: val };
      });
    }
  };
  useEffect(() => {
    setisClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <div className="w-full flex lex-col md:flex-row pb-6 border-b border-partybank-border p-0 xl:py-2">
          <div className="w-full flex flex-col md:w-11/12 m-auto py-4 gap-y-2">
            {/* --- datails ---- */}
            <div className="w-full pb-4">
              <div className="w-full">
                <h3 className="font-[700] text-[24px]">Event Details</h3>
              </div>
              <div className="w-full flex flex-col md:flex-row mt-2 py-2 gap-4">
                <div className="w-full md:w-1/2 bg-[#F8F9F9] rounded-md border border-partybank-border p-3 flex flex-col gap-y-4">
                  <PBInput
                    value={eventDetailsObj.eventName}
                    setvalue={(val: string) => {
                      seteventDetailsObj((prev: any) => {
                        return { ...prev, eventName: val };
                      });
                    }}
                    placeHolder="Event Name"
                    icon={<MdEventNote size={20} />}
                  />

                  <PBTextArea
                    value={eventDetailsObj.eventDescription}
                    setvalue={(val: string) => {
                      seteventDetailsObj((prev: any) => {
                        return { ...prev, eventDescription: val };
                      });
                    }}
                    placeHolder="Add a description"
                    icon={<RandomIcon />}
                  />
                </div>
                <div className="w-full md:w-1/2 bg-[#F8F9F9] rounded-md border border-partybank-border p-3 flex flex-col gap-y-4">
                  <PbSelect
                    value={eventDetailsObj.selectedSeries.label ?? ""}
                    setvalue={(event: any) => {
                      seteventDetailsObj((prev: any) => {
                        return { ...prev, selectedSeries: event };
                      });
                    }}
                    placeHolder="Series"
                    icon={<RandomIcon />}
                    options={seriesArr ?? dummySeries}
                  />
                  {/* <PBAutoSelect
                    value={eventDetailsObj.selectedSeries.label ?? ""}
                    setvalue={(event: any) => {
                      seteventDetailsObj((prev: any) => {
                        return { ...prev, selectedSeries: event };
                      });
                    }}
                    placeHolder="Series"
                    icon={<RandomIcon />}
                    options={seriesArr ?? dummySeries}
                  /> */}

                  <PBInput
                    value={eventDetailsObj.eventContact}
                    setvalue={(val: string) => {
                      handlePhone(val);
                    }}
                    placeHolder="Phone no"
                    icon={<MdOutlinePhoneAndroid size={16} />}
                  />
                </div>
              </div>
            </div>

            {/* ---visibility----- */}
            <div className="w-full">
              <div className="flex gap-x-4 w-full items-center">
                <h3 className="font-[700] text-[24px]">Event Visibility</h3>
              </div>

              <div className="w-full flex flex-col md:flex-row mt-2  gap-x-4">
                <div className="w-full md:w-1/2 bg-[#F8F9F9] rounded-md border border-partybank-border p-3">
                  <PbSelect
                    value={
                      eventDetailsObj.eventVisibility.title !== null
                        ? eventDetailsObj.eventVisibility.title
                        : "Public"
                    }
                    setvalue={(event: any) => {
                      seteventDetailsObj((prev: any) => {
                        return { ...prev, eventVisibility: event };
                      });
                    }}
                    placeHolder="Visibility"
                    icon={<FiEye size={20} />}
                    options={dummyVisibilityties}
                  />

                  {/* <PBAutoSelect
                    value={
                      eventDetailsObj.eventVisibility.title !== null
                        ? eventDetailsObj.eventVisibility.title
                        : "Public"
                    }
                    setvalue={(event: any) => {
                      seteventDetailsObj((prev: any) => {
                        return { ...prev, eventVisibility: event };
                      });
                    }}
                    placeHolder="Visibility"
                    icon={<FiEye size={20} />}
                    options={dummyVisibilityties}
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
