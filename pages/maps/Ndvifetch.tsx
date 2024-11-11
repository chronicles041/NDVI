import React, { useState } from "react";

type Farm = {
  name: string;
  location: string;
  datedndvi: string;
  ndviValue: number;
  imageUrl: string;
  size: string;
  cropType: string;
  irrigation: string;
  soilQuality: string;
  owner: string;
  contact: string;
  established: number;
  yield: string;
  legend_pic: string;
};

const Ndvifetch: React.FC = () => {
  const farms: Farm[] = [
    {
      name: "Spring Water Barrie Farm",
      location: "Spring water, Barrie, Ontario",
      ndviValue: 0.75,
      datedndvi: "2024-11-12",
      imageUrl: "spring-field.svg",
      size: "44.65 acres",
      cropType: "Corn",
      irrigation: "Automated",
      soilQuality: "Loamy",
      owner: "John Doe",
      contact: "john.doe@gmail.com",
      established: 1994,
      yield: "High",
      legend_pic:"ndvi-values.png"
    },
    // Add more farms here if needed
  ];

  const [selectedFarm, setSelectedFarm] = useState<Farm | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchDataImage = (farm: Farm) => {
    setLoading(true);
    setError(null);
    setSelectedFarm(null);

    // Simulate a 5-second loading delay
    setTimeout(() => {
      setSelectedFarm(farm); // Set the selected farm data after delay
      setLoading(false);
    }, 5000);
  };

  return (
    <div className="mt-10 bg-gradient-to-br from-green-200/50 via-green-100 to-lime-100/50 shadow-2xl sm:rounded-3xl sm:p-10 bg-clip-padding bg-opacity-80 border border-gray-200">
      <h1 className="text-3xl font-bold text-center mb-6">Farm NDVI Data</h1>

      {/* List of farm buttons to select a farm */}
      <div className="flex flex-wrap justify-center gap-4">
        {farms.map((farm, index) => (
          <button
            key={index}
            onClick={() => fetchDataImage(farm)}
            className="bg-green-500 text-white py-2 px-4 rounded shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
            disabled={loading}
          >
            {loading && selectedFarm?.name === farm.name
              ? "Loading..."
              : `View ${farm.name}`}
          </button>
        ))}
      </div>

      {error && <p className="text-red-500 mt-4 text-center">{error}</p>}

      {/* Loading animation */}
      {loading && (
        <div className="flex justify-center items-center mt-8">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-green-500"></div>
        </div>
      )}

      {/* Display selected farm details in a table format */}
      {selectedFarm && (
        <div className="mt-8 bg-white p-8 rounded-xl shadow-xl flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <h2 className="text-3xl font-semibold text-gray-700 mb-6">
              NDVI Data for {selectedFarm.name}
            </h2>

            <table className="w-full text-left bg-gray-100 rounded-lg shadow-inner overflow-hidden ">
              <tbody className="shadow-lg">
                <tr className="border-b">
                  <td className="py-3 px-4 font-semibold text-gray-600">Location</td>
                  <td className="py-3 px-4">{selectedFarm.location}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-semibold text-gray-600">Farm Size</td>
                  <td className="py-3 px-4">{selectedFarm.size}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-semibold text-gray-600">Dated NDVI</td>
                  <td className="py-3 px-4 bg"><span className="bg-green-600 px-2 py-2 rounded-lg text-white font-medium">{selectedFarm.datedndvi}</span></td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-semibold text-gray-600">Crop Type</td>
                  <td className="py-3 px-4"><span className="bg-yellow-600 px-2 py-2 rounded-lg text-white">{selectedFarm.cropType}</span></td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-semibold text-gray-600">Irrigation</td>
                  <td className="py-3 px-4">{selectedFarm.irrigation}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-semibold text-gray-600">Soil Quality</td>
                  <td className="py-3 px-4">{selectedFarm.soilQuality}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-semibold text-gray-600">Owner</td>
                  <td className="py-3 px-4">{selectedFarm.owner}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-semibold text-gray-600">Contact</td>
                  <td className="py-3 px-4">{selectedFarm.contact}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-semibold text-gray-600">Established</td>
                  <td className="py-3 px-4"><span className="bg-green-600 px-2 py-2 rounded-lg text-white">{selectedFarm.established}</span></td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-gray-600">Seasonal Yield</td>
                  <td className="py-3 px-4">{selectedFarm.yield}</td>
                </tr>
              </tbody>
            </table>
            <p className="mt-6 text-lg font-semibold text-gray-600">
              Average NDVI: <span className="text-gray-700">{selectedFarm.ndviValue}</span>
            </p>
          </div>

          {/* Farm Image */}
          {selectedFarm.imageUrl && (
            <div className="flex-1 flex gap-2 justify-center items-center">
              <div className="w-72 h-72 lg:w-96 lg:h-96 overflow-hidden rounded-lg shadow-md">
                <img
                  src={selectedFarm.imageUrl}
                  alt={`${selectedFarm.name} NDVI Map`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-72 h-72 lg:w-96 lg:h-96 overflow-hidden rounded-lg shadow-md">
                <img
                  src={selectedFarm.legend_pic}
                  alt={`${selectedFarm.name} NDVI Map`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Ndvifetch;
