import React from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
import { GrValidate } from "react-icons/gr";
import ValidDot from "@/shared/components/icons/valid-dot";
import InvalidDot from "@/shared/components/icons/invalid-dot";
import TagIcon from "@/shared/components/icons/tag-icon";
import { FaRegCalendar } from "react-icons/fa";
import { GoTag } from "react-icons/go";
const eventstats = () => {
  return (
    <section className="flex md:items-center justify-between m-4 p-2 gap-4 border-[var(--pb-c-soft-grey)] md:flex-row flex-col">
      <article className="flex gap-4 items-center w-fit">
        <img src={"/defaultImage.png"} className="w-[70px] h-[70px] rounded" />
        <div>
          <p className="bg-partybank-soft-grey w-fit p-1 font-bold rounded text-xs">
            Micheal event
          </p>
          <div className="flex gap-2 mt-1">
            <h3 className="text-xl font-bold">Beach buddy</h3>
            <div className="flex items-center gap-[0.5em] border-2 px-2 rounded border-green-600">
              <IoCheckmarkSharp color={"green"} />
              <p className="text-green-600 text-xs font-bold">Published</p>
            </div>
          </div>
          <p className="text-xs mt-2">Created - 02/09/2024 11:59AM</p>
        </div>
      </article>

      <article className="rounded-[20px] p-3 grid grid-cols-2 mt-4 md:mt-0 md:grid-cols-4 gap-4 w-full md:w-[60%] border-2 border-partybank-soft-grey">
        <div className="flex items-start gap-x-2">
          <div className="mt-1 md:block">
            <GoTag className="w-4 md:w-10" />
          </div>
          <div className="flex flex-col">
            <p className="text-sm md:text-base">Total Ticket Sales</p>
            <p className="font-[700] text-[20px] md:text-[24px]">
              <span className="text-[12px] mr-[2px]">NGN</span>
              2,000
            </p>
          </div>
        </div>

        <div className="flex items-start gap-x-2">
          <div className="mt-1 md:block">
            <FaRegCalendar className="w-4 md:w-10" />
          </div>
          <div className="flex flex-col">
            <p className="text-sm md:text-base">Total ticket sold</p>
            <p className="font-[700] text-[20px] md:text-[24px]">3,000</p>
          </div>
        </div>

        <div className="flex items-start gap-x-2">
          <div className="mt-1 md:block">
            <GrValidate size={20} />
          </div>
          <div className="flex flex-col">
            <p className="text-sm md:text-base">Scanned</p>
            <div className="flex items-center gap-x-2">
              <p className="font-[700] text-[20px] md:text-[24px]">4,000</p>
              <div>
                <ValidDot />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-x-2">
          <div className="mt-1 md:block">
            <GrValidate size={20} />
          </div>
          <div className="flex flex-col">
            <p className="text-sm md:text-base">Unscanned</p>
            <div className="flex items-center gap-x-2">
              <p className="font-[700] text-[20px] md:text-[24px]">6,000</p>
              <div>
                <InvalidDot />
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default eventstats;
