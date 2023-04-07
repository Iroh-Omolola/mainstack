import { ScriptableContext } from "chart.js";
import { useEffect, useState } from "react";
import moment from "moment";
import {
  AnalyticsChart,
  DashboardLayout,
  DonoughtCard,
  Header,
  Loader,
} from "../components";
import { Info } from "../components/assets";
import { useGetDataQuery } from "../services/slices/chartSlice";


const Dashboard = () => {
  const [date, setDate] = useState("All Time");
  const [location, setLocation] = useState([]);
  const [graph, setGraph] = useState([]);
  const [details, setDetails] = useState([]);
  const [percent, setPercent] = useState([]);
  const [media, setMedia] = useState([]);
  const [country, setCountry] = useState([]);
  const [source, setSource] = useState([]);
  const [graphKeys, setGraphKeys] = useState([]);
  const [graphValues, setGraphValues] = useState([]);
  const [mediaDetails, setMediaDetails] = useState([]);
  const [mediaPercent, setMediaPercent] = useState([]);

  const { data, isLoading } = useGetDataQuery();

  useEffect(() => {
    if (data == null) {
      console.log();
    } else {
      setLocation(data.top_locations);
      setGraph(data?.graph_data.views);
      setMedia(data.top_sources);
    }
  }, [data]);

  useEffect(() => {
    if (graph == null) console.log({});
    else {
      const keys = Object.keys(graph);
      const values = Object.values(graph);
      const dateGraph = keys.map((d) => moment(d).format("D MMM "));
      setGraphKeys(dateGraph);

      setGraphValues(values);
    }
  }, [graph]);
  useEffect(() => {
    if (location == null) console.log({});
    else {
      const countArray = location.map((obj) => obj.count);
      const percentArray = location.map((obj) => obj.percent);
      const countryArray = location.map((obj) => obj.country);
      setDetails(countArray);
      setPercent(percentArray);
      setCountry(countryArray);
    }
  }, [location]);

  useEffect(() => {
    if (media == null) console.log({});
    else {
      const countArray = media.map((obj) => obj.count);
      const percentArray = media.map((obj) => obj.percent);
      const sourceArray = media.map((obj) => obj.source);
      setMediaDetails(countArray);
      setMediaPercent(percentArray);
      setSource(sourceArray);
    }
  }, [media]);

  const colors = [
    "bg-[#599EEA]",
    "bg-[#844FF6]",
    "bg-[#0FB77A]",
    "bg-[#FAB70A]",
    "bg-[#F09468]",
  ];

  const bg = ["#599EEA", "#844FF6", "#0FB77A", "#FAB70A", "#F09468"];

  const dataChart = {
    labels: graphKeys,
    datasets: [
      {
        label: "Page Views",
        fill: "start",
        backgroundColor: (context: ScriptableContext<"line">) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 250, 60, 30);
          gradient.addColorStop(1, "rgba(255, 84, 3, 0.2)");
          gradient.addColorStop(0.4, "rgba(255, 84, 3, 0)");
          return gradient;
        },
        borderColor: "rgba(255, 84, 3, 1)",
        borderWidth: 2,
        lineTension: 0,
        radius: 0,
        data: graphValues,
      },
    ],
  };
  return (
    <DashboardLayout>
      <Header date={date} setDate={setDate} />
      <div className="flex lg:flex-row flex-col mt-8  lg:space-y-0 space-y-10 space-x-0 lg:space-x-4 w-full">
        <div className=" w-full  overflow-x-auto">
          {isLoading ? (
            <div className="flex my-28 justify-center">
              <Loader />
            </div>
          ) : (
            <AnalyticsChart
              headFooter={<Info />}
              headTitle="500"
              date={`${date.split(" ")[0]} ${date.split(" ")[1].toLowerCase()}`}
              minTitle={"Page Views"}
              data={dataChart}
              min={0}
              max={100}
              stepSize={2000}
            />
          )}
        </div>
      </div>
      <div className="w-full my-10 ">
        {isLoading ? (
          <div className="flex justify-center">
            <Loader />
          </div>
        ) : (
          <div className="flex wlg:flex-row flex-col wlg:space-y-0 space-y-5 wlg:space-x-10 w-full  justify-between">
            <DonoughtCard
              title={" Top Locations"}
              minTitle={"View full reports"}
              details={details}
              colors={colors}
              data={location}
              flag={country}
              percent={percent}
              bg={bg}
            />
            <DonoughtCard
              title={"Top Referral source"}
              minTitle={"View full reports"}
              details={mediaDetails}
              colors={colors}
              data={media}
              flag={source}
              percent={mediaPercent}
              bg={bg}
            />
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
