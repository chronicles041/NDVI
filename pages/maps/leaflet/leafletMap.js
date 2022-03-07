import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import LayerOptions from "./layersControl";
// import NewField from "./newField";
// import  "leaflet-draw/dist/leaflet.draw.css";
import 'leaflet/dist/leaflet.css';
function LeafletMap({
  polygon,
  center,
  viewControl,
  newFarmArray,
  selectedData,
  configureColorPalate,
}) {
  const [addView, setView] = useState(false);

  const MapSettings = () => {
    const map = useMap();
    // if (map) {
    // map.on("overlayadd", function(e) {
    //   configureColorPalate(e.name, true);
    // });
    // map.on("overlayremove", function(e) {
    //   configureColorPalate(e.name, false);
    // });
    // }
    map.setView([center[1], center[0]], 17);
    return null;
  };

  // useEffect(() => {
  //   setView(viewControl.addView);
  // }, [viewControl.addView]);
  const position = [ 28.27243828122306,81.45897868930257]
  return (
    <>
      {/* <button onClick={()=>setView(!addView)}>Check : {addView?"True":"False"}</button> */}
      {/* <MapContainer center={[center[1], center[0]]} zoom={16}>
        <LayerOptions selectedData={selectedData} polygon={polygon} />
        <NewField addFieldView={addView} newFarmArray={newFarmArray} />
        <MapSettings ></MapSettings>
      </MapContainer> */}
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
         {/* <LayerOptions  /> */}
         <LayerOptions selectedData={selectedData} polygon={polygon} />

      </MapContainer>
    </>
  );
}

export default LeafletMap;
