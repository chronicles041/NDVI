import * as React from "react";
import { BsMoon, BsBell } from "react-icons/bs";
import ListItem from "../ListItem";
import { User } from "../../interfaces";
import { useTranslation } from "next-i18next";

type Props = {
  title?: string;
  changeCollapse?: any;
  currentCollapse?: boolean;
};

const Header = ({ title, changeCollapse, currentCollapse }: Props) => {
  const clickCollapse = () => {
    changeCollapse(!currentCollapse);
  };

  return (
    <header className="p-2 flex flex-row justify-between  item-center font-Oxygen align-middle">
      <div className="flex flex-row justify-center item-center px-3 py-3">
        <div className="xl:w-96">
          <div className="input-group relative flex items-stretch w-full mb-4">
            <input
              type="search"
              className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-secondary bg-white bg-clip-padding border border-solid border-gray-300 rounded-xl mr-1 transition ease-in-out m-0 focus:text-secondary focus:bg-white focus:border-primary focus:outline-none"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon3"
            />
            <button
              className="btn inline-block px-6 py-2  bg-primary text-white font-medium text-xs leading-tight uppercase rounded-xl hover:bg-secondary focus:outline-none focus:ring-0 transition duration-300 ease-in-out"
              type="button"
              id="button-addon3"
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center item-center px-3 py-3">
        <div className="relative flex flex-row gap-10 items-center w-full justify-center">
          <BsMoon className="w-7 h-7 cursor-pointer"></BsMoon>
          <BsBell className="w-7 h-7 cursor-pointer"></BsBell>
          <div className="flex gap-5 px-2 cursor-pointer items-center justify-center">
            <span className="text-xl font-semibold text-secondary px-2">
              Mr. Test user
            </span>
            <img
              className="w-12 h-12 rounded-full  object-cover border-2 ring-2 border-secondary ring-offset-4 ring-primary ring-opacity-80"
              src="defaultprofile.png"
            ></img>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
