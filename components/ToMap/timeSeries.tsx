import React, { useEffect, useState } from "react";
import { Button, Card, Input, List, Typography } from "antd";
// import "./map.css";
import MapService from "./mapService";
import ReactApexChart from "react-apexcharts";
import moment from "moment";
import ReportService from "../../api/service";
import ToTittle from "../ToTittle";

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
  const [phase, setPhase] = React.useState<[]>();
  const [minDate, setMindate] = React.useState<any>("2022-02-28");
  const [maxDate, setMaxDate] = React.useState<any>("2022-08-01");

  useEffect(() => {
    ReportService.FetchPhases().then((res: any) => setPhase(res.data.results));
    // console.log("***",filterParams?filterParams:"Undefined")
  }, []);

  const makeAnnotations = () => {
    let tArray: any = [];
    let currentTime = new Date(plantationDate);
    phase?.map((d, i) => {
      let tempDate = new Date(plantationDate);
      let reqDate = tempDate.setDate(currentTime.getDate() + d.days);
      tArray = [
        ...tArray,
        {
          x: reqDate,
          borderColor: "#999",
          yAxisIndex: 0,
          label: {
            show: true,
            text: d.phase_name,
            style: {
              color: "#fff",
              background: "#58508d",
            },
          },
        },
      ];
    });

    return tArray;
  };

  const createPhaseData = () => {
    let currentTime = new Date(plantationDate);
    let timeArray: any = [];

    phase?.map((d, i) => {
      let tempDate = new Date(plantationDate);
      let reqDate = tempDate.setDate(currentTime.getDate() + d.days);
      console.log("Date", moment(reqDate).format("Do MMM yy"), "Days:", d.days);
      let datObj = [new Date(reqDate).getTime(), d.phase_ndvi_value];
      // let datObj = [new Date(reqDate).getTime(), testData[i]];
      timeArray.push(datObj);
    });

    return [
      {
        data: timeArray,
        name: "Globel Maize Trend",
        color: "#58508d",
      },
    ];
  };

  const indianTrend = () => {
    let currentTime = new Date(plantationDate);
    let timeArray: any = [];

    let phaseData = [
      // 20 days: 0.19 NDVI
      {
        crop: 2,
        days: 20,
        id: 1,
        phase_name: "Emergency",
        phase_ndvi_value: 0.19,
        project: 1,
      },
      // 40 days: 0.35 NDVI
      {
        crop: 2,
        days: 40,
        id: 2,
        phase_name: "Emergency",
        phase_ndvi_value: 0.35,
        project: 1,
      },
      // 60 days: 0.65 NDVI

      {
        crop: 2,
        days: 60,
        id: 3,
        phase_name: "Emergency",
        phase_ndvi_value: 0.65,
        project: 1,
      },
      // 80 days: 0.79 NDVI

      {
        crop: 2,
        days: 80,
        id: 4,
        phase_name: "Emergency",
        phase_ndvi_value: 0.79,
        project: 1,
      },
      // 100 days: 0.75 NDVI

      {
        crop: 2,
        days: 100,
        id: 5,
        phase_name: "Emergency",
        phase_ndvi_value: 0.75,
        project: 1,
      },
      // 120 days: 0.61 NDVI

      {
        crop: 2,
        days: 120,
        id: 6,
        phase_name: "Emergency",
        phase_ndvi_value: 0.61,
        project: 1,
      },
      // 140 days: 0.42 NDVI
      {
        crop: 2,
        days: 140,
        id: 7,
        phase_name: "Emergency",
        phase_ndvi_value: 0.42,
        project: 1,
      },
      // 160 days: 0.25 NDVI
      {
        crop: 2,
        days: 160,
        id: 8,
        phase_name: "Emergency",
        phase_ndvi_value: 0.25,
        project: 1,
      },
    ];
    phaseData?.map((d, i) => {
      let tempDate = new Date(plantationDate);
      let reqDate = tempDate.setDate(currentTime.getDate() + d.days);
      console.log("Date", moment(reqDate).format("Do MMM yy"), "Days:", d.days);
      let datObj = [new Date(reqDate).getTime(), d.phase_ndvi_value];
      // let datObj = [new Date(reqDate).getTime(), testData[i]];
      timeArray.push(datObj);
    });

    return [
      {
        data: timeArray,
        name: "Indian Trend",
        color: "#ff6361",
      },
    ];
  };

  const createGraphData = () => {
    let timeArray: any = [];

    graphData?.ndvi?.map((d, i) => {
      let datObj = [new Date(d.date).getTime(), d.ndvi_value];
      timeArray.push(datObj);
    });
    // alert(tempArray[2])
    console.log("***NDVI", timeArray);

    return [
      {
        data: timeArray,
        name: "Selected Field (NDVI)",
        color: "#bc5090",
        // type:"Area"
      },
    ];
  };

  // const createEviData = () => {
  //   let tempArray: any = [];

  //   graphData?.evi?.map((d, i) => {
  //     let datObj = [new Date(d.date).getTime(), d.evi_value];
  //     tempArray.push(datObj);
  //   });
  //   // alert(tempArray[2])
  //   console.log("***EVI", tempArray);
  //   return [
  //     {
  //       data: tempArray,
  //       name: "Selected Fieldv (EVI)",
  //       color: "#007691",
  //     },
  //   ];
  // };

  const options = {
    chart: {
      id: "area-datetime",
      type: "area",
      height: 350,
      zoom: {
        autoScaleYaxis: true,
      },
    },
    annotations: {
      yaxis: [
        {
          y: 0.525,
          borderColor: "#999",
          label: {
            show: true,
            text: "Harvest",
            style: {
              color: "#fff",
              background: "#00E396",
            },
          },
        },
      ],
      xaxis: [...makeAnnotations()],
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
      style: "hollow",
    },
    xaxis: {
      type: "datetime",
      // min: new Date(minDate).getTime(),
      // max: new Date(maxDate).getTime(),
      tickAmount: 15,
    },
    yaxis: {
      min: -0.1,
      max: 1.0,
      tickAmount: 5,
    },
    tooltip: {
      x: {
        format: "dd MMM yyyy",
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 0,
        opacityFrom: 0.2,
        opacityTo: 0.5,
        stops: [0,25, 50,75,100],
      },
    },
  };

  return (
    <>
      <div className={"m-1 rounded-2xl shadow-l"}>
        <ToTittle tittle="Time Series Graph" />

        {graphData?.ndvi?.length > 0 ? (
          <>
            {/* <button onClick={()=>createGraphDates()}>Click Me</button> */}
            <ReactApexChart
              options={options}
              // series={createGraphData()}
              // series={createEviData()}
              // series={[ ...createPhaseData(),...createEviData()]}
              series={[...indianTrend(), ...createGraphData(),...createPhaseData()]}
              type="area"
              height={550}
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
