import React, { useEffect, useState } from "react";
import { Button, Card, Input, List, Typography } from "antd";
// import "./map.css";
import MapService from "./mapService";
import { BarTypes, ToBar } from "../ToCharts/Tobar";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

function TimeSeriesGraph({ graphData, loading }) {
  const xAxis = (graphData) => {
    let tempArray = [];

    graphData?.ndvi?.map((item) => {
      tempArray = tempArray.push(item.date);
    });
    // alert(JSON.stringify(tempArray))
    return tempArray;
  };

  const configNdvi = {
    series: [
      {
        name: "Performance",
        data: graphData?.ndvi?.reverse().map((item) => item.ndvi_value),
      },
    ],
    options: {
      xaxis: {
        categories: graphData?.ndvi?.map((item) => item.date),
        reverse:true,
        title: {
          text: "Date",
        },
      },
      yaxis: {
        title: {
          text: "NDVI Performance",
        },
      },
      options: {
        chart: {
          type: "area",
          height: 350,
          width: "100%",
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

        title: {
          text: "Fundamental Analysis of Stocks",
          align: "left",
        },
        subtitle: {
          text: "Price Movements",
          align: "left",
        },
        legend: {
          horizontalAlign: "left",
        },
      },
    },
  };

  const configNdwi = {
    series: [
      {
        name: "NDWI Performance",
        data: graphData?.ndwi?.map((item) => item.ndwi_value),
      },
    ],
    options: {
      xaxis: {
        categories: graphData?.ndvi?.map((item) => item.date),
        title: {
          text: "Date",
        },
      },
      yaxis: {
        title: {
          text: "NDWI Performance",
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

        title: {
          text: "Fundamental Analysis of Stocks",
          align: "left",
        },
        subtitle: {
          text: "Price Movements",
          align: "left",
        },
        legend: {
          horizontalAlign: "left",
        },
      },
    },
  };

  return (
    <>
      {/* {graphData?.ndvi?.length > 0 ? ( */}
      <Chart
        options={configNdvi.options}
        series={configNdvi.series}
        type="area"
        height={300}
      />
      {/* ) : (
        <></>
      )} */}
      <br />
      {/* {graphData?.ndwi?.length > 0 ? ( */}
      {/* <ReactApexChart
        options={configNdwi.options}
        series={configNdwi.series}
        type="area"
        height={300}
        width={"100%"}
      /> */}

      {/* <ToBar title={"Water Usage Chart"} type={BarTypes.Line} /> */}
      {/* ) : (
        <></>
      )} */}

      {/* {"Here" + JSON.stringify(graphData.ndvi.map((item) => item))} */}
    </>
  );
}

export default TimeSeriesGraph;
