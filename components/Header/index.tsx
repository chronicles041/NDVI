import * as React from "react";
import { BsMoon, BsBell } from "react-icons/bs";
import ListItem from "../ListItem";
import { User } from "../../interfaces";
import { useTranslation } from "next-i18next";
import ToIcon, { IconSize, IconStyles, IconTypes } from "../ToIcons";
import { useRouter } from "next/router";

type HeaderProps = {
  changeCollapse: Function;
  isCollapse: boolean;
};

const Header = ({ changeCollapse, isCollapse }: HeaderProps) => {
  const router = useRouter();
  const currentRoute = router.asPath === '/'? '/dashboard':router.asPath;
  return (
    <header className="p-2 flex flex-row justify-between items-center font-Oxygen">
      <div className="flex flex-row justify-center items-center gap-x-4 px-3 py-3 ">
        <div
          className={` ${!isCollapse ? "text-right" : " text-center"}`}
          onClick={() => changeCollapse()}
        >
          <ToIcon
            type={IconTypes.Toggle}
            size={IconSize.SM}
            style={IconStyles.Navigation}
          />
        </div>

        <img className="w-36 h-12  " src="logo.png"></img>
        <span className={"  text-opacity-60 font-bold capitalize  ml-4 text-2xl  text-secondary px-2"}>
          {currentRoute.substring(1)}
        </span>
      </div>

      <div className="flex flex-row justify-center item-center px-3 py-3">

        <div className="relative flex flex-row gap-6 items-center w-full justify-center">
          {/* <BsMoon className="w-7 h-7 cursor-pointer"></BsMoon>
          <BsBell className="w-7 h-7 cursor-pointer"></BsBell> */}
          <div className="flex gap-4 cursor-pointer items-center justify-center">
            <img
              className="w-12 h-12 rounded-full  object-cover border-2 ring-2 border-gray-400 ring-offset-2 ring-primary ring-opacity-80"
              src="https://random.imagecdn.app/500/150"
            ></img>
            <span className="text-lg font-semibold text-secondary pr-3">
              CIMMYT Admin
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
