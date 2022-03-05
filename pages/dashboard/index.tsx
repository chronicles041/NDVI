import Layout from "../../components/Layouts";
import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { BarTypes, ToBar } from "../../components/ToCharts/Tobar";
import ToCard from "../../components/ToCard";
import { PieTypes, ToPie } from "../../components/ToCharts/ToPie";
import { ToRadial } from "../../components/ToCharts/ToRadialBar";

type DashBoardProps = {
  t: Function;
};
const DashBorad = ({ t }: DashBoardProps) => {
  return (
    <>
      <div className="flex flex-row">
        <div className="basis-8/12">
          <ToBar title={"Bar Chart"} type={BarTypes.Bar} />
        </div>
        <div className="basis-4/12">
          <ToRadial title={"Radial Chart"} />
        </div>
      </div>
      <div className="flex flex-row">
        <div className="basis-2/4">
          <ToBar title={"Area Chart"} type={BarTypes.Area} />
        </div>
        <div className="basis-2/4">
          <ToBar title={"Line Chart"} type={BarTypes.Line} />
        </div>
      </div>
      <div className="flex flex-row">
        <div className="basis-2/4">
          <ToPie title={"Donut Chart"} type={PieTypes.Donut} />
        </div>
        <div className="basis-2/4">
          <ToPie title={"Pie Chart"} type={PieTypes.Pie} />
        </div>
      </div>
    </>
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
