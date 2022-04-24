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
    0.317, 0.436, 0.541, 0.632, 0.709, 0.781, 0.834, 0.879, 0.89, 0.887, 0.802,
    0.755, 0.654, 0.525, 0.369,
  ];

  const testData2: any = testData.map((d, i) => {
    let nA;
    if (i % 4 == 0) {
      nA = d + 0.022;
    }
    if (i % 4 != 0) {
      nA = d - 0.022;
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
  var options = {
    series: [
      {
        name: "TEAM A",
        type: "column",
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
      },
      {
        name: "TEAM B",
        type: "area",
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
      },
      {
        name: "TEAM C",
        type: "line",
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
      },
    ],
    chart: {
      height: 350,
      type: "line",
      stacked: false,
    },
    stroke: {
      width: [0, 2, 5],
      curve: "smooth",
    },
    plotOptions: {
      bar: {
        columnWidth: "50%",
      },
    },

    fill: {
      opacity: [0.85, 0.25, 1],
      gradient: {
        inverseColors: false,
        shade: "light",
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100],
      },
    },
    labels: [
      "01/01/2003",
      "02/01/2003",
      "03/01/2003",
      "04/01/2003",
      "05/01/2003",
      "06/01/2003",
      "07/01/2003",
      "08/01/2003",
      "09/01/2003",
      "10/01/2003",
      "11/01/2003",
    ],
    markers: {
      size: 0,
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      title: {
        text: "Points",
      },
      min: 0,
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " points";
          }
          return y;
        },
      },
    },
  };
  const NewConfig = {
    series: [
      // {
      //   name: "Performance",
      //   type: "line",
      //   data: graphData?.ndvi?.map((item) => item.ndvi_value),
      //   stroke: {
      //     curve: "smooth",
      //   },
      //   // data: testArray.map((item) => item.ndvi_value),
      // },
      {
        name: "Phase Wise Data",
        type: "line",
        data: testData,
      },
      {
        name: " Mock API Data",
        type: "line",
        data: testData2,
        stroke: {
          curve: "smooth",
        },
        // data: testArray.map((item) => item.ndvi_value),
      },
    ],
    options: {
      height: 350,
      xaxis: {
        labels: {
          format: "dd/MM",
        },
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
              height='350'
            />

            <ReactApexChart
              options={NewConfig.options}
              series={NewConfig.series}
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
