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
    <div className="flex flex-col overflow-y-scroll items-center gap-y-2 mt-4 ">
      <ToTittle tittle="Weather Forecast" />
      <div>
        <div className="flex flex-row= from-gray-900 to-gray-600    bg-gradient-to-r  font-medium text-white p-2   rounded-xl h-auto w-full items-center justify-center">
          <div className="flex flex-row gap-y-3 gap-x-2 items-center p-2">
            {nextWeather?.daily.map((d, i) => (
              <div
                key={i}
                className="flex content-center bg-black bg-opacity-25 p-4 rounded-md shadow-md gap-y-4 flex-col  items-center justify-center"
              >
                <span className=" text-white opacity-80 font-semibold text-lg w-1/4">
                  {moment.unix(d.dt).format("ddd")}
                </span>

                <div className="flex flex-col items-center gap-y-1  justify-end w-auto">
                  <WeatherIcon
                    size={50}
                    title=""
                    path={getIcon(d.weather[0]?.icon)}
                  ></WeatherIcon>
                  <div className="font-medium text-sm">
                    {`${d.weather[0]?.main}`}
                  </div>
                  <div className=" text-sm">
                    {`${Math.round(d.pop * 100)} %`}
                  </div>

                </div>

                <span className="font-medium items-center text-sm w-full text-center justify-center">
                  {d.temp.max}°C {d.temp.min}°C
                </span>

                {/* <div className="flex bg-white text-black flex-row gap-y-3 gap-x-2 items-center p-2"> */}
                  <span className="flex flex-col text-ellipsis text-xs font-semibold text-center   items-center gap-y-1 justify-end w-full">
                    Humidity : {d.humidity} <br />
                    Rain : {d.rain ?? "N/A"} <br />
                    Pressure : {d.pressure} hPa <br />
                    Wind Speed : {d.wind_speed} km /hr <br />
                    {/* PoP : {d.pop} % */}
                  </span>
                {/* </div> */}
              </div>
            ))}

          </div>
        </div>
        {/* <div className="flex flex-row= from-gray-900 to-gray-600 bg-gradient-to-r  font-medium text-white p-2  rounded-xl h-auto w-full items-center justify-center">
          <div className="flex flex-row gap-y-3 gap-x-2 items-center p-2">
            asdasdasd
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ToWeather;

{
  /* <span className="font-semibold text-sm w-1/4">
<ToIcon
    type={IconTypes.Sunrise}
    size={IconSize.SM}
    style={""}
  />
<span className="font-medium items-center text-lg w-full text-center justify-center">

  {moment.unix(d.sunrise).format(" h:mm a")} 
</span>
<ToIcon
    type={IconTypes.Sunset}
    size={IconSize.SM}
    style={""}
  />
<span className="font-medium items-center text-lg w-full text-center justify-center">

  {moment.unix(d.sunset).format(" h:mm a")} 
</span>
</span> */
}
