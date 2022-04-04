import React, { useEffect, useState } from "react";
import { Button, Card, Input, List, Typography } from "antd";
// import "./map.css";
import MapService from "./mapService";
import ReactApexChart from "react-apexcharts";
import { BarTypes, ToBar } from "../../components/ToCharts/Tobar";

function FieldWeather({ weatherData }) {
  // alert(JSON.stringify(coordinates))

  return <>{JSON.stringify(weatherData)}</>;
}

export default FieldWeather;
