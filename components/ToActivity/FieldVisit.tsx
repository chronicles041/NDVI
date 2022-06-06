import moment from "moment";
import ToModal from "../ToModal";
import { IconSize, IconTypes } from "../ToIcons";
const FieldVisitForm = ({ detailData }) => {
  const onDetailClick = () => {
    // ReportService.FetchFieldReportID(id).then((res: FarmDetailProps) =>
    //   setReportDetail(res)
    // );
  };
  return (
    <ToModal
      iconType={IconTypes.Farm}
      iconSize={IconSize.XSM}
      type={1}
      title={"Field Visit"}
      onOpen={() => onDetailClick()}
    >
      <div className="overflow-hidden flex flex-col gap-y-6 items-start justify-start">
        <div className="flex flex-col gap-y-5">
          <button className=" bg-indigo-600 shadow-lg text-white text-sm font-normal flex flex-row items-center justify-center text-center rounded-full w-20 h-6 py-3 px-4">
            {detailData.status_name}
          </button>
          <h5 className="text-2xl leading-6 font-medium text-gray-900">
            {detailData.title}
          </h5>
        </div>

        <div className="flex flex-col w-full ">
          <div className="flex flex-col  gap-y-4">
            <span className="text-base font-medium text-secondary">
              Description
            </span>
            <textarea
              className="focus:border-2 focus:border-primary focus:ring-transparent rounded w-full py-2 px-3 text-secondary leading-tight  h-3/4"
              id="username"
              rows={6}
              name={"remarks"}
              placeholder="Add Description to Field Visit"
              // onChange={onChange}
            />
          </div>
          <div className="flex flex-row ">
            <div className="flex-1">
              <span className="text-base font-medium text-secondary mb-3">
                Visit Date
              </span>
              <input
                className=" rounded w-full mt-3 text-secondary leading-tight focus:border-2 focus:border-primary focus:ring-transparent"
                id="username"
                type="date"
                placeholder="Start Date"
                // onChange={(e: Event) => onChangeDate(e, "assigned_date")}
              />
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">
          Start Date - Due Date
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {moment(detailData.assigned_date).format("Do MMM, yy")} -{" "}
          {moment(detailData.end_date).format("Do MMM, yy")}
        </dd>
      </div>
      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">Priority</dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          <button className=" bg-red-600 text-white text-sm shadow-lg font-normal flex flex-row items-center justify-center text-center rounded-full w-16 h-5 py-2">
            {detailData.priority_name}
          </button>
        </dd>
      </div>
      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">Associated Farms</dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {` ${detailData.farm_name}-${detailData.farms}`}
        </dd>
      </div>
      <div className="flex flex-row gap-x-4 p-2 ">
        <button
          className="text-white bg-secondary opacity-90 hover:opacity-100 uppercase py-2 px-10 rounded outline-none focus:outline-none mt-2 w-full"
          type="button"
          // onClick={() => addActivity()}
        >
          Add Field Visit
        </button>
      </div>
    </ToModal>
  );
};
export default FieldVisitForm;
