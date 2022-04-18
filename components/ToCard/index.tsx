import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  title: string;
  type?: any;
};

const ToCard = ({ children, title, type }: Props) => {
  return (
    <>
      <div className="bg-white p-6  m-3 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-2 text-gray-800">
          {title} <br />
          {type}
        </h2>
        {children}
      </div>
    </>
  );
};

export default ToCard;
