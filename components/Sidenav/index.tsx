import * as React from "react";
import ToIcon, { IconSize, IconStyles, IconTypes } from "../ToIcons";
import NavItem from "./navitem";
import { Routes } from "./routes";


const Navbar = () => {
  const collapseClick = () => {
    console.log(" ",)
  }

  return (
    <div className="w-full h-full absoulte sidebar border-r-2">
      <div className="px-3 py-4 overflow-y-auto rounded dark:bg-gray-800 h-full">

        <a href="https://teamonetech.com/" className="flex pl-2.5 mb-5">
          <ToIcon
            type={IconTypes.Banner}
            style={IconStyles.Default}
            size={IconSize.LG}
          />
          <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">
            TeamOne 
          </span>
        </a>
      
        <ul className="space-y-2">
          {Routes.map((route) => (
            <NavItem
              path={route.path}
              name={route.name}
              type={route.icon}
              key={0}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
