import PageLayout from "../components/Pagelayout";
import { Stats } from "../components/Stats";
import { IconTypes } from "../components/ToIcons";
import Reports from "./reports";

const DashBorad = () => {
  return (
    <PageLayout>
      <div className={" p-6  m-3 "}>
        <h2 className="text-xl font-bold mb-2 text-gray-800">{"DashBorad"}</h2>
        <div className="grid  grid-cols-3 mb-5">
          <Stats
            icon={IconTypes.Dressing}
            title={"Total Farms"}
            count={260}
            buttonText={"View Reports"}
            path={"/reports"}
          />
          <Stats
            icon={IconTypes.Dressing}
            title={"Total Farm Digitalized"}
            count={20}
            buttonText={"View Maps"}
            path={"/maps"}
          />
          <Stats
            icon={IconTypes.Dressing}
            title={"Total Farmers"}
            count={228}
            buttonText={"View Reports"}
            path={"/reports"}
          />
        </div>
      </div>
    </PageLayout>
  );
};
export default DashBorad;
