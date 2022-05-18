import React from "react";
import ToIcon, { IconSize, IconTypes } from "../ToIcons";

const testActivities = [
  {
    id: 1,
    title: "Just a test Title Created by blinkrup",
    priority: 1,
    assigned_date: "2022-05-17",
    end_date: "2022-05-31",
    project: 1,
    task_assigned_to: [2126, 2165],
    farms: [3111, 3119],
    assigned_by: 1,
    type: 1,
    visits: 1,
    last_visit: "2022-05-12",
    status: 1,
    remarks: "Description added",
  },
  // {
  //   id: 2,
  //   title: "Just a test Title Created by blinkrup",
  //   priority: 1,
  //   assigned_date: "2022-05-17",
  //   end_date: "2022-05-31",
  //   project: 1,
  //   task_assigned_to: [2126, 2165],
  //   farms: [3111, 3119],
  //   assigned_by: 1,
  //   type: 1,
  //   visits: 1,
  //   last_visit: "2022-05-12",
  //   status: 2,
  //   remarks: "Description added",
  // },
  // {
  //   id: 3,
  //   title: "Just a test Title Created by blinkrup",
  //   priority: 1,
  //   assigned_date: "2022-05-17",
  //   end_date: "2022-05-31",
  //   project: 1,
  //   task_assigned_to: [2126, 2165],
  //   farms: [3111, 3119],
  //   assigned_by: 1,
  //   type: 1,
  //   visits: 1,
  //   last_visit: "2022-05-12",
  //   status: 3,
  //   remarks: "Description added",
  // },
];

export default function Activity() {
  return (
    <>
      {/* header */}
      <div className="grid grid-cols-3 overflow-y-auto items-center justify-center px-2 py-2">
        {/* {testActivities.map((act) => (      ))} */}

        <div className="flex flex-col justify-start p-2  w-full h-full gap-y-4">
          <span className="text-2xl text-primary font-semibold">To Do</span>
        </div>
        <div className="flex flex-col justify-start p-2  w-full h-full gap-y-4">
          <span className="text-2xl text-primary font-semibold">
            On Process
          </span>
        </div>

        <div className="flex flex-col justify-start p-2  w-full h-full gap-y-4">
          <span className="text-2xl text-primary font-semibold">Completed</span>
        </div>
      </div>
      {/* body */}
      {testActivities.map((act) => (
        <div className="grid grid-cols-3 overflow-y-auto items-center justify-center px-2 py-2">
          {/* todo */}
          
          <div className="flex flex-col justify-start p-2  w-full h-full gap-y-4">
            <div className="flex flex-col px-6 py-5 bg-[#eaffb1] shadow-md rounded-lg gap-y-4 ">
              <button className=" bg-indigo-600 text-white text-sm font-medium rounded-full w-24 py-1">
                High
              </button>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 ">
                New Plantation Monitoring
              </h5>
              <p className="font-normal text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="flex justify-end items-end gap-x-2">
                <ToIcon
                  type={IconTypes.Time}
                  size={IconSize.XSM}
                  style={""}
                ></ToIcon>
                <span className="text-lg text-secondary font-base">3hrs</span>
              </div>
              <div className=" flex flex-row relative mt-7">
                <div className="flex-1 items-start justify-start">
                  <img
                    src="https://source.unsplash.com/ILip77SbmOE/900x900"
                    className="w-10 rounded-full ring-1 ring-secondary ring-offset-2  float-left "
                  />
                  <img
                    src="https://source.unsplash.com/ILip77SbmOE/900x900"
                    className="w-10 rounded-full ring-1 ring-secondary ring-offset-2  float-left absolute left-6"
                  />
                  <img
                    src="https://source.unsplash.com/ILip77SbmOE/900x900"
                    className="w-10 rounded-full ring-1 ring-secondary ring-offset-2  float-left absolute left-12"
                  ></img>
                </div>
                <div className="flex-1 flex-row absolute right-0">
                  <button className="mr-4">
                    <ToIcon
                      type={IconTypes.Done}
                      size={IconSize.XSM}
                      style={""}
                    ></ToIcon>
                  </button>
                  <button className="">
                    <ToIcon
                      type={IconTypes.Edit}
                      size={IconSize.SM}
                      style={""}
                    ></ToIcon>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* onprocess */}
          <div className="flex flex-col justify-start p-2  w-full h-full gap-y-4">
            {/* <span className="text-2xl text-primary font-semibold">
            On Process
          </span> */}
          </div>
          {/* completed */}
          <div className="flex flex-col justify-start p-2  w-full h-full gap-y-4">
            {/* <span className="text-2xl text-primary font-semibold">Completed</span> */}
          </div>

          {/* {JSON.stringify(testActivities)} */}
        </div>
      ))}
    </>
  );
}
