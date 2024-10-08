import React, { useState } from "react";
import PageLayout from "../components/Pagelayout";
import { Bar, Line, Pie } from "react-chartjs-2";
import ToIcon, { IconSize, IconStyles, IconTypes } from "../components/ToIcons";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement,
} from "chart.js";
import Chart from "react-apexcharts"; // Import ApexCharts

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement
);

const Dashboard = () => {
  // Bar Chart (Farmer Enrollment Data)
  const farmerEnrollmentData = {
    labels: ["May", "June", "July", "Auguest", "September"],
    datasets: [
      {
        label: "Farmers Enrolled since May 2024",
        data: [10, 20, 30, 40, 60],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Line Chart (NDVI Analysis)
  const ndviAnalysisData = {
    labels: [
      "Farm 121 - Ontario",
      "Farm 267 - Ontario",
      "Farm 344 - Ontario",
      "Farm 411 - Ontario",
      "Farm 536 - Ontario",
    ],
    datasets: [
      {
        label: "NDVI Value throught out Spetemeber 2024",
        data: [0.45, 0.7, 0.35, 0.8, 0.7],
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderColor: "rgba(153, 102, 255, 1)",
        fill: false,
        tension: 0.4,
      },
    ],
  };

  // Pie Chart (Field Types)
  const fieldTypeData = {
    labels: ["Wheat", "Rice", "Corn", "Soybean"],
    datasets: [
      {
        data: [30, 20, 25, 25],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  };

  // Heatmap (NDVI Value Distribution per Region using ApexCharts)
  const heatmapData = {
    series: [
      {
        name: "Farm 121 - ON",
        data: [0.45, 0.65, 0.72, 0.85],
      },
      {
        name: "Farm 224 - ON",
        data: [0.3, 0.5, 0.78, 0.65],
      },
      {
        name: "Farm 344 - ON",
        data: [0.55, 0.45, 0.88, 0.55],
      },
    ],
    options: {
      chart: {
        type: "heatmap",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        heatmap: {
          shadeIntensity: 0.5,
          colorScale: {
            ranges: [
              {
                from: 0,
                to: 0.5,
                color: "#FF0000",
              },
              {
                from: 0.51,
                to: 0.7,
                color: "#FFA500",
              },
              {
                from: 0.71,
                to: 1,
                color: "#008000",
              },
            ],
          },
        },
      },
      title: {
        text: "NDVI Heatmap Distribution by Region",
      },
      dataLabels: {
        enabled: true,
      },
      xaxis: {
        categories: ["Barrie", "Midland", "Innisfil", "Penetangusine"],
      },
    },
  };

  // Scatter Plot (NDVI vs Crop Yield Analysis using ApexCharts)
  const scatterData = {
    series: [
      {
        name: "Crop Yield",
        data: [
          [0.45, 120],
          [0.5, 150],
          [0.6, 180],
          [0.75, 250],
          [0.85, 300],
        ],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "scatter",
        zoom: {
          enabled: true,
          type: "xy",
        },
      },
      xaxis: {
        title: {
          text: "NDVI Values",
        },
      },
      yaxis: {
        title: {
          text: "Crop Yield (kg/hectare)",
        },
      },
      title: {
        text: "Correlation between NDVI Values and Crop Yield",
      },
    },
  };

  return (
    <PageLayout>
      <div className="grid gap-y-4 gap-x-6 grid-cols-1 xl:grid-cols-2 py-20 px-10">
        <div className="flex flex-col bg-white p-6 rounded-xl shadow-md border-[3px] border-green-300 transition-transform transform hover:scale-95">
          <div className="flex items-center mb-6 gap-10">
            <ToIcon
              type={IconTypes.User}
              size={IconSize.NEW}
              style={IconStyles.Default}
            />
            <h3 className="text-2xl font-semibold text-blue-gray-800 ">
              Total Farmers Enrolled
            </h3>
          </div>
          <h4 className="text-3xl font-semibold text-blue-gray-900">
            56 Farmers
          </h4>
          <div className="relative w-full h-2 mt-2">
            <div className="absolute inset-0 bg-blue-gray-200 rounded" />
            <div
              className="bg-green-500 h-full rounded transition-all duration-300"
              style={{ width: "56%" }}
            />{" "}
            {/* Solid Progress Bar */}
          </div>
        </div>

        {/* Card for Total Fields Analyzed */}
        <div className="flex flex-col bg-white p-6 rounded-xl shadow-md border-[3px] border-green-300 transition-transform transform hover:scale-95">
          <div className="flex items-center mb-6 gap-10">
            <ToIcon
              type={IconTypes.Farm}
              size={IconSize.NEW}
              style={IconStyles.Default}
            />
            <h3 className="text-2xl font-semibold text-blue-gray-800">
              Total Fields Analyzed
            </h3>
          </div>
          <h4 className="text-3xl font-semibold text-blue-gray-900">
            124 Fields
          </h4>
          <div className="relative w-full h-2 mt-2">
            <div className="absolute inset-0 bg-blue-gray-200 rounded" />
            <div
              className="bg-orange-500 h-full rounded transition-all duration-300 striped-progress"
              style={{ width: "80%" }}
            />{" "}
            {/* Striped Progress Bar */}
          </div>
        </div>

        {/* Card for Average NDVI Value */}
        <div className="flex flex-col bg-white p-6 rounded-xl shadow-md  border-[3px] border-green-300 transition-transform transform hover:scale-95">
          <div className="flex items-center mb-6 gap-10">
            <ToIcon
              type={IconTypes.Dressing}
              size={IconSize.NEW}
              style={IconStyles.Default}
            />
            <h3 className="text-2xl font-semibold text-blue-gray-800">
              Average NDVI Value
            </h3>
          </div>
          <h4 className="text-3xl font-semibold text-blue-gray-900">0.67</h4>
          <div className="relative w-full h-2 mt-2">
            <div className="absolute inset-0 bg-blue-gray-200 rounded" />
            <div
              className="bg-gradient-to-r from-purple-500 to-blue-500 h-full rounded transition-all duration-300"
              style={{ width: "67%" }}
            />{" "}
            {/* Gradient Progress Bar */}
          </div>
        </div>

        {/* Card for NDVI Alerts */}
        <div className="flex flex-col bg-white p-6 rounded-xl shadow-md  border-[3px] border-green-300 transition-transform transform hover:scale-95">
          <div className="flex items-center mb-6 gap-10">
            <ToIcon
              type={IconTypes.Project}
              size={IconSize.NEW}
              style={IconStyles.Default}
            />
            <h3 className="text-2xl font-bold text-blue-gray-800">
              NDVI Alerts
            </h3>
          </div>
          <h4 className="text-3xl font-semibold text-blue-gray-900">
            7 Fields Below Threshold
          </h4>
          <div className="relative w-full h-2 mt-2">
            <div className="absolute inset-0 bg-blue-gray-200 rounded" />
            <div
              className="bg-red-500 h-full rounded transition-all duration-300 animated-progress"
              style={{ width: "30%" }}
            />{" "}
            {/* Animated Progress Bar */}
          </div>
        </div>
      </div>

      {/* Add styles for different progress bars */}
      <style jsx>{`
        .striped-progress {
          background-image: linear-gradient(
            45deg,
            rgba(255, 255, 255, 0.2) 25%,
            transparent 25%,
            transparent 50%,
            rgba(255, 255, 255, 0.2) 50%,
            rgba(255, 255, 255, 0.2) 75%,
            transparent 75%,
            transparent
          );
          background-size: 1rem 1rem;
        }

        .animated-progress {
          animation: loading 2s infinite alternate;
        }

        @keyframes loading {
          0% {
            width: 0;
          }
          100% {
            width: 30%; /* Change the width based on your progress */
          }
        }
      `}</style>
      {/* Analysis Section */}
      <div className="px-10 py-10 bg-white shadow-md rounded-lg">
        <h2 className="text-4xl font-bold text-green-700 mb-12 text-center underline">
          Data Analysis
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Farmer Enrollment Trend */}
          <div className="border-[3px] border-green-400 rounded-md p-4 shadow-md">
            <h4 className="text-2xl font-semibold text-green-800 mb-6 underline">
              Farmer Enrollment Trend
            </h4>
            <Bar
              data={farmerEnrollmentData}
              options={{
                responsive: true,
                scales: {
                  x: { ticks: { color: "#272524" } },
                  y: { ticks: { color: "#272524" } },
                },
              }}
            />
          </div>

          {/* NDVI Analysis of Fields */}
          <div className="border-[3px] border-green-400 rounded-md p-4 shadow-md">
            <h4 className="text-2xl font-semibold text-green-800 mb-6 underline">
              NDVI Analysis of Fields
            </h4>
            <Line
              data={ndviAnalysisData}
              options={{
                responsive: true,
                scales: {
                  x: { ticks: { color: "#272524" } },
                  y: { ticks: { color: "#272524" } },
                },
              }}
            />
          </div>

          {/* Field Type Distribution - Pie Chart */}
          <div className="flex justify-center items-center border-[3px] border-green-400 rounded-md p-4 shadow-md">
            <h4 className="text-2xl font-semibold text-green-800 mb-6 underline">
              Field Type Distribution
            </h4>
            <div style={{ height: "350px", width: "100%" }}>
              <Pie
                data={fieldTypeData}
                options={{
                  responsive: true,
                  plugins: {
                    legend: { labels: { color: "#272524"} },
                  },
                }}
              />
            </div>
          </div>

          {/* NDVI Heatmap Distribution */}
          <div className="border-[3px] border-green-400 rounded-md p-4 shadow-md">
            <h4 className="text-2xl font-semibold text-green-800 mb-6 underline">
              NDVI Heatmap Distribution
            </h4>
            <Chart
              options={heatmapData.options}
              series={heatmapData.series}
              type="heatmap"
              height={350}
            />
          </div>

          {/* NDVI vs Crop Yield - Scatter Plot */}
          <div className="border-[3px] border-green-400 rounded-md p-4 shadow-md">
            <h4 className="text-2xl font-semibold text-green-800 mb-6 underline">
              NDVI vs Crop Yield
            </h4>
            <Chart
              options={scatterData.options}
              series={scatterData.series}
              type="scatter"
              height={350}
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Dashboard;
