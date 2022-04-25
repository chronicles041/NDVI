import ToIcon, { IconSize, IconStyles, IconTypes } from "../ToIcons";
import Router from "next/router";

type StatProps = {
  title: string;
  icon: typeof IconTypes;
  count: number|string;
  path:string;
  buttonText:string;
};

export const Stats = ({ title, icon, count,path,buttonText }: StatProps) => (
  <div className="mb-10">  
    <div className="bg-white border-2 border-primary p-6 m-12 rounded-lg shadow-lg flex flex-col justify-center items-center h-full">
      <ToIcon type={icon} size={IconSize.MD} style={IconStyles.Default} />
      <div className="text-center font-semibold text-secondary text-3xl mt-8 p-4">
        {count} +
      </div>
      <div className="text-center font-semibold text-secondary text-lg mt-2 px-2">
        {title}
      </div>
      <button className='p-2 bg-primary text-white rounded-md shadow-md items-center mt-3 hover:bg-secondary transition duration-400 ease-in-out '
      onClick={()=>Router.push(path)}
      >{buttonText}</button>
    </div>
  </div>
);


{/* {Routes.map((route) => (
      <div className="bg-white border-2 border-primary p-6 m-12 rounded-lg shadow-lg flex flex-col justify-center ">
        <ToIcon
          type={route?.icon}
          size={IconSize.MD}
          style={IconStyles.Default}
        />
        <div className="text-center font-semibold text-secondary text-3xl mt-8 p-4">
          {route.data}
        </div>
        <div className="text-center font-semibold text-secondary text-lg mt-2 px-2">
          {route.title}
        </div>
      </div>
    ))} */}