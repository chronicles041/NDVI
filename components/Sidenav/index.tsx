import * as React from "react";
import ToIcon, { IconSize, IconStyles, IconTypes } from "../ToIcons";
import NavItem from "./navitem";
import { Routes } from "./routes";
type NavbarProps = {
  isCollapse: boolean;
};
const Navbar = ({  isCollapse }: NavbarProps) => {
 

  return (
    <div className="w-full h-full absoulte sidebar">

      <div className="pl-3 py-8 overflow-y-auto h-full">

        <ul className="space-y-2">
          {Routes.map((route,k) => (
            <NavItem
              path={route.path}
              name={route.name}
              isCollapse={isCollapse}
              icon={route.icon}
              key={k}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
