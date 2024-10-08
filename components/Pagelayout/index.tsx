import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const PageLayout = ({children} : Props) => {
  return (
    <div className="overflow-x-hidden mb-4  bg-white  h-full  ">
      <main>{children}</main>
    </div>
  );
};


export default PageLayout;


// className="p-2 flex flex-row justify-between  item-center font-Oxygen"

