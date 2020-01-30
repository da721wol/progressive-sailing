import React from "react";

function Electrical(props) {
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
      <path d="M360 40L160 300h130l-60 260 190-340H300l60-180z"></path>
      <path
        fill="none"
        stroke="#000"
        strokeWidth="30"
        d="M360 40L160 300h130l-60 260 190-340H300l60-180z"
      ></path>
    </svg>
  );
}

export default Electrical;
