import { useDrag } from "@/app/lib/actions";
import PBInput from "@/shared/components/pbInput/pb-input";
import SelectedCard from "@/shared/components/selected-card/selected-card";
import TickettypeCard from "@/shared/components/ticket-type-card/ticket-type-card";
import React, { useState } from "react";
import RandomIcon from "@/shared/components/icons/random-icon";

import PBTextArea from "@/shared/components/pb-text-area/pb-text-area";
import NoteIcon from "@/shared/components/icons/note-icon";
import PBInputPerks from "@/shared/components/pbInputPerks/pb-input-perks";
import { FiGift } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import PBAutoSelect from "@/shared/components/pb-auto-select/pb-auto-select";
import { FaMoneyBill1 } from "react-icons/fa6";

const ticketTypeData = [
  { id: 1, title: "Free" },
  { id: 2, title: "Paid" },
  // { id: 3, title: "By Invite" },
];

type PropT = {
  ticketDetailsObj: {
    ticketName: string;
    ticketDescription: string;
    ticketCapacity: number;
    ticketStock: {
      id: any;
      label: string;
    };
    ticketPurchaseLimit: {
      id: any;
      label: string;
    };
    ticketPrice: number;
  };

  setticketDetailsObj: Function;
  selectedType: any;
  setselectedType: Function;
  perks: string[];
  setperks: Function;
};

export default function TicketDetails({
  ticketDetailsObj,
  setticketDetailsObj,
  selectedType,
  setselectedType,
  perks,
  setperks,
}: PropT) {
  const handlePrice = (value: any) => {
    if (isNaN(value)) return;
    else {
      setticketDetailsObj((prev: any) => {
        return { ...prev, ticketPrice: value };
      });
    }
  };

  const handleCapacity = (value: any) => {
    if (isNaN(value)) return;
    else {
      setticketDetailsObj((prev: any) => {
        return { ...prev, ticketCapacity: value };
      });
    }
  };
  return (
    <div className="w-full flex lex-col md:flex-row py-6 border-b border-partybank-border p-4 md:p-0 xl:py-2">
      <div className="w-full flex flex-col items-center md:flex-row md:w-11/12 gap-y-4 md:gap-y-0 m-auto py-4">
        <div className="w-full">
          <div className="flex gap-x-4 w-full items-center">
            <h3 className="font-[700] text-[24px]">Ticket Type</h3>
          </div>
          <p className="text-base">
            Select one of the options to pick ticket type
          </p>
          <div className="inline-block mt-3">
            <div className=" flex gap-4 bg-[#F8F9F9] p-2 ">
              {ticketTypeData.map((obj, index: number) => (
                <TickettypeCard
                  key={index}
                  data={obj}
                  value={selectedType}
                  setValue={setselectedType}
                />
              ))}
            </div>
          </div>

          <div className="w-full pb-4 mt-10">
            <div className="w-full">
              <h3 className="font-[700] text-[24px]">Ticket Details</h3>
            </div>
            <div className="w-full flex flex-col md:flex-row mt-2 py-2 gap-4">
              <div className="w-full md:w-1/2 bg-[#F8F9F9] rounded-md border border-partybank-border p-3 flex flex-col gap-y-4">
                <PBInput
                  value={ticketDetailsObj.ticketName}
                  setvalue={(val: string) => {
                    setticketDetailsObj((prev: any) => {
                      return { ...prev, ticketName: val };
                    });
                  }}
                  placeHolder="Ticket Name"
                  icon={<NoteIcon />}
                />

                <PBAutoSelect
                  value={ticketDetailsObj.ticketStock.label}
                  setvalue={(event: any) => {
                    setticketDetailsObj((prev: any) => {
                      return { ...prev, ticketStock: event };
                    });
                  }}
                  placeHolder="Ticket Stock"
                  icon={<RandomIcon />}
                  options={[
                    { id: 1, label: "Limited" },
                    { id: 2, label: "Unlimited" },
                  ]}
                />

                <PBTextArea
                  value={ticketDetailsObj.ticketDescription}
                  setvalue={(val: string) => {
                    setticketDetailsObj((prev: any) => {
                      return { ...prev, ticketDescription: val };
                    });
                  }}
                  placeHolder="Ticket Description"
                  icon={<RandomIcon />}
                />
              </div>
              <div className="w-full md:w-1/2 bg-[#F8F9F9] rounded-md border border-partybank-border p-3 flex flex-col gap-y-4">
                <PBAutoSelect
                  value={ticketDetailsObj.ticketPurchaseLimit.label}
                  setvalue={(event: any) => {
                    setticketDetailsObj((prev: any) => {
                      return { ...prev, ticketPurchaseLimit: event };
                    });
                  }}
                  placeHolder="Ticket Purchase Limit"
                  icon={<RandomIcon />}
                  options={[
                    { id: 1, label: "1" },
                    { id: 2, label: "2" },
                    { id: 3, label: "3" },
                    { id: 4, label: "4" },
                    { id: 5, label: "5" },
                  ]}
                />

                {ticketDetailsObj.ticketStock.label === "Limited" && (
                  <PBInput
                    value={ticketDetailsObj.ticketCapacity}
                    setvalue={(val: string) => {
                      handleCapacity(val);
                    }}
                    placeHolder="Ticket Capacity"
                    icon={<NoteIcon />}
                  />
                )}

                {selectedType.title === "Paid" && (
                  <PBInput
                    value={ticketDetailsObj.ticketPrice}
                    setvalue={(val: string) => {
                      handlePrice(val);
                    }}
                    placeHolder="Ticket Price"
                    icon={<FaMoneyBill1 size={20} />}
                  />
                )}
              </div>
            </div>
          </div>

          {/* ---------- perks ------------- */}
          <div className="w-full pb-4 mt-4">
            <div className="w-full">
              <h3 className="font-[700] text-[24px]">Ticket Perks</h3>
            </div>
            <p className="text-base">
              What extra benefits comes with purchasing ticket(s)
            </p>
            <div className="w-full flex flex-col md:flex-row mt-2 md:py-2 gap-4">
              <div className="md:w-8/12 bg-[#F8F9F9] rounded-md border border-partybank-border p-3 flex flex-col gap-y-4">
                <PBInputPerks
                  value={perks[0]}
                  setvalue={(val: string) => {
                    setperks([val, ...perks]);
                  }}
                  placeHolder="Enter perks here"
                  icon={<FiGift />}
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-x-2">
              {perks.map((obj, index: number) => (
                <div
                  className="py-2 px-4 text-partybank-red rounded-md text-sm flex justify-between relative bg-[#FEEFF2] gap-x-4"
                  key={index}
                >
                  {obj}
                  <IoCloseSharp
                    size={20}
                    color="#E91B41"
                    className="cursor-pointer"
                    onClick={() => {
                      const arr = perks.filter((item) => item !== obj);
                      setperks(arr);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
