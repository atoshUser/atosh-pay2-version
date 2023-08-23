import React, { useState } from "react";
import { close, logo, menu } from "../../assets";
import { navLinks } from "../../utils";
import style from "./header.module.css";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("home");
  const toggleHandler = () => {
    setToggle((prevState) => !prevState);
  };
  const setActiveHandler = (idx) => {
    setActive(idx);
  };
  return (
    <header
      className={`flex w-full justify-between items-center   bg-primary py-0.5 px-5   md:py-6 md:px-7`}
    >
      <img
        src={logo}
        alt="site-logo-img"
        className="w-[120px] cursor-pointer transition-all duration-200 hover:opacity-50 h-[100px] sm:w-[150px] sm:h-[100px] md:w-[200px] md:h-[100px]"
      />
      <nav>
        <ul className=" sm:flex hidden items-center    text-[12px] sm:text-[15px]  gap-2 sm:gap-4">
          {navLinks.map((item) => {
            return (
              <li
                className={`cursor-pointer  transition-all  duration-400 hover:text-sky-700 ${
                  active == item.id && `border-b-4  border-indigo-500`
                }`}
                key={item.id}
                onClick={() => setActiveHandler(item.id)}
              >
                {item.title}
              </li>
            );
          })}
        </ul>
        <img
          src={`${!toggle && menu}`}
          onClick={toggleHandler}
          alt="site-nav-menu-img"
          className={`${
            toggle && `hidden`
          }  sm:hidden  flex w-[30px] h-[30px] `}
        />
      </nav>

      <div
        className={` ${
          toggle ? "flex" : "hidden"
        } absolute flex sm:hidden w-full z-30 top-20 p-5 left-0 right-0  ${
          style.sidebar
        } ${style.bgBlackPrimary}`}
      >
        <img
          src={`${toggle && close}`}
          onClick={toggleHandler}
          alt="site-nav-menu-img"
          className={`${
            !toggle && `hidden`
          } sm:hidden absolute top-[-5px] right-0 flex w-[15px] h-[15px]`}
        />
        <ul className={`  w-full flex items-center  justify-evenly  `}>
          {navLinks.map((item) => {
            return (
              <li
                className={`cursor-pointer    text-[13px] ss:text-[15px] ${
                  active == item.id &&
                  ` text-sky-500 transition-all ease-in  delay-300  duration-300 `
                }`}
                key={item.id}
                onClick={() => setActiveHandler(item.id)}
              >
                {item.title}
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default Header;
