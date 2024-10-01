import * as React from "react";
import ToIcon, { IconSize, IconStyles, IconTypes } from "../ToIcons";
import Router, { useRouter } from "next/router";

type HeaderProps = {
  changeCollapse: Function;
  isCollapse: boolean;
  showDropdown: boolean;
  handledivClick: Function;
};

const Header = ({ changeCollapse, isCollapse }: HeaderProps) => {
  const router = useRouter();
  const currentRoute = router.asPath === "/" ? "/dashboard" : router.asPath;
  const [showDropdown, setshowDropdown] = React.useState(false);
  const handleClick = () => {
    setshowDropdown(!showDropdown);
  };

  const onLogout = () => {
    localStorage.removeItem("token");
    Router.push("/login");
  };

  const userName = () => {
    let username :any= "Loading..";

    // if (typeof window !== "undefined") {
    //   console.log("You are on the browser");
    //   username = localStorage.getItem("username");
    //   // 👉️ can use localStorage here
    // } else {
    //   console.log("You are on the server");
    //   // 👉️ can't use localStorage
    // }

    // console.log("***Username", username);
    return ""
  };

  return (
    <header className=" relative p-2 flex flex-row justify-between items-center font-Oxygen">
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

        <img className="w-36 h-12 object-contain" src="logo.png" alt="logo"/>
      </div>

      <div className="flex flex-row justify-center item-center px-3 py-3">
        <div className=" flex flex-row gap-6 items-center w-full justify-center px-2">
          {/* <BsMoon className="w-7 h-7 cursor-pointer"></BsMoon>
          <BsBell className="w-7 h-7 cursor-pointer"></BsBell> */}
          <div className="flex gap-2 cursor-pointer items-center dropdown justify-center   outline-none focus:outline-none">
            <img
              className="w-12 h-12 rounded-full mr-2 object-cover border-2 ring-2 border-gray-400 ring-offset-2 ring-primary ring-opacity-80"
              src="https://random.imagecdn.app/500/150"
            ></img>
            <span className="text-lg  capitalize font-semibold text-secondary">
              {userName()}
            </span>
            <button
              className="text-lg font-semibold text-secondary"
              onClick={handleClick}
            >
              <svg
                className={`${
                  showDropdown === true
                    ? "h-7 w-7 fill-primary transform text-white rotate-180 transition duration-200 ease-in-out"
                    : "h-7 w-7 fill-primary transform text-white rotate-0 transition duration-200 ease-in-out"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </button>
            <ul
              className={`${
                showDropdown === true
                  ? "bg-white z-[100]  transition   flex flex-col gap-y-3 border-none top-20 right-8 w-[140px] px-2 py-2 rounded-md absolute origin-top"
                  : "hidden bg-white z-[100]  flex-col gap-y-3 border-none pt-4 left-[70px] w-[140px] top-10 px-2 py-2 rounded-md absolute origin-top"
              }`}
            >
              <li className="relative  hover:bg-primary hover:border-none hover:rounded-md border-b transition duration-200">
                <div className=" text-center gap-x-3  px-3 py-2  flex items-center outline-none focus:outline-none">
                  <ToIcon
                    type={IconTypes.Profile}
                    size={IconSize.SM}
                    style={IconStyles.FillColor}
                  ></ToIcon>
                  <button className="pr-1 text-black flex-1 hover:text-white">
                    Profile
                  </button>
                </div>
              </li>
              <li className="relative  hover:bg-primary hover:border-none hover:rounded-md border-b">
                <div className=" text-center gap-x-3  px-3 py-2  flex items-center outline-none focus:outline-none">
                  <ToIcon
                    type={IconTypes.Settings}
                    size={IconSize.SM}
                    style={IconStyles.Default}
                  ></ToIcon>
                  <button className="pr-1 text-black flex-1 hover:text-white">
                    Settings
                  </button>
                </div>
              </li>
              <li className="relative hover:bg-primary rounded-md  hover:rounded-md ">
                <div className=" text-center gap-x-3  px-3 py-2  flex items-center outline-none focus:outline-none">
                  <ToIcon
                    type={IconTypes.Logout}
                    size={IconSize.SM}
                    style={IconStyles.Default}
                  ></ToIcon>
                  <button
                    className="pr-1 text-black flex-1 hover:text-white"
                    type="button"
                    onClick={() => onLogout()}
                  >
                    Logout
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
