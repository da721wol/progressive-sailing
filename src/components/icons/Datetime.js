import React from "react";

function Datetime(props) {
  return (
    <svg
      width={props.width || "35px"} height={props.height || "35px"}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 100 100"
    >
      <circle cx="50" cy="50" r="45" stroke="#000" strokeWidth="10"/>
      <rect width="6" height="37" x="47" y="16" fill="#000" rx="3"/>
      <path fill="#000" d="M81 47a3 3 0 110 6H50a3 3 0 110-6h31z"/>
    </svg>
  );
}

export default Datetime;
