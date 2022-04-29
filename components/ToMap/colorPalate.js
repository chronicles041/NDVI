function ColorPalette({ ndvi, ndwi }) {
  return (
    <div className="grid grid-cols-2 mt-3">
      <div className={"flex flex-row px-2 py-4 items-center justify-center"}>
        <div className="p-1 flex-none font-semibold text-xs ">Poor Crop Health</div>
        <div className="p-1  flex-1 " span={8}>
          <img className="w-auto h-3" src="ndvi.png"></img>
        </div>
        <div className="p-1 flex-none font-semibold text-xs" span={2}>
          Good Crop Health
        </div>
      </div>
      <div className={"flex flex-row px-2 py-4 items-center justify-center border-l-2 border-primary"}>
        <div className="p-1 flex-none font-semibold text-xs ">Low Water Content</div>
        <div className="p-1  flex-1 " span={8}>
          <img className="w-auto h-3 " src="ndwi.png"></img>
        </div>
        <div className="p-1 flex-none font-semibold text-xs" span={2}>
          High Water Content
        </div>
      </div>
    </div>
  );
}

export default ColorPalette;


