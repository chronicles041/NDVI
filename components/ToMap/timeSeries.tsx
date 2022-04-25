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
   0.290,0.317, 0.436, 0.541, 0.632, 0.709, 0.781, 0.834, 0.879, 0.89, 0.887, 0.802,
    0.755, 0.654, 0.525,
  ];
  // const testData: null | any[] = [
  //   [ 0.317, moment("2022-04-20").format("Do MMM")], 0.436, 0.541, 0.632, 0.709, 0.781, 0.834, 0.879, 0.89, 0.887, 0.802,
  //    0.755, 0.654, 0.525, 0.369,
  //  ];

  const testData2: any = testData.map((d, i) => {
    let nA;
    if (i % 4 == 0) {
      nA = d + 0.022;
    }
    if (i % 4 != 0) {
      nA = d + 0.022;
    }
    return nA;
  });

  const daysDifference = [
    0, 5, 12, 19, 26, 33, 41, 49, 60, 67, 74, 94, 100, 110, 120,
  ];

  const pLength: number = testData.length;

  const createGraphDates = () => {
    let currentTime = new Date(plantationDate);
    let tempArray = [];
    tempArray.push(moment(currentTime).format("Do MMM"));
    for (let i = 1; i < 15; i++) {
      console.log("Block statement execution no." + i);
      let reqDate = currentTime.setDate(currentTime.getDate() + 9);
      // let reqDate = currentTime.setDate(currentTime.getDate() + (daysDifference[i+1]-daysDifference[i]));
      tempArray.push(moment(reqDate).format("Do MMM"));
      // currentTime = reqDate
      // moment(reqDate).format("Do MMM")
    }
    // alert(tempArray[2])
    return tempArray;
  };

  const NewConfig = {
    series: [
      {
        name: "Performance",
        type: "area",
        data: graphData?.ndvi?.map((item) => item.ndvi_value),
      },
      // {
      //   name: "Phase Wise Data",
      //   data: testData,
      // },
      // {
      //   name: "Phase Wise Data",
      //   data: testData2,
      // },
    ],
  };

  const chartOptions ={
    chart: {

      // type: 'area'
    },
    dataLabels: {
      enabled: false
    },
    // stroke: {
    //   curve: 'smooth'
    // },
    xaxis: {
      // type: 'datetime',
      categories: graphData?.ndvi?.map((item) => moment(item.date).format("Do MMM")),
      // categories: createGraphDates(),
    },
    yaxis: {
      decimalsInFloat: 3,
      // min: -0.50,
      // max: 1.000,
      // tickAmount: 10,
      title: {
        text: "NDVI Performance",
      },
    },
  }


  return (
    <>
      <div className={" m-1 rounded-2xl shadow-l"}>
        {graphData?.ndvi?.length > 0 ? (
          <>
            {/* <button onClick={()=>createGraphDates()}>Click Me</button> */}
            <ReactApexChart
              options={chartOptions}
              series={NewConfig.series}
              height= '200'
              type="line"
              // height="350"
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
