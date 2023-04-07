import Image from "next/image";
import React from "react";
import {
  Facebook,
  Finland,
  Germany,
  Ghana,
  Nigeria,
  UnitedKingdom,
} from "../../assets";
import { DonoughtChart } from "./Chart";

interface Props {
  title: string;
  minTitle: string;
  details: any;
  data: any;
  colors: any;
  percent?: any;
  flag: any;
  bg: any;
}
export const DonoughtCard = ({
  title,
  minTitle,
  percent,
  details,
  colors,
  data,
  flag,
  bg,
}: Props) => {
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
            <div className="flex my-auto space-x-1.5" key={index + 1}>
              <>
                <div className="mt-0.5">
                  {d.country === "Nigeria" && <Nigeria />}
                  {d.country === "United Kingdom" && (
                    <Image
                      src="/uk1.svg"
                      alt="uk"
                      width={22}
                      height={19}
                      // className="-mt-2"
                    />
                  )}
                  {d.country === "Germany" && (
                    <Image
                      src="/germanylo 1.svg"
                      alt="germany"
                      width={23}
                      height={19}
                      // className="-mt-2"
                    />
                  )}
                  {d.country === "Ghana" && (
                    <Image
                      src="/ghana1.svg"
                      alt="ghana"
                      width={22}
                      height={19}
                      // className="-mt-2"
                    />
                  )}
                  {d.country === "Finland" && (
                    <Image
                      src="/finland.svg"
                      alt="finland"
                      width={22}
                      height={19}
                      // className="-mt-2"
                    />
                  )}
                  {d.source === "facebook" && <Facebook />}
                  {d.source === "google" && (
                    <Image
                      src="/googletag.svg"
                      alt="google"
                      width={20}
                      height={17}
                      // className="-mt-2"
                    />
                  )}
                  {d.source === "linkedin" && (
                    <Image
                      src="/linkedin.svg"
                      alt="linkedin"
                      width={16}
                      height={14}
                      // className="-mt-2"
                    />
                  )}
                  {d.source === "instagram" && (
                    <Image
                      src="/instagram.svg"
                      alt="instagram"
                      width={20}
                      height={17}
                      // className="-mt-2"
                    />
                  )}
                </div>
              </>
              <h4 className="font-sohne text-[#131316] text-[14px] whitespace-nowrap">
                {d.country ||
                  d.source.charAt(0).toUpperCase() + d.source.slice(1)}{" "}
                <span className="font-[550] text-[#131316]">{`${d.percent}%`}</span>
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
