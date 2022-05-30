import ToCard from "../../ToCard";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export const PieTypes = {
  Pie: "pie",
  Donut: "donut",
};

export const ChartType = {
  harvest: {
    name: "Harvest (Farm Count)",
    labels: ["Ready", "Not Ready"],
  },

  harvest2: {
    name: "Harvest (Farm Area - Hectare)",
    labels: ["Ready", "Not Ready"],
  },
};

type Props = {
  type: string | any;
  chartType: typeof ChartType.harvest;
  title: string;
  data: any;
  labels?: any;
};

export const ToPie = ({ title, type, data, labels,chartType }: Props) => {
  // alert(JSON.stringify(labels));
  // const options = {
  //   plotOptions: {
  //     pie: {
  //       expandOnClick: true,
  //     },
  //   },
  //   labels: labels,
  // };
  // labels: ["Field Visit", "Satellite Data Analysis", "Report Compilation"],
  const state2 = {
    series: [40, 35],
  };

  return (
    <ToCard title={chartType.name}>
      <Chart
        options={{
          plotOptions: {
            pie: {
              expandOnClick: true,
            },
          },
          labels: chartType.labels,
        }}
        series={data}
        // series={state2.series}
        // labels={state2.labels}
        // labels={labels}
        type={type}
        height={"400"}
      />
    </ToCard>
  );
};
