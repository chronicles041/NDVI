import React, { useEffect, useRef, useState } from "react";
import { DisasterResponse } from "./assets/disasterResponse";
import LeafletMap from "./leaflet/leafletMap";
import MapService from "./mapService";
import FarmList from "./farmList";
const FarmFromReport = DisasterResponse.item[1].request.url.query;
const viewParams = {
  addView: false,
  listView: true,
  detailView: false,
};

function Map(props) {
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
    // selectField(item);
    // // setMapData([])
    // getLayerData(item, "False", null);
    console.log("Selected Farm :", item)
    console.log("Polygon :", Object.values(item.farm_polygon_json))
    console.log("Center :", item.extra_field.centroid)
  };

  const getLayerData = (item, previous, previous_date) => {
    const params = {
      farm_id: item.farm_id,
      previous: previous,
      previous_date: previous_date,
    };

    MapService.getDateImage(params)
      .then((res) => {
        // let newMapData = res.data.data.concat(mapData)
        // setMapData(newMapData);
        setLoading(false);
        setMapData(res.data.data);
        setPreviousDate(res.data.previous_date);
        setGraphData({
          ndvi: res.data.ndviGraph,
          ndwi: res.data.ndwiGraph,
        });
      })
      .catch((err) => setLoading(false));
  };

  const getDisasterData = (params) => {
    // setCenter(params.polygon[0]);
    MapService.getDisasterImage(params)
      .then((res) => {
        setMapData(res.data.data);
      })
      .catch((err) => console.log(err));
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
        <div className="flex flex-row">
          <div className="basis-3/4" >
            <LeafletMap
              polygon={polygon}
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
      </div>
    </>
  );
}

export default Map;
