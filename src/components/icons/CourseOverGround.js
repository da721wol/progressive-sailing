import React from "react";

function CourseOverGround(props) {
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
      <path fill="none" d="M0 0H600V600H0z"/>
      <path
  fill="#fff"
  stroke="#000"
  strokeWidth="30"
  d="M573.868 300.107c0-151.253-122.615-273.868-273.868-273.868S26.132 148.854 26.132 300.107C26.132 148.854 148.747 26.239 300 26.239s273.868 122.615 273.868 273.868zM32.039 356.574C58.78 483.231 170.551 573.868 300 573.868s241.22-90.637 267.961-217.294H32.039z"
  />
      <text
        textAnchor={"middle"}
        x="300"
        y="498.296"
        fontFamily="'ArialMT', 'Arial', sans-serif"
        fontSize="139.605"
      >
        {props.courseOverGround ?
          props.courseOverGround.toFixed(2)
          : null
        }
      </text>
      <path d="M304.5 70L340 200h-71l35.5-130z"/>
      <path fill="#fff" d="M304.5 330L269 200h71l-35.5 130z"/>
      <path d="M304.5 330L269 200h71l-35.5 130zm-22.403-120l22.403 82.039L326.903 210h-44.806z"/>
    </svg>
  );
}

export default CourseOverGround;
