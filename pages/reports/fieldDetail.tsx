import React, { useEffect } from "react";
import ToIcon, {
  IconSize,
  IconStyles,
  IconTypes,
} from "../../components/ToIcons";
import ToModal from "../../components/ToModal";
import ReportService from "../../api/service";

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
    <ToModal onOpen={()=>onDetailClick()} title={"Detail"}>
      <div className='flex flex-col px-2  text-white items-center justify-center'>
      <div className="grid h-auto w-full grid-cols-2  gap-x-6 gap-y-6  ">
        <div className="bg-white max-h-52 border-2  overflow-hidden border-solid border-primary flex flex-col justify-center items-center   p-10 rounded-lg">
          <ToIcon
            type={IconTypes.Farm}
            size={IconSize.MD}
            style={IconStyles.Default}
          ></ToIcon>
          <div className="text-center font-semibold text-secondary text-base  mt-4">
            Farm id: {detail.farm_id}
          </div>
        </div>
        <div className="bg-white max-h-52 border-2 border-solid border-primary flex flex-col justify-center items-center   p-10 rounded-lg">
          <ToIcon
            type={IconTypes.Location}
            size={IconSize.MD}
            style={IconStyles.Default}
          ></ToIcon>
          <div className="text-center font-semibold text-secondary text-base  mt-4">
            Farm Name:{detail.farm_name}
          </div>
        </div>
        <div className="bg-white max-h-52 border-2 border-solid border-primary flex flex-col justify-center items-center   p-10 rounded-lg">
          <ToIcon
            type={IconTypes.Project}
            size={IconSize.MD}
            style={IconStyles.Default}
          ></ToIcon>
          <div className="text-center font-semibold text-secondary text-base  mt-4">
            Project Name: {detail.project_name}
          </div>
        </div>
        <div className="bg-white max-h-52 flex flex-col justify-center border-2 border-soild border-primary items-center   p-10 rounded-lg">
          <ToIcon
            type={IconTypes.Organiztion}
            size={IconSize.MD}
            style={IconStyles.Default}
          ></ToIcon>
          <div className="text-center font-semibold text-secondary whitespace-nowrap  text-base  mt-4">
            Organization Name:
            <br></br>
            {detail.organization_name}`
          </div>
        </div>
        <div className="bg-white max-h-52 flex flex-col justify-center items-center border-2 border-solid border-primary   p-10 rounded-lg">
          <ToIcon
            type={IconTypes.Land}
            size={IconSize.MD}
            style={IconStyles.Default}
          ></ToIcon>
          <div className="text-center font-semibold text-secondary text-base  mt-4 ">
            Farm Area: {detail.farm_area} Hectors
          </div>
        </div>
        <div className="bg-white max-h-52 flex flex-col justify-center items-center border-2 border-solid border-primary   p-10 rounded-lg">
          <ToIcon
            type={IconTypes.Crop}
            size={IconSize.MD}
            style={IconStyles.Default}
          ></ToIcon>
          <div className="text-center font-semibold text-secondary text-base  mt-4 ">
            Farm Note: {detail.farm_notes}
          </div>
        </div>   
      </div>
       <div className='flex flex-col w-full px-1 justify-start items-start py-2'>
          <div className="text-xl  my-4 py-2  font-medium border-b pr-8  text-black  border-opacity-20  border-b-black">Farmer Details</div>
        {detail.farmer_info.map((data) => (
          <div className="grid  grid-cols-2 gap-3 p-4 items-start w-auto">
            <div className="inline-flex items-center p-2 w-full  border-b  border-primary">
              <span className="inline-flex bg-secondary text-white rounded-full h-6 px-3 justify-center items-center">Name</span> 
              <span className="inline-flex px-2 font-semibold text-secondary">{data.farmer_name}</span>
            </div>
            <div className="inline-flex items-center p-2 w-full border-b  border-primary">
              <span className="inline-flex bg-secondary text-white rounded-full h-6 px-3 justify-center items-center">Phone</span> 
              <span className="inline-flex px-2 font-semibold text-secondary">{data.farmer_phone}</span>
            </div>
            <div className="inline-flex items-center p-2  w-full border-b  border-primary">
              <span className="inline-flex bg-secondary text-white rounded-full h-6 px-3 justify-center items-center">Gender</span> 
              <span className="inline-flex px-2 font-semibold text-secondary">{data.additional_fields.gender}</span>
            </div>
            <div className="inline-flex items-center p-2 w-full border-b  border-primary ">
              <span className="inline-flex bg-secondary text-white rounded-full h-6 px-3 justify-center items-center">Is Irrigated </span> 
              <span className="inline-flex px-2 font-semibold text-secondary">{data.additional_fields.is_irrigated}</span>
            </div>
            <div className="inline-flex items-center p-2 w-full border-b  border-primary">
              <span className="inline-flex bg-secondary text-white rounded-full h-6 px-3 justify-center items-center">Is Selfowned </span> 
              <span className="inline-flex px-2 font-semibold text-secondary">{data.additional_fields.self_owned}</span>
            </div>
            <div className="inline-flex items-center p-2 w-full border-b  border-primary">
              <span className="inline-flex bg-secondary text-white rounded-full h-6 px-3 justify-center items-center">Avilablity of Irrigation </span> 
              <span className="inline-flex px-2 font-semibold textsecondary">{data.additional_fields.irrigation_system}</span>
            </div>
            <div className="inline-flex items-center p-2 border-b  border-primar w-fully">
              <span className="inline-flex bg-secondary text-white rounded-full h-6 px-3 justify-center items-center">Contact Number </span> 
              <span className="inline-flex px-2 font-semibold text-secondary">{data.additional_fields.contact_number}</span>
            </div>
            <div className="inline-flex items-center p-2 border-b  border-primary w-full">
              <span className="inline-flex bg-secondary text-white rounded-full h-6 px-3 justify-center items-center">Source of Income </span> 
              <span className="inline-flex px-2 font-semibold text-secondary">{data.additional_fields.source_of_income}</span>
            </div>
            <div className="inline-flex items-center p-2 w-full border-b  border-primary">
              <span className="inline-flex bg-secondary text-white rounded-full h-6 px-3 justify-center items-center">Previous Disaster  </span> 
              <span className="inline-flex px-2 font-semibold text-secondary">{data.additional_fields.is_previous_disaster}</span>
            </div>
            <div className="inline-flex items-center p-2 border-b  border-primary w-full">
              <span className="inline-flex bg-secondary text-white rounded-full h-6 px-3 justify-center items-center">Major Plantation Crop </span> 
              <span className="inline-flex px-2 font-semibold text-secondary">{data.additional_fields.major_crop_plantation}</span>
            </div>
            <div className="inline-flex items-center border-b  border-primary w-full p-2">
              <span className="inline-flex bg-secondary text-white rounded-full h-6 px-3 justify-center items-center">Plantation Date</span> 
              <span className="inline-flex px-2 font-semibold text-secondary">{data.additional_fields.maize_plantation_date}</span>
            </div>
            <div className="inline-flex items-center p-2 border-b  border-primary w-full">
              <span className="inline-flex bg-secondary text-white rounded-full h-6 px-3 justify-center items-center">Parent Farm Tracking Code</span> 
              <span className="inline-flex px-2 font-semibold text-secondary">{data.additional_fields.parent_farm_tracking_code}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
    </ToModal>
  );
};

export default DetailModal;
