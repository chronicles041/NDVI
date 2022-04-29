import React from "react";
import dynamic from "next/dynamic";
import PageLayout from "../../components/Pagelayout";
const Weather =  dynamic(() => import("../../components/ToWeather/Weather.js"), { ssr: false });

const WeatherIndex = () => {
  return (
    <PageLayout>
      <Weather/>
    </PageLayout>
  );
};

export default WeatherIndex;
