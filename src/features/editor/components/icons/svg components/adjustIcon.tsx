import React from "react";

const AdjustIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0)">
        <path
          d="M3 14.1667V15.8333H8V14.1667H3ZM3 4.16667V5.83333H11.3333V4.16667H3ZM11.3333 17.5V15.8333H18V14.1667H11.3333V12.5H9.66667V17.5H11.3333ZM6.33333 7.5V9.16667H3V10.8333H6.33333V12.5H8V7.5H6.33333ZM18 10.8333V9.16667H9.66667V10.8333H18ZM13 7.5H14.6667V5.83333H18V4.16667H14.6667V2.5H13V7.5Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default AdjustIcon;
