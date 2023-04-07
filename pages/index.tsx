import { ScriptableContext } from "chart.js";
import { useState } from "react";
import { AnalyticsChart, DashboardLayout, DonoughtCard, Header } from "../components";
import { Andorra, Facebook, Info, Instagram, Linkedin, Netherland, Nigeria, Twitter, UnitedStates } from "../components/assets";

const Dashboard = () => {
  const [date, setDate] = useState("All Time");
  const detailsOne = [300, 50, 100, 50, 80];
  const detailsTwo = [300, 50, 100, 50, 80];
  const colors = [
    "bg-[#599EEA]",
    "bg-[#844FF6]",
    "bg-[#0FB77A]",
    "bg-[#FAB70A]",
    "bg-[#F09468]",
  ];

    const contentDataOne = [
      { Image: Nigeria, content: "Nigeria" },
      { Image: UnitedStates, content: "United States" },
      { Image: Netherland, content: "Netherlands" },
      { Image: Andorra, content: "Andorra" },
      { content: "Others" },
    ];
     const contentDataTwo = [
       { Image: Facebook, content: "Facebook" },
       { Image: Instagram, content: "Instagram" },
       { Image: Linkedin, content: "LinkedIn" },
       { Image: Twitter, content: "Twitter" },
       { content: "Others" },
     ];
    const flagOne = [
      "Nigeria",
      "United States",
      "Netherlands",
      "Andorra",
      "Others",
    ];
     const flagTwo = ["Facebook", "Instagram", "LinkedIn", "Twitter", "Others"];
  const bg = ["#599EEA", "#844FF6", "#0FB77A", "#FAB70A", "#F09468"];

const dataChart = {
  labels: ["", "1 June", "8 July", "16 Augt", "24 Sept", "15 Octo"],
  datasets: [
    {
      label: "First dataset",
      fill: "start",
      backgroundColor: (context: ScriptableContext<"line">) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 180, 60, 30);
        gradient.addColorStop(1, "rgba(255, 84, 3, 0.2)");
        gradient.addColorStop(0.4, "rgba(255, 84, 3, 0)");
        return gradient;
      },
      //  backgroundColor: "rgba(255, 84, 3, 0.2)",
      borderColor: "rgba(255, 84, 3, 1)",
      borderWidth: 2,
      lineTension: 0,
      radius: 0,
      data: [50000, 100000, 30000, 62000, 40000],
    },
  ],
};
  return (
    <DashboardLayout>
      <Header date={date} setDate={setDate} />
      <div className="flex lg:flex-row flex-col mt-8   lg:space-y-0 space-y-10 space-x-0 lg:space-x-4 w-full">
        <div className=" w-full  overflow-x-auto">
          <AnalyticsChart
            headFooter={<Info />}
            headTitle="500"
            date={`${date.split(" ")[0]} ${date.split(" ")[1].toLowerCase()}`}
            minTitle={"Page Views"}
            data={dataChart}
            min={0}
            max={100000}
            stepSize={2000}
          />
        </div>
      </div>
      <div className="w-full mt-10">
        <div className="flex wlg:flex-row flex-col wlg:space-y-0 space-y-5 wlg:space-x-10 w-full  justify-between">
          <DonoughtCard
            title={" Top Locations"}
            minTitle={"View full reports"}
            details={detailsOne}
            colors={colors}
            data={contentDataOne}
            flag={flagOne}
            bg={bg}
          />
          <DonoughtCard
            title={"Top Referral source"}
            minTitle={"View full reports"}
            details={detailsTwo}
            colors={colors}
            data={contentDataTwo}
            flag={flagTwo}
            bg={bg}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
