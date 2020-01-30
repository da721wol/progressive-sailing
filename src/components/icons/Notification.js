import React from "react";

function Notification(props) {
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
        fill="#fff"
        stroke="#000"
        strokeWidth="30"
        d="M440.317 252.604c0-82.843-62.68-150-140-150s-140 67.157-140 150v130c-32.924 15.127-71.269 99.39 0 100 29.369.251 140 0 140 0s111.504-.767 140 0c84.88 2.283 24.195-95.543 0-100v-130z"
      ></path>
      <path
        fill="none"
        stroke="#000"
        strokeWidth="30"
        d="M208.628 252.604c5.432-62.941 38.281-97.355 101.689-100M240.317 112.604c-.518-92.914 119.752-92.359 120 0"
      ></path>
      <path
        fill="#fff"
        stroke="#000"
        strokeWidth="30"
        d="M240.316 482.716c0 33.137 26.863 60 60 60 33.138 0 60.001-26.863 60.001-60 0 33.137-26.863 60-60.001 60-33.137 0-60-26.863-60-60z"
      ></path>
    </svg>
  );
}

export default Notification;
