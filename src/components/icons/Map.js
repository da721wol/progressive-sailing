import React from "react";

function Map(props) {
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
      <path
        fill="#fff"
        stroke="#000"
        strokeWidth="30"
        d="M230 115L90 165v340l140-50V115zM370 165l-140-50v340l140 50V165zM510 115l-140 50v340l140-50V115z"
      />
    </svg>
  );
}

export default Map;
