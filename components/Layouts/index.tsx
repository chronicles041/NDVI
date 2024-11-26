import React, { ReactNode, useState } from "react";
import Head from "next/head";
import Navbar from "../Sidenav";
import Header from "../Header";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "NDVI Web Application" }: Props) => {
  const [isCollapse, changeCollapse] = useState(false);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* <div className="min-h-screen flex flex-row overflow-y-hidden overflow-x-hidden font-Oxygen"> */}
      <div className="h-screen flex flex-col overflow-hidden font-Oxygen">
        <div className="w-full ">
          <Header
            changeCollapse={() => changeCollapse(!isCollapse)}
            isCollapse={isCollapse}
          />{" "}
        </div>
        <div className="flex flex-row">
          <div
            className={`h-screen ${!isCollapse ? "basis-1/5 transition-all duration-200 ease-out delay-50  " : "delay-400 duration-400 ease-in-out transition-all transform basis-[10%] "}`}
          >
            <Navbar isCollapse={isCollapse} />
          </div>
          <div
            className={`h-screen overflow-auto   ${
              !isCollapse ? "basis-4/5" : "basis-[90%]"
            }`}
          >
            <div
              className={
                " bg-gray-300 w-full"
              }
            >
              <main className="p-4 min-h-screen  bg-gray-300 grow overflow-hidden">
                {children}
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;


