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
        <ToCard title={"Farm vs Digitalization "}>
          <div className="grid  grid-cols-3 mb-5">
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
          <div className="grid  grid-cols-3 mb-5">
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
        <ToCard title={"CIMMYT MCM Active Variety Detail"}>
          <div className="grid  grid-cols-3 mb-5">
            {dashData?.variety_wise_info.map((d) => (
              <div>
                {/* {JSON.stringify(d)}  */}
                Name : {d.variety_name} <br />
                Area : {d.total_area} <br />
                Farms: {d.total_farms} <br />
                Farmers : {d.total_farmers} <br />
                Days To Mature:{d.maturity_days} <br />
                <br />
              </div>
            ))}

            {/* {JSON.stringify(dashData?.variety_wise_info)} */}
          </div>
        </ToCard>

        <ToCard title={"Task Detail"}>
          <div className="grid  grid-cols-3 mb-5">
            <div>
              {/* {JSON.stringify(d)}  */}
              Total Tasks : {dashData?.task_info.total_tasks} <br />
              Running : {dashData?.task_info.status_running_count} <br />
              Paused: {dashData?.task_info.status_paused_count} <br />
              Completed : {dashData?.task_info.status_completed_count} <br />
              Started : {dashData?.task_info.status_started_count} <br />
              <br />
            </div>

            {/* {JSON.stringify(dashData?.variety_wise_info)} */}
          </div>
        </ToCard>
      </div>
    </PageLayout>
  );
};
export default DashBorad;
