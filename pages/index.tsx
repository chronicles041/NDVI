import React, { useEffect } from "react";
import PageLayout from "../components/Pagelayout";
import { Stats } from "../components/Stats";
import { IconTypes } from "../components/ToIcons";
import Reports from "./reports";
import ReportService from "../api/service";

type dashResponse = {
  farm_count: number;
  farm_area_count: number;
  farmer_count: number;
};
const DashBorad = () => {
  const [dashData, setDashdata] = React.useState<dashResponse>();
  useEffect(() => {
    ReportService.GetDashboadData().then((res) => setDashdata(res));
    // console.log("***",filterParams?filterParams:"Undefined")
  }, []);

  return (
    <PageLayout>
      <div className={" p-6  m-3 "}>
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
            title={"Total Farm Digitalized (Hector)"}
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
      </div>
    </PageLayout>
  );
};
export default DashBorad;
