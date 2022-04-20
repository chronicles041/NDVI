import ToCard from "../../ToCard";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

type Props = {
  type?:  any;
  title: string;
};

export const ToRadial = ({ title, type }: Props) => {

  var options = {
    chart: {
      height: 280,
    //   type: "radialBar",
    },
  
    series: [67],
    colors: ["#20E647"],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "70%",
          background: "#293450"
        },
        track: {
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            blur: 4,
            opacity: 0.15
          }
        },
        dataLabels: {
          name: {
            offsetY: -10,
            color: "#fff",
            fontSize: "13px"
          },
          value: {
            color: "#fff",
            fontSize: "30px",
            show: true
          }
        }
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        gradientToColors: ["#87D4F9"],
        stops: [0, 100]
      }
    },
    stroke: {
      lineCap: "round"
    },
    labels: ["Activity Index"]
  };
  return (
    <ToCard title={title}>
      <Chart
       options={options}
        series={options.series}
        type="radialBar"
        height="400"
      />
      <h2 className="p-1.5 text-center uppercase"><b>Activity Compeletion Index</b></h2>
    </ToCard>
  );
};
