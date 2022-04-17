import React, { useEffect, useState } from "react";
import { Button, Input, List, Typography } from "antd";
// import "./map.css";
import MapService from "./mapService";
import { ToTablePagination } from "../../components/ToTable/pagination";

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
      search: searchName,
      project__id: 1,
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
    <>
      <div className="mb-3 w-full">
        <Input
          className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-400 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
          onChange={onChange}
          placeholder="Search Farm"
        />
      </div>
      <ul className={" w-full h-[400px] overflow-x-hidden overflow-y-visible"}>
        {farmList.map((farm, index) => (
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
          </li>
        ))}
      </ul>
      <div className="px-2 w-full py-2 mt-3 flex flex-row items-center justify-center">
        <button
          className={
            "mx-2 bg-secondary rounded-full px-2 text-gray-200 opacity-90 shadow-2xl cursor-not-allowed "
          }
        >
          {"PREV"}
        </button>{" "}
        <button
          className={
            "mx-2 bg-secondary rounded-full px-2 text-gray-200 opacity-90 shadow-2xl cursor-not-allowed "
          }
        >
          {"Next"}
        </button>{" "}
      </div>
      <div className="text-lg font-semibold w-full bg-primary px-2 py-2 mt-3 text-center text-white shadow-2xl rounded-sm opacity-80 ">
        Showing {farmList.length} results
      </div>
    </>
  );
}

export default LayerOptionsList;
