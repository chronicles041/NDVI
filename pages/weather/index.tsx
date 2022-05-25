import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import PageLayout from "../../components/Pagelayout";
import ToWeather from "../../components/ToWeather";
import Reports from "../reports";
import ReportService from "../../api/service";


const WeatherIndex = () => {

  const [polygon, setPolygon] = useState([]);
  const [center, setCenter] = useState([102.8312416766951, 15.248647579054131]);
  // const [viewControl, setViewControl] = useState(viewParams);
  const [selectedFarm, selectField] = useState({});
  const [loading, setLoading] = useState(false);
  const [multipleField, setMultipleField] = React.useState();
  const [locationWeather, setLocationWeather] = useState();
  useEffect(() => {

    navigator.geolocation.getCurrentPosition(function(position) {
      const lat = position.coords.latitude
      const lng = position.coords.longitude
      const params = {
        coordinates: [lat,lng].toString(),
      };
      ReportService.FetchWeather({ params }).then((res) => {
        console.log("Weather_data_2", res);
        setLocationWeather(res);
      });
      console.log("Latitude is :",lat,lng );
    });
  }, []);

  const selectFarm = (item) => {

    setCenter(item.extra_field.centroid);
    selectField(item);
  };



  return (

    // <PageLayout>
    //   <Weather/>
    // </PageLayout>
    <PageLayout>
    <div className="container bg-white px-4 py-4 flex-col">
      <div className="flex overflow-scroll flex-row gap-x-3">
        {/* <div className="basis-3/4 z-0  bg-red-200 flex h-50  flex-col gap-y-3"> */}
        <div className="basis-3/4 z-0  flex h-50  flex-col gap-y-3">
        
        <ToWeather miniView={false} coordinates={center} />

        </div>
        <div className="basis-1/4 flex-col flex justify-center gap-x-2 items-center">
          <Reports
            loading={loading}
            selectedItem={selectFarm}
            listView={true}
            getMultiplefields={(value: any) => setMultipleField(value)}
          />
        </div>

      </div>
        {/* <ToWeather miniView={false} coordinates={center} /> */}
        {"Location Weather = " + JSON.stringify(locationWeather)}

    </div>
  </PageLayout>
  );
};

export default WeatherIndex;
