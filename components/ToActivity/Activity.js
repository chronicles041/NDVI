import React from "react";

export default function Activity() {
  return (
    <div className="grid grid-cols-3 overflow-y-auto items-center justify-center px-2 py-2">
      <div className="flex flex-col justify-start p-2  w-full h-full gap-y-4">
        <span className="text-2xl text-primary font-semibold">To Do</span>
        <div className="flex flex-col px-6 py-2 bg-[#eaffb1] shadow-xl rounded-lg gap-y-2">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            New Plantation Monitoring 
          </h5>
          <p class="mb-3 font-normal text-gray-700">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
         <div
            
            className="flex items-center py-3 px-3 text-sm font-medium  w-32 text-center text-white bg-primary rounded-lg"
          >
            30 days left
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start p-2  w-full h-full gap-y-4">
        <span className="text-2xl text-primary font-semibold">In Progress</span>
        <div className="flex flex-col px-6 py-2 bg-[#eaffb1] shadow-xl rounded-lg gap-y-2">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            Download Svg of Graph Field No.CA3
          </h5>
          <p class="mb-3 font-normal text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipiscing elit.
          </p>
         <div
           
            className="flex items-center py-3 px-3 text-sm font-medium  w-32 text-center text-white bg-primary rounded-lg"
          >
            22 days left
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start p-2  w-full h-full gap-y-4">
        <span className="text-2xl text-primary font-semibold">Completed</span>
        <div className="flex flex-col px-6 py-2 bg-[#eaffb1] shadow-xl rounded-lg gap-y-2">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            Add New Field in Banke District
          </h5>
          <p class="mb-3 font-normal text-gray-700">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
         <div

            className="flex items-center py-3 px-3 text-sm font-medium  w-32 text-center text-white bg-primary rounded-lg"
          >
           Done
          </div>
        </div>
      </div>
    </div>
  );
}
