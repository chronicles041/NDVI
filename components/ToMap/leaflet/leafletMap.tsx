import React, { useEffect, useState } from "react";
import { MapContainer, useMap } from "react-leaflet";
import LayerOptions from "./layerOption";

type ILeafletMap = {
  polygon: [number[]] | never[];
  center: number[];
  selectedData: {
    ndwi_path: string;
    ndvi_path: string;
    evi_path: string;
  };
  multipleField: [] | undefined;
};
function LeafletMap({
  polygon,
  center,
  selectedData,
  multipleField,
}: ILeafletMap) {
  const MapSettings = () => {
    const map = useMap();
    map.setView([center[1], center[0]], 17);
    // map.setView([81.44453166029894, 28.209537039662536], 17);
    console.log("*****")
    return null;
  };

  return (
    <>
      <MapContainer center={[center[1], center[0]]} zoom={16}>
        <LayerOptions
          multipleField={multipleField}
          selectedData={selectedData}
          polygon={polygon}
        />
        <MapSettings></MapSettings>
      </MapContainer>
    </>
  );
}

export default LeafletMap;
