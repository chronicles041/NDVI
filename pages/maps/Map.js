import React, { useEffect, useRef, useState } from "react";
// import { DisasterResponse } from "./assets/disasterResponse";
// import LeafletMap from "./leaflet/leafletMap";
import MapService from "./mapService";
import FarmList from "./farmList";
import ColorPalette from "./colorPalate";
import DateList from "./dateSlider";
import dynamic from "next/dynamic";

const LeafletMap = dynamic(() => import("./leaflet/leafletMap"), {
  ssr: false,
});

// const FarmFromReport = DisasterResponse.item[1].request.url.query;
const viewParams = {
  addView: false,
  listView: true,
  detailView: false,
};

function Map(props) {
  const mapRef = useRef();
  const [polygon, setPolygon] = useState([]);
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
        setGraphData({
          ndvi: res.data.ndviGraph,
          ndwi: res.data.ndwiGraph,
        });
        console.log("Data:", data);
      })
      .catch((err) => setLoading(false));
  };

  const getNewDates = (pre, next) => {
    if (!props.location.state) {
      setLoading(true);
      getLayerData(selectedFarm, "True", previousDate);
    }
  };

  return (
    <>
      <div className="container">
        <div className="flex flex-row w-full">
          <div className="basis-3/4">
            {/* <input
              type={"checkbox"}
              onClick={() => setAllFields(!viewAllFields)}
            />
            View All Fields ? */}

            <div className=" bg-blue-300 w-[100%] dateList ">
              <DateList
                loading={loading}
                mapData={mapData}
                selectedIndex={selectData}
                getNewDates={getNewDates}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="basis-3/4">
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
          <div class="basis-1/4">
            <FarmList loading={loading} selectedItem={selectFarm} />
          </div>
        </div>

        <div className="flex flex-row p-3">
          <div className="basis-3/4">
            <ColorPalette ndvi={mapData.length > 0} ndwi={mapData.length > 0} />
          </div>
          <div class="basis-1/4">Something</div>
        </div>
      </div>
    </>
  );
}

export default Map;
