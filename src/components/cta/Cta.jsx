import React from "react";
import style from "./cta.module.css";
const Cta = () => {
  return (
    <section className="flex bg-primary p-[20px] pt-[70px]">
      <div
        className={`flex md:flex-row flex-wrap w-full  justify-around rounded-2xl  ${style.bgGradient}`}
      >
        <div className={`flex flex-col max-w-[700px]  rounded-md p-5  gap-7`}>
          <h3 className="text-[30px] font-bold">Xizmatlarni sinab ko'rish.</h3>
          <p className="text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            iste aliquam pariatur cum, accusamus saepe ex eos? Delectus
            reprehenderit adipisci fugit rerum, pariatur voluptate harum!
          </p>
        </div>
        <div className="flex flex-col  justify-center">
          <button className="flex p-3 rounded-2xl hover:scale-105  transition-all duration-300 bg-slate-600 text-purple-400">
            Boshlash
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cta;
