import FarmDetail from "./farmDetail";

function PlantationDetail({ detail }: any) {
  return (
    <div className="  flex-col px-2  text-white items-center justify-center">
      <div className="flex flex-col w-full px-1 justify-start items-start py-2">
        {detail.farmer_info.map((data) => (
          <div className="grid  grid-cols-2 gap-3 p-4 items-start w-auto">
            <div className="inline-flex items-center p-2 w-full border-b  border-primary">
              <span className="inline-flex bg-secondary text-white rounded-full h-6 px-3 justify-center items-center">
                Previous Disaster{" "}
              </span>
              <span className="inline-flex px-2 font-semibold text-secondary">
                {data.additional_fields.is_previous_disaster}
              </span>
            </div>
            <div className="inline-flex items-center p-2 border-b  border-primary w-full">
              <span className="inline-flex bg-secondary text-white rounded-full h-6 px-3 justify-center items-center">
                Major Plantation Crop{" "}
              </span>
              <span className="inline-flex px-2 font-semibold text-secondary">
                {data.additional_fields.major_crop_plantation}
              </span>
            </div>
            <div className="inline-flex items-center border-b  border-primary w-full p-2">
              <span className="inline-flex bg-secondary text-white rounded-full h-6 px-3 justify-center items-center">
                Plantation Date
              </span>
              <span className="inline-flex px-2 font-semibold text-secondary">
                {data.additional_fields.maize_plantation_date}
              </span>
            </div>
            <div className="inline-flex items-center p-2 border-b  border-primary w-full">
              <span className="inline-flex bg-secondary text-white rounded-full h-6 px-3 justify-center items-center">
                Parent Farm Tracking Code
              </span>
              <span className="inline-flex px-2 font-semibold text-secondary">
                {data.additional_fields.parent_farm_tracking_code}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlantationDetail;
