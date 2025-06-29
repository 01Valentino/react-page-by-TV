import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";

const Travel = ({ country, view, place, date, text }) => {
  return (
    <>
      <div className="flex gap-5 mt-4 mb-3">
        <div
          className="flex
        gap-2 items-center"
        >
          <FaLocationDot className="text-red-500" />
          <h3 className="tracking-widest text-lg font-medium">{country}</h3>
        </div>
        <a href="" className="underline text-gray-400 ">
          {view}
        </a>
      </div>
      <h2 className="font-bold text-3xl"> {place}</h2>
      <p className="mt-5 mb-2 font-bold text-lg">{date}</p>
      <p>{text}</p>
    </>
  );
};

export default Travel;
