import React, { useState, useEffect } from "react";
import { FaSun, FaCloud, FaCloudRain, FaSnowflake } from "react-icons/fa"; // Import icons from react-icons

const WeatherApp: React.FC = () => {
  const [city, setCity] = useState("");
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [weather, setWeather] = useState<any | null>(null);
  const [currentWeather, setCurrentWeather] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (city.length > 2) {
      const debounceTimer = setTimeout(() => {
        fetchSuggestions(city);
      }, 300);

      return () => clearTimeout(debounceTimer);
    } else {
      setSuggestions([]);
    }
  }, [city]);

  const fetchSuggestions = async (query: string) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?city=${query}&format=json&addressdetails=1&limit=5`
      );
      const data = await response.json();
      setSuggestions(data);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  const fetchWeather = async (lat: number, lon: number) => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,precipitation,windspeed_10m,weathercode&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,windspeed_10m_max,weathercode&timezone=auto&forecast_days=7`
      );
      const data = await response.json();
      setWeather(data.daily);
      setCurrentWeather(data.current);
    } catch (error) {
      console.error("Error fetching weather:", error);
      setError("Failed to fetch weather data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSelectCity = (lat: number, lon: number, name: string) => {
    fetchWeather(lat, lon);
    setSuggestions([]);
    setCity(name);
  };

  const getWeatherIcon = (code: number) => {
    // Use React Icons based on weather conditions
    if (code < 3) return <FaSun size={48} />; // Sunny
    if (code < 50) return <FaCloud size={48} />; // Cloudy
    if (code < 70) return <FaCloudRain size={48} />; // Rainy
    return <FaSnowflake size={48} />; // Snowy
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "short",
      month: "short",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <div className="p-6 mx-auto bg-gradient-to-br from-green-200 to-green-400 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-700">
        Weather Forecast
      </h1>

      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Enter city name..."
          className="p-3 border rounded-full w-full pl-10 focus:outline-none focus:ring-2 focus:ring-blue-300"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <span className="absolute left-3 top-3 text-gray-400">🔍</span>

        {suggestions.length > 0 && (
          <ul className="absolute z-10 w-full bg-white border rounded-lg mt-1 shadow-lg max-h-60 overflow-y-auto">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="cursor-pointer hover:bg-gray-100 p-3 border-b last:border-b-0"
                onClick={() =>
                  handleSelectCity(
                    parseFloat(suggestion.lat),
                    parseFloat(suggestion.lon),
                    suggestion.display_name
                  )
                }
              >
                {suggestion.display_name}
              </li>
            ))}
          </ul>
        )}
      </div>

      {loading && <p className="text-center">Loading weather data...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {currentWeather && (
        <div className="p-10 flex gap-5 flex-col rounded-lg shadow-md backdrop-blur-md bg-opacity-30 mb-8 items-center justify-center bg-gradient-to-r from-gray-200 to-gray-400">
          <h2 className="text-2xl font-bold mb-2 text-center">
            Current Weather in {city}
          </h2>
          <div className="text-4xl">
            {getWeatherIcon(currentWeather.weathercode)}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 ">
            <div className="flex flex-col gap-4 items-center justify-center">
              <p className="font-semibold text-xl border-b-8 border-green-600">
                Temperature
              </p>
              <p className="text-xl">{currentWeather.temperature_2m}°C</p>
            </div>
            <div className="flex flex-col gap-4 items-center justify-center">
              <p className="font-semibold text-xl border-b-8 border-green-600">
                Humidity
              </p>
              <p>{currentWeather.relative_humidity_2m}%</p>
            </div>
            <div className="flex flex-col gap-4 items-center justify-center">
              <p className="font-semibold text-xl border-b-8 border-green-600">
                Precipitation
              </p>
              <p>{currentWeather.precipitation} mm</p>
            </div>
            <div className="flex flex-col gap-4 items-center justify-center">
              <p className="font-semibold text-xl border-b-8 border-green-600">
                Wind Speed
              </p>
              <p>{currentWeather.windspeed_10m} km/h</p>
            </div>
          </div>
        </div>
      )}

      {weather && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            7-Day Weather Forecast for {city}
          </h2>
          <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {weather.time.map((date: string, index: number) => (
              <div
                key={date}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow backdrop-blur-md bg-opacity-30 bg-gradient-to-r from-gray-200 to-gray-400"
              >
                <h3 className="font-bold text-lg mb-2">{formatDate(date)}</h3>
                <div className="text-4xl mb-2">
                  {getWeatherIcon(weather.weathercode[index])}
                </div>
                <div className="flex">
                  <p className="text-sm">
                    Max: {weather.temperature_2m_max[index]}°C
                  </p>
                  <p className="text-sm">
                    Min: {weather.temperature_2m_min[index]}°C
                  </p>
                  <p className="text-sm">
                    Precipitation: {weather.precipitation_sum[index]} mm
                  </p>
                  <p className="text-sm">
                    Wind: {weather.windspeed_10m_max[index]} km/h
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
