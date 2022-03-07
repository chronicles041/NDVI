import React, { ReactNode, useState } from "react";
import Head from "next/head";
import Navbar from "../Sidenav";
import Header from "../Header";
import { useTranslation } from "next-i18next";
import { Footer } from "../Footer";

type Props = {
  children?: ReactNode;
  title?: string;
};
const Layout = ({ children, title = "Some Information" }: Props) => {
  const [isCollapse, changeCollapse] = useState(true);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
     <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css" />

      </Head>
      <div className="min-h-screen flex flex-row overflow-y-hidden overflow-x-hidden font-Oxygen">
        <div className=" h-screen basis-1/5">
          <Navbar />
        </div>
        <div className="h-screen basis-4/5 ">
          {/* <div className="flex flex-col justify-between"> */}
          <div className="flex flex-col h-screen justify-between">
            {/* remove h-screen above and try to reduce header height  / Class*/}
            <div className="flex-none sticky">
              <Header title={title} />
            </div>
            <div className={"overflow-y-auto overflow-x-hidden container bg-gray-200 w-full"}>
              <main className="mb-auto p-4 min-h-screen bg-gray-200 grow">
                {children}
              </main>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
