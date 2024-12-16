import React, { FC, useState } from "react";
import { LuCircleSlash2 } from "react-icons/lu";

type ModalProps = {
  isOpen: boolean;
  unpublishReason: string;
  onClose?: () => void;
  setIsConfirmUnpublishOpen: (value: boolean) => void;
  setUnpublishReason: (value: string) => void;
};

const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  setIsConfirmUnpublishOpen,
  setUnpublishReason,
  unpublishReason
}) => {
  if (!isOpen) return null;

  const onProceed = () => {
    setIsConfirmUnpublishOpen(true); // Open confirmation modal
    if (onClose) onClose(); // Close current modal
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[4000] transition-opacity duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      } backdrop-blur-sm`}
    >
      <div
        className="bg-white rounded-[25px] p-6 max-w-md w-full transform transition-transform duration-300 scale-100 flex items-center flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-3 bg-green-50 rounded-full">
          <div className="bg-green-800 p-2 rounded-full">
            <LuCircleSlash2 className="text-3xl text-white" />
          </div>
        </div>
        <h4 className="text-2xl font-extrabold text-center mb-4 mt-2">
          Unpublish Event
        </h4>
        <p className="text-center text-gray-600 mb-6 text-sm">
          Provide us a reason for unpublishing this event by selecting from a
          list or entering a custom explanation to inform attendees.
        </p>

        <div className="my-4 w-full flex items-center justify-between gap-4">
          <div className="flex gap-3 flex-col">
            <button
              className={
                unpublishReason === "event_postponed"
                  ? "bg-partybank-dark-brown text-white rounded px-2 py-2 text-sm font-extrabold"
                  : "bg-[rgba(0, 0, 0, 0.5)] text-partybank-light-black border-2 border-[rgba(0, 0, 0, 0.5)] rounded px-2 py-2 text-sm font-extrabold"
              }
              onClick={() => setUnpublishReason("event_postponed")}
            >
              Event postponed
            </button>
            <button
              className={
                unpublishReason === "event_canceled"
                  ? "bg-partybank-dark-brown text-white rounded px-2 py-2 text-sm font-extrabold"
                  : "bg-[rgba(0, 0, 0, 0.5)] text-partybank-light-black border-2 border-[rgba(0, 0, 0, 0.5)] rounded px-2 py-2 text-sm font-extrabold"
              }
              onClick={() => setUnpublishReason("event_canceled")}
            >
              Event canceled
            </button>
          </div>
          <textarea
            className="h-[6em] w-[60%] border-2 rounded-md p-2 border-[rgba(0, 0, 0, 0.8)] text-sm outline-none"
            placeholder="Enter custom reason"
            onChange={(e: any)=> setUnpublishReason(e.target.value)}
          ></textarea>
        </div>

        <div className="flex gap-4 mt-4 w-[100%]">
          <button
            className="flex-1 bg-red-200 font-extrabold py-3 px-8 rounded-md hover:bg-red-100"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="flex-1 bg-red-600 text-white font-extrabold py-2 px-4 rounded-md hover:bg-red-700"
            onClick={onProceed}
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
