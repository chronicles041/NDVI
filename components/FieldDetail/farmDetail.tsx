import { IFieldReport } from "../../types/reportTypes";
import ToIcon, { IconSize, IconStyles, IconTypes } from "../ToIcons";

const FarmDetail = ({ detail }: any) => {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-y-8 ">
      <div className="grid grid-cols-2 w-full items-center justify-center">
        <div className="flex flex-col p-6 gap-y-3 text-center md:border-r ">
          <span className="text-2xl font-bold text-primary">
            {" "}
            {detail.farm_id}
          </span>
          <p className="text-sm font-semibold tracking-widest text-secondary uppercase ">
            Farm ID
          </p>
        </div>
        <div className="text-center flex flex-col p-6 gap-y-3 border-b">
          <span className="text-2xl font-bold text-primary">
            {detail.farm_name}
          </span>
          <p className="font-semibold tracking-widest text-secondary uppercase text-sm">
            farm name
          </p>
        </div>
        <div className="text-center flex flex-col p-6 gap-y-3 border-t border-b border-r">
          <span className="text-2xl font-bold text-primary">
          {detail.tole_name}
          </span>
          <p className="font-semibold tracking-widest text-secondary uppercase text-sm">
            Tole Name
          </p>
        </div>
        <div className="flex flex-col p-6 gap-y-3 text-center   ">
          <span className="text-2xl font-bold text-primary">
            {" "}
            {detail.ward_number}
          </span>
          <p className="text-sm font-semibold tracking-widest text-secondary uppercase ">
          Located Ward
          </p>
        </div>
        <div className="text-center flex flex-col p-6 gap-y-3 md:border-r" >
          <span className="text-2xl font-bold text-primary overflow-hidden tuncate">
            {detail.organization_name}
          </span>
          <p className="font-semibold tracking-widest text-secondary uppercase text-sm">
            Organization Name
          </p>
        </div>
        <div className="flex flex-col p-6 gap-y-3 text-center  md:border-t md:border-b ">
          <span className="text-2xl font-bold text-primary">
            {" "}
            {detail.farm_area} hectare
          </span>
          <p className="text-sm font-semibold tracking-widest text-secondary uppercase ">
            Farm Area
          </p>
        </div>
        <div className="text-center flex flex-col p-6 gap-y-3 border-t  border-r">
          <span className="text-2xl font-bold text-primary capitalize">
            {detail.farm_notes}
          </span>
          <p className="font-semibold tracking-widest text-secondary uppercase text-sm">
            Farm Note
          </p>
        </div>
        <div className="text-center flex flex-col p-6 gap-y-3">
          <span className="text-2xl font-bold text-primary capitalize">
            {detail.project_name}
          </span>
          <p className="font-semibold tracking-widest text-secondary uppercase text-sm">
            Project Name
          </p>
        </div>
      </div>
    </div>
  );
};

export default FarmDetail;
