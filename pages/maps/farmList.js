import React, { useEffect, useState } from "react";
import { Button, Input, List, Typography } from "antd";
// import "./map.css";
import MapService from "./mapService";

function LayerOptionsList({ selectedItem, loading }) {
  const [farmList, setFarmlist] = useState([]);
  const [searchName, setFarmSearch] = useState("");
  const [currentIndex, setCurrentIndex] = useState(null);
  useEffect(() => {
    newFarmlist();
  }, [searchName]);

  const newFarmlist = () => {
    let newArray = [];
    let params = {
      farm_name: searchName,
    };
    MapService.fetchFarmList(params).then((res) => {
      res.data.results.map((data) => {
        newArray = [...newArray, data];
        return null;
      });
      setFarmlist(newArray);
    });
  };

  const onChange = (e) => {
    setFarmSearch(e.target.value);
    newFarmlist();
  };
  // const [filterValues] = useState({});

  return (
    <div className="pl-4">
      <div>
        <input onChange={onChange} placeholder="Search Farm" className="border p-2 rounded-lg border-black border-opacity-30 w-full" />
      </div>
      <ul  className={"farmList mt-2 mb-2 pr-2"}>
        {farmList.map((farm, index) => (
          <li
            className={` ${currentIndex==index?"bg-primary text-white":"bg-transparent text-black hover:bg-gray-300"}  grid grid-cols-2 p-2 max-w-sm rounded mt-2 border`}
            onClick={(e) => {
              selectedItem(farm);
              setCurrentIndex(index);
            }}
          >
          <div className="flex flex-col">
            <label className="text-xs font-bold text-black  text-opacity-70 ">Farm Name </label>
                {farm.farm_name ? farm.farm_name : <> N/A </>}
          </div>

          <div className="flex flex-col">
            <label className="text-xs font-bold text-black   text-opacity-70 ">Area </label>
                {(farm.farm_area *  1.5 *20).toFixed(1) + " kattha"}
          </div>
           
          </li>
        ))}
      </ul>
      <div>Total Records : {farmList.length}</div>
    </div>
  );
}

export default LayerOptionsList;
