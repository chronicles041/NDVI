import React, { useEffect, useState } from "react";
// import "./map.css";

import { IFieldReport } from "../../types/reportTypes";
import DetailModal from "./fieldDetail";

type ListReportProps = {
  selectedItem: any;
  loading: boolean;
  listData: IFieldReport[];
};

function ListReport({ selectedItem, loading, listData }: ListReportProps) {
  const [farmList, setFarmlist] = useState([]);
  const [searchName, setFarmSearch] = useState("");
  const [currentIndex, setCurrentIndex] = useState(null);

  return (
      <div className={"overflow-y-scroll w-full"}>
    <ul className={" w-auto h-[400px] mr-4  flex flex-col justify-start  "}>
      {listData?.map((farm:any, index:any) => (
        <li
          className={
            "cursor-pointer w-full px-4  shadow border  border-black border-opacity-10 rounded  hover:bg-gray-300 px-2 py-2 mx-2 my-2"
          }
          onClick={() => {
            selectedItem(farm);
            setCurrentIndex(index);
          }}
        >
          <div className={"flex items-stretch justify-between  w-full gap-x-1 flex-row"}>
            <div className={"flex  flex-col"}>
              <div className={"font-bold text-black text-opacity-60  text-sm"}>Farm Name</div>
              <div className={"font-bold text-text_primary"}>{farm.farm_name}</div>
            </div>
            <div className={"flex flex-col"}>
              <div className={"font-bold text-black text-opacity-60  text-sm"}>Farm Area</div>
              <div className={"font-bold text-text_primary"}>{farm.farm_area}</div>
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
