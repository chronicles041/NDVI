import ToCard from "../../ToCard";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export const BarTypes = {
  Line: "line",
  Bar: "bar",
  Area: "area",
};
type Props = {
  type: string | any;
  title: string;
};

export const ToBar = ({ title, type }: Props) => {
  const state = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["jan", "feb", "mar", "apr", "jun", "jul", "aug", "sep", "oct",],
      },
    },
    series: [
      {
        name: "series-1",
        data: [0.24, 0.40, 0.45, 0.50, 0.39, 0.60, 0.11, 0.87],
      },
    ],
  };


  return (
    <ToCard title={title}>
      <Chart
        options={state.options}
        series={state.series}
        type={type}
        height="400"
      />
    </ToCard>
  );
};
