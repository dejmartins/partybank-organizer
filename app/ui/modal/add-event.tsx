import { ArrowLongLeftIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Modal from "./base-modal";
import style from '@/app/ui/styles/modal.module.css'
import { Event } from "@/app/lib/definitions";
import EmptyState from "../dashboard/empty-state";

interface AddEventModalProps {
  isOpen: boolean;
  onClose: () => void;
  events: Array<Event>
}

export default function AddEventModal({ isOpen, onClose, events }: AddEventModalProps) {
  const handleAddEvent = (event: any) => {
    console.log("Event added:", event);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div>
        <div className="flex justify-between px-6 py-4 border-0 border-b">
            <div className="flex items-center gap-3">
                <button onClick={onClose} className="border cursor-pointer bg-[#F3F5F5] px-[10px] py-[5px] rounded-[15px]">
                    <ArrowLongLeftIcon className="w-[20px] h-[30px] stroke stroke-[3px]"/>
                </button>
                <h3 className="text-xl font-bold line-clamp-1">My Events</h3>
            </div>
            <MagnifyingGlassIcon className="w-[20px] stroke-[3px] cursor-pointer" />
        </div>

        <div className={`h-[350px] overflow-y-auto ${style.noScrollbar}`}>
          {events.length > 0 ? (
            <div className="px-6">
              {events.map((event, index) => (
                <div
                  key={event.id}
                  className={`flex items-center justify-between gap-2 my-3 pb-2 ${
                    index !== events.length - 1 ? 'border-b' : ''
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="min-w-[50px] min-h-[50px] border bg-cover bg-center rounded-[10px] overflow-hidden"
                      style={{
                        backgroundImage: `url("${event.image || '/defaultImage.png'}")`,
                      }}
                    ></div>
                    <div>
                      <h3 className="text-[17px] font-[600] line-clamp-2">{event.name}</h3>
                      <p className="text-[#080D18]">{event.date}</p>
                    </div>
                  </div>

                  <button
                    className="rounded-[4px] py-[2px] min-w-[110px] bg-[var(--pb-c-red)] text-white font-[700] border-[2px] border-black"
                    onClick={() => handleAddEvent(event)}
                  >
                    Add Event
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="my-10">
                <EmptyState title="No records yet!" />
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
}
