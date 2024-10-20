"use client";
import { useEffect, useState } from "react";
import { BackButton } from "@/app/ui/series/buttons";

import { useRouter } from "next/navigation";
import usePBEvent from "@/shared/hooks/usePBEvent";
import EventTicketPreview from "@/app/ui/events/event-ticket-preview";
import EventCoverImage from "@/app/ui/events/cover-image";
import TicketCategory from "@/app/ui/events/ticket-category";
import { ticketCategoryData } from "@/app/lib/placeholder-data";
import TicketSales from "@/app/ui/events/ticket-sales";
import TicketDetails from "@/app/ui/events/ticket-details";
import { useDispatch, useSelector } from "@/store/store";
import { saveTicket } from "@/store/create-event/create-event-slice";
import useAuth from "@/shared/hooks/useAuth";
import { IEventForm } from "@/services/models/event-model";
import Loader from "@/app/ui/loaders/loader";
import { createEvent } from "@/services/event-services/event-service";
import { toast } from "react-toastify";
import {
  convertIsoToDate,
  getTimeWithAmPm,
  uploadToCloudinary,
} from "@/shared/utils/helper";

const ticketTypeData = [
  { id: 1, title: "Free" },
  { id: 2, title: "Paid" },
  { id: 3, title: "By Invite" },
];

