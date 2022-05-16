import FarmDetail from "./farmDetail";

function FarmersDetail({ detail }: any) {
  return (
    <div className="flex-col  text-white items-center justify-center gap-y-8 w-full">
      {detail.farmer_info.map((data) => (
        <div className="grid  grid-cols-2 justify-center tems-center  w-full">
          <div className="flex flex-col p-6 gap-y-3 text-center md:border-r ">
            <span className="text-2xl font-bold text-primary">
              {" "}
              {data.farmer_name}
            </span>
            <p className="text-sm font-semibold tracking-widest text-secondary uppercase ">
              Farmer Name
            </p>
          </div>
          <div className="flex flex-col p-6 gap-y-3 text-center">
            <span className="text-2xl font-bold text-primary">
              {" "}
              {data.farmer_phone}
            </span>
            <p className="text-sm font-semibold tracking-widest text-secondary uppercase ">
              Farmer Phone
            </p>
          </div>
          <div className="flex flex-col p-6 gap-y-3 text-center md:border-r md:border-t ">
            <span className="text-2xl font-bold text-primary">
              {" "}
              {data.additional_fields.gender}
            </span>
            <p className="text-sm font-semibold tracking-widest text-secondary uppercase ">
              Farmer gender
            </p>
          </div>
          <div className="flex flex-col p-6 gap-y-3 text-center  md:border-t">
            <span className="text-2xl font-bold text-primary">
              {" "}
              {data.additional_fields.is_irrigated}
            </span>
            <p className="text-sm font-semibold tracking-widest text-secondary uppercase ">
              Is Irrigated
            </p>
          </div>
          <div className="flex flex-col p-6 gap-y-3 text-center md:border-r md:border-t">
            <span className="text-2xl font-bold text-primary">
              {" "}
              {data.additional_fields.self_owned}
            </span>
            <p className="text-sm font-semibold tracking-widest text-secondary uppercase ">
              Is SelfOwned
            </p>
          </div>
          <div className="flex flex-col p-6 gap-y-3 text-center md:border-t">
            <span className="text-2xl font-bold text-primary">
              {" "}
              {data.additional_fields.irrigation_system}
            </span>
            <p className="text-sm font-semibold tracking-widest text-secondary uppercase ">
              Irrigation System
            </p>
          </div>
          <div className="flex flex-col p-6 gap-y-3 text-center md:border-r md:border-t ">
            <span className="text-2xl font-bold text-primary">
              {" "}
              {data.additional_fields.source_of_income}
            </span>
            <p className="text-sm font-semibold tracking-widest text-secondary uppercase ">
              Source of Income System
            </p>
          </div>
          <div className="flex flex-col p-6 gap-y-3 text-center  md:border-t ">
            <span className="text-2xl font-bold text-primary capitalize">
              {" "}
              {data.additional_fields.submitted_by}
            </span>
            <p className="text-sm font-semibold tracking-widest text-secondary uppercase ">
              Submitted By
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FarmersDetail;
