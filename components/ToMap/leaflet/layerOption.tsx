import { LatLngBoundsExpression } from "leaflet";
import React from "react";
import { ImageOverlay, Polygon, TileLayer } from "react-leaflet";
import Control from "react-leaflet-custom-control";
import CustomLayer from "./customLayer";
type LayerOptionsProps = {
  multipleField: [] | undefined;
  selectedData: {
    ndwi_path: string;
    ndvi_path: string;
    evi_path: string;
  };
  polygon: [number[]] | never[];
};

type LayerOptionsState = {
  polygon: [number[]] | never[] | LatLngBoundsExpression;
  multiplePolygon: [] | undefined;
  checkImage: boolean;
  overlay_path: string;
  controlSetting: typeof defaultSetting;
};

const defaultSetting: object = {
  ndvi: false,
  ndwi: false,
  evi: false,
};
// const [controlSetting, setControlSetting] = useState(defaultSetting);
class LayerOptions extends React.Component<
  LayerOptionsProps,
  LayerOptionsState
> {
  polyRef = React.createRef();
  imageOverlayRef = React.createRef();

  state: LayerOptionsState = {
    polygon: [],
    multiplePolygon: [],
    overlay_path: "",
    checkImage: false,
    controlSetting: defaultSetting,
  };

  componentWillMount() {
    this.createMultiplePolygon();
  }

  componentDidUpdate(
    prevProps: LayerOptionsProps,
    prevState: LayerOptionsState
  ) {
    if (prevProps.polygon === this.state.polygon) {
      this.createPolygon(this.props.polygon);
    }
    if (prevProps.multipleField !== this.props.multipleField) {
      this.createMultiplePolygon();
    }
    if (prevProps.polygon !== this.props.polygon) {
      this.createPolygon(this.props.polygon);
    }
    if (prevProps.polygon !== this.props.polygon) {
      this.createPolygon(this.props.polygon);
    }
    if (prevProps.selectedData !== this.props.selectedData) {
      this.setState({
        overlay_path: this.getCurrentPath(),
      });
    }
  }

  getCurrentPath = () => {
    let obj = this.state.controlSetting;
    const key = Object.keys(obj).find((key) => obj[key] === true);
    let finalValue = " ";
    if (key) {
      let pathValue = this.props.selectedData;
      // alert(typeof pathValue[`${key}_path`]);
      finalValue = pathValue[`${key}_path`];
    }
    if (!key) {
      finalValue = "";
    }
    // console.log("***New  : ",finalValue);

    return finalValue;
  };
  createPolygon = (polygon) => {
    let tempArray = polygon;
    let newArray: typeof tempArray = [];
    tempArray.map((arr: number[]) => {
      newArray = [...newArray, [arr[1], arr[0]]];
      return null;
    });
    this.setState(
      {
        polygon: newArray,
        overlay_path: "",
        controlSetting: defaultSetting,
      },
      () => {
        this.createMultiplePolygon();
      }
    );
  };

  createMultiplePolygon = () => {
    let finalArray = [];

    this.props.multipleField?.map((field) => {
      let tempArray = field;
      let newArray = [];
      tempArray.map((arr) => {
        newArray = [...newArray, [arr[1], arr[0]]];
        return null;
      });
      finalArray.push(newArray);
    });

    let currentPolygon = this.state.polygon;
    if (this.state.polygon.length > 1) {
      let newArray = finalArray.filter((e) => e[0][0] !== currentPolygon[0][0]);
      console.log(
        "**Compare with  Array : ",
        finalArray.length,
        newArray.length
      );
      this.setState({
        multiplePolygon: newArray,
      });
    }
    if (this.state.polygon.length < 1) {
      this.setState({
        multiplePolygon: finalArray,
      });
    }
  };

  setOverlayPath = (value: string) => {
    console.log("***PATH", value);
    this.setState({ overlay_path: value });
    return null;
  };

  render() {
    const polygonStyle = { color: "yellow" };
    // const bounds = [[40.712216, -74.22655], [40.773941, -74.12544]

    return (
      <>
        {this.props.selectedData.evi_path === "" ? null : (
          <>
            <Control prepend position="topleft">
              
              <CustomLayer
                selectedData={this.props.selectedData}
                getImagePath={this.setOverlayPath}
                setControlSetting={(value) =>
                  this.setState({ controlSetting: value })
                }
                controlSetting={this.state.controlSetting}
                // getImagePath={(value: string) => {
                //   console.log("***PATH", value);
                // }}
              />
            </Control>
            {this.state.overlay_path !== "" ? (
              <ImageOverlay
                url={`${this.state.overlay_path}`}
                bounds={this.state.polygon}
                opacity={0.9}
                zIndex={10}
                ref={this.imageOverlayRef}
              />
            ) : null}
          </>
        )}

        <Polygon
          ref={this.polyRef}
          pathOptions={polygonStyle}
          positions={this.state.polygon}
          // positions={testPolygon}
        />
        <Polygon
          // ref={this.polyRef}
          pathOptions={{ color: "white" }}
          positions={this.state.multiplePolygon}
        />
        <TileLayer url="https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}" />

        {this.state.controlSetting.ndvi ? (
          <Control prepend position="bottomleft">
            <div
              className={"flex flex-row px-2 py-4 items-center justify-center"}
            >
              <div className="p-1 text-white flex-none font-semibold text-xs ">
                Poor Crop Health
              </div>
              <div className="p-1  flex-1 " span={8}>
                <img className="w-auto h-3" src="ndvi.png"></img>
              </div>
              <div
                className="p-1 text-white flex-none font-semibold text-xs"
                span={2}
              >
                Good Crop Health
              </div>
            </div>
          </Control>
        ) : null}
        {this.state.controlSetting.ndwi ? (
          <Control prepend position="bottomleft">
            <div
              className={
                "flex flex-row px-2 py-4 items-center justify-center border-l-2 border-primary"
              }
            >
              <div className="p-1 text-white flex-none font-semibold text-xs ">
                Low Water Content
              </div>
              <div className="p-1  flex-1 " span={8}>
                <img className="w-auto h-3 " src="ndwi.png"></img>
              </div>
              <div
                className="p-1 text-white  flex-none font-semibold text-xs"
                span={2}
              >
                High Water Content
              </div>
            </div>
          </Control>
        ) : null}
        {this.state.controlSetting.evi ? (
          <Control prepend position="bottomleft">
            <div
              className={"flex flex-row px-2 py-4 items-center justify-center"}
            >
              <div className="p-1 text-white flex-none font-semibold text-xs ">
                Poor Crop Health
              </div>
              <div className="p-1  flex-1 ">
                <img className="w-auto h-3" src="ndvi.png"></img>
              </div>
              <div className="p-1 text-white flex-none font-semibold text-xs">
                Good Crop Health
              </div>
            </div>
          </Control>
        ) : null}
      </>
    );
  }
}

export default LayerOptions;

{
  /* style="
            --s1yss67b-0: linear-gradient(
              90deg,
              #350801 0%,
              #7e1805 5.55556%,
              #af3a03 11.1111%,
              #ecb225 16.6667%,
              #fcd731 22.2222%,
              #fee85f 27.7778%,
              #fefe00 33.3333%,
              #f2f900 38.8889%,
              #c4e700 44.4444%,
              #97d500 50%,
              #5fc100 55.5556%,
              #379f00 61.1111%,
              #1c8300 66.6667%,
              #0b6400 72.2222%,
              #064b0a 77.7778%,
              #033a0f 83.3333%,
              #02310c 88.8889%,
              #02310c 94.4444%
            );
          " */
}
