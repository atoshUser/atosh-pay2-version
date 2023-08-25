import React from "react";
import FeedbackCard from "../feedback/FeedbackCard";
import { feedbacks } from "../../utils";

const Testimonials = () => {
  return (
    <section
      id="clients"
      className="flex flex-col px-7 py-[20px]  pt-[70px] border-t-2 border-white   bg-primary md:py-8 md:px-7"
    >
      <div className="flex flex-col  md:flex-row justify-around items-center mb-[45px]">
        <div className="bg-slate-700  sm:mb-6 md:m-0   p-4 rounded-md">
          <h3 className="text-white font-bold text-[35px]">
            Odamlar biz haqimizda <br /> qanday fikrda?
          </h3>
        </div>
        <div className="max-w-[550px]">
          <p className="italic text-white/65">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            reprehenderit rem enim vitae quaerat, praesentium quae? Molestiae
            explicabo commodi dolore quas non modi cumque totam.
          </p>
        </div>
      </div>
      <ul className="flex md:flex-row  flex-wrap gap-5 justify-around">
        {feedbacks.map((item) => {
          return <FeedbackCard key={item.id} {...item} />;
        })}
      </ul>
    </section>
  );
};

export default Testimonials;
