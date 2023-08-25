import React from "react";
import { clients } from "../../utils";

const Clients = () => {
  return (
    <ul className="flex flex-row bg-primary py-[55px] justify-evenly flex-wrap">
      {clients.map((item) => {
        return (
          <li key={item.id}>
            <img
              src={item.logo}
              alt="our-client-logo"
              className="w-[200px] object-contain h-[78px]"
            />
          </li>
        );
      })}
    </ul>
  );
};

export default Clients;
