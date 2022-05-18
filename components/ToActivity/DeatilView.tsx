import ToModal from "../../components/ToModal";
import { IconSize, IconTypes } from "../ToIcons";
const DetailViewForm = () => {
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
            Running
          </button>

          <h3 className="text-2xl leading-6 font-medium text-gray-900">
            New Plantation Monitoring
          </h3>
        </div>
        <div className="flex flex-col">
          <dl className="">
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Associated Farms
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                CA21, CA4, CC1, CK1
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Assigned to</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <div className="flex-1 relative  ">
                  <img
                    src="https://source.unsplash.com/ILip77SbmOE/900x900"
                    className="w-8 rounded-full ring-1 ring-secondary ring-offset-2  float-left "
                  />
                  <img
                    src="https://source.unsplash.com/ILip77SbmOE/900x900"
                    className="w-8 rounded-full ring-1 ring-secondary ring-offset-2  float-left absolute left-6"
                  />
                  <img
                    src="https://source.unsplash.com/ILip77SbmOE/900x900"
                    className="w-8 rounded-full ring-1 ring-secondary ring-offset-2  float-left absolute left-12"
                  ></img>
                </div>
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Priority</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <button className=" bg-red-600 text-white text-sm shadow-lg font-normal flex flex-row items-center justify-center text-center rounded-full w-16 h-5 py-2">
                  High
                </button>
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Activity Type
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                Field Visit
              </dd>
            </div>

            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Remarks</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus labore corporis alias aliquam corrupti sint illum
                distinctio accusantium architecto, repudiandae, perferendis et
                voluptas ex. Laboriosam libero modi quidem minus enim.
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Start Date</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                2022-04-14
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Due Date</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                2022-04-30
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Estimated Time
              </dt>
              <dd className="mt-1 text-sm font-semibold text-gray-900 sm:mt-0 sm:col-span-2">
                16 Days
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Multiple Files Attachments</dt>
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
