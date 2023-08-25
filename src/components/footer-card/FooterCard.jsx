import React from "react";

const FooterCard = ({ obj }) => {
  console.log(obj);
  return (
    <li className="flex flex-col gap-3 md:gap-5">
      <h3 className="text-[20px] sm:text-[25px] font-semibold">{obj.title}</h3>
      {obj.links.map((item) => {
        return (
          <a
            className="text-white hover:text-slate-600"
            key={item.name}
            href={item.url}
          >
            {item.name}
          </a>
        );
      })}
    </li>
  );
};

export default FooterCard;
