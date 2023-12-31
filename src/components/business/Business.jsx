import React from "react";
import { features } from "../../utils";
import BusinessCard from "../business-card/BusinessCard";

const Business = () => {
  return (
    <section
      id="product"
      className="flex flex-col   gap-4 md:justify-around bg-primary  md:flex-row px-4 py-5 md:px-6  md:py-7"
    >
      <div className="flex flex-col    py-3 px-4 md:py-6 gap-7 md:px-7 md:w-[550px]  sm:w-full ">
        <h3 className="text-[15px] sm:text-[20px] text-center font-semibold sm:font-bold text-white md:text-[25px]">
          O'z biznesingizni jonlantiring biz sizning biznesingizga <br />{" "}
          <span className="font-bold text-sky-500">HOMIY</span> lik qilamiz
        </h3>
        <p className="text-white/60">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis
          ipsa fugiat illo dicta beatae ad, eius assumenda labore architecto
          perferendis!
        </p>
        <div className="flex justify-start mt-4 ">
          <button className="flex flex-row py-3 px-4 cursor-pointer  transition-all hover:scale-110 justify-center items-center duration-300 font-semibold bg-teal-300 text-primary rounded-md">
            Boshlash
          </button>
        </div>
      </div>
      <ul className="flex flex-col gap-4  flex-1">
        {features.map((item) => {
          return <BusinessCard key={item.id} {...item} />;
        })}
      </ul>
    </section>
  );
};

export default Business;
