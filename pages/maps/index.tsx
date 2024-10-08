// src/NDVIMap.tsx
import React, { useState } from "react";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import { LatLngTuple } from "leaflet";
import { fetchNDVIAndMapImage } from "./FetchNDVI";
import PageLayout from "../../components/Pagelayout";
const fieldCoordinates: LatLngTuple[] = [
  [44.45, -79.7],
  [44.45, -79.68], // Point 2
  [44.43, -79.68], // Point 3
  [44.43, -79.7], // Point 4
  [44.45, -79.7], // Point 1 again to close the polygon
];

// Define the bounding box (bbox) for the NDVI data request
const bbox: [number, number, number, number] = [
  -80.50702, 43.47244, -80.504, 43.47456,
];

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

  return (
    <PageLayout>
      <div className="p-8 flex-col">
        <h1 className="text-3xl font-bold mb-8 underline text-green-700">Interactive NDVI visualization Map</h1>

        <MapContainer
          center={[44.45, -79.7]}
          zoom={11}
          style={{ height: "400px" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Polygon positions={fieldCoordinates} color="green" />
        </MapContainer>

        <button
          onClick={fetchData}
          className="bg-blue-500 text-white py-2 px-4 mt-4 rounded"
          disabled={loading}
        >
          {loading ? "Loading NDVI..." : "Fetch NDVI"}
        </button>

        {error && <p className="text-red-500 mt-2">{error}</p>}

        {ndviData && (
          <div className="mt-4">
            <h2 className="text-2xl">NDVI Data:</h2>
            <p>Average NDVI: {calculateAverageNDVI(ndviData)}</p>
            {/* You can display the NDVI image if needed */}
            {imageUrl && <img src={imageUrl} alt="NDVI Map" className="mt-4" />}
          </div>
        )}
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
