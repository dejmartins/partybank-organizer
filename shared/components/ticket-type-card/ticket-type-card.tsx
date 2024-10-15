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
        backgroundColor: id === value.id ? "#FEEFF2" : "#fff",
        border: id === value.id ? "1px solid #FEEFF2 " : "1px solid #DDE0E3",
      }}
      onClick={() => setValue(data)}
    >
      <div>
        {id === value.id && <FaCheckCircle size={20} color="#E91B41" />}
      </div>
      <div>
        <h3
          className="text-xl"
          style={{
            color: id === value.id ? "#E91B41" : "",
            fontWeight: id === value.id ? "bold" : "normal",
          }}
        >
          {data.title}
        </h3>
      </div>
    </div>
  );
}
