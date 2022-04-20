import React, { useEffect, useState } from "react";
import { MapContainer, useMap } from "react-leaflet";
import LayerOptions from "./layerOption";
// import LayerOptions from "./layersControl";
// import NewField from "./newField";
// import "leaflet-draw/dist/leaflet.draw.css";

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

  useEffect(() => {
    setView(viewControl.addView);
  }, [viewControl.addView]);

  return (
    <>
      {/* <button onClick={()=>setView(!addView)}>Check : {addView?"True":"False"}</button> */}
      <MapContainer center={[center[1], center[0]]} zoom={16}>
        <LayerOptions selectedData={selectedData} polygon={polygon} />
        {/* <NewField addFieldView={addView} newFarmArray={newFarmArray} /> */}
        <MapSettings></MapSettings>
      </MapContainer>
    </>
  );
}

export default LeafletMap;