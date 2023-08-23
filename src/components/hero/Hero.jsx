import React from "react";
import { discount, robot } from "../../assets";
import style from "./hero.module.css";
const Hero = () => {
  return (
    <section className="flex flex-row justify-between relative    md:gap-4 dd:gap-0  bg-primary   dd:justify-between lg:justify-around dd:items-center gap-4 px-5 py-5 md:py-8   lg:px-12 lg:py-6 ">
      <div>
        <img
          src={robot}
          alt="site-hero-robot-img"
          className="md:w-[400px] w-[100p] h-[150px] sm:w-[250px] sm:h-[200px]  md:h-[350px] rounded-2xl object-center dd:h-[500px]"
        />
      </div>
      <div className="flex flex-col flex-1 justify-center md:flex-1 lg:flex-none items-center">
        <div className="flex flex-row absolute top-[-10px] left-[90px]  md:absolute md:top-[-10px] md:left-[250px] lg:relative lg:top-0 lg:left-0   items-center bg-slate-500 px-3 rounded-lg flex-nowrap">
          <img
            src={discount}
            alt="discount-img"
            className="w-[20px] h-[20px]  md:w-[40px] md:h-[30px] lg:w-[70px] lg:h-[45px]"
          />
          <p className="flex text-[12px] md:text-[25px]   flex-row gap-1 md:gap-3 text-lightWhite/60">
            <span className="text-white">20%</span>
            Chegirma
            <span className="text-white ">1 Oylik</span>
            Xisob uchun
          </p>
        </div>
        <h1 className="sm:text-[40px]  dd:text-[50px] lg:text-[65px] sm:leading-[1.2] lg:mt-7">
          Yangi Avlod <br />
          <span className={`${style.textGradient}`}>To'lov Usuli</span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;