import { useState, useEffect, useRef } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoTicketOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import {
  convertTimeToISO,
  dateToISOFormat,
  splitTimeRange,
} from "@/shared/utils/helper";
import { saveEvent } from "@/store/create-event/create-event-slice";
import { ticketCategoryData } from "@/app/lib/placeholder-data";
import { ticketTypeData } from "@/shared/utils/data";
import { useDispatch } from "@/store/store";

type QuickActionsProps = {
  setIsDeleteOpen: (value: boolean) => void;
  setIsUnpublishOpen: (value: boolean) => void;
  setEvent: (value: any) => void;
  isUnpublishOpen: boolean;
  event: any;
  publishEvent: any;
};

export function QuickActions({
  setIsDeleteOpen,
  setIsUnpublishOpen,
  isUnpublishOpen,
  event,
  setEvent,
  publishEvent,
  
}: QuickActionsProps) {
  const [openActionPanel, setOpenActionPanel] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleDelete = () => {
    setIsDeleteOpen(true);
  };
  const togglePublish = () => {
    if (event.publication_state === "PUBLISHED") {
      // Trigger Unpublish Modal
      setIsUnpublishOpen(true);
    } else {
      publishEvent()
      // Directly Publish without modal
      setEvent((prev: any) => ({
        ...prev,
        publication_state: "PUBLISHED",
      }));
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenActionPanel(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

   const handleEdit = () => {
    const { lat, lng, city, address, state, country } = event.location;
    const eventObj = {
      id: event.id,
      eventName: event.event_name,
      eventDescription: event.description,
      eventContact: event.contact_information,
      eventVisibility: {
        label: "Public",
        title: "Public",
        id: 1,
      },
      selectedSeries: {
        label: event.series_name,
        id: event.series_id,
      },
      eventDate: dateToISOFormat(event.date),
      startTime: convertTimeToISO(splitTimeRange(event.time)[0]),
      endTime: convertTimeToISO(splitTimeRange(event.time)[1]),
      tickets: event.tickets.map((ticket: any, index: number) => {
        return {
          ticketDateObj: {
            salesStartDate: dateToISOFormat(ticket.ticket_sale_start_date),
            salesEndDate: dateToISOFormat(ticket.ticket_sale_end_date),
            salesStartTime: convertTimeToISO(ticket.ticket_sale_start_time),
            salesEndTime: convertTimeToISO(ticket.ticket_sales_end_time),
          },
          ticketDetailsObj: {
            ticketName: ticket.name,
            ticketDescription: "",
            ticketCapacity: ticket.capacity,
            group_ticket_capacity: ticket.group_ticket_capacity,
            ticketStock: { id: index, label: ticket.stock },
            ticketPrice: ticket.price,
            ticketPurchaseLimit: { id: 1, label: "5" }, //chnage to obj
          },
          ticketCategory:
            ticket.category === "Single"
              ? ticketCategoryData[0]
              : ticketCategoryData[1],
          ticketType:
            ticket.price && ticket.price > 0
              ? ticketTypeData[1]
              : ticketTypeData[0],
          perks: ticket.ticket_perks,
          id: ticket.id,
          fid: index + 1,
        };
      }),
      eventLocation: {
        address: event.location.address ?? event.venue,
        lat: event.location.lat,
        city: event.location.city,
        state: event.location.state,
        country: event.location.country,
        lng: event.location.lng,
        geo: JSON.stringify({
          value: { lat, lng, address, city, state, country },
        }),
        venue: event.venue,
        venueGeo: "",
      },
      backgroundPosition: {
        x: 50,
        y: 50,
      },
      selectedImage: event.image_url,
      selectedFile: {},
      is_notification_enabled: event.is_notification_enabled,
    };

    dispatch(saveEvent(eventObj));
    router.push("/dashboard/events/edit");
  };

  return (
    <div className="p-1 cursor-pointer relative" ref={dropdownRef}>
      <div
        className="bg-partybank-red disabled:bg-gray-400 text-white font-[500] md:px-4 md:py-2 border-[1px] border-[#4E0916] rounded-md flex items-center gap-2 p-2"
        onClick={() => setOpenActionPanel(!openActionPanel)}
      >
        <p className="text-sm">Quick actions</p>
        {!openActionPanel ? <IoIosArrowDown /> : <IoIosArrowUp />}
      </div>

      {openActionPanel && (
        <div className="min-w-100 w-50 absolute min-h-10 rounded-lg -left-20 mt-2 bg-white p-2 border border-[#F6F5F5] shadow-lg">
          <div
            className="flex items-center gap-x-2 py-3 px-4 hover:bg-red-50 rounded"
            onClick={handleEdit}
          >
            <div className="w-6 h-6 bg-partybank-soft-grey p-1 rounded-full flex justify-center items-center">
              <FaRegEdit />
            </div>
            <span className="font-bold text-[0.9em]">Edit Event</span>
          </div>
          {event.is_event_with_ticket_sale === true && (

            <div className="flex items-center gap-x-2 py-3 px-4 hover:bg-red-50 rounded">
              <div className="w-6 h-6 bg-partybank-soft-grey p-1 rounded-full flex justify-center items-center">
                <RiDeleteBin6Line color="#E91B41" />
              </div>
              <span className="font-bold text-[0.9em]" onClick={handleDelete}>
                Delete Event
              </span>
            </div>
          )}
          <div className="flex items-center gap-x-2 py-3 px-4 hover:bg-red-50 rounded">
            <div className="w-6 h-6 bg-partybank-soft-grey p-1 rounded-full flex justify-center items-center">
              <IoTicketOutline />
            </div>
            <span className="font-bold text-[0.9em]">Test ticket purchase</span>
          </div>
          <hr />
          <div className="flex items-center gap-x-2 py-3 px-4 hover:bg-red-50 rounded">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={event.publication_state === "PUBLISHED"}
                onChange={togglePublish}
              />
              <div className="w-9 h-5 bg-gray-200 rounded-full peer-checked:bg-red-500"></div>
              <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-transform peer-checked:translate-x-4"></div>
            </label>
            <div className="font-bold text-[0.9em]">
              {isUnpublishOpen ? "Unpublish" : "Publish"} Event
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
