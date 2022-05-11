import moment from "moment";
import { ReactNode, useEffect, useState } from "react";
import ReportService from "../../api/service";
import ToIcon, { IconSize, IconStyles, IconTypes } from "../ToIcons";
import ToTittle from "../ToTittle";
import { getIcon } from "../Weather/iconsMap";
import WeatherIcon from "../Weather/WeatherIcon";

type Props = {
  children?: ReactNode;
  title: string;
  type?: any;
  coordinates: [number, number];
};

const ToWeather = ({ coordinates }: Props) => {
  const [farmWeather, setFarmWeather] = useState();
  const [nextWeather, setNextWeather] = useState();

  function reverseArr(input) {
    var ret = new Array();
    for (var i = input.length - 1; i >= 0; i--) {
      ret.push(input[i]);
    }
    return ret;
  }

  useEffect(() => {
    if (coordinates) {
      let wCoordinates = reverseArr(coordinates);
      // let wCoordinates =  coordinates.reverse()
      const params = {
        coordinates: wCoordinates.toString(),
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
    <div className="flex flex-col items-center gap-y-2 mt-4">
      <ToTittle tittle="Weather Forecast" />
      <div className="flex flex-row bg-gradient-to-tr from-gray-900 to-gray-600 bg-gradient-to-r  font-medium text-white p-2  rounded-xl h-auto w-full items-center justify-center">
        {/* <div className="flex-col flex-1 p-2">
          <div className=" cursor-pointer flex flex-col justify-center items-center text-center p-8 gap-y-6 ">
            <div className=" flex flex-col justify-center items-center px-4  py-4 bg-[#eaffb1] shadow-weather-shadow rounded-lg">
              <div className="text-md font-bold flex flex-col text-secondary">
                <span className="uppercase">Today</span>{" "}
                <span className="font-normal text-secondary text-sm mt-2">
                  {moment(currentTime).format("dddd , Do MMM YYYY ")}
                </span>
              </div>
              <div className="w-28 h-28 flex items-center justify-center">
                <img
                  className="h-20"
                  src={`http://openweathermap.org/img/w/${farmWeather?.icon}.png`}
                />
              </div>
              <p className="text-secondary mb-2 capitalize font-semibold">
                {farmWeather?.weather_report[0].description}
              </p>
              <div className="text-4xl font-bold text-secondary mb-2 mt-2">
                {farmWeather?.temperature.toFixed(2)}º
              </div>
            </div>
            <div className="flex flex-row w-full mt-">
              <div className="flex-1 flex-row  items-start">
                <div className="flex  items-center justify-center">
                  <ToIcon
                    type={IconTypes.Wind}
                    size={IconSize.SM}
                    style={""}
                  ></ToIcon>
                </div>

                <div className="flex flex-col items-center">
                  <div className="font-medium text-sm mt-2 ">Wind</div>
                  <div className="text-secondary text-sm font-semibold">
                    {" "}
                    {`${farmWeather?.speed}  km/h`}
                  </div>
                </div>
              </div>
              <div className="flex-1 flex-row items-center">
                <div className="flex flex-1 items-center justify-center">
                  <ToIcon
                    type={IconTypes.Humidity}
                    size={IconSize.SM}
                    style={""}
                  ></ToIcon>
                </div>

                <div className="flex-1 flex-col items-center">
                  <div className="font-medium text-sm mt-2">Humidity</div>
                  <div className="text-secondary text-sm font-semibold">{`${farmWeather?.humidity} %`}</div>
                </div>
              </div>
              <div className="flex-1 flex-row items-start">
                <div className="flex flex-1 items-center justify-center">
                  <ToIcon
                    type={IconTypes.Pressure}
                    size={IconSize.SM}
                    style={""}
                  ></ToIcon>
                </div>

                <div className="flex-1 flex-col items-center">
                  <div className="font-medium text-sm mt-2">Pressure</div>
                  <div className="text-secondary text-sm font-semibold">{`${farmWeather?.pressure} mb `}</div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="flex flex-row gap-y-3 gap-x-2 items-center p-2">
          {nextWeather?.daily.map((d, i) => (
            <div className="flex  content-center bg-black bg-opacity-25 p-4 rounded-md shadow-md gap-y-4 flex-col  items-center justify-center">
              <span className=" text-white opacity-80 font-semibold text-lg w-1/4">
                {moment.unix(d.dt).format("ddd")}
              </span>
              {/* <span className="font-semibold text-sm w-1/4">
                <ToIcon
                  type={IconTypes.Sunrise}
                  size={IconSize.SM}
                  style={""}
                />
                {moment.unix(d.sunrise).format(" h:mm a")} -
                {moment.unix(d.sunset).format(" h:mm a")}
                <ToIcon type={IconTypes.Sunset} size={IconSize.SM} style={""} />
              </span> */}
              
              <div className="flex flex-col items-center gap-y-1  justify-end w-auto">
              
                <WeatherIcon size={50} title= ""  path={getIcon(d.weather[0]?.icon)}></WeatherIcon>
                <div className="font-medium text-sm">
                  {`${d.weather[0]?.main}`}{" "}
                  {/* {`${d.weather[0]?.description}`} */}
                </div>
                {/* <img
                  className="h-full"
                  src={`http://openweathermap.org/img/w/${d.weather[0]?.icon}.png`}
                /> */}
              </div>
              

              <span className="font-medium items-center text-lg w-full text-center justify-center">
                {d.temp.max}°  {d.temp.min}°
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToWeather;