export default function TicketPage() {
  const [isLoaderModalOpen, setIsLoaderModalOpen] = useState(false);
  const { USER } = useAuth();
  const [selectedType, setselectedType] = useState(ticketTypeData[0]);
  const [ticketCategory, setticketCategory] = useState(ticketCategoryData[0]);
  const [perks, setperks] = useState<string[]>([]);
  const [ticketDetailsObj, settickDetailsObj] = useState({
    ticketName: "",
    ticketDescription: "",
    ticketCapacity: 0,
    ticketStock: { id: 1, label: "Limited" },
    ticketPrice: 0.0,
    ticketPurchaseLimit: { id: 1, label: "5" }, //chnage to obj
  });
  const event = useSelector((state) => state.event);
  const tempEventObj: IEventForm = event.data.tempEvent;

  const [ticketDateObj, settickDateObj] = useState({
    salesStartDate: new Date().toISOString(),
    salesEndDate: new Date().toISOString(),
    salesStartTime: new Date().toISOString(),
    salesEndTime: new Date().toISOString(),
  });

  const [isformValid, setisformValid] = useState(false);
  const { tempEvent } = usePBEvent();
  const { tickets } = tempEvent;
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSaveTicket = () => {
    const ticketData = {
      ticketDateObj,
      ticketDetailsObj,
      ticketCategory,
      ticketType: selectedType,
      perks,
      id: Date.now(),
    };
    dispatch(saveTicket(ticketData));
    settickDetailsObj((prev: any) => {
      return { ...prev, ticketName: "" };
    });
  };
  const handleValidation = () => {
    const {
      ticketName,
      ticketPrice,
      ticketDescription,
      ticketStock,
      ticketCapacity,
    } = ticketDetailsObj;
    if (selectedType.title === "Free" && ticketStock.label === "Unlimited") {
      const isValid = ticketName.length > 2 && ticketDescription.length > 6;
      setisformValid(isValid);
    }

    if (selectedType.title === "Free" && ticketStock.label === "Limited") {
      const isValid =
        ticketName.length > 2 &&
        ticketDescription.length > 6 &&
        ticketCapacity > 0;
      setisformValid(isValid);
    }

    if (selectedType.title === "Paid" && ticketStock.label === "Unlimited") {
      const isValid =
        ticketName.length > 2 &&
        ticketDescription.length > 6 &&
        ticketPrice > 0;
      setisformValid(isValid);
    }

    if (selectedType.title === "Paid" && ticketStock.label === "Limited") {
      const isValid =
        ticketName.length > 2 &&
        ticketDescription.length > 6 &&
        ticketPrice > 0 &&
        ticketCapacity > 0;
      setisformValid(isValid);
    }
  };

  const handleCreateEvent = async () => {
    setIsLoaderModalOpen(true);
    const ticketsPayload = tickets.map((obj: any) => {
      return {
        capacity: Number(obj.ticketDetailsObj.ticketCapacity),
        colour: "red",
        is_transfer_payment_fees_to_guest: false,
        name: obj.ticketDetailsObj.ticketName,
        price: Number(obj.ticketDetailsObj.ticketPrice),
        price_change_date: "empty",
        price_change_time: "empty",
        purchase_limit: parseInt(
          obj.ticketDetailsObj.ticketPurchaseLimit.label
        ),
        stock: obj.ticketDetailsObj.ticketStock.label,
        ticket_perks: obj.perks,
        ticket_sale_end_date: convertIsoToDate(obj.ticketDateObj.salesEndDate),
        ticket_sale_start_date: convertIsoToDate(
          obj.ticketDateObj.salesStartDate
        ),
        ticket_sale_start_time: getTimeWithAmPm(
          obj.ticketDateObj.salesStartTime
        ),
        ticket_sales_end_time: getTimeWithAmPm(obj.ticketDateObj.salesEndTime),
        ticket_type: obj.ticketType.title,
      };
    });

    const url = await uploadToCloudinary(
      tempEventObj.selectedFile,
      "event_image"
    );
    if (url) {
      const payload = {
        address: tempEventObj.eventLocation.address,
        contact_information: tempEventObj.eventContact,
        date: convertIsoToDate(tempEventObj.eventDate),
        description: tempEventObj.eventDescription,
        end_time: getTimeWithAmPm(tempEventObj.endTime),
        event_theme: "----",
        image_url: url,
        lat: tempEventObj.eventLocation.lat.toString(),
        lng: tempEventObj.eventLocation.lng.toString(),
        name: tempEventObj.eventName,
        organizer_id: USER.id,
        series_id: Number(tempEventObj.selectedSeries.id),
        start_time: getTimeWithAmPm(tempEventObj.startTime),
        tickets: ticketsPayload,
        venue: tempEventObj.eventLocation.venue,
        visibility: tempEventObj.eventVisibility.label,
        city: tempEventObj.eventLocation.city,
        state: tempEventObj.eventLocation.state,
        country: tempEventObj.eventLocation.country,
      };
      // console.log("full payload==>", payload);
      const queryApi = () => {
        createEvent(payload).subscribe({
          next: (res) => {
            if (res) {
              console.log(res);
              toast.success(res.data.message);
              router.push("/dashboard/events");
            } else {
              toast.info(res.error);
            }
          },
          error: (msg) => {
            toast.error(msg.message);
            setIsLoaderModalOpen(false);
          },
          complete: () => {
            setIsLoaderModalOpen(false);
          },
        });
      };
      queryApi();
    } else {
      setIsLoaderModalOpen(false);
    }
  };

  useEffect(() => {
    if (tempEvent === undefined) {
      router.back();
    }
  }, []);

  useEffect(() => {
    handleValidation();
  }, [ticketDetailsObj, selectedType]);

  useEffect(() => {
    // console.log("tempevent", tempEvent);
  }, [tempEvent]);

  return (
    <>
      <div className="flex flex-col min-h-[calc(100vh-170px)] border-[var(--pb-c-soft-grey)]">
        <div className="sticky top-0 z-10 w-full">
          <div className="inline-block md:hidden bg-[var(--pb-c-soft-grey)] w-full px-6 py-3">
            <h3 className="font-[700] text-[25px]">Events</h3>
          </div>

          <div className="flex items-center py-3 px-6 justify-between border-0 border-b-[3px] border-[var(--pb-c-soft-grey)]">
            <div className="flex items-center gap-7">
              <BackButton href="/dashboard/events/create" />
              <p className="text-[23px] md:text-[30px] md:font-[700]">
                Create Events
                <span className="font-light text-lg">/Tickets</span>
              </p>
            </div>
            <div className="hidden md:block">
              <button
                className={`bg-partybank-red flex items-center gap-x-2 text-white  px-4 border-[1px] border-[#4E0916] disabled:border-[#FEEFF2] rounded-md h-[40px] font-bold disabled:bg-[#FEEFF2] disabled:text-[#F5B4C0]`}
                onClick={handleCreateEvent}
                disabled={tickets.length ? false : true}
              >
                Create Event
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-grow overflow-hidden">
          <EventTicketPreview />

          <div className="border-0 md:border-l border-partybank-soft-grey flex-grow overflow-y-auto  max-h-[calc(100vh-170px)] md:basis-[60%] lg:basis-[70%]">
            <TicketCategory
              selectedCategory={ticketCategory}
              setselectedCategory={setticketCategory}
            />
            <TicketSales
              ticketDateObj={{ ...ticketDateObj }}
              setticketDateObj={settickDateObj}
            />

            <TicketDetails
              ticketDetailsObj={{ ...ticketDetailsObj }}
              setticketDetailsObj={settickDetailsObj}
              selectedType={selectedType}
              setselectedType={setselectedType}
              perks={perks}
              setperks={setperks}
            />

            <div className="w-full flex lex-col md:flex-row  p-4 md:p-0 xl:py-2 mb-20">
              <div className="w-full flex flex-col items-center md:flex-row md:w-11/12 gap-y-4 md:gap-y-0 m-auto py-4">
                <button
                  className="bg-partybank-red border border-partybank-text-black disabled:border-[#FEEFF2] rounded py-2 px-12 text-white font-bold disabled:bg-[#FEEFF2]"
                  onClick={handleSaveTicket}
                  disabled={!isformValid}
                >
                  Save Ticket
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Loader isOpen={isLoaderModalOpen} message="Creating your event" />
    </>
  );
}
