import React from "react";

interface BoxProp {
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "full";
  children: any;
  bodyStyles?: string;
  head?: any;
  footer?: any;
  headStyles?: string;
  footerStyles?: string;
  resetDefault?: boolean;
}

export const Box = (props: BoxProp) => {
  const {
    children,
    className,
    footer,
    footerStyles,
    head,
    headStyles,
    bodyStyles,
    resetDefault,
  } = props;
  const headComponent = () => (
    <div className={`p-4  ${headStyles}`}>{head}</div>
  );
  const footerComponent = () => (
    <div className={`p-4 rounded-b-lg ${footerStyles}`}>{footer}</div>
  );
  return (
    <div
      className={`bg-white flex flex-col ${
        !resetDefault && "w-full rounded-lg shadow-2xl"
      } ${className}`}
    >
      {head !== undefined && typeof head === "function"
        ? head()
        : typeof head === "string"
        ? headComponent()
        : null}
      <div
        className={`flex flex-col ${
          !resetDefault && "p-14"
        } ${bodyStyles}`}
      >
        {children}
      </div>
      {footer !== undefined && typeof footer === "function"
        ? footer()
        : typeof footer === "string"
        ? footerComponent()
        : null}
    </div>
  );
};
