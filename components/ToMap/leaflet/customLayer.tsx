import { useState } from "react";
import ToIcon, { IconSize, IconStyles, IconTypes } from "../../ToIcons";

type CustomLayerProps = {
  selectedData: object;
  getImagePath: Function;
  setControlSetting: Function;
  controlSetting: object;
};
const defaultSetting: object = {
  ndvi: false,
  ndwi: false,
  evi: false,
};
const CustomLayer = ({
  selectedData,
  getImagePath,
  setControlSetting,
  controlSetting,
}: CustomLayerProps) => {
  const [showControl, setShowControl] = useState(true);

  const setControlOpen = () => {
    setShowControl(!showControl);
    //   onOpen();
  };
  const handleOnchange = (e) => {
    let tempSetting = defaultSetting;
    let newSetting = { ...tempSetting, [e.target.name]: e.target.checked };
    setControlSetting(newSetting);
    let identifier = Object.values(newSetting).map((val) => val);
    if (identifier.includes(true)) {
      getImagePath(selectedData[`${e.target.name}_path`]);

    //   console.log("***Change", identifier);
    }
    if (!identifier.includes(true)) {
      getImagePath("");

      console.log("***Dont Change", identifier);
    }
    // console.log(  selectedData[`${e.target.name}_path`]);
  };
  return (
    <div className="">
      <div
        onClick={() => setControlOpen()}
        className="block p-1 w-fit bg-gray-100 rounded-md "
      >
        <ToIcon
          type={IconTypes.Layers}
          size={IconSize.SM}
          style={IconStyles.FillColor}
        />
      </div>
      {showControl ? (
        <div className="p-3 pr-3 mt-3 m-2 h-auto w-auto grid-flow-row bg-white text-white">
          <div className="p-2">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-green-400"
              //   onChange={(e)=>alert("asdasd")}
              onChange={(e) => handleOnchange(e)}
              name="ndvi"
              checked={controlSetting.ndvi}
              // checked
            />
            <span className="ml-2 text-gray-700">NDVI</span>
          </div>

          <div className="p-2">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-600"
              onChange={(e) => handleOnchange(e)}
              name="ndwi"
              checked={controlSetting.ndwi}

              // checked
            />
            <span className="ml-2 text-gray-700">NDWI</span>
          </div>
          <div className="p-2">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-green-600 "
              onChange={(e) => handleOnchange(e)}
              name="evi"
              checked={controlSetting.evi}
              // checked
            />
            <span className="ml-2 text-gray-700">EVI</span>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CustomLayer;
