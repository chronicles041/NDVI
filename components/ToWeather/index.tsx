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
    <div className="flex flex-col w-full overflow-y-scroll items-center gap-y-2 mt-4 ">
      <ToTittle tittle="Weather Forecast" />
      <div className="w-full">
        <div className="flex flex-row from-gray-900 to-gray-800    bg-gradient-to-r  font-medium text-white p-2   rounded-xl h-auto w-full items-center justify-center">
          <div className="flex flex-col  gap-y-3 gap-x-2 p-4 w-full">
            <div className="md:flex px-4 md:visible hidden  bg-black py-4 rounded-lg bg-opacity-30 items-center justify-center">
              <span className="w-1/5 ">Day</span>
              <span className="w-1/5 text-center">Forecast</span>
              <span className="w-1/5 text-center">Precipitation</span>
              <span className="w-1/5 text-center">Min/Max</span>
              <span className="w-1/5 text-left">Info</span>
            
            </div>
            {nextWeather?.daily.map((d, i) => (
              <div
                key={i}
                className="flex md:flex-row flex-col  w-full px-4 flex-grow  justify-evenly items-center  bg-opacity-25  py-2  border-b-gray-300 border-opacity-20 border-b-2 gap-y-4  "
              >
                <div className=" md:w-1/5 text-white opacity-80 font-semibold text-lg ">
                  {moment.unix(d.dt).format("dddd")}
                </div>

                <div className="flex  md:w-1/5 flex-col items-center gap-y-1  justify-end ">
                  <WeatherIcon
                    size={50}
                    title=""
                    path={getIcon(d.weather[0]?.icon)}
                  ></WeatherIcon>
                  <div className="font-medium text-sm">
                    {`${d.weather[0]?.main}`}
                  </div>
               
                </div>
                <div className=" text-md text-center md:w-1/5">
                    {`${Math.round(d.pop * 100)} %`}
                  </div>

                <span className="font-medium  md:w-1/5 items-center text-md  text-center justify-center">
                  {d.temp.max}°C <br/> {d.temp.min}°C
                </span>

                {/* <div className="flex bg-white text-black flex-row gap-y-3 gap-x-2 items-center p-2"> */}
                  <span className="flex flex-col   md:w-1/5  text-sm font-medium md:text-left text-center   items-start gap-y-1 ">
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
