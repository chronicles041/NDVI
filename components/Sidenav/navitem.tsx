import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";

import ToIcon, { IconSize, IconStyles, IconTypes } from "../ToIcons";

type Props = {
  label?: string;
  isCollapse: boolean;
  path: string;
  name: string;
  icon: string;
};



const NavItem = ({ isCollapse, name, path, icon }: Props) => {
  return (
    <>
      <li 
              data-toggle="tooltip"
              title={name}
      >
        <Link href={path}>
          <a className="sidebar-a-herf">
            <ToIcon
              type={icon}
              size={!isCollapse ? IconSize.NAVICON : IconSize.LARGENAVICON}
              style={IconStyles.Navigation}
            />
            <span  hidden={isCollapse} className="ml-4 text-xl font-medium text-secondary px-2">
              {name}
            </span>
          </a>
        </Link>
      </li>
    </>
  );
};

export default NavItem;
