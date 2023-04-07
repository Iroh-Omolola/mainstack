import React from "react";
import { AnalyticsCard } from "./card";
import dynamic from "next/dynamic";

interface AnalyticsChartProps {
  headContent?: any;
  headFooter?: any;
  data?: any;
  min?: number;
  max?: number;
  stepSize?: number;
  headTitle: string;
  headIconColor?: "red" | "green";
  floatingCard?: any;
  boxStyle?: string;
  minTitle?: string;
  date?: string;
  bodyStyle?: string;
  children?: any;
}

const DynamicChart = dynamic(() => import("./CardLineChart"), {
  ssr: false,
});

export const AnalyticsChart = (props: AnalyticsChartProps) => {
  const { headTitle, headFooter, minTitle, date, data, min, max, stepSize } =
    props;

  const HeadComponent = () => (
    <div className="px-2 md:px-4">
      <div className="flex justify-between">
        <div>
          <h4 className="text-[#131316] text-[18px] font-semibold font-haibett">
            {minTitle}
          </h4>
          <p className="text-[#31373D] text-[14px] font-buch font-normal">
            {date}
          </p>
        </div>
        <p className="md:mr-8 text-[12px] font-bold font-haibett">
          {headFooter}
        </p>
      </div>
      <div className=" pt-2 ">
        <p className="text-[#131316] text-[14px] sm:text-[30px] lg:text-[40px] font-sohne  font-semibold">
          {headTitle}
        </p>
      </div>
    </div>
  );

  const BodyComponent = () => (
    <DynamicChart data={data} min={min} max={max} stepSize={stepSize} />
  );

  return (
    <AnalyticsCard
      headTitle={HeadComponent}
      bodyStyle=""
      bodyContent={BodyComponent}
    />
  );
};
