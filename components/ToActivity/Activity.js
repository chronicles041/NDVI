import React from "react";
import ToIcon, { IconSize, IconTypes } from "../ToIcons";

export default function Activity() {
  return (
    <div className="grid grid-cols-3 overflow-y-auto items-center justify-center px-2 py-2">
      <div className="flex flex-col justify-start p-2  w-full h-full gap-y-4">
        <span className="text-2xl text-primary font-semibold">To Do</span>
        <div className="flex flex-col px-6 py-5 bg-[#eaffb1] shadow-md rounded-lg gap-y-4 ">
          <button class=" bg-indigo-600 text-white text-sm font-medium rounded-full w-24 py-1">
            High
          </button>
          <h5 class="text-2xl font-bold tracking-tight text-gray-900 ">
            New Plantation Monitoring
          </h5>
          <p class="font-normal text-gray-700">
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
          <div class=" flex flex-row relative mt-7">
            <div className="flex-1 items-start justify-start">
              <img
                src="https://source.unsplash.com/ILip77SbmOE/900x900"
                class="w-10 rounded-full ring-1 ring-secondary ring-offset-2  float-left "
              />
              <img
                src="https://source.unsplash.com/ILip77SbmOE/900x900"
                class="w-10 rounded-full ring-1 ring-secondary ring-offset-2  float-left absolute left-6"
              />
              <img
                src="https://source.unsplash.com/ILip77SbmOE/900x900"
                class="w-10 rounded-full ring-1 ring-secondary ring-offset-2  float-left absolute left-12"
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
    </div>
  );
}
