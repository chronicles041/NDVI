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
    series: [55, 55, 55],
    labels: ["A", "B", "C"],
  };

  return (
    <ToCard title={title}>
      <Chart
        options={state2.options}
        series={state2.series}
        type={type}
        height={'400'}
      />
    </ToCard>
  );
};
