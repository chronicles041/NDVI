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
  coordinates: any;
};

function WeatherChart({ coordinates }: TimeSeriesProps) {
  const [farmWeather, setFarmWeather] = useState();
  const [nextWeather, setNextWeather] = useState();
  const [currentLocation, setCurrentLocation] = useState([]);
  function reverseArr(input) {
    var ret = new Array();
    for (var i = input.length - 1; i >= 0; i--) {
      ret.push(input[i]);
    }
    return ret;
  }
  useEffect(() => {
    if (coordinates) {
      let wCoordinates = reverseArr(coordinates);
      // let wCoordinates =  coordinates.reverse()
      const params = {
        coordinates: wCoordinates.toString(),
      };
      ReportService.FetchWeather({ params }).then((res) => {
        console.log("Weather_data", res);
        setFarmWeather(res);
      });
      ReportService.FetchNextWeather({ params }).then((res) => {
        console.log("next_data", res);
        setNextWeather(res);
      });
    }
  }, [coordinates]);


  const options = {
    chart: {
      id: "area-datetime",
      type: "area",
      height: 450,
      zoom: {
        autoScaleYaxis: true,
      },
    },
    annotations: {
      //   yaxis: [
      //     {
      //       y: 0.525,
      //       borderColor: "#999",
      //       label: {
      //         show: true,
      //         text: "Harvest",
      //         style: {
      //           color: "#fff",
      //           background: "#00E396",
      //         },
      //       },
      //     },
      //   ],
        // xaxis: [...makeAnnotations()],
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
      min: new Date().getTime(),
      max: new Date().setDate(new Date().getDate() + 8),
      //   format: "ddd",
      format: "ddd/MM",

      //   tempDate.setDate(currentTime.getDate() + d.days);
      tickAmount: 7,
    },
    // xaxis: {
    //     labels: {
    //       datetimeFormatter: {
    //         year: 'yyyy',
    //         month: 'MMM \'yy',
    //         day: 'dd MMM',
    //         hour: 'HH:mm'
    //       }
    //     },
    //     // format: "ddd",
    //   },
    yaxis: {
      min: 10,
      max: 50,
      tickAmount: 5,
    },
    tooltip: {
      x: {
        format: "ddd",
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 0,
        opacityFrom: 0.2,
        opacityTo: 0.3,
        stops: [0,  75, 100],
      },
    },
  };

  const createTempData = () => {
    let maxArray: any = [];
    let minArray: any = [];
    nextWeather?.daily.map((d, i) => {
      let maxObj = [d.dt * 1000, d.temp.max];
      let minObj = [d.dt * 1000, d.temp.min];
      minArray.push(minObj);
      maxArray.push(maxObj);
    });
    console.log("***Weather Collection", minArray,maxArray);
    return [
      {
        data: maxArray,
        name: "Maximum Temperature ℃",
        color: "#58508d",
      },
      {
        data: minArray,
        name: "Min Temperature ℃",
        color: "#58503d",
      },
    ];
  };



  return (
    <>
      <div className={"m-1 rounded-2xl shadow-l"}>
        <ToTittle tittle="Weather Chart" />

        {/* {graphData?.ndvi?.length > 0 ? ( */}
        <>
          {/* <button onClick={()=>createGraphDates()}>Click Me</button> */}
          <ReactApexChart
            options={options}
            // series={createGraphData()}
            // series={createEviData()}
            // series={[ ...createPhaseData(),...createEviData()]}
            series={[...createTempData()]}
            type="area"
            height={300}
          />
        </>
        {/* ) : (
          <></>
        )} */}
      </div>
    </>
  );
}

export default WeatherChart;
