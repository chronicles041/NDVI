import FarmDetail from "./farmDetail";

function PlantationDetail({ detail }: any) {
  return (
    <div className="  flex-col  text-white items-center justify-center gap-y-8 w-full">     {detail.farmer_info.map((data) => (
          <div className="grid  grid-cols-2  justify-centeritems-center w-full">
           <div className="flex flex-col p-6 gap-y-3 text-center md:border-r ">
            <span className="text-2xl font-bold text-primary">
              {data.additional_fields.is_previous_disaster}
            </span>
            <p className="text-sm font-semibold tracking-widest text-secondary uppercase ">
            Previous Disaster
            </p>
          </div>
          <div className="flex flex-col p-6 gap-y-3 text-center">
            <span className="text-2xl font-bold text-primary">
              {" "}
              {data.additional_fields.major_crop_plantation}
            </span>
            <p className="text-sm font-semibold tracking-widest text-secondary uppercase ">
              Major Plantation crop
            </p>
          </div>
          <div className="flex flex-col p-6 gap-y-3 text-center md:border-r md:border-t ">
            <span className="text-2xl font-bold text-primary">
              {" "}
              {data.additional_fields.maize_plantation_date}
            </span>
            <p className="text-sm font-semibold tracking-widest text-secondary uppercase ">
              Plantation Date
            </p>
          </div>
          <div className="flex flex-col p-6 gap-y-3 text-center  md:border-t">
            <span className="text-2xl font-bold text-primary">
              {" "}
              {data.additional_fields.parent_farm_tracking_code}
            </span>
            <p className="text-sm font-semibold tracking-widest text-secondary uppercase ">
            Parent Farm Tracking Code
            </p>
          </div>
          <div className="flex flex-col p-6 gap-y-3 text-center  md:border-t md:border-r">
            <span className="text-2xl font-bold text-primary">
            {detail.season[0].crop_variety ? detail.season[0].crop_variety : 'N/A' }
            </span>
            <p className="text-sm font-semibold tracking-widest text-secondary uppercase ">
            Crop Variety

            </p>
          </div>
          <div className="flex flex-col p-6 gap-y-3 text-center  md:border-t">
            <span className="text-2xl font-bold text-primary">
            {detail.season[0].crop_name_en ? detail.season[0].crop_name_en : 'N/A' }
            </span>
            <p className="text-sm font-semibold tracking-widest text-secondary uppercase ">
            Crop Name (English)

            </p>
          </div>
          <div className="flex flex-col p-6 gap-y-3 text-center  md:border-t md:border-r">
            <span className="text-2xl font-bold text-primary">
            {detail.season[0].crop_name_np ? detail.season[0].crop_name_np : 'N/A' }
            </span>
            <p className="text-sm font-semibold tracking-widest text-secondary uppercase ">
            Crop Name (Nepali)

            </p>
          </div>
          <div className="flex flex-col p-6 gap-y-3 text-center  md:border-t ">
            <span className="text-2xl font-bold text-primary">
            {detail.season[0].crop_plantation_date ? detail.season[0].crop_plantation_date : 'N/A' }
            </span>
            <p className="text-sm font-semibold tracking-widest text-secondary uppercase ">
           Crop Plantation Date

            </p>
          </div>
          </div>
        ))}
    </div>
  );
}

export default PlantationDetail;
