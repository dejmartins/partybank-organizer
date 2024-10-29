import React, { ReactNode } from "react";
import "./eventpreview.scss";
import { IoCloseCircleOutline } from "react-icons/io5";
type propT = {
  selectedImage: string;
  backgroundPosition: { x: number; y: number };
  eventName: string;
  eventDescription: string;
  setShow: Function;
};
export default function EventMobilePreview({
  selectedImage,
  backgroundPosition,
  eventName,
  eventDescription,
  setShow,
}: propT) {
  return (
    <div className="event-mob-prev-container flex justify-center w-full md:hidden">
      <div className="w-full">
        <div className="my-4 px-4 flex items-center justify-between">
          <h3 className="font-[700] text-[20px] mb-1">Preview</h3>
          <IoCloseCircleOutline size={24} onClick={() => setShow(false)} />
        </div>
        <div className="border flex flex-col p-4 h-[300px] w-full rounded-[10px]">
          <div
            className="h-[200px] border bg-cover bg-center rounded-[10px] overflow-hidden"
            style={{
              backgroundImage: `url("${selectedImage}")`,
              backgroundPosition: `${backgroundPosition.x}% ${backgroundPosition.y}%`,
            }}
          ></div>
          <div className="flex items-center justify-between pt-3 relative">
            <div className="mr-12">
              <h4 className="text-xl font-bold line-clamp-1">{eventName}</h4>
              <p className="text-[15px] line-clamp-2">{eventDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
