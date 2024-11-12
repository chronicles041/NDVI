import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Ndvianalysis: React.FC = () => {
  // Mock Data for NDVI Trend Analysis over Time
  const ndviData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    datasets: [
      {
        label: "NDVI Value",
        data: [0.45, 0.52, 0.60, 0.65, 0.72, 0.75, 0.78, 0.76, 0.73, 0.68],
        fill: false,
        backgroundColor: "rgb(34, 197, 94)",
        borderColor: "rgba(34, 197, 94, 0.6)",
        tension: 0.4,
      },
    ],
  };

  // Mock Data for Crop Health Analysis
  const cropHealthData = {
    labels: ["Healthy", "Moderate", "Stressed"],
    datasets: [
      {
        label: "Percentage",
        data: [70, 20, 10],
        backgroundColor: ["#4CAF50", "#FFEB3B", "#FF5722"],
      },
    ],
  };

  return (
    <div className="mx-auto p-6 bg-gradient-to-br from-green-100 to-lime-100 rounded-lg shadow-xl ">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
        NDVI Analysis for Spring Water Field
      </h1>

      {/* Main layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* NDVI Trend Analysis */}
        <div className="p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">NDVI Trend Over Time</h2>
          <p className="text-gray-600 mb-6">
            This chart represents NDVI variations over the year, reflecting vegetation health and
            density changes in Spring Water Field.
          </p>
          <Line data={ndviData} options={{
            responsive: true,
            plugins: {
              legend: {
                display: true,
                position: "top",
              },
            },
          }} />
        </div>

        {/* Crop Health Analysis */}
        <div className="p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Crop Health Analysis</h2>
          <p className="text-gray-600 mb-6">
            A breakdown of the crop health across the field, identifying areas that require
            monitoring or intervention.
          </p>
          <Bar data={cropHealthData} options={{
            responsive: true,
            plugins: {
              legend: {
                display: true,
                position: "top",
              },
            },
          }} />
        </div>
      </div>

      {/* Soil Quality and Environmental Details */}
      <div className="mt-10 p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Soil Quality and Environmental Insights</h2>
        <p className="text-gray-600 mb-6">
          Detailed soil quality analysis, based on recent testing, indicates the health of the
          vegetation and field sustainability. Soil quality is determined as "Loamy," which is
          optimal for the crops currently cultivated.
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Soil Type: Loamy</li>
          <li>pH Level: 6.8 (Slightly acidic)</li>
          <li>Nutrient Density: High in Nitrogen and Phosphorus</li>
          <li>Moisture Content: 28% (Optimal for crop growth)</li>
          <li>Water Retention: Moderate, supporting irrigation schedule</li>
        </ul>
      </div>

      {/* Legend and Field Overview */}
      <div className="mt-10 p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Field Overview & Legend</h2>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <img
              src="/ndvi-values.png"
              alt="NDVI Legend"
              className="w-64 mx-auto md:w-full rounded-lg shadow-lg"
            />
            <p className="text-center text-gray-600 mt-4">NDVI Legend</p>
          </div>
          <div className="flex-1">
            <p className="text-gray-600">
              This legend provides a visual representation of the NDVI scale, showing the color
              variations from low to high vegetation density. Dark green indicates dense, healthy
              vegetation, while yellow and red shades indicate areas of stress that require
              attention.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ndvianalysis;
