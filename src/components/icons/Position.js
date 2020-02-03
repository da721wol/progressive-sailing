import React from "react";

function Position(props) {
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
      <circle
  cx="300"
  cy="300"
  r="234.669"
  fill="#FFFFFF"
  stroke="#000"
  strokeWidth="30"
  />
      <path d="M11 260H60V340H11z"/>
      <path d="M540 260H589V340H540z"/>
      <path d="M260 11v49h80V11h-80zM260 540v49h80v-49h-80z"/>
      <text
        textAnchor={"middle"}
        x="300"
        y="278.296"
        fontFamily="'ArialMT', 'Arial', sans-serif"
        fontSize="110.605"
      >
        {props.longitude ?
          props.longitude.value.substr(0,6) + props.longitude.cardinal
          : null
        }
      </text>
      <text
        textAnchor={"middle"}
        x="300"
        y="418.296"
        fontFamily="'ArialMT', 'Arial', sans-serif"
        fontSize="110.605"
      >
        {props.latitude ?
          props.latitude.value.substr(0,6) + props.latitude.cardinal
          : null
        }
      </text>
    </svg>
  );
}

export default Position;
