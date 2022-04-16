import * as React from "react";
import ToIcon, { IconSize, IconStyles, IconTypes } from "../ToIcons";
import NavItem from "./navitem";
import { Routes } from "./routes";
type NavbarProps = {
  changeCollapse: Function;
  isCollapse: boolean;
};
const Navbar = ({ changeCollapse, isCollapse }: NavbarProps) => {
 

  return (
    <div className="w-full h-full absoulte sidebar border-r-2 shadow-custom-shadow">
      <div
        className={`pt-2 pr-1 ${!isCollapse ? " text-right" : " text-center"}`}
        onClick={() => changeCollapse()}
      >
        <ToIcon
          type={IconTypes.Toggle}
          size={IconSize.SM}
          style={IconStyles.Navigation}
        
        />
      </div>
      <div className="px-3 py-4 overflow-y-auto rounded dark:bg-gray-800 h-full">
        <img
          hidden={isCollapse}
          src="banner.svg"
          className="w-auto h-auto object-cover mb-6"
        ></img>

        <ul className="space-y-2">
          {Routes.map((route) => (
            <NavItem
              path={route.path}
              name={route.name}
              isCollapse={isCollapse}
              icon={route.icon}
              key={0}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
