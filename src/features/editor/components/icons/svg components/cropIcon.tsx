import React from "react";

const CropIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0)">
        <path
          d="M14.1666 12.5H15.8333V5.83333C15.8333 4.91667 15.0833 4.16667 14.1666 4.16667H7.49998V5.83333H14.1666V12.5ZM5.83331 14.1667V0.833334H4.16665V4.16667H0.833313V5.83333H4.16665V14.1667C4.16665 15.0833 4.91665 15.8333 5.83331 15.8333H14.1666V19.1667H15.8333V15.8333H19.1666V14.1667H5.83331Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CropIcon;
