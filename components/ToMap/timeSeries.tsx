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
              background: "#775DD0",
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
        color: "green",
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
        color: "white",
      },
    ];
  };

  const createEviData = () => {
    let tempArray: any = [];

    graphData?.evi?.map((d, i) => {
      let datObj = [new Date(d.date).getTime(), d.evi_value];
      tempArray.push(datObj);
    });
    // alert(tempArray[2])
    console.log("***EVI", tempArray);
    return [
      {
        data: tempArray,
        name: "Selected Fieldv (EVI)",
        color: "#007691",
      },
    ];
  };

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
        shadeIntensity: 1,
        opacityFrom: 0.5,
        opacityTo: 0.2,
        stops: [0, 100],
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
              series={[ ...createPhaseData(),...createGraphData()]}
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
