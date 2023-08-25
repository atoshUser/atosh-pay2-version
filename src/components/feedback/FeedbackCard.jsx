import React from "react";
import { quotes } from "../../assets";

const FeedbackCard = ({ title, name, content }) => {
  return (
    <li className="flex flex-col relative p-4 cursor-pointer gap-4 h-[360px]    md:max-w-[350px] transition-all duration-300 hover:bg-slate-800">
      <span className="flex flex-row justify-center">
        <img
          src={quotes}
          alt="feedback-quotes-img"
          className="w-[40px] h-[40px] object-contain"
        />
      </span>
      <h3 className="text-[25px] text-white font-semibold">{title}</h3>
      <p className="text-white/60 ">{content}</p>

      <div className=" flex flex-1 justify-end  flex-col   ">
        <div className="flex flex-row  gap-3 items-center">
          <span className="p-3 rounded-full bg-sky-300/60">
            {name
              .split(" ")
              .map((c) => c[0].toUpperCase())
              .join(".")}
          </span>
          <span className="font-serif">{name}</span>
        </div>
      </div>
    </li>
  );
};

export default FeedbackCard;
