import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";

import ToIcon, { IconSize, IconStyles, IconTypes } from "../ToIcons";

type Props = {
  label?: string;
  type: string;
  path: string;
  name: string;
};

const NavItem = ({ type, name, path }: Props) => {
  return (
    <>
      <li>
        <Link href={path}>
          <a className="sidebar-a-herf">
            <ToIcon
              type={type}
              size={IconSize.NAVICON}
              style={IconStyles.Navigation}
            />
            <span className="ml-4 text-xl font-medium text-secondary px-2">{name}</span>
          </a>
        </Link>
      </li>
    </>
  );
};

export default NavItem;
