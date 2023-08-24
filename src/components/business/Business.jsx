import React from "react";
import { features } from "../../utils";
import BusinessCard from "../business-card/BusinessCard";

const Business = () => {
  return (
    <section className="flex flex-col gap-4 md:justify-around bg-primary  md:flex-row px-4 py-5 md:px-6  md:py-7">
      <div className="flex flex-col py-3 px-4 md:py-6 md:px-7 w-[550px]">
        <h3 className="text-[15px] sm:text-[18px] text-center font-semibold sm:font-bold text-white md:text-[25px]">
          O'z biznesingizni jonlantiring biz sizning biznesingizga <br />{" "}
          <span className="font-bold text-sky-500">HOMIY</span> lik qilamiz
        </h3>
        <p className="text-white/60">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis
          ipsa fugiat illo dicta beatae ad, eius assumenda labore architecto
          perferendis!
        </p>
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
