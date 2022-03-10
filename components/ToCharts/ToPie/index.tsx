import ToCard from "../../ToCard";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export const PieTypes = {
  Pie: "pie",
  Donut: "donut",
};
type Props = {
  type: string | any;
  title: string;
};

export const ToPie = ({ title, type }: Props) => {
  const state2 = {
    options: {
      plotOptions: {
        pie: {
          expandOnClick: true
        }
      }
    },
    series: [40, 35, 25],
    // labels: ["Field Visit", "Satellite Data Analysis", "Report Compilation"],
  };

  return (
    <ToCard title={title}>
      <Chart
        options={state2.options}
        series={state2.series}
        // labels={state2.labels}
        type={type}
        height={'400'}
      />
    </ToCard>
  );
};
