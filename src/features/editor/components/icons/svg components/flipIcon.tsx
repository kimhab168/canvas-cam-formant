import React from "react";

const FlipIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1_87)">
        <path
          d="M13 17.5H14.6667V15.8333H13V17.5ZM16.3333 7.5H18V5.83333H16.3333V7.5ZM3 4.16667V15.8333C3 16.75 3.75 17.5 4.66667 17.5H8V15.8333H4.66667V4.16667H8V2.5H4.66667C3.75 2.5 3 3.25 3 4.16667ZM16.3333 2.5V4.16667H18C18 3.25 17.25 2.5 16.3333 2.5ZM9.66667 19.1667H11.3333V0.833334H9.66667V19.1667ZM16.3333 14.1667H18V12.5H16.3333V14.1667ZM13 4.16667H14.6667V2.5H13V4.16667ZM16.3333 10.8333H18V9.16667H16.3333V10.8333ZM16.3333 17.5C17.25 17.5 18 16.75 18 15.8333H16.3333V17.5Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_87">
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

export default FlipIcon;
