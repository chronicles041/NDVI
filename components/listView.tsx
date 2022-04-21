import React, { useEffect, useRef, useState } from "react";
// import "./map.css";

import { IFieldReport } from "../types/reportTypes";
import DetailModal from "../pages/reports/fieldDetail";

type ListReportProps = {
  selectedItem: Function;
  loading: boolean;
  listData: IFieldReport[];
  activeItem: IFieldReport;
};

// const scrollToRef = (ref) => alert("asdasd");

function ListReport({
  selectedItem,
  loading,
  listData,
  activeItem,
}: ListReportProps) {
  const ActiveItemRef = React.useRef<HTMLInputElement>(null);
  const executeScroll = () => ActiveItemRef.current.scrollIntoView(0);
  const [selectedData, selectData] = useState<IFieldReport>();

  const onFarmSelect = (farm: IFieldReport, index: number) => {
    console.log(listData[index]);
    selectedItem(farm);

    executeScroll();
  };

  useEffect(() => {
    // Update the document title using the browser API
    selectData(activeItem);
  }, [activeItem]);

  return (
    <div ref={ActiveItemRef} className={" overflow-y-scroll  w-full"}>
      <ul className={" w-auto h-[400px] mr-4   flex flex-col justify-start  "}>
        {activeItem ? (
          <li
            className={
              "cursor-pointer w-full px-4  shadow  bg-gray-100  border-green-500 border-2  rounded   px-2 py-2 mx-2 my-2"
            }
            key={0}
          >
            <div
              ref={ActiveItemRef}
              className={
                "flex items-stretch justify-between  w-full gap-x-1 flex-row"
              }
            >
              <div className={"flex  flex-col"}>
                <div
                  className={"font-bold text-black text-opacity-60  text-sm"}
                >
                  Farm Name
                </div>
                <div className={"font-bold text-text_primary"}>
                  {selectedData?.farm_name}
                </div>
              </div>
              <div className={"flex flex-col"}>
                <div
                  className={"font-bold text-black text-opacity-60  text-sm"}
                >
                  Farm Area
                </div>
                <div className={"font-bold text-text_primary"}>
                  {selectedData?.farm_area}
                </div>
              </div>
            </div>

            <DetailModal id={selectedData ? selectedData.farm_id : 0} />
          </li>
        ) : null}
        {listData
          .filter((e) => e !== selectedData)
          .map((farm: any, index: any) => (
            <li
              className={
                "cursor-pointer w-full px-4  shadow border  border-black border-opacity-10 rounded  hover:bg-gray-300 px-2 py-2 mx-2 my-2"
              }
              key={index}
              onClick={() => {
                onFarmSelect(farm, index);
              }}
            >
              <div
                className={
                  "flex items-stretch justify-between  w-full gap-x-1 flex-row"
                }
              >
                <div className={"flex  flex-col"}>
                  <div
                    className={"font-bold text-black text-opacity-60  text-sm"}
                  >
                    Farm Name
                  </div>
                  <div className={"font-bold text-text_primary"}>
                    {farm.farm_name}
                  </div>
                </div>
                <div className={"flex flex-col"}>
                  <div
                    className={"font-bold text-black text-opacity-60  text-sm"}
                  >
                    Farm Area
                  </div>
                  <div className={"font-bold text-text_primary"}>
                    {farm.farm_area}
                  </div>
                </div>
              </div>

              <DetailModal id={farm.farm_id} />
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ListReport;
