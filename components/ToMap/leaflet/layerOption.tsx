import React from "react";
import {
  ImageOverlay,
  LayerGroup,
  LayersControl,
  Polygon,
  TileLayer,
} from "react-leaflet";

class LayerOptions extends React.Component {
  polyRef = React.createRef();
  ndviOverlayRef = React.createRef();
  ndwiOverlayRef = React.createRef();
  eviOverlayRef = React.createRef();
  // geoOverlayRef = React.createRef();
  layControlRef = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      polygon: [],
      multiplePolygon: [],
      ndvi_path: "",
      ndwi_path: "",
      evi_path:"",
      geo_path: "https://miro.medium.com/max/800/1*Z9QPlG7TvSkYMv0OzUbrPg.jpeg",
      checkImage: false,
    };
  }

  componentWillMount() {
    //   this.setState({
    //     polygon: this.props.polygon,
    //   });
    // this.createPolygon(this.props.polygon);
    this.createMultiplePolygon();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.polygon !== prevState.polygon) {
      this.controllLayer();
    }
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
      this.ndwiOverlayRef.current._bounds = this.polyRef.current._bounds;
      this.ndviOverlayRef.current._bounds = this.polyRef.current._bounds;
      this.eviOverlayRef.current._bounds = this.polyRef.current._bounds;
    }
    if (prevProps.selectedData !== this.props.selectedData) {
      this.ndwiOverlayRef.current._bounds = this.polyRef.current._bounds;
      this.ndviOverlayRef.current._bounds = this.polyRef.current._bounds;
      this.eviOverlayRef.current._bounds = this.polyRef.current._bounds;


      this.controllLayer();
      this.setState({
        ndwi_path: this.props.selectedData.ndwi_path,
        ndvi_path: this.props.selectedData.ndvi_path,
        evi_path: this.props.selectedData.evi_path,
      });
    }
  }

  controllLayer = () => {
    let ndwi_index = this.layControlRef.current._layers.findIndex(
      (l) => l.name === "NDWI"
    );
    let ndvi_index = this.layControlRef.current._layers.findIndex(
      (l) => l.name === "NDVI"
    );

    console.log(
      "**Layer Control Ref/NDWI",
      this.layControlRef.current._layerControlInputs[ndwi_index].checked
    );
    console.log(
      "**Layer Control Ref/NDVI",
      this.layControlRef.current._layerControlInputs[ndvi_index].checked
    );

    return null;
  };

  createPolygon = (polygon) => {
    let tempArray = polygon;
    let newArray = [];
    tempArray.map((arr) => {
      newArray = [...newArray, [arr[1], arr[0]]];
      return null;
    });
    console.log("New Array : ", newArray);
    this.setState(
      {
        polygon: newArray,
        ndwi_path: "",
        ndvi_path: "",
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
      // console.log("**DNew Array : ", newArray);
      finalArray.push(newArray);
    });

    // finalArray.map((ar) => {
    //   if (arraysEqual(this.state.polygon[0], ar)) {
    //     console.log("*********************************");
    //     console.log("**DCommon: ");
    //     console.log("**DCommonArray: ");
    //     console.log("*********************************");
    //   }
    // });

    // console.log("**DFinal State : ", this.state.polygon);
    // console.log("**Final Array : ", finalArray);
    // console.log("**Compare Array : ", this.state.polygon.length);
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

    // if (this.state.polygon.length > 1) {
    //   finalArray.map((poly) => {
    //     if (JSON.stringify(poly[0][0]) === JSON.stringify(currentPolygon[0][0]))
    //       // console.log("**Each Array : ", this.state.polygon[0][0]);
    //       console.log("**Compare with  Array : ", poly.length, poly);
    //     console.log(
    //       "**Compare Array : ",
    //       currentPolygon.length,
    //       currentPolygon
    //     );
    //   });
    // }
    // this.setState({
    //   multiplePolygon: finalArray,
    // });
  };

  render() {
    const polygonStyle = { color: "yellow" };

    return (
      <>
        <LayersControl
          ref={this.layControlRef}
          position="topright"
          collapsed={this.state.ndwi_path === ""}
        >
          <Polygon
            ref={this.polyRef}
            pathOptions={polygonStyle}
            positions={this.state.polygon}
            // positions={testPolygon}
          />
          {/* {this.props.multipleField?.length < 0 ? ( */}
          <Polygon
            // ref={this.polyRef}
            pathOptions={{ color: "white" }}
            positions={this.state.multiplePolygon}
          />
          {/* // ) : null} */}

          <LayerGroup>
            <LayersControl.BaseLayer checked name="Satellite Map">
              <TileLayer url="https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}" />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="Traffic Map">
              <TileLayer url="https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png" />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="Hybrid Map">
              <TileLayer url="https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png" />
            </LayersControl.BaseLayer>
          </LayerGroup>
          <LayerGroup>
            <LayersControl.Overlay checked={this.state.checkImage} name="NDWI">
              <ImageOverlay
                ref={this.ndwiOverlayRef}
                bounds={this.state.polygon}
                url={`${this.state.ndwi_path}`}
              />
            </LayersControl.Overlay>
            <LayersControl.Overlay
              ref={this.layerControlRef}
              checked={this.state.checkImage}
              name="NDVI"
            >
              <ImageOverlay
                ref={this.ndviOverlayRef}
                bounds={this.state.polygon}
                url={`${this.state.ndvi_path}`}
              />
            </LayersControl.Overlay>
            <LayersControl.Overlay
              ref={this.layerControlRef}
              checked={this.state.checkImage}
              name="EVI"
            >
              <ImageOverlay
                ref={this.eviOverlayRef}
                bounds={this.state.polygon}
                url={`${this.state.evi_path}`}
              />
            </LayersControl.Overlay>
          </LayerGroup>
        </LayersControl>
      </>
    );
  }
}

export default LayerOptions;
