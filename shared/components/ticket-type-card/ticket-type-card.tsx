import React from "react";
import { FaCheckCircle } from "react-icons/fa";
type propT = {
  data: {
    id: any;
    title: string;
  };
  value: {
    id: any;
    title: string;
  };
  setValue: Function;
};
export default function TickettypeCard({ data, value, setValue }: propT) {
  const { id, title } = data;
  return (
    <div
      className="min-w-52 p-3 flex items-center gap-3 border border-red-400 cursor-pointer"
      style={{
        backgroundColor: title === value.title ? "#FEEFF2" : "#fff",
        border:
          title === value.title ? "1px solid #FEEFF2 " : "1px solid #DDE0E3",
      }}
      onClick={() => setValue(data)}
    >
      <div>
        {title === value.title && <FaCheckCircle size={20} color="#E91B41" />}
      </div>
      <div>
        <h3
          className="text-[1.1remrem]"
          style={{
            color: title === value.title ? "#E91B41" : "",
            fontWeight: title === value.title ? "bold" : "normal",
          }}
        >
          {data.title}
        </h3>
      </div>
    </div>
  );
}
