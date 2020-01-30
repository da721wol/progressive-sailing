import React from "react";

function Depth(props) {
  return (
    <svg
      width={props.width || "63px"} height={props.height || "63px"}
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="1.5"
      clipRule="evenodd"
      viewBox="0 0 600 600"
    >
      <path
        fill="none"
        stroke="#000"
        strokeWidth="30"
        d="M40 60s79.448 20 120 20c28.527 0 91.526-37.576 140-40 30.424-1.521 96.667 36.667 140 40 40.432 3.11 120-20 120-20M200 160l100-60 100 60M400 440l-100 60-100-60M300 100v400M40 560c171.293-27.543 344.63-27.489 520 0"
      ></path>
    </svg>
  );
}

export default Depth;
