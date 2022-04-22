function ColorPalette({ ndvi, ndwi }) {
  return (
    <>
      <div className={"flex flex-row"}>
        {/* <div hidden={!ndwi}> */}

        <div className="p-1 flex-auto font-semibold text-xs ">Good Crop Health</div>
        <div className="p-1  flex-auto " span={8}>
          <img className="w-auto h-5  " src="ndvi.png"></img>
        </div>
        <div className="p-1 flex-auto font-semibold text-xs" span={2}>
          Poor Crop Health
        </div>
      </div>
      <div className={"flex flex-row"}>
        {/* <div hidden={!ndwi}> */}

        <div className="p-1 flex-auto font-semibold text-xs ">Low Water Content</div>
        <div className="p-1  flex-auto " span={8}>
          <img className="w-auto h-5 " src="ndwi.png"></img>
        </div>
        <div className="p-1 flex-auto font-semibold text-xs" span={2}>
          High Water Content
        </div>
      </div>
    </>
  );
}

export default ColorPalette;

{
  /* <div style={{ backgrounddivor: "#ef3b2c" }} className="p-1" span={2} />
          <div style={{ backgrounddivor: "#fb6a4a" }} className="p-1" span={2} />
          <div style={{ backgrounddivor: "#d7efa9" }} className="p-1" span={2} />
          <div style={{ backgrounddivor: "#9ecae1" }} className="p-1" span={2} />
          <div style={{ backgrounddivor: "#4292c6" }} className="p-1" span={2} />
          <div style={{ backgrounddivor: "#2171b5" }} className="p-1" span={2} />
          <div style={{ backgrounddivor: "#08519c" }} className="p-1" span={2} />
          <div style={{ backgrounddivor: "#08306b" }} className="p-1" span={2} /> */
}

{
  /* <div style={{ backgrounddivor: "#CE7E45" }} className="p-1" span={1} />
          <div style={{ backgrounddivor: "#DF923D" }} className="p-1" span={1} />
          <div style={{ backgrounddivor: "#F1B555" }} className="p-1" span={1} />
          <div style={{ backgrounddivor: "#FCD163" }} className="p-1" span={1} />
          <div style={{ backgrounddivor: "#99B718" }} className="p-1" span={1} />
          <div style={{ backgrounddivor: "#74A901" }} className="p-1" span={1} />
          <div style={{ backgrounddivor: "#66A000" }} className="p-1" span={1} />
          <div style={{ backgrounddivor: "#529400" }} className="p-1" span={1} />
          <div style={{ backgrounddivor: "#3E8601" }} className="p-1" span={1} />
          <div style={{ backgrounddivor: "#207401" }} className="p-1" span={1} />
          <div style={{ backgrounddivor: "#056201" }} className="p-1" span={1} />
          <div style={{ backgrounddivor: "#004C00" }} className="p-1" span={1} />
          <div style={{ backgrounddivor: "#023B01" }} className="p-1" span={1} />
          <div style={{ backgrounddivor: "#012E01" }} className="p-1" span={1} />
          <div style={{ backgrounddivor: "#011D01" }} className="p-1" span={1} />
          <div style={{ backgrounddivor: "#011301" }} className="p-1" span={1} /> */
}
{
  /* <div style={{ backgrounddivor: "#08519c" }} className="p-1" span={1} /> */
}
