import { ArrowLongLeftIcon } from "@heroicons/react/24/outline";
import Modal from "./base-modal";
import { Event } from "@/app/lib/definitions";

export default function EventDetailsModal({
  event,
  onClose,
}: {
  event: Event;
  onClose: () => void;
}) {
  return (
    <Modal isOpen={true} onClose={onClose}>
      <div>
        <div className="flex justify-between px-6 py-4 border-0 border-b">
            <div className="flex items-center gap-3">
                <button onClick={onClose} className="border cursor-pointer bg-[#F3F5F5] px-[10px] py-[5px] rounded-[15px]">
                    <ArrowLongLeftIcon className="w-[20px] h-[30px] stroke stroke-[3px]"/>
                </button>
                <h3 className="text-xl font-bold line-clamp-1">Event Details</h3>
            </div>
        </div>
        <div className="p-6">
            <h3 className="text-2xl font-bold mb-2">{event.name}</h3>
            <p>{event.description}</p>
        </div>
      </div>
    </Modal>
  );
}
