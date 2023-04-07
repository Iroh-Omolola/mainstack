import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

interface Props {
  data: any;
  min: any;
  max: any;
  stepSize: any;
}
export default function CardLineChart({ data, min, max, stepSize }: Props) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    Filler
  );

  const options: any = {
    maintainAspectRatio: false,
    responsive: true,
    tension: 0,
    fill: true,
    scaleShowLabels: true,
    backgroundColor: "rgba(255, 84, 3, 0.2)",
    pointBorderWidth: 2,
    borderWidth: 2,
    pointRadius: 0,
    pointHoverRadius: 5,
    plugins: {
      title: {
        display: false,
        text: "Chart",
        fontColor: "white",
      },
      backgroundColor: "rgba(255, 84, 3, 0.2)",
      legend: {
        display: false,
        labels: {
          fontColor: "#56616B",
          fontSize: "24px",
          boxWidth: 1,
          boxHeight: 2,
        },
      },
      tooltips: {
        mode: "index",
        intersect: true,
      },
      hover: {
        mode: "nearest",
        intersect: true,
      },
    },
    layout: {
      padding: 1,
    },
    scales: {
      xAxis: {
        display: true,
        scaleLabel: {
          display: true,
          labelString: "Month",
          fontColor: "grey",
        },
        grid: {
          display: false,
          drawTicks: true,
          drawBorder: false,
          borderWidth: 6,
        },
        markers: {
          size: 9,
        },
      },
      yAxis: {
        display: true,
        min: min,
        max: max,
        grid: {
          borderDash: function (context: any) {
            if (context.index === 0) {
              return [0];
            }
            return [3];
          },
          borderDashOffset: [2],
          drawBorder: false,
          drawBorderDash: [0],
          drawTicks: true,
          tickMarkLength: 0,
          color: function (context: any) {
            return "#DBDEE5";
          },
          zeroLineColor: "#DBDEE5",
        },
      },
    },
  };

  return (
    <>
      <div className="w-full">
        <div className="p-2">
          <div className="h-[550px]">
            <Line options={options} data={data} />
          </div>
        </div>
      </div>
    </>
  );
}
