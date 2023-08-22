import React from "react";
import { logo, menu } from "../../assets";
import { navLinks } from "../../utils";

const Header = () => {
  return (
    <header
      className={`flex w-full justify-between items-center   bg-primary py-0.5 px-5   md:py-6 md:px-7`}
    >
      <img
        src={logo}
        alt="site-logo-img"
        className="w-[100px] cursor-pointer transition-all duration-200 hover:opacity-50 h-[100px] sm:w-[150px] sm:h-[100px] md:w-[200px] md:h-[100px]"
      />
      <nav>
        <ul className=" sm:flex hidden items-center   text-[12px] sm:text-[15px]  gap-2 sm:gap-4">
          {navLinks.map((item) => {
            return (
              <li
                className="cursor-pointer transition-all duration-400 hover:text-sky-700"
                key={item.id}
              >
                {item.title}
              </li>
            );
          })}
        </ul>
        <img
          src={menu}
          alt="site-nav-menu-img"
          className="sm:hidden flex w-[30px] h-[30px]"
        />
      </nav>
    </header>
  );
};

export default Header;
