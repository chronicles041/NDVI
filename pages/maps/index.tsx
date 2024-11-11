// src/NDVIMap.tsx
import React, { useState } from "react";
import { MapContainer, TileLayer, Polygon, useMap } from "react-leaflet";
import { LatLngTuple } from "leaflet";
import { fetchNDVIAndMapImage } from "./FetchNDVI";
import PageLayout from "../../components/Pagelayout";
import Ndvifetch from "./Ndvifetch";
const fieldCoordinates: LatLngTuple[] = [
  [44.419988, -79.737911],
  [44.416678, -79.744949], // Point 2
  [44.409842, -79.739027], // Point 3
  [44.412907, -79.731774], // Point 4
  [44.419988, -79.737911], // Point 1 again to close the polygon
];

// Define the bounding box (bbox) for the NDVI data request
const bbox: [number, number, number, number] = [
  -80.50702, 43.47244, -80.504, 43.47456,
];

const centerPosition: [number, number] = [44.416678, -79.7]; // Initial center

const MapIndex: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [ndviData, setNdviData] = useState<number[][] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    // Fetch NDVI data and map image
    const data = await fetchNDVIAndMapImage(bbox, "2023-07-01", "2023-07-31");

    if (data.ndviResponse) {
      setNdviData(data.ndviResponse.ndviData);
      setImageUrl(data.imageUrl); // Store the image URL
    } else {
      setError("Failed to fetch NDVI data");
    }

    setLoading(false);
  };

 // Recenter Button component
const RecenterButton: React.FC<{ center: [number, number] }> = ({ center }) => {
  const map = useMap();

  const recenterMap = () => {
    map.setView(center, 12); // Reset zoom to 12, or use map.getZoom() if you want to maintain current zoom level
  };

  return (
    <button
      onClick={recenterMap}
      className="bg-green-600 text-white px-6 text-md py-4 font-bold rounded shadow-lg hover:bg-green-400 focus:outline-none border-2 border-white"
      style={{ position: "absolute", top: "10px", right: "10px", zIndex: 1000 }}
    >
      Re-center
    </button>
  );
};

  return (
    <PageLayout>
    <div className="p-8 flex-col">
      <h1 className="text-3xl font-bold mb-8 underline text-green-700">
        Interactive NDVI Visualization Map
      </h1>

      {/* Wrap MapContainer in a relative div */}
      <div className="relative" style={{ height: "400px" }}>
        <MapContainer center={centerPosition} zoom={12} style={{ height: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Polygon positions={fieldCoordinates} color="green" />
          <RecenterButton center={centerPosition} /> {/* Add the RecenterButton */}
        </MapContainer>
      </div>

      <Ndvifetch />
    </div>
  </PageLayout>
  );
};

// Calculate average NDVI from the response data
const calculateAverageNDVI = (ndviData: number[][]): number => {
  const validPixels = ndviData.flat().filter((val) => !isNaN(val));
  return validPixels.length > 0
    ? validPixels.reduce((a, b) => a + b, 0) / validPixels.length
    : 0; // Return 0 if no valid pixels are found
};

export default MapIndex;
