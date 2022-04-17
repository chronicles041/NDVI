import React, { useEffect } from "react";
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

const defaultFarmDetail:FarmDetailProps = {
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
    <ToModal title={`Field Detail`}>
      {/* <ToModal title={`Field Detail - ${id}`}> */}
      <div className="flex flex-row">
        <div className="flex flex-row">
          <h2>{id}</h2> <br />
          {detail.farm_id}
          {detail.farmer_info.map(data => JSON.stringify(data))}
        </div>
      </div>
    </ToModal>
  );
};

export default DetailModal;
