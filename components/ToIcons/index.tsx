/* eslint-disable react/jsx-no-undef */
import * as React from "react";
import Banner from "./assets/banner.svg";
import Dashboard from "./assets/dashboard.svg";
import User from "./assets/user.svg";
import Farm from "./assets/farm.svg";
import Activity from "./assets/activity.svg";
import Weather from "./assets/weather.svg";
import Image from "next/image";
// import  './toicons.scss'
import styles from "./toicons.module.css";
import Community from "./assets/community.svg";
import Champions from "./assets/champions.svg";
import States from "./assets/states.svg";
import Land from "./assets/land.svg";
import Crop from "./assets/crop.svg";
import Average from "./assets/average.svg";
import Dressing from "./assets/dressing.svg";
import Map from "./assets/map.svg";
import Toggle from "./assets/toggle.svg";
import { title } from "process";

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
  text?: string;
};

const ToIcon = ({ text, type, size, style }: Props) => {
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
  User: User,
  Farm: Farm,
  Activity: Activity,
  Weather: Weather,
  Community: Community,
  Champions: Champions,
  States: States,
  Land: Land,
  Crop: Crop,
  Average: Average,
  Dressing: Dressing,
  Map: Map,
  TOGGLE: Toggle,
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
    height: 500,
    width: 500,
  },
  NAVICON: {
    height: 27,
    width: 27,
  },
  LARGENAVICON: {
    height: 40,
    width: 40,
  },
};
export default ToIcon;
