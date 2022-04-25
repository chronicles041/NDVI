import React, { useEffect } from "react";
import ToIcon, {
  IconSize,
  IconStyles,
  IconTypes,
} from "../ToIcons";
import ToModal from "../ToModal";
import ReportService from "../../api/service";
import FarmDetail from "./farmDetail";
import FarmersDetail from "./farmerDetail";
import PlantationDetail from "./plantationDetail";

type FarmDetailProps = {
  farm_id: number;
  farm_name: string;
  farm_area: number;
  farmer_info: [];
  project_name: string;
  organization_name: string;
};

const defaultFarmDetail: FarmDetailProps = {
  farm_id: 0,
  farm_name: "name",
  farm_area: 1,
  farmer_info: [],
  project_name: "string",
  organization_name: "string",
};

const DetailModal = ({ id }: { id: number }) => {
  const [detail, setReportDetail] =
    React.useState<FarmDetailProps>(defaultFarmDetail);

  const [activeItem, setActiveItem] = React.useState("Farm Detail");
  // useEffect(() => {
  //   ReportService.FetchFieldReportID(id).then((res: FarmDetailProps) =>
  //     setReportDetail(res)
  //   );
  // }, []);

  const onDetailClick = () => {
    ReportService.FetchFieldReportID(id).then((res: FarmDetailProps) =>
      setReportDetail(res)
    );
  };

  return (
    <ToModal onOpen={() => onDetailClick()} title={"Detail"}>
      <div className="flex sticky gap-x-2 top-0">
        <div className="flex-1 ">
         <button
            onClick={() => setActiveItem("Farm Detail")}
            className={`${activeItem==='Farm Detail'?'text-center block w-full text-black border-b-2 border-primary py-2 px-4 ':'text-center block w-full text-black  py-2 px-4 '}`}
          >
            Farm Detail
         </button>
        </div>
        <div className="flex-1 ">
         <button
            onClick={() => setActiveItem("Farmers")}
            className={`${activeItem==='Farmers'?'text-center block w-full text-black border-b-2 border-primary py-2 px-4 ':'text-center block w-full text-black  py-2 px-4 '}`}
           
          >
            Farmers Detail
         </button>
        </div>
        <div className="text-center flex-1">
         <button
            onClick={() => setActiveItem("Plantation")}
            className={`${activeItem==='Plantation'?'text-center block w-full text-black border-b-2 border-primary py-2 px-4 ':'text-center block w-full text-black  py-2 px-4 '}`}
          >
            Plantation Detail
         </button>
        </div>
      </div>
      <br />

      <div
        className={` ${
          activeItem !== "Farm Detail" ? "hidden" : "flex"
        } flex flex-col px-2   items-center justify-center`}
      >
        <FarmDetail
          detail={detail}
        />
      </div>

      <div
        className={`${
          activeItem !== "Farmers" ? "hidden" : "flex"
        } flex flex-col px-2   items-center justify-center`}
      >
        <FarmersDetail 
           detail={detail}
        />
      </div>

      <div
        className={`${
          activeItem !== "Plantation" ? "hidden" : "flex"
        } flex flex-col px-2  items-center justify-center`}
      >
        <PlantationDetail 
           detail={detail}
        />
      </div>


    </ToModal>
  );
};

export default DetailModal;
