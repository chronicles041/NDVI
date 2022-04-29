import moment from "moment";
import { ReactNode, useEffect, useState } from "react";
import ReportService from "../../api/service";

type Props = {
  children?: ReactNode;
  title: string;
  type?: any;
  coordinates: [number, number];
};

const ToWeather = ({ coordinates }: Props) => {
  const [farmWeather, setFarmWeather] = useState();
  const [nextWeather, setNextWeather] = useState();

  useEffect(() => {
    if (coordinates) {
      const params = {
        coordinates: coordinates.toString(),
      };
      ReportService.FetchWeather({ params }).then((res) => {
        console.log("Weather_data", res);
        setFarmWeather(res);
      });
      ReportService.FetchNextWeather({ params }).then((res) => {
        console.log("next_data", res);
        setNextWeather(res);
      });
    }

    // console.log("***",filterParams?filterParams:"Undefined")
  }, [coordinates]);
  const currentTime = new Date().toString();
  const currentDay = new Date();
  return (
    <>
      <div className="flex flex-row gap-x-3 ">
        <div className="basis-3/4   z-0 flex flex-col gap-y-3 overflow-y-scroll">
          <div className="flex flex-col space-y-6 w-full max-w-screen-sm bg-white p-5  rounded-xl ring-8 ring-white ring-opacity-40">
            {nextWeather?.daily.map((d, i) => (
              <div className="flex justify-between items-center">
                <span className="font-semibold text-lg w-1/4">
                  {moment(currentDay)
                    .add(i , "days")
                    .format("ddd")}
                </span>
                <div className="flex items-center justify-end w-1/4 pr-10">
                  <span className="font-semibold">{d.humidity}%</span>
                  <svg
                    className="w-6 h-6 fill-current ml-1"
                    viewBox="0 0 16 20"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g transform="matrix(1,0,0,1,-4,-2)">
                      <path d="M17.66,8L12.71,3.06C12.32,2.67 11.69,2.67 11.3,3.06L6.34,8C4.78,9.56 4,11.64 4,13.64C4,15.64 4.78,17.75 6.34,19.31C7.9,20.87 9.95,21.66 12,21.66C14.05,21.66 16.1,20.87 17.66,19.31C19.22,17.75 20,15.64 20,13.64C20,11.64 19.22,9.56 17.66,8ZM6,14C6.01,12 6.62,10.73 7.76,9.6L12,5.27L16.24,9.65C17.38,10.77 17.99,12 18,14C18.016,17.296 14.96,19.809 12,19.74C9.069,19.672 5.982,17.655 6,14Z" />
                    </g>
                  </svg>
                </div>
                <img
                  className="h-full"
                  src={`http://openweathermap.org/img/w/${d.weather[0]?.icon}.png`}
                />
                <span className="font-semibold text-lg w-1/4 text-right">
                  {d.temp.max}° / {d.temp.min}°
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* todaypnael */}

        <div className="basis-1/4 flex-col flex justify-centergap-x-2 items-center">
          <div className="w-64   mt-10 cursor-pointer border b-gray-400 rounded flex flex-col justify-center items-center text-center p-6 bg-white">
            <div className="text-md font-bold flex flex-col text-gray-900">
              <span className="uppercase">Today</span>{" "}
              <span className="font-normal text-gray-700 text-sm">
                {moment(currentTime).format("Do MMM")}
              </span>
            </div>
            <div className="w-32 h-32 flex items-center justify-center">
              <img
                className="h-full"
                src={`http://openweathermap.org/img/w/${farmWeather?.icon}.png`}
              />
            </div>
            <p className="text-gray-700 mb-2">
              {farmWeather?.weather_report[0].description}
            </p>
            <div className="text-3xl font-bold text-gray-900 mb-6">
              {farmWeather?.temperature.toFixed(2)}º
            </div>
            <div className=" ">
              {/* <div className="flex items-center text-gray-700 px-2">
           logo
            100 l/m<sup>2</sup>
          </div> */}
              <div className="  text-gray-700 px-2">
                {`Wind ${farmWeather?.speed}  km/h`}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* {JSON.stringify(nextWeather?.daily)} */}
    </>
  );
};

export default ToWeather;
