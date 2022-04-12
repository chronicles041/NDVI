import React from "react";
import {
  ImageOverlay,
  LayerGroup,
  LayersControl,
  Polygon,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
// import { DisasterResponse } from "../assets/disasterResponse";
// import NdviPalate from "../colorPalate";

// const FarmFromReport = DisasterResponse.item[1].request.url.query;


class LayerOptions extends React.Component {
  polyRef = React.createRef();
  ndviOverlayRef = React.createRef();
  ndwiOverlayRef = React.createRef();
  fertilizerOverlayRef = React.createRef();
  // geoOverlayRef = React.createRef();
  layControlRef = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      polygon: [],
      ndvi_path: "",
      ndwi_path: "",
      fertilizer_path: "",
      geo_path: "https://miro.medium.com/max/800/1*Z9QPlG7TvSkYMv0OzUbrPg.jpeg",
      checkImage: false,
    };
  }

  componentWillMount() {
    //   this.setState({
    //     polygon: this.props.polygon,
    //   });
    this.createPolygon(this.props.polygon);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.polygon !== prevState.polygon) {
      this.controllLayer();
    }
    if (prevProps.polygon === this.state.polygon) {
      this.createPolygon(this.props.polygon);
    }

    if (prevProps.polygon !== this.props.polygon) {
      this.createPolygon(this.props.polygon);
    }
    if (prevProps.polygon !== this.props.polygon) {
      this.createPolygon(this.props.polygon);
      this.ndwiOverlayRef.current._bounds = this.polyRef.current._bounds;
      this.ndviOverlayRef.current._bounds = this.polyRef.current._bounds;
      this.fertilizerOverlayRef.current._bounds = this.polyRef.current._bounds;
    }
    if (prevProps.selectedData !== this.props.selectedData) {
      this.ndwiOverlayRef.current._bounds = this.polyRef.current._bounds;
      this.fertilizerOverlayRef.current._bounds = this.polyRef.current._bounds;
      this.ndviOverlayRef.current._bounds = this.polyRef.current._bounds;

      this.controllLayer();
      this.setState({
        ndwi_path: this.props.selectedData.ndwi_path,
        ndvi_path: this.props.selectedData.ndvi_path,
        fertilizer_path:this.props.selectedData.vegetation_zoning_path
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
      () => {}
    );
  };

  render() {
    const polygonStyle = { color: "purple" };
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
          <LayerGroup>
            <LayersControl.BaseLayer checked name="Satellite Map">
              <TileLayer url="https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}" />
            </LayersControl.BaseLayer>{" "}
            <LayersControl.BaseLayer name="Traffic Map">
              <TileLayer url="https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png" />
            </LayersControl.BaseLayer>{" "}
            <LayersControl.BaseLayer name="Hybrid Map">
              <TileLayer url="https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png" />
            </LayersControl.BaseLayer>{" "}
          </LayerGroup>
          <LayerGroup>
            <LayersControl.Overlay checked={this.state.checkImage} name="NDWI">
              <ImageOverlay
                ref={this.ndwiOverlayRef}
                bounds={this.state.polygon}
                url={`${this.state.ndwi_path}`}
              />{" "}
            </LayersControl.Overlay>{" "}
            <LayersControl.Overlay
              ref={this.layerControlRef}
              checked={this.state.checkImage}
              name="NDVI"
            >
              <ImageOverlay
                ref={this.ndviOverlayRef}
                bounds={this.state.polygon}
                url={`${this.state.ndvi_path}`}
              />{" "}
            </LayersControl.Overlay>
            <LayersControl.Overlay
              ref={this.layerControlRef}
              checked={this.state.checkImage}
              name="FertilizerSpary"
            >
              <ImageOverlay
                ref={this.fertilizerOverlayRef}
                bounds={this.state.polygon}
                url={`${this.state.fertilizer_path}`}
              />{" "}
            </LayersControl.Overlay>
          </LayerGroup>
        </LayersControl>
      </>
    );
  }
}

export default LayerOptions;
