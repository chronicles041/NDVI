// src/NDVIMap.tsx
import React, { useState } from 'react';
import { MapContainer, TileLayer, Polygon } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';
import { fetchNDVIAndMapImage } from './FetchNDVI';

const fieldCoordinates: LatLngTuple[] = [
  [44.4500, -79.7000],
  [44.4500, -79.6800], // Point 2
  [44.4300, -79.6800], // Point 3
  [44.4300, -79.7000], // Point 4
  [44.4500, -79.7000]  // Point 1 again to close the polygon
];

// Define the bounding box (bbox) for the NDVI data request
const bbox: [number, number, number, number] = [-80.50702, 43.47244, -80.50400, 43.47456];

const MapIndex: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [ndviData, setNdviData] = useState<number[][] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    // Fetch NDVI data and map image
    const data = await fetchNDVIAndMapImage(bbox, '2023-07-01', '2023-07-31');
    
    if (data.ndviResponse) {
      setNdviData(data.ndviResponse.ndviData);
      setImageUrl(data.imageUrl); // Store the image URL
    } else {
      setError('Failed to fetch NDVI data');
    }

    setLoading(false);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">NDVI Map</h1>

      <MapContainer center={[44.4500, -79.7000]} zoom={10} style={{ height: '400px' }}>
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
        {loading ? 'Loading NDVI...' : 'Fetch NDVI'}
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
  );
};

// Calculate average NDVI from the response data
const calculateAverageNDVI = (ndviData: number[][]): number => {
  const validPixels = ndviData.flat().filter(val => !isNaN(val));
  return validPixels.length > 0
    ? validPixels.reduce((a, b) => a + b, 0) / validPixels.length
    : 0; // Return 0 if no valid pixels are found
};

export default MapIndex;
