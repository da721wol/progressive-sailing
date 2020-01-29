import React from "react";

function Current(props) {
  return (
    <svg
      width={props.width || "63px"}
      height={props.height || "63px"}
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="1.5"
      clipRule="evenodd"
      viewBox="0 0 600 600"
    >
      <path
        fill="#fff"
        stroke="#000"
        strokeWidth="30"
        d="M32.039 356.574C58.78 483.231 170.551 573.868 300 573.868s241.22-90.637 267.961-217.294c0 0-79.043 17.613-167.961 13.353C316.082 365.907 223.368 340 180 340c-49.32 0-147.961 16.574-147.961 16.574z"
      />
      <text
        textAnchor={"middle"}
        x="300"
        y="498.296"
        fontFamily="'ArialMT', 'Arial', sans-serif"
        fontSize="139.605"
      >
        {props.drift ? props.drift.toFixed(1): 0}
      </text>
      <path d="M300.319 173.902L340 260h-79.362l39.681-86.098z"/>
      <path
        fill="#fff"
        d="M300.319 346.098L260.638 260H340l-39.681 86.098z"
      />
      <path d="M300.319 346.098L260.638 260H340l-39.681 86.098zM276.257 270l24.062 52.207L324.38 270h-48.123z"/>
      <path
        fill="#fff"
        stroke="#000"
        strokeWidth="30"
        d="M573.868 300.107c0-151.253-122.615-273.868-273.868-273.868S26.132 148.854 26.132 300.107C26.132 148.854 148.747 26.239 300 26.239s273.868 122.615 273.868 273.868z"
      />
      <text
        textAnchor={"middle"}
        x="300"
        y="180"
        fontFamily="'ArialMT', 'Arial', sans-serif"
        fontSize="139.605"
      >
        {props.setTrue ? props.setTrue.toFixed(1) : 0}
      </text>
    </svg>
  );
}

export default Current;
