import React, { useEffect } from "react";
import PageLayout from "../components/Pagelayout";
import { Stats } from "../components/Stats";
import { IconTypes } from "../components/ToIcons";
import Reports from "./reports";
import ReportService from "../api/service";
import { ChartType, PieTypes, ToPie } from "../components/ToCharts/ToPie";
import { ToRadial } from "../components/ToCharts/ToRadialBar";
import ToCard from "../components/ToCard";

type dashResponse = {
  farm_count: number;
  farm_area_count: number;
  farmer_count: number;
  harvest_ready_info: any;
  variety_wise_info: any;
  district_wise_info: any;
  task_info: any;
};
const DashBorad = () => {
  const [dashData, setDashdata] = React.useState<dashResponse>();
  useEffect(() => {
    ReportService.GetDashboadData().then((res) => setDashdata(res));
    // console.log("***",filterParams?filterParams:"Undefined")
  }, []);

  return (
    <PageLayout>
      <div className={"p-6  m-3 "}>
        <ToCard title={"Farm Stats "}>
          <div className="grid gap-x-12 mt-8  grid-cols-3 mb-5">
            <Stats
              icon={IconTypes.Farm}
              title={"Total Farms"}
              count={dashData?.farm_count}
              buttonText={"View Reports"}
              path={"/reports"}
            />
            <Stats
              icon={IconTypes.Land}
              title={"Total Farm Digitalized (Hectare)"}
              count={dashData?.farm_area_count.toFixed(2)}
              buttonText={"View Maps"}
              path={"/maps"}
            />
            <Stats
              icon={IconTypes.User}
              title={"Total Farmers"}
              count={dashData?.farmer_count}
              buttonText={"View Reports"}
              path={"/reports"}
            />
          </div>
        </ToCard>

        <ToCard title={"CIMMYT MCM District Wise Detail"}>
          <div className="grid  gap-x-12 mt-8  grid-cols-3 mb-5">
            {dashData?.district_wise_info.map((d) => (
              <Stats
                icon={IconTypes.Farm}
                title={d.district_name}
                count={d.total_farms}
                area={`${d.total_farm_area} Hectare`}
                buttonText={"View Reports"}
                path={"/reports"}
              />
            ))}
          </div>
        </ToCard>
        {/* <ToCard title={"Farm Info"}> */}
        <div className="grid  grid-cols-2 mb-5">
          <ToPie
            chartType={ChartType.harvest}
            data={[
              dashData?.harvest_ready_info?.total_harvest_ready_farm,
              dashData?.harvest_ready_info?.total_harvest_not_ready_farm,
            ]}
            title={"Harvest Ready"}
            type={PieTypes.Donut}
          />

          <ToPie
            chartType={ChartType.harvest2}
            data={[
              dashData?.harvest_ready_info?.total_harvest_ready_area,
              dashData?.harvest_ready_info?.total_harvest_not_ready_area,
            ]}
            title={"Harvest Ready"}
            type={PieTypes.Donut}
          />
        </div>
        {/* </ToCard> */}
        <ToCard title={"Maize Variety Detail"}>
          <table className="w-full mt-6 text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Area
              </th>
              <th scope="col" className="px-6 py-3">
                Farms
              </th>

              <th scope="col" className="px-6 py-3">
                Farmers
              </th>
              <th scope="col" className="px-6 py-3">
                Days to Mature
              </th>
            </thead>
            <tbody>
              {dashData?.variety_wise_info.map((d) => (
                <tr className="odd:bg-white even:bg-gray-50 bg-white border-b ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap"
                  >
                    {d.variety_name}
                  </th>
                  <td className="px-6 py-4">{d.total_area} ha</td>
                  <td className="px-6 py-4">{d.total_farms}</td>
                  <td className="px-6 py-4">{d.total_farmers}</td>
                  <td className="px-6 py-4">{d.maturity_days}</td>
                </tr>
              ))}
            </tbody>

            {/* {JSON.stringify(dashData?.variety_wise_info)} */}
          </table>
        </ToCard>

        <ToCard title={"Task Detail"}>
          <table className="w-auto  mt-6 text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <th scope="col" className="px-6 py-3">
                Task
              </th>
              <th scope="col" className="px-6 py-3">
                Count
              </th>
            </thead>
            <tbody>
              <tr className="bg-white border-b ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap"
                >
                  Running
                </th>
                <td className="px-6 py-4">
                  {dashData?.task_info.status_running_count}{" "}
                </td>
              </tr>

              <tr className=" bg-white border-b ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap"
                >
                  Paused
                </th>
                <td className="px-6 py-4">
                  {dashData?.task_info.status_paused_count}{" "}
                </td>
              </tr>

              <tr className=" bg-white border-b ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap"
                >
                  Completed
                </th>
                <td className="px-6 py-4">
                  {dashData?.task_info.status_completed_count}{" "}
                </td>
              </tr>

              <tr className=" bg-white border-b ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap"
                >
                  Started
                </th>
                <td className="px-6 py-4">
                  {dashData?.task_info.status_started_count}{" "}
                </td>
              </tr>

              <tr className="bg-gray-100 border-b ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap"
                >
                  Total Tasks
                </th>
                <td className="px-6 py-4 font-medium text-gray-900">
                  {dashData?.task_info.total_tasks}{" "}
                </td>
              </tr>
            </tbody>

            {/* {JSON.stringify(dashData?.variety_wise_info)} */}
          </table>
        </ToCard>
      </div>
    </PageLayout>
  );
};
export default DashBorad;
