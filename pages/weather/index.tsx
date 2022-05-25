import React, { useState } from "react";
import dynamic from "next/dynamic";
import PageLayout from "../../components/Pagelayout";
import ToWeather from "../../components/ToWeather";
import Reports from "../reports";
const Weather =  dynamic(() => import("../../components/ToWeather/Weather.js"), { ssr: false });

const WeatherIndex = () => {

  const [polygon, setPolygon] = useState([]);
  const [center, setCenter] = useState([102.8312416766951, 15.248647579054131]);
  // const [viewControl, setViewControl] = useState(viewParams);
  const [newFarm, setNewFarmArray] = useState();
  const [mapData, setMapData] = useState([]);
  const [selectedData, selectData] = useState({
    ndwi_path: "",
    ndvi_path: "",
    evi_path: "",
  });
  const [selectedFarm, selectField] = useState({});
  const [previousDate, setPreviousDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [detailData, setDetailData] = useState({});
  const [color, setColor] = useState({});
  const [graphData, setGraphData] = useState({});
  const [viewAllFields, setAllFields] = useState(false);
  const [plantationDate, setPlantationDate] = React.useState();
  const [multipleField, setMultipleField] = React.useState();

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
    getplantationDate();
    setPlantationDate(item.plantation_date);
  };

  const getLayerData = (item, previous, previous_date) => {
    const params = {
      farm_id: item.farm_id,
      plantation_date: item.plantation_date,
    };
    // const params = {
    //   farm_id: item.farm_id,
    //   plantation_date:selectedFarm.plantation_date
    // };
    console.log("Graph Data");

    MapService.getDateImage(params)
      .then((res) => {
        let newMapData = res.data.data.concat(mapData);
        setMapData(newMapData);
        setLoading(false);
        setMapData(res.data.data);
        setPreviousDate(res.data.previous_date);
        const tempNdviGraph = res.data.ndviGraph.reverse();
        const tempEviGraph = res.data.eviGraph.reverse();
        setGraphData({
          ndvi: tempNdviGraph,
          evi: tempEviGraph,
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

  const getplantationDate = () => {
    setPlantationDate(selectedFarm.plantation_date);
  };

  return (

    // <PageLayout>
    //   <Weather/>
    // </PageLayout>
    <>
    <div className="container bg-white px-4 py-4 flex-col">
      <div className="flex flex-row gap-x-3">
        <div className="basis-3/4 z-0 flex flex-col gap-y-3">
          {/* **Here  {JSON.stringify(multipleField[1])} */}
          <ToWeather coordinates={center} />

          {/* <LeafletMap
            polygon={polygon}
            center={center}
            // ref={(mapRed) => mapRef}
            selectedData={selectedData}
            multipleField={multipleField}
          /> */}
          {/* <ColorPalette ndvi={mapData.length > 0} ndwi={mapData.length > 0} /> */}
        </div>
        <div className="basis-1/4 flex-col flex justify-center gap-x-2 items-center">
          <Reports
            loading={loading}
            selectedItem={selectFarm}
            listView={true}
            getPlantationDate={getplantationDate}
            getMultiplefields={(value: any) => setMultipleField(value)}
          />
        </div>
      </div>

    </div>
  </>
  );
};

export default WeatherIndex;
