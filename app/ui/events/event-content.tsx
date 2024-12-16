import React from "react";
import { TbShare2 } from "react-icons/tb";
import { HiMiniUserCircle } from "react-icons/hi2";
import { FiMapPin } from "react-icons/fi";
import { SlCalender } from "react-icons/sl";
import { FaRegClock } from "react-icons/fa";
import { IoTicketOutline } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import dayjs from 'dayjs'
type EventProp = {
  event: any
}

const eventcontent = ({event}: EventProp) => {
  console.log(event);
  const formatDate = (date: string) => dayjs(date).format("MMM DD, YYYY");

  return (
    <section className="flex md:p-4 md:px-6 p-6 mt-6 items-start justify-between gap-12 w-[100%] flex-col lg:flex-row">
      <article className="w-[100%] lg:w-[55%] flex gap-4 flex-col md:flex-row">
        <img
          src={event.image_url || "/defaultImage.png"}
          className="rounded-[10px] w-full h-[300px] lg:w-[300px] md:h-[230px] lg:h-[300px] object-fit"
        />
        <div className="w-[100%] px-2 md:px-0">
          <div className="flex items-center gap-12 justify-between">
            <h2 className="text-xl font-bold">{event.event_name}</h2>
            <button className="flex items-center font-extrabold text-sm gap-2">
              <TbShare2 className="font-bold text-xl" /> Share event
            </button>
          </div>
          <div className="flex items-center mt-2 gap-2">
            <p className="text-xs">Created By:</p>{" "}
            <span className="flex  items-center gap-1 font-bold">
              {" "}
              <HiMiniUserCircle className="text-md" />
              <span className="text-sm">Micheal</span>
            </span>
          </div>
          <p className="mt-4">{event.description}</p>
        </div>
      </article>

      <article className="lg:w-[42%] md:pr-4 w-[100%]">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">Key Details</h1>
          <button className="flex items-center gap-2 p-2 bg-partybank-mid-red text-sm rounded font-bold">
            <TbShare2 className=" text-xl" /> Share Ticketers Link
          </button>
        </div>

        <div className="mt-6 md:p-4 p-4 rounded-3xl border-2 border-[rgba(0, 0, 0, 0.5)] ">
          <div className="grid grid-cols-2 items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="p-2 bg-partybank-soft-grey rounded-full">
                <FiMapPin className="font-bold" />
              </span>
              <p className="font-semibold">
                {event.location.city}, {event.location.country}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="p-2 bg-partybank-soft-grey rounded-full">
                <SlCalender className="font-bold" />
              </span>
              <p className="font-semibold">{event.date}</p>
            </div>

            <div className="flex items-center gap-2">
              <span className="p-2 bg-partybank-soft-grey rounded-full">
                <FaRegClock className="font-bold" />
              </span>
              <p className="font-semibold">{event.time}</p>
            </div>
          </div>

          <div className="mt-6 flex gap-4">
            <div className="bg-partybank-dark-brown md:rounded-3xl rounded-lg w-[50%] flex items-center gap-2 md:gap-4 p-2 md:p-4">
              <div className="p-2 md:rounded-3xl rounded-full bg-partybank-light-brown text-partybank-dark-brown h-fit flex items-center justify-center">
                <IoTicketOutline className="text-xl md:text-2xl" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-partybank-light-brown text-xs">
                    Tickets category
                  </p>
                  <IoIosArrowDown className="text-partybank-light-brown" />
                </div>
                <h3 className="md:text-xl text-md text-partybank-light-brown font-bold">
                  VIP: 200
                </h3>
              </div>
            </div>

            <div className="bg-white md:rounded-3xl rounded-lg w-[50%] flex md:gap-4 gap-2 md:p-4 p-2 pl-6 border-2 border-partybank-dark-brown flex items-center justify-between">
              <h3 className="md:text-lg text-sm">See all tickets</h3>
              <div className="p-3 rounded-3xl bg-partybank-soft-grey text-partybank-dark-brown flex items-center justify-center">
                <IoTicketOutline className="text-xl md:text-3xl" />
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default eventcontent;
