import * as React from "react";
type Props = {
  fill?: string;
};
export const Delete = (props, { fill }: Props) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <mask
      id="mask0_1737_932"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={20}
      height={20}
    >
      <rect width={20} height={20} fill={fill}/>
    </mask>
    <g mask="url(#mask0_1737_932)">
      <path
        d="M7.1875 15.8334H12.8125C12.9514 15.8334 13.0728 15.7812 13.1767 15.6767C13.2811 15.5729 13.3333 15.4515 13.3333 15.3126V7.50008H6.66667V15.3126C6.66667 15.4515 6.71889 15.5729 6.82333 15.6767C6.92722 15.7812 7.04861 15.8334 7.1875 15.8334ZM5.1875 5.52091V4.68758H7.25L8.08333 3.85425H11.9167L12.75 4.68758H14.8125V5.52091H5.1875ZM7.1875 16.6667C6.79861 16.6667 6.47583 16.5384 6.21917 16.2817C5.96194 16.0245 5.83333 15.7015 5.83333 15.3126V6.66675H14.1667V15.3126C14.1667 15.7015 14.0383 16.0245 13.7817 16.2817C13.5244 16.5384 13.2014 16.6667 12.8125 16.6667H7.1875ZM6.66667 15.8334H13.3333C13.3333 15.8334 13.2811 15.8334 13.1767 15.8334C13.0728 15.8334 12.9514 15.8334 12.8125 15.8334H7.1875C7.04861 15.8334 6.92722 15.8334 6.82333 15.8334C6.71889 15.8334 6.66667 15.8334 6.66667 15.8334Z"
        fill={fill}
      />
    </g>
  </svg>
);
