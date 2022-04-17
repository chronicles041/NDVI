import * as React from "react";
import ToIcon, { IconSize, IconStyles, IconTypes } from "../ToIcons";
import NavItem from "./navitem";
import { Routes } from "./routes";
type NavbarProps = {
  isCollapse: boolean;
};
const Navbar = ({  isCollapse }: NavbarProps) => {
 

  return (
    <div className="w-full h-full absoulte sidebar border-r-2 shadow-custom-shadow">

      <div className="px-3 py-8 overflow-y-auto rounded dark:bg-gray-800 h-full">

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
