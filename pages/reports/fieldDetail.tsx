import React, { useEffect } from "react";
import ToIcon, {
  IconSize,
  IconStyles,
  IconTypes,
} from "../../components/ToIcons";
import ToModal from "../../components/ToModal";
import ReportService from "./api/service";

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

  useEffect(() => {
    ReportService.FetchFieldReportID(id).then((res: FarmDetailProps) =>
      setReportDetail(res)
    );
  }, []);

  return (
    <ToModal title={"Field Details"}>
      <div className="grid w-full grid-cols-2  gap-4 p-5 h-full">
        <div className="bg-white border-2  overflow-hidden border-solid border-primary flex flex-col justify-center items-center   p-10 rounded-lg">
          <ToIcon
            type={IconTypes.Farm}
            size={IconSize.MD}
            style={IconStyles.Default}
          ></ToIcon>
          <div className="text-center font-normal text-secondary text-base mt-8 p-4">
            Farm id: {detail.farm_id}
          </div>
        </div>
        <div className="bg-white border-2 border-solid border-primary flex flex-col justify-center items-center   p-10 rounded-lg">
          <ToIcon
            type={IconTypes.Location}
            size={IconSize.MD}
            style={IconStyles.Default}
          ></ToIcon>
          <div className="text-center font-normal text-secondary text-base mt-8 p-4">
            Farm Name:{detail.farm_name}
          </div>
        </div>
        <div className="bg-white border-2 border-solid border-primary flex flex-col justify-center items-center   p-10 rounded-lg">
          <ToIcon
            type={IconTypes.Project}
            size={IconSize.MD}
            style={IconStyles.Default}
          ></ToIcon>
          <div className="text-center font-normal text-secondary text-base mt-8 p-4">
            Project Name: {detail.project_name}
          </div>
        </div>
        <div className="bg-white flex flex-col justify-center border-2 border-soild border-primary items-center   p-10 rounded-lg">
          <ToIcon
            type={IconTypes.Organiztion}
            size={IconSize.MD}
            style={IconStyles.Default}
          ></ToIcon>
          <div className="text-center font-normal text-secondary whitespace-nowrap  text-base mt-8 p-4">
            Organization Name: 
            <br></br>
            {detail.organization_name}
          </div>
        </div>
        <div className="bg-white flex flex-col justify-center items-center border-2 border-solid border-primary   p-10 rounded-lg">
        <ToIcon
            type={IconTypes.Land}
            size={IconSize.MD}
            style={IconStyles.Default}
          ></ToIcon>
        <div className="text-center font-normal text-secondary text-base mt-8 p-4 ">
          Farm Area: {detail.farm_area}
        </div>
        </div>
      </div>
    </ToModal>
  );
};

export default DetailModal;
