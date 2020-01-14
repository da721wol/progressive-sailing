import React from "react";

function Water(props) {
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
          d="M300 60S149.333 290.533 149.333 389.333C149.333 472.489 216.845 540 300 540s150.667-67.511 150.667-150.667C450.667 290.533 300 60 300 60z"
        />
        <path
          fill="none"
          d="M377.168 300s21.526 53.332 22.667 80c2.166 50.667-17.667 80-17.667 80"
        />
      </g>
    </svg>
  );
}

export default Water;
