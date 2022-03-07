import { Button, Col, Row } from "antd";
import ColumnGroup from "antd/lib/table/ColumnGroup";
import React, { useEffect, useRef, useState } from "react";
import AddField from "./addField";
import { DisasterResponse } from "./assets/disasterResponse";
import ColorPalette from "./colorPalate";
import DateList from "./dateSlider";
import DisasterDetail from "./disasterDetail";
import FarmList from "./farmList";
import LeafletMap from "./leaflet/leafletMap";
import MapService from "./mapService";
import TimeSeriesGraph from "./timeSeries";

// const FarmFromReport = DisasterResponse.item[1].request.url.query;
const viewParams = {
  addView: false,
  listView: true,
  detailView: false,
};

function Map(props) {
  const mapRef = useRef();
  const [polygon, setPolygon] = useState();
  // const [polygon, setPolygon] = useState(JSON.parse(FarmFromReport[2].value));
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
  useEffect(() => {
    getFarmItem();
    // getLayerData(item, "False", null)
  }, []);

  const getFarmItem = () => {
    let newArray = [];
    // let params = {
    //   search: searchName,
    // };
    MapService.fetchFarmDetail(props.fieldId).then((res) => {
      // alert(JSON.stringify(res.data))
      let item = res.data;
      setLoading(true);
      setPolygon(item.farm_polygon_json.location);
      setCenter(item.extra_field.centroid);
      selectField(item);
      // getLayerData(item, "False", null);
    });
  };
  
  const selectFarm = (item) => {
    console.log("Item", item);
    setLoading(true);
    // setPolygon(item.farm_polygon.location);
    // setCenter(item.extra_field.centroid);
    // selectField(item);
    // getLayerData(item, "False", null);

    // setMapData([])
  };

  const getLayerData = (item, previous, previous_date) => {
    const params = {
      farm_id: props.farm_id,
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
      <div className="relative flex flex-col w-full shadow-lg bg-white rounded-xl">
        <div className="rounded-t">
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row p-1.5" span={17}>
              <div className="text-right">
                {/* <DatePicker
                onChange={onDateChange}
                size="large"
              /> */}
              </div>
            </Col>
            <Col className="gutter-row" span={7}>
              <div className="text-right">
                <Button
                  hidden={viewControl.addView}
                  onClick={() =>
                    setViewControl({
                      addView: true,
                      listView: false,
                      detailView: false,
                    })
                  }
                  type="primary"
                >
                  Add New Field
                </Button>
                <Button
                  hidden={!viewControl.addView}
                  onClick={() => {
                    setViewControl(viewParams);
                    setNewFarmArray([]);
                  }}
                  type="danger"
                >
                  Back
                </Button>
              </div>
            </Col>
          </Row>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col hidden={false} className="gutter-row p-1.5" span={17}>
              <DateList
                loading={loading}
                mapData={mapData}
                selectedIndex={selectData}
                getNewDates={getNewDates}
              />
            </Col>
            <br />
            <Col className="gutter-row p-1.5" span={17}>
              <div className="">
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
              <Col className="gutter-row p-1 colorTab text-center">
                {/* <ColorPalette ndvi={color.NDVI}  ndwi={color.NDWI} /> */}
                <ColorPalette
                  ndvi={mapData.length > 0}
                  ndwi={mapData.length > 0}
                />
              </Col>
            </Col>

            <Col className="gutter-row" span={7}>
              {/* <div hidden={!viewControl.addView} className="text-left">
                <AddField
                  newFarm={newFarm}
                  onReturn={() => {
                    setViewControl(viewParams);
                  }}
                />
              </div> */}
              <div
                // hidden={!viewControl.listView}
                className="text-left farmList"
              >
                <FarmList loading={loading} selectedItem={selectFarm} />
              </div>
              {/* <div hidden={!viewControl.detailView} className="text-left">
                <DisasterDetail detail={detailData} />
              </div> */}
            </Col>
          </Row>
        </div>
      </div>
      <div
        hidden={mapData.length < 1}
        className="relative flex flex-col w-full shadow-lg rounded-xl"
      >
        <div className="rounded-t">
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row p-2.5" span={24}>
              <TimeSeriesGraph graphData={graphData} />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Map;
