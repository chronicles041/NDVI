import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

import { DisasterResponse } from "./assets/disasterResponse";
import LeafletMap from "./leaflet/leafletMap";
import MapService from "./mapService";
import FarmList from "./farmList";
import ColorPalette from "./colorPalate";
import DateList from "./dateSlider";
import TimeSeriesGraph from "./timeSeries";
import FieldWeather from "./weather";

const FarmFromReport = DisasterResponse.item[1].request.url.query;
const viewParams = {
  addView: false,
  listView: true,
  detailView: false,
};

function Map(props) {
  const router = useRouter();
  const mapRef = useRef();
  const [polygon, setPolygon] = useState(JSON.parse(FarmFromReport[2].value));
  const [center, setCenter] = useState([102.8312416766951, 15.248647579054131]);
  const [viewControl, setViewControl] = useState(viewParams);
  const [newFarm, setNewFarmArray] = useState();
  const [mapData, setMapData] = useState([]);
  const [selectedData, selectData] = useState({});
  const [selectedFarm, selectField] = useState({});
  const [previousDate, setPreviousDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [detailData, setDetailData] = useState({});
  const [color, setColor] = useState({});
  const [graphData, setGraphData] = useState({});
  const [viewAllFields, setAllFields] = useState(false);
  const [hideGraph, setGraphView] = useState(true);
  const [hideWeather, setWeatherView] = useState(true);
  const [weatherData, setWeatherData] = useState();
  useEffect(() => {
    let pathname = window.location.pathname.split("/");
    let id = pathname[pathname.length - 1];
    if (pathname.length > 2) {
      setSelectedField(id);
    }
  }, []);

  const setSelectedField = (id) => {
    MapService.fetchFarmListID(id).then((res) => {
      // console.log("ID", id,res.data);
      selectFarm(res.data);
      setViewControl({
        addView: false,
        listView: false,
        detailView: true,
      });
    });
  };

  // useEffect(() => {
  //   if (props.location.state) {
  //     setViewControl({
  //       addView: false,
  //       listView: false,
  //       detailView: true,
  //     });
  //     setCenter(JSON.parse(props.location.state.params.polygon)[1]);
  //     setPolygon(JSON.parse(props.location.state.params.polygon));
  //     setMapData([]);
  //     getDisasterData(props.location.state.params);
  //     setDetailData(props.location.state.params);
  //   }
  // }, [props.location.state]);

  const selectFarm = (item) => {
    setLoading(true);
    setPolygon(item.farm_polygon_json.location);
    setCenter(item.extra_field.centroid);
    selectField(item);
    // // setMapData([])
    getLayerData(item, "False", null);
  
    console.log("Selected Farm :", item);
    console.log("Polygon :", Object.values(item.farm_polygon_json));
    console.log("Center :", item.extra_field.centroid);
  };

  const getLayerData = (item, previous, previous_date) => {
    const params = {
      farm_id: item.farm_id,
      previous: previous,
      previous_date: previous_date,
    };

    MapService.getDateImage(params)
      .then((res) => {
        let newMapData = res.data.data.concat(mapData);
        setMapData(newMapData);
        setLoading(false);
        setMapData(res.data.data);
        setPreviousDate(res.data.previous_date);
        let ndviGraphData = res.data.ndviGraph;
        setGraphData({
          ndvi: ndviGraphData,
          ndwi: res.data.ndwiGraph,
        });
        console.log("Data:", data);
      })
      .catch((err) => setLoading(false));
      getFieldWeather();
  };

  const getNewDates = (pre, next) => {
    if (!props.location.state) {
      setLoading(true);
      getLayerData(selectedFarm, "True", previousDate);
    }
  };

  const getFieldWeather = () => {
    const params = {
      coordinates: [81.4434422,28.2097205].toString(),
    };
    if (selectedFarm) {
      MapService.getWeather(params).then((res) => {
        console.log("Weather", res.data);
        setWeatherData(res.data?.daily);
      })
      .catch(err => null);
    }
  };

  return (
    <>
      <div className="container">
        <div className="flex flex-row p-3">
          <div className="basis-3/4">
            <div className="flex flex-row p-3">
              <div className="basis-6/12">
                <DateList
                  loading={loading}
                  mapData={mapData}
                  selectedIndex={selectData}
                  getNewDates={getNewDates}
                />
              </div>

              <div className="basis-3/12">
                <input
                  type={"checkbox"}
                  onClick={() => setGraphView(!hideGraph)}
                />
                &nbsp; Time Series Graph
              </div>

              <div className="basis-3/12">
                <input
                  type={"checkbox"}
                  onClick={() => setWeatherView(!hideWeather)}
                />
                &nbsp; Weather
              </div>
            </div>

            <div className="flex flex-row">
              <LeafletMap
                polygon={polygon}
                // multiplePolygon = {}
                center={center}
                ref={(mapRed) => mapRef}
                viewControl={viewControl}
                newFarmArray={setNewFarmArray}
                selectedData={selectedData}
                configureColorPalate={(type, value) =>
                  setColor({ ...color, [type]: value })
                }
              />
            </div>
          </div>
          <div className="basis-1/4">
            <FarmList
              loading={loading}
              selectedFarm={selectedFarm}
              selectedItem={selectFarm}
            />
          </div>
        </div>

        <div className="flex flex-row p-3 ">
          <div className="basis-3/4">
            <ColorPalette ndvi={mapData.length > 0} ndwi={mapData.length > 0} />
          </div>
          <div class="basis-1/4"></div>
        </div>

        <div className="flex flex-row p-3">
          <div hidden={hideGraph} className="basis-4/4 w-full">
            <TimeSeriesGraph graphData={graphData} />
          </div>
        </div>

        <div className="flex flex-row p-3">
          <div hidden={hideWeather} className="basis-4/4 w-full">
            <FieldWeather weatherData={weatherData} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Map;
