import React from "react";

function Edit(props) {
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
      <g fill="none" stroke="#000" strokeWidth="30">
        <path d="M96 448v64h64l288-288-64-64L96 448zM416 128l64 64 41.707-41.707-64-64L416 128z"></path>
      </g>
    </svg>
  );
}

export default Edit;