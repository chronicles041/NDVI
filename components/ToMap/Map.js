import React, { useEffect, useRef, useState } from "react";
import MapService from "./mapService";
// import ColorPalette from "./colorPalate";
import DateList from "./dateSlider";
// import Reports from "../reports";
import dynamic from "next/dynamic";
import Reports from "../../pages/reports";
import ColorPalette from "./colorPalate";
import TimeSeriesGraph from "./timeSeries";
// import LeafletMap from "./leaflet/leafletMap";

const LeafletMap = dynamic(() => import("./leaflet/leafletMap"), {
  ssr: false,
});

// const FarmFromReport = DisasterResponse.item[1].request.url.query;
const viewParams = {
  addView: false,
  listView: true,
  detailView: false,
};

function ToMap(props) {
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
  const [plantationDate, setPlantationDate] = React.useState('2022-04-02');

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
    getplantationDate()
  };

  const getLayerData = (item, previous, previous_date) => {
    const params = {
      farm_id: item.farm_id,
      previous: previous,
      previous_date: previous_date,
    };
    console.log("Graph Data");

    MapService.getDateImage(params)
      .then((res) => {
        let newMapData = res.data.data.concat(mapData);
        setMapData(newMapData);
        setLoading(false);
        setMapData(res.data.data);
        setPreviousDate(res.data.previous_date);
        const tempNdviGraph = res.data.ndviGraph.reverse();
        setGraphData({
          ndvi: tempNdviGraph,
        });
      })
      .catch((err) => setLoading(false));
      
  };

  const getNewDates = (pre, next) => {
    // if (!props.location.state) {
    setLoading(true);
    getLayerData(selectedFarm, "True", previousDate);
    // }
  };

  const getplantationDate = () =>{
     setPlantationDate('2022-03-28')
  }

  return (
    <>
      <div className="container bg-white px-4 py-4">
        <div className="flex flex-row gap-x-3">
          <div className="basis-3/4 z-0 flex flex-col gap-y-2">
            <div className="dateList flex justify-center bg-secondary bg-opacity-60 items-center  w-full mt-3">
              <DateList
                loading={loading}
                mapData={mapData}
                selectedIndex={selectData}
                getNewDates={getNewDates}
              />
            </div>
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
            <ColorPalette   ndvi={mapData.length > 0} ndwi={mapData.length > 0} />
          </div>
          <div className="basis-1/4 flex-col flex justify-between items-center">
            <Reports
              loading={loading}
              selectedItem={selectFarm}
              listView={true}
              getPlantationDate={getplantationDate}
            />
          </div>
        </div>
        <div hidden={loading} className={"pt-10 "}>
          <TimeSeriesGraph  plantationDate={plantationDate}  graphData={graphData} />
        </div>
      </div>
    </>
  );
}

export default ToMap;
