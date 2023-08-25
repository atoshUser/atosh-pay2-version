import React from "react";
import { logo } from "../../assets";
import { footerLink } from "../../utils";
import FooterCard from "../footer-card/FooterCard";

const Footer = () => {
  return (
    <footer className="flex md:flex-row gap-3 md:gap-0  bg-primary py-7 px-10 flex-col">
      <div className="max-w-[400px]">
        <span>
          <img src={logo} alt="site-logo-img" className="w-[150px] h-[90px]" />
        </span>
        <p>To'lovlarni oson,ishonchli va xavfsiz qilishning yangi usuli</p>
      </div>
      <ul className="flex flex-row flex-1 gap-3 md:gap-0 justify-evenly">
        {footerLink.map((item) => {
          return <FooterCard key={item.title} obj={item} />;
        })}
      </ul>
    </footer>
  );
};

export default Footer;
