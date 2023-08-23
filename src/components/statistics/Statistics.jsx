import React from "react";
import { statistics } from "../../utils";

const Statistics = () => {
  return (
    <section className="lg:py-4 lg:px-5 bg-primary">
      <ul className="flex flex-col gap-3  md:flex-row px-5 py-3 justify-start  md:justify-around">
        {statistics.map((item, id) => {
          return (
            <li
              key={item.id}
              className="flex flex-col leading-[15px]  gap-6 items-center"
            >
              <p className="text-light-400 flex flex-row whitespace-nowrap  text-[13px] md:text-[25px] font-semibold">
                {item.title}
              </p>
              <span className="lg:text-[40px] md:text-[25px] text-sky-600 font-bold">
                {item.value}
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Statistics;
