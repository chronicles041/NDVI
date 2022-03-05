import { ReactNode } from "react";
import { ToBar } from "../../components/ToCharts/Tobar";
import ToIcon, { IconSize, IconStyles, IconTypes } from "../ToIcons";

type Props = {
  children?: ReactNode;
  title: string;
};
const ToCard = ({ children, title }: Props) => {
  return (
    <>
      <div className="bg-white p-6  m-3 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-2 text-gray-800">{title}</h2>
        {children}
      </div>
    </>
  );
};

export default ToCard;
