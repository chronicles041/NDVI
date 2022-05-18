import moment from "moment";
import ToModal from "../../components/ToModal";
import { IconSize, IconTypes } from "../ToIcons";
const DetailViewForm = ({ detailData }) => {
  const onDetailClick = () => {
    // ReportService.FetchFieldReportID(id).then((res: FarmDetailProps) =>
    //   setReportDetail(res)
    // );
  };
  return (
    <ToModal
      iconType={IconTypes.Edit}
      iconSize={IconSize.XSM}
      type={1}
      title={""}
      onOpen={() => onDetailClick()}
    >
      <div className="overflow-hidden flex flex-col gap-y-6 items-start justify-start">
        <div className="flex flex-col gap-y-5">
          <button className=" bg-indigo-600 shadow-lg text-white text-sm font-normal flex flex-row items-center justify-center text-center rounded-full w-20 h-6 py-3 px-4">
            {detailData.status_name}
          </button>

          <h3 className="text-2xl leading-6 font-medium text-gray-900">
            {detailData.title}
          </h3>
        </div>
        <div className="flex flex-col">
          <dl className="">
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Associated Farms
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {` ${detailData.farm_name}-${detailData.farms}`}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Assigned to</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {/* <div className="flex-1 relative  "> */}
                &nbsp;
                <img
                  src="https://source.unsplash.com/ILip77SbmOE/900x900"
                  className="w-8 rounded-full ring-1 ring-secondary ring-offset-2  float-left "
                />
                {/* <img
                    src="https://source.unsplash.com/ILip77SbmOE/900x900"
                    className="w-8 rounded-full ring-1 ring-secondary ring-offset-2  float-left absolute left-6"
                  />
                  <img
                    src="https://source.unsplash.com/ILip77SbmOE/900x900"
                    className="w-8 rounded-full ring-1 ring-secondary ring-offset-2  float-left absolute left-12"
                  ></img> */}
                {/* </div> */}
                &nbsp;
                {` ${detailData.task_assigned_to_username}-${detailData.task_assigned_to}`}
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
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Activity Type
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {detailData.type_name}
              </dd>
            </div>

            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Remarks</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {detailData.remarks}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Start Date</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {moment(detailData.assigned_date).format("Do MMM, yy")}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Due Date</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {moment(detailData.end_date).format("Do MMM, yy")}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Estimated Time
              </dt>
              <dd className="mt-1 text-sm font-semibold text-gray-900 sm:mt-0 sm:col-span-2">
               {detailData.time_duration} days
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Multiple Files Attachments
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <input
                  className="block w-full text-sm text-gray-900  rounded-lg  cursor-pointer focus:outline-none px-1"
                  id="multiple_files"
                  type="file"
                  multiple
                />
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </ToModal>
  );
};
export default DetailViewForm;
