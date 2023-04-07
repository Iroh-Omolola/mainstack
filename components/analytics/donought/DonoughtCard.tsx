import React from "react";
import { DonoughtChart } from "./Chart";

interface Props {
  title: string;
  minTitle: string;
  details: any;
  data: any;
  colors: any;
  flag: any;
  bg: any;
}
export const DonoughtCard = ({title, minTitle, details, colors, data, flag, bg}: Props) => {
  return (
    <div className="w-full border px-4 py-7 border-[#EFF1F6] rounded-[12px]">
      <div className="flex justify-between mb-3">
        <h1 className="font-haibett font-semibold xs:text-[18px] text-[14px] text-[#131316] ">
         {title}
        </h1>
        <p className="cursor-pointer text-primary font-buch text-[12px] xs:text-[14px]">
          {minTitle}
        </p>
      </div>
      <div className="flex  xs:flex-row flex-col-reverse  xs:justify-between ">
        <div className="w-full space-y-2 mt-5    ">
          {data.map((d, index) => (
            <div className="flex my-auto space-x-1">
              <div className="mt-0.5">{d.Image && <d.Image />}</div>

              <h4 className="font-sohne text-[#131316] text-[14px]">
                {d.content}{" "}
                <span className="font-[550] text-[#131316]">{`${details[index]}%`}</span>
              </h4>
              <div className={`w-6 h-6 ${colors[index]} rounded-full`}></div>
            </div>
          ))}
        </div>
        <div className="xs:justify-end justify-center flex w-full">
          <DonoughtChart details={details} label={flag} background={bg} />
        </div>
      </div>
    </div>
  );
};
