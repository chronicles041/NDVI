import FarmDetail from "./farmDetail";

function FarmersDetail({ detail }: any) {
  return (
    <div className="flex-col px-2  text-white items-center justify-center">
      <div className="flex flex-col w-full px-1 justify-start items-start py-2">
        {detail.farmer_info.map((data) => (
          <div className="grid  grid-cols-2 gap-3 p-4 items-start w-auto">
            <div className="inline-flex items-center p-2 w-full  border-b  border-primary">
              <span className="inline-flex bg-secondary text-white rounded-full h-6 px-3 justify-center items-center">
                Name
              </span>
              <span className="inline-flex px-2 font-semibold text-secondary">
                {data.farmer_name}
              </span>
            </div>
            <div className="inline-flex items-center p-2 w-full border-b  border-primary">
              <span className="inline-flex bg-secondary text-white rounded-full h-6 px-3 justify-center items-center">
                Phone
              </span>
              <span className="inline-flex px-2 font-semibold text-secondary">
                {data.farmer_phone}
              </span>
            </div>
            <div className="inline-flex items-center p-2  w-full border-b  border-primary">
              <span className="inline-flex bg-secondary text-white rounded-full h-6 px-3 justify-center items-center">
                Gender
              </span>
              <span className="inline-flex px-2 font-semibold text-secondary">
                {data.additional_fields.gender}
              </span>
            </div>
            <div className="inline-flex items-center p-2 w-full border-b  border-primary ">
              <span className="inline-flex bg-secondary text-white rounded-full h-6 px-3 justify-center items-center">
                Is Irrigated{" "}
              </span>
              <span className="inline-flex px-2 font-semibold text-secondary">
                {data.additional_fields.is_irrigated}
              </span>
            </div>
            <div className="inline-flex items-center p-2 w-full border-b  border-primary">
              <span className="inline-flex bg-secondary text-white rounded-full h-6 px-3 justify-center items-center">
                Is Selfowned{" "}
              </span>
              <span className="inline-flex px-2 font-semibold text-secondary">
                {data.additional_fields.self_owned}
              </span>
            </div>
            <div className="inline-flex items-center p-2 w-full border-b  border-primary">
              <span className="inline-flex bg-secondary text-white rounded-full h-6 px-3 justify-center items-center">
                Avilablity of Irrigation{" "}
              </span>
              <span className="inline-flex px-2 font-semibold textsecondary">
                {data.additional_fields.irrigation_system}
              </span>
            </div>
            <div className="inline-flex items-center p-2 border-b  border-primar w-fully">
              <span className="inline-flex bg-secondary text-white rounded-full h-6 px-3 justify-center items-center">
                Contact Number{" "}
              </span>
              <span className="inline-flex px-2 font-semibold text-secondary">
                {data.additional_fields.contact_number}
              </span>
            </div>
            <div className="inline-flex items-center p-2 border-b  border-primary w-full">
              <span className="inline-flex bg-secondary text-white rounded-full h-6 px-3 justify-center items-center">
                Source of Income{" "}
              </span>
              <span className="inline-flex px-2 font-semibold text-secondary">
                {data.additional_fields.source_of_income}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FarmersDetail;
