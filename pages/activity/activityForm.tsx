import React, { useEffect } from "react";
import ToDropdown from "../../components/ToDropdown";
import ToModal from "../../components/ToModal";
import ReportService from "../../api/service";
import { IFieldFilters } from "../../types/reportTypes";

const ActivityForm = () => {
  const defaultFilters: IFieldFilters = {
    search: " ",
    limit: 100,
    offset: 0,
    project__id: 1,
    // organization__id: 2,
    arm_area_min: "",
    farm_area_max: "",
    tole_name: "",
    has_season: true,
  };
  const [filterParams, setFilterParams] =
    React.useState<IFieldFilters>(defaultFilters);
  //   const [filterParams, setFilterParams] = React.useState<IFieldFilters>(defaultFilters);

  const [users, setUsers] = React.useState<any>([
    { value: 0, title: "No Users Found" },
  ]);
  const [farmData, setFarmData] = React.useState<any>([
    { value: 0, title: "No Users Found" },
  ]);

  const [reportType, setReportTypes] = React.useState<any>([
    { value: 1, title: "Field Visit" },
    { value: 2, title: "Data Analysis" },
  ]);

  const [priorityType, setPriorityType] = React.useState<any>([
    { value: 1, title: "Normal" },
    { value: 2, title: "Medium" },
    { value: 3, title: "High" },
  ]);
  //   const [detail, setReportDetail] =
  //     React.useState<FarmDetailProps>(defaultFarmDetail);

  //   const [activeItem, setActiveItem] = React.useState("Farm Detail");
  useEffect(() => {
    ReportService.FetchUsers().then((res: any) => setUsers(res));
    ReportService.FetchDropdownFarm(filterParams).then((res) => {
      // console.log("**RES",res)
      setFarmData(res);
    });
  }, []);

  const onDetailClick = () => {
    // ReportService.FetchFieldReportID(id).then((res: FarmDetailProps) =>
    //   setReportDetail(res)
    // );
  };

  return (
    <ToModal onOpen={() => onDetailClick()} title={"Add Task"}>
      <div className="flex flex-col w-full gap-y-6">
      <div className="mb-4">
      <input className=" rounded w-full   text-secondary leading-tight focus:border-2 focus:border-primary focus:ring-transparent h-16" 
          id="username"
          type="text"
          placeholder="Activity Title"
        />
      </div>
      <div className="grid grid-cols-2 items-center justify-center gap-3 w-full mb-2">
      <ToDropdown options={users} label="Assign To" />
      <ToDropdown options={farmData} label="Select Farm" />
      <ToDropdown options={reportType} label="Activity Type" />
      <ToDropdown options={priorityType} label="Priority" />
      </div>
      <div className="flex flex-col gap-y-4">
        Description
        <textarea
          className="focus:border-2 focus:border-primary focus:ring-transparent rounded w-full py-2 px-3 text-secondary leading-tight  h-3/4"
          id="username"
          rows={6}
          placeholder="Add Description to Activity"
        />
      </div>
      <div className="flex flex-row gap-x-6">
        <div className="flex-1">
          <span className="text-base font-medium text-secondary">Start Date</span>
          <input
            className=" rounded w-full  text-secondary leading-tight focus:border-2 focus:border-primary focus:ring-transparent"
            id="username"
            type="date"
            placeholder="Start Date"
          />
        </div>
        <div className="flex-1">
          Due Date
          <input
            className="rounded w-full  text-secondary leading-tight focus:border-2 focus:border-primary focus:ring-transparent"
            id="username"
            type="date"
            placeholder="Due Date"
          />
        </div>
      </div>

      <div className="flex gap-x-2 p-2 mr-2">
        <button
          className="text-white bg-secondary opacity-90 hover:opacity-100 uppercase py-2 px-6 rounded outline-none focus:outline-none mt-2 w-full"
          type="button"
          // onClick={() => this.triggerProcess()}
        >
          Add Activity
        </button>
      </div>
      </div>
    </ToModal>
  );
};

export default ActivityForm;
