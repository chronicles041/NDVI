import React, { useEffect, useState } from "react";
import { Button, Card, Input, List, Typography } from "antd";
// import "./map.css";
import MapService from "./mapService";
import ReactApexChart from "react-apexcharts";
import moment from "moment";

type graphDataTypes = {
  ndvi: [];
};

type TimeSeriesProps = {
  graphData: graphDataTypes;
  loading: boolean;
  plantationDate: string;
};

function TimeSeriesGraph({
  graphData,
  loading,
  plantationDate,
}: TimeSeriesProps) {
  const createXdates = (date) => {
    moment(date).format("Do MMM, yy");
    // xaxis: {
    //   categories: graphData?.ndvi?.map((item) =>
    //     moment(item.date).format("Do MMM, yy")
    //   ),
    //   title: {
    //     text: "Date",
    //   },
    // },
  };

  const testArray = [
    "2022-02-03",
    "2022-02-03",
    "2022-02-03",
    "2022-02-03",
    "2022-02-03",
    "2022-02-03",
    "2022-02-03",
    "2022-02-03",
    "2022-02-03",
    "2022-02-03",
    "2022-02-03",
    "2022-02-03",
    "2022-02-03",
    "2022-02-03",
    "2022-02-03",
    "2022-02-03",
    "2022-02-03",
    "2022-02-03",
    "2022-02-03",
    "2022-02-03",
  ];

  const testData: null | any[] = [
    0.317, 0.436, 0.541, 0.632, 0.709, 0.781, 0.834, 0.879, 0.890, 0.887, 0.802, 0.755,
    0.654, 0.525, 0.369
  ];

  const pLength: number = testData.length;

  const createGraphDates = () => {
    let currentTime = new Date(plantationDate);
    let tempArray = [];
    tempArray.push(moment(currentTime).format("Do MMM"));
    for (let i = 1; i < 19; i++) {
      console.log("Block statement execution no." + i);
      let reqDate = currentTime.setDate(currentTime.getDate() + 5);
      tempArray.push(moment(reqDate).format("Do MMM"));
      // currentTime = reqDate
      // moment(reqDate).format("Do MMM")
    }
    return tempArray;
  };

  const NewConfig = {
    series: [
      {
        name: "Performance",
        data: graphData?.ndvi?.map((item) => item.ndvi_value),
        // data: testArray.map((item) => item.ndvi_value),
      },
      {
        name: "Phase Wise Data",
        data: testData,
      },
    ],
    options: {
      xaxis: {
        // categories: graphData?.ndvi?.map((item) =>
        //   moment(item.date).format("Do MMM")
        // categories: testArray.map((item) => moment(item).format("Do MMM")),
        categories: createGraphDates(),
        // title: {
        //   text: "Date",
        // },
      },
      yaxis: {
        decimalsInFloat: 2,
        title: {
          text: "NDVI Performance",
        },
      },
      options: {
        chart: {
          type: "area",
          height: 350,
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
        },

        legend: {
          horizontalAlign: "left",
        },
      },
    },
  };

  return (
    <>
      <div className={" m-1 rounded-2xl shadow-l"}>
        {graphData?.ndvi?.length > 0 ? (
          <>
            {/* <button onClick={()=>createGraphDates()}>Click Me</button> */}

            <ReactApexChart
              options={NewConfig.options}
              series={NewConfig.series}
              type="area"
              height={500}
            />
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default TimeSeriesGraph;
