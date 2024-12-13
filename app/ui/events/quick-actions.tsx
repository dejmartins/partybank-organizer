import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoTicketOutline } from "react-icons/io5";

type QuickActionsProps = {
  setIsDeleteOpen: (value: boolean) => void;
  setIsUnpublishOpen: (value: boolean) => void;
  isUnpublishOpen: boolean;
};

export function QuickActions({
  setIsDeleteOpen,
  setIsUnpublishOpen,
  isUnpublishOpen,
}: QuickActionsProps) {
  const [openActionPanel, setOpenActionPanel] = useState(false);

  const handleDelete = () => {
    setIsDeleteOpen(true);
  };

  const togglePublish = () => {
    setIsUnpublishOpen(!isUnpublishOpen);
  };

  return (
    <>
      <div className="p-1 cursor-pointer relative">
        <div
          className="bg-partybank-red disabled:bg-gray-400 text-white font-[500] md:px-4 md:py-2 border-[1px] border-[#4E0916] rounded-md flex items-center gap-2 p-2"
          onClick={() => setOpenActionPanel(!openActionPanel)}
        >
          <p className='text-sm'>Quick actions</p>
          {openActionPanel ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </div>

        {openActionPanel && (
          <div className="min-w-100 w-50 absolute min-h-10 rounded-lg -left-20 mt-2 bg-white p-2 border border-[#F6F5F5] shadow-lg">
            <div className="flex items-center gap-x-2 py-3 px-4 hover:bg-red-50 rounded">
              <div className="w-6 h-6 bg-partybank-soft-grey p-1 rounded-full flex justify-center items-center">
                <FaRegEdit />
              </div>
              <span className="font-bold text-[0.9em]">Edit Event</span>
            </div>
            <div className="flex items-center gap-x-2 py-3 px-4 hover:bg-red-50 rounded">
              <div className="w-6 h-6 bg-partybank-soft-grey p-1 rounded-full flex justify-center items-center">
                <RiDeleteBin6Line color="#E91B41" />
              </div>
              <span className="font-bold text-[0.9em]" onClick={handleDelete}>
                Delete Event
              </span>
            </div>
            <div className="flex items-center gap-x-2 py-3 px-4 hover:bg-red-50 rounded">
              <div className="w-6 h-6 bg-partybank-soft-grey p-1 rounded-full flex justify-center items-center">
                <IoTicketOutline />
              </div>
              <span className="font-bold text-[0.9em]">
                Test ticket purchase
              </span>
            </div>
            <hr />
            <div className="flex items-center gap-x-2 py-3 px-4 hover:bg-red-50 rounded">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={isUnpublishOpen}
                  onChange={togglePublish}
                />
                <div className="w-9 h-5 bg-gray-200 rounded-full peer-checked:bg-red-500"></div>
                <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-transform peer-checked:translate-x-4"></div>
              </label>
              <div className="font-bold text-[0.9em]">Unpublish Event</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
