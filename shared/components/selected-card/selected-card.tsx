import React, { useEffect, useState } from "react";
import { FaRegCircle } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

type PropT = {
  data: {
    label: string;
    description: string;
    id: any;
  };
  value: any;
  setvalue: Function;
};
export default function SelectedCard({ data, setvalue, value }: PropT) {
  const [isSelected, setisSelected] = useState(false);

  return (
    <div
      className="w-full md:w-[48%] p-3 rounded-xl cursor-pointer flex items-center gap-4"
      style={{
        border:
          value.id === data.id ? "1px solid #E91B41" : "1px solid #F4F5F6",
        background: value.id === data.id ? "#FFF2F4" : "#F4F5F6",
      }}
      onClick={() => {
        setvalue(data);
      }}
    >
      <div>
        {value.id === data.id ? (
          <FaCheckCircle size={20} color="#E91B41" />
        ) : (
          <FaRegCircle size={20} />
        )}
      </div>
      <div>
        <h4
          className="font-semibold text-lg"
          style={{
            color: value.id === data.id ? "#E91B41" : "",
          }}
        >
          {data.label}
        </h4>
        <p className="text-[0.88rem]">{data.description}</p>
      </div>
    </div>
  );
}
