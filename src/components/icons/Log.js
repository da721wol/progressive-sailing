import React from "react";

function Log(props) {
  return (
    <svg
      width={props.width || "35px"} height={props.height || "35px"}
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="1.5"
      clipRule="evenodd"
      viewBox="0 0 600 600"
    >
      <path fill="none" d="M0 0H600V600H0z"/>
      <g stroke="#000" strokeWidth="30">
        <path
          fill="#fff"
          d="M500 128c-68.762-25.147-135.421-25.049-200 0-67.366-24.484-134.028-24.317-200 0v352c66.667-22.462 133.333-22.157 200 0 65.275-21.57 131.936-21.654 200 0V128z"
        />
        <path fill="none" d="M300 128v352"/>
        <path
          fill="#fff"
          d="M340 215c41.741-14.992 84.952-14.456 120 0M340 286.044c41.741-14.992 84.952-14.456 120 0M340 356.044c41.741-14.992 84.952-14.456 120 0"
        />
      </g>
    </svg>
  );
}

export default Log;
