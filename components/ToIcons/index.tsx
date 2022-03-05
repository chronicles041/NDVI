/* eslint-disable react/jsx-no-undef */
import * as React from "react";
import Banner from "./assets/banner.svg";
import Dashboard from "./assets/dashboard.svg";
import User from "./assets/user.svg";
import Farm from "./assets/farm.svg";
import Image from "next/image";
// import  './toicons.scss'
import styles from "./toicons.module.css";

interface IiconSize {
  height: number;
  width: number;
}

interface IiconType {
  src: string;
  height: number;
  width: number;
}

type Props = {
  type: IiconType | any;
  size: IiconSize | any;
  style: string;
};

const ToIcon = ({ type, size, style }: Props) => {
  return (
    <>
      <Image
        className={style}
        height={size.height}
        width={size.width}
        src={type.src}
        alt="logo"
      />
      {/* {JSON.stringify(style)} */}
    </>
  );
};
export const IconTypes = {
  Banner: Banner,
  Dashboard: Dashboard,
  User:User,
  Farm:Farm,
};

export const IconStyles = {
  Default: styles.default,
  Navigation: styles.navigation,
};

export const IconSize = {
  DEFAULT: {
    height: 30,
    width: 30,
  },
  SM: {
    height: 30,
    width: 30,
  },
  MD: {
    height: 70,
    width: 70,
  },
  LG: {
    height: 100,
    width: 100,
  },
  NAVICON: {
    height: 27,
    width: 27,
  },
};
export default ToIcon;
