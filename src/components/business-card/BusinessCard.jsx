import React from "react";

const BusinessCard = ({ icon, title, content }) => {
  return (
    <li className="flex flex-row gap-3 items-center cursor-pointer py-3 px-5 hover:bg-gray-700 transition-all duration-500 rounded-md">
      <span className="rounded-full p-3 bg-sky-700">
        <img src={icon} alt={title} className="w-[30px] h-[30px]" />
      </span>
      <div className="flex flex-col">
        <h4 className="text-white text-[25px] font-semibold">{title}</h4>
        <p className="text-white/65">{content}</p>
      </div>
    </li>
  );
};

export default BusinessCard;
