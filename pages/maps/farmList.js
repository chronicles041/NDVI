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
      search: searchName,
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
      <div>
        <Input onChange={onChange} placeholder="Search Farm" />
      </div>
      <ul  className={"farmList p-2"}>
        {farmList.map((farm, index) => (
          <li
            className={"listItemField"}
            onClick={() => {
              selectedItem(farm);
              setCurrentIndex(index);
            }}
          >
          
              {farm.farm_name ? farm.farm_name : <> N/A </>}( {farm.farm_id} )
          
          </li>
        ))}
      </ul>
      <div>Total Records : {farmList.length}</div>
    </>
  );
}

export default LayerOptionsList;
