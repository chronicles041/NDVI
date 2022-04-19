import React, { useEffect, useState } from "react";
import { Button, Input, List, Typography } from "antd";
// import "./map.css";

import { ToTablePagination } from "../../components/ToTable/pagination";
import mapService from "../maps/mapService";
import { IFieldReport } from "./reportTypes";
import DetailModal from "./fieldDetail";

type ListReportProps = {
  selectedItem: any;
  loading: boolean;
  listData: IFieldReport;
};

function ListReport({ selectedItem, loading, listData }: ListReportProps) {
  const [farmList, setFarmlist] = useState([]);
  const [searchName, setFarmSearch] = useState("");
  const [currentIndex, setCurrentIndex] = useState(null);

  return (
    <ul className={" w-full h-[400px] overflow-x-hidden overflow-y-visible"}>
      {listData.map((farm, index): any => (
        <li
          className={
            "cursor-pointer border border-soild border-gray-400 rounded-sm hover:bg-gray-300 px-1 py-2 m-2"
          }
          onClick={() => {
            selectedItem(farm);
            setCurrentIndex(index);
          }}
        >
          {farm.farm_name ? farm.farm_name : <> N/A </>}( {farm.farm_id} )
           {/* <br /><DetailModal id={farm.farm_id} />   */}
        </li>
      ))}
    </ul>
  );
}

export default ListReport;
