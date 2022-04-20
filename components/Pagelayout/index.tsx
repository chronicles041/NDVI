import { ReactNode } from "react";
import { ToBar } from "../../components/ToCharts/Tobar";
import ToIcon, { IconSize, IconStyles, IconTypes } from "../ToIcons";


type Props = {
  children: ReactNode;
};

const PageLayout = ({children} : Props) => {
  return (
    <div className="overflow-y-auto overflow-x-hidden mb-4  bg-white  h-full  ">
      <main>{children}</main>
    </div>
  );
};


export default PageLayout;


// className="p-2 flex flex-row justify-between  item-center font-Oxygen"

