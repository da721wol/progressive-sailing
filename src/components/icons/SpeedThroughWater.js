import React from "react";

function SpeedThroughWater(props) {
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
        d="M567.961 295.575c6.027-69.728-52.573-183.331-98.099-215.575-13.382-9.478-200-95.18-254.028-32.453C403.571 33.029 495.894 247.123 489.14 280c0 0 54.79 15.692 78.821 15.575z"/>
      <g stroke="#000" strokeWidth="30">
        <path
          fill="#ebebeb"
          d="M577.92 294.596C574.521 142.431 450.193 20.849 297.99 20.849c-154.64 0-280 125.36-280 280 0-154.64 125.36-280 280-280 152.203 0 276.531 121.582 279.93 273.747z"
        />
        <path fill="none" d="M489.14 295.575h88.85"/>
        <path
          fill="#ebebeb"
          d="M489.14 295.575C489.14 165.47 383.669 60 253.565 60 123.46 60 17.99 165.47 17.99 295.575 17.99 165.47 123.46 60 253.565 60 383.669 60 489.14 165.47 489.14 295.575z"
        />
      </g>
      <path d="M298.085 100l46.603 179.008c2.836 54.379-89.058 54.932-89.441 0L298.085 100z"/>
      <path
        fill="#fff"
        stroke="#000"
        strokeWidth="30"
        d="M32.039 356.574C58.78 483.231 170.551 573.868 300 573.868s241.22-90.637 267.961-217.294c0 0-79.043 17.613-167.961 13.353C316.082 365.907 223.368 340 180 340c-49.32 0-147.961 16.574-147.961 16.574z"
      />
      <text
        x="164.588"
        y="498.296"
        fontFamily="'ArialMT', 'Arial', sans-serif"
        fontSize="139.605"
      >
        {props.speedThroughWater ? props.speedThroughWater.toFixed(2) : null}
      </text>
    </svg>
  );
}

export default SpeedThroughWater;
