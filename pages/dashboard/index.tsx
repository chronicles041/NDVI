import Layout from "../../components/Layouts";
import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { BarTypes, ToBar } from "../../components/ToCharts/Tobar";
import ToCard from "../../components/ToCard";
import { PieTypes, ToPie } from "../../components/ToCharts/ToPie";
import { ToRadial } from "../../components/ToCharts/ToRadialBar";
import { Stats } from "../../components/Stats";

type DashBoardProps = {
  t: Function;
};
const DashBorad = ({ t }: DashBoardProps) => {
  return (
    <div className="grid grid-row mx-auto px-auto ">
      <div className="flex flex-row">
        <div className="basis-8/12">
          <ToBar title={"NDVI Bar Chart"} type={BarTypes.Bar} />
        </div>
        <div className="basis-4/12">
          <ToRadial title={"Activity/Task Radial Chart"} />
        </div>
      </div>
      <Stats />
      <div className="flex flex-row">
        <div className="basis-2/4">
          <ToBar title={"Crop Chart"} type={BarTypes.Area} />
        </div>
        <div className="basis-2/4">
          <ToBar title={"Water Usage Chart"} type={BarTypes.Line} />
        </div>
      </div>
      <div className="flex flex-row">
        <div className="basis-2/4">
          <ToPie title={"Nitrogen Information Chart"} type={PieTypes.Donut} />
        </div>
        <div className="basis-2/4">
          <ToPie title={"Vegitation Information Chart"} type={PieTypes.Pie} />
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
export default withTranslation()(DashBorad);
