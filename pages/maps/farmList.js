import React, { useEffect, useState } from "react";
import { Button, Input, List, Typography } from "antd";
// import "./map.css";
import MapService from "./mapService";

const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
];

function LayerOptionsList({ selectedItem,loading }) {
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
      <List
        header={
          <div>
            <Input onChange={onChange} placeholder="Search Farm" />
          </div>
        }
        footer={<div>Total Records : {farmList.length}</div>}
        bordered
        split={true}
        loading={loading}
        dataSource={farmList}
        renderItem={(farm, index) => (
          <List.Item
            className={index === currentIndex ? "activeField" : "listItemField"}
            active
            onClick={() => {
              selectedItem(farm);
              setCurrentIndex(index);
            }}
          >
            <Typography.Text>
              {" "}
              {farm.farm_name
                ? farm.farm_name
                : "Warranty ID : " + farm.warranty_id}
              ( {farm.farm_id} )
            </Typography.Text>
          </List.Item>
        )}
      />
    </>
  );
}

export default LayerOptionsList;
