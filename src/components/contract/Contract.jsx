import React from "react";
import { card } from "../../assets";

const Contract = () => {
  return (
    <section className="flex flex-col ss:gap-5  md:flex-row md:py-6 md:px-10 bg-primary">
      <div className="flex flex-col gap-4 justify-center md:px-6 items-center lg:items-start">
        <p className="text-[20px]  ss:text-[25px] text-center md:text-start font-semibold px-3 ss:py-5 leading-[1.2] md:leading-[50px] lg:leading-[65px]  md:text-[45px]  text-white">
          Bir necha qadamda, oson kontrakt tuzish
        </p>
        <p className="font-arial lg:w-[500px] p-4 text-center  lg:text-normal  md:w-[300px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
          dignissimos recusandae enim assumenda dicta illo ut sunt sit provident
          corrupti.
        </p>
      </div>
      <div>
        <img src={card} alt="card-img" className="w-full ss:p-5 h-full" />
      </div>
    </section>
  );
};

export default Contract;
