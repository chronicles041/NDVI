/* eslint-disable react/jsx-no-undef */
import * as React from "react";
import Banner from "./assets/banner.svg";
import Dashboard from "./assets/dashboard.svg";
import User from "./assets/user.svg";
import Farm from "./assets/farm.svg";
import Report from "./assets/report.svg";
import Weather from "./assets/weather.svg";
import Image from "next/image";
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
import Location from "./assets/location.png";
import Project from "./assets/project.png";
import Organiztion from "./assets/organization.png";
import Loading from "./assets/loading.svg";
import Logout from "./assets/logout.svg";
import Profile from "./assets/profile.svg";
import Settings from "./assets/settings.svg";
import Activity from "./assets/activity.svg";
import Expert from "./assets/expert.svg";
import Wind from "./assets/wind.svg";
import Pressure from "./assets/pressure.svg";
import Humidity from "./assets/humidity.svg";
import Sunrise from "./assets/sunrise.svg";
import Sunset from "./assets/sunset.svg";
import Cloud from "./assets/cloud.svg";
// import styles from "./../../styles";
import Time from "./assets/time.svg";
import Done from "./assets/done.svg"
import Edit from "./assets/eidt.svg";
import Plus from "./assets/plus.svg";
import Start from "./assets/start.svg";
import Process from "./assets/process.svg";
import Layers from "./assets/layers.svg";

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
      <img
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
  Report: Report,
  Weather: Weather,
  Community: Community,
  Champions: Champions,
  States: States,
  Land: Land,
  Crop: Crop,
  Average: Average,
  Dressing: Dressing,
  Map: Map,
  Toggle: Toggle,
  Location: Location,
  Project: Project,
  Organiztion: Organiztion,
  Loading: Loading,
  Settings: Settings,
  Logout: Logout,
  Profile: Profile,
  Activity: Activity,
  Expert: Expert,
  Wind: Wind,
  Pressure: Pressure,
  Humidity: Humidity,
  Sunrise: Sunrise,
  Sunset: Sunset,
  Cloud: Cloud,
  Time:Time,
  Edit:Edit,
  Done:Done,
  Plus:Plus,
  Start:Start,
  Process:Process,
  Layers:Layers,
};
export const IconStyles = {
  Default: " ",
  Navigation: " ",
  Loading: "text-center",
  Selected: "fill-blue-500",
  FillColor: "fill-white",
};

export const IconSize = {
  DEFAULT: {
    height: 30,
    width: 30,
  },
  XXSM:{
    height:18,
    width:18,
  },
  XSM:{
    height: 28,
    width: 28,
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
    height: 38,
    width: 38,
  },
  LOADING: {
    width: 70,
  },
  NEW:{
    height: 90,
    width: 90,
  }
};

export default ToIcon;
