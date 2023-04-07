import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Legend,
  Tooltip,
} from "chart.js";

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  elements: {
    arc: {
      borderWidth: 0,
    },
  },
};

export const DonoughtChart = ({ background, details, label }) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    ArcElement
  );
  const data = {
    maintainAspectRatio: false,
    responsive: true,
    labels: label,
    datasets: [
      {
        data: details,
        backgroundColor: background,
        hoverBackgroundColor: background,
      },
    ],
  };
  return (
    <div className="">
      <div className="inline-block relative ">
        <Doughnut className="h-40 xs:w-40 xl:w-52 xl:h-52" data={data} options={options} />
      </div>
    </div>
  );
};
