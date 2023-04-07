import React from "react";
import { Box } from "./box";

interface AnalyticsCardProps {
  bodyContent?: any;
  headTitle: any;
  headIconColor?: "red" | "green";
  footerLinkText?: string;
  footerLinkLocation?: string;
  footerHasArrow?: boolean;
  boxStyle?: string;
  bodyStyle?: string;
  children?: any;
  status?: "declining" | "ascending";
  bodyPercentCount?: string;
}

export const AnalyticsCard = (props: AnalyticsCardProps) => {
  const {
    bodyContent,
    headTitle,
    bodyStyle,
    children,
  } = props;

  const HeadComponent = () => (
    <div className="border-b-0 p-2 text-[48px] flex items-center gap-2">
      {headTitle}
    </div>
  );


  const BodyComponent = () => (
    <div className="flex  gap-2">
      {typeof bodyContent === "string"
        ? bodyContent
        : typeof bodyContent === "function"
        ? bodyContent()
        : null}
    </div>
  );

  return (
    <Box
      className="w-full pt-7 border-[#EFF1F6]  pb-2 border px-2 rounded-md shadow-lg"
      head={
        typeof headTitle === "string"
          ? HeadComponent
          : typeof headTitle === "function"
          ? headTitle
          : null
      }
      resetDefault
    >
      <div className={`p-2 py-6  ${bodyStyle}`}>
        {children === undefined
          ? bodyContent !== undefined
            ? BodyComponent()
            : null
          : children}
      </div>
    </Box>
  );
};
