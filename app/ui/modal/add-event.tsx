import { BackButton } from "../series/buttons";
import Modal from "./base-modal";
import { events } from "@/app/lib/placeholder-data";

export default function AddEventModal() {
    const handleAddEvent = (event: any) => {
        console.log("Event added:", event);
    };

    return (
        <Modal isOpen={true} onClose={() => {}}>
            <div className="">
                <div className="flex items-center gap-3 px-6 py-4 border-0 border-b">
                    <BackButton href="/dashboard/series" />
                    <h3 className="text-xl font-bold line-clamp-1">My Events</h3>
                </div>
                <div className="h-[300px] overflow-y-auto">
                    {events.length > 0 ? (
                        <div className="px-6">
                            {events.map((event) => (
                                <div className="flex items-center justify-between gap-2 my-3 border-0 border-b pb-2">
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
                                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                                        onClick={() => handleAddEvent(event)}
                                    >
                                        Add Event
                                    </button>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div>
                            <p>No event</p>
                        </div>
                    )}
                </div>
            </div>
        </Modal>
    );
}

