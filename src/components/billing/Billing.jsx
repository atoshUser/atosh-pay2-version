import React from "react";
import { bill } from "../../assets";

const Billing = () => {
  return (
    <section className="flex flex-col-reverse py-5  pt-[55px] px-4 bg-primary  md:flex-row md:py-5 md:px-10 ">
      <div className="md:h-[600px] h-[350px]">
        <img src={bill} alt="refactor-img" className="w-full   h-full" />
      </div>
      <div className="flex-1 flex  justify-center items-center">
        <p className="text-[25px] text-center font-semibold  md:font-bold md:text-[35px]">
          Hisob-kitob va fakturialni <br className="flex md:hidden" /> osongina
          boshqaring
        </p>
      </div>
    </section>
  );
};

export default Billing;
