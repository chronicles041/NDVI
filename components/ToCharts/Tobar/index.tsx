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
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
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
