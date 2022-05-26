import React, { useEffect } from "react";
import ToDropdown from "./ToDropdown";
import ToModal from "./ToModal";
import ReportService from "../api/service";
import { IFieldFilters } from "../types/reportTypes";
import { IconSize, IconTypes } from "./ToIcons";
import { IActivity } from "../types/activityTypes";
import Reports from "../pages/reports";
import ToMultiple from "./ToMultiple";

const ActivityForm = ({ reloadActivities, selectedFarm }: any) => {
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
    { value: 0, title: "No Farms Found" },
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

  const [formData, setFormData] = React.useState<IActivity>();

  useEffect(() => {
    ReportService.FetchUsers().then((res: any) => setUsers(res));
    ReportService.FetchDropdownFarm(filterParams).then((res) => {
      setFarmData(res);
    });
  }, []);

  const onDetailClick = () => {
    // ReportService.FetchFieldReportID(id).then((res: FarmDetailProps) =>
    //   setReportDetail(res)
    // );
  };

  const onChange = (e: Event | any) => {
    console.log("***Form Changed", e.target.value, "<--->", e.target.name);
    let tempFormData: any = formData;
    tempFormData = { ...tempFormData, [e.target.name]: e.target.value };
    setFormData(tempFormData);
  };

  const onChangeDate = (e: Event | any, name: any) => {
    console.log("***Form Changed", e.target.value, "<--->", e.target.name);
    let tempFormData: any = formData;
    tempFormData = { ...tempFormData, [name]: e.target.value };
    setFormData(tempFormData);
  };

  const handleDropdownChange = (e: any, name: any) => {
    let newValue = Array.from(e.target.selectedOptions, (option) =>
      JSON.parse(option.value)
    );
    // console.log("***Dropdown Changed", e.target.value, "<--->", value);
    let tempFormData: any = formData;
    tempFormData = { ...tempFormData, [name]: newValue };
    setFormData(tempFormData);
  };

  const handleMultipleChange = (value: [], name: string) => {
    let tempFormData: any = formData;
    tempFormData = { ...tempFormData, [name]: value };
    setFormData(tempFormData);
  };

  const handleDropdown = (e: Event | any, name: any) => {
    // console.log("***Dropdown Changed", e.target.value, "<--->", value);
    let tempFormData: any = formData;
    tempFormData = { ...tempFormData, [name]: e.target.value };
    setFormData(tempFormData);
  };

  const addActivity = () => {
    let newFormData: any = formData;
    newFormData = {
      ...newFormData,
      project: 1,
      status: 4,
      priority_name: "2",
      status_name: "3",
      assigned_by: localStorage.getItem('userid'),
      farms:selectedFarm ? [selectedFarm.farm_id ]: formData?.farms
    };
    // reloadActivities();

    ReportService.AddNewActivity(newFormData).then((res: any) => {
      console.log("***Add Activity", res);
      reloadActivities();
    });
  };

  // };

  return (
    <ToModal
      iconType={IconTypes.Plus}
      iconSize={IconSize.XXSM}
      onOpen={() => onDetailClick()}
      title={"Add Activity"}
    >
      <div className="flex flex-col w-full p-5 gap-y-6">
        {selectedFarm ? "Has" : "Not Has"}
        <div className="mb-4">
          <input
            className=" rounded w-full   text-secondary leading-tight focus:border-2 focus:border-primary focus:ring-transparent h-16"
            id="username"
            type="text"
            name="title"
            placeholder="Activity Title"
            onChange={onChange}
          />
        </div>
        <div className="grid grid-cols-1 items-center justify-center gap-3 w-full mb-2">
          {/* <ToDropdown
            onChange={(e: Event) => handleDropdownChange(e, "farms")}
            options={farmData}
            label="Select Farm"
            multiple={true}
          /> */}

          {selectedFarm ? (
            <div className="flex-1">
              <span className="text-base font-medium text-secondary mb-3">
                Selected Farm
              </span>
              <input
                className=" rounded w-full mt-3 p-2 text-secondary leading-tight focus:border-2 focus:border-primary focus:ring-transparent"
                // id="username"
                // type="date"
                // placeholder="Start Date"
                // onChange={(e: Event) => onChangeDate(e, "assigned_date")}
                value={`${selectedFarm.farm_name}-${selectedFarm.farm_id}`}
                disabled
              />
            </div>
          ) : (
            <div className="flex-1">
            <span className="text-base font-medium text-secondary mb-3">
              Select Farms
            </span>
            <Reports
              formView={true}
              handleItemChange={(value) => handleMultipleChange(value, "farms")}
            />
          </div>
           
          )}

          <div className="flex-1">
            <span className="text-base font-medium text-secondary mb-3">
              Select Users
            </span>
            <ToMultiple
              options={users}
              handleItemChange={(value) =>
                handleMultipleChange(value, "task_assigned_to")
              }
              title={"Assign for"}
            />
          </div>

          {/* <ToDropdown
            onChange={(e: Event) => handleDropdownChange(e, "task_assigned_to")}
            options={users}
            label="Assign for"
            multiple={true}
          /> */}
          <ToDropdown
            onChange={(e: Event) => handleDropdown(e, "type")}
            options={reportType}
            label="Activity Type"
          />
          <ToDropdown
            onChange={(e: Event) => handleDropdown(e, "priority")}
            options={priorityType}
            label="Priority"
          />
        </div>
        <div className="flex flex-col gap-y-4">
          <span className="text-base font-medium text-secondary">
            Description
          </span>
          <textarea
            className="focus:border-2 focus:border-primary focus:ring-transparent rounded w-full py-2 px-3 text-secondary leading-tight  h-3/4"
            id="username"
            rows={6}
            name={"remarks"}
            placeholder="Add Description to Activity"
            onChange={onChange}
          />
        </div>
        <div className="flex flex-row gap-x-6">
          <div className="flex-1">
            <span className="text-base font-medium text-secondary mb-3">
              Start Date
            </span>
            <input
              className=" rounded w-full mt-3 text-secondary leading-tight focus:border-2 focus:border-primary focus:ring-transparent"
              id="username"
              type="date"
              placeholder="Start Date"
              onChange={(e: Event) => onChangeDate(e, "assigned_date")}
            />
          </div>
          <div className="flex-1">
            <span className="text-base font-medium text-secondary">
              Due Date
            </span>
            <input
              className="rounded w-full mt-3 text-secondary leading-tight focus:border-2 focus:border-primary focus:ring-transparent"
              id="username"
              type="date"
              placeholder="Due Date"
              onChange={(e: Event) => onChangeDate(e, "end_date")}
            />
          </div>
        </div>

        <div className="flex flex-row gap-x-4 p-2 ">
          <button
            className="text-white bg-secondary opacity-90 hover:opacity-100 uppercase py-2 px-6 rounded outline-none focus:outline-none mt-2 w-full"
            type="button"
            onClick={() => addActivity()}
          >
            Add Activity
          </button>
          <button
            className="text-white bg-secondary opacity-90 hover:opacity-100 uppercase py-2 px-6 rounded outline-none focus:outline-none mt-2 w-full"
            type="button"
            onClick={() => handlReset()}
          >
            Reset Activity
          </button>
        </div>
      </div>
    </ToModal>
  );
};

export default ActivityForm;
