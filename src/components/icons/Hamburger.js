import React from "react";

function Hamburger(props) {
  console.log(props)
  return (
    <svg
      width={props.width || "35px"} height={props.height || "35px"}
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      clipRule="evenodd"
      viewBox="0 0 600 600"
    >
      <path fill={props.color || "#000"} d="M580 300c0-33.115-26.885-60-60-60H80c-33.115 0-60 26.885-60 60 0 33.115 26.885 60 60 60h440c33.115 0 60-26.885 60-60zM580 480c0-33.115-26.885-60-60-60H80c-33.115 0-60 26.885-60 60 0 33.115 26.885 60 60 60h440c33.115 0 60-26.885 60-60zM580 120c0-33.115-26.885-60-60-60H80c-33.115 0-60 26.885-60 60 0 33.115 26.885 60 60 60h440c33.115 0 60-26.885 60-60z"/>
    </svg>
  );
}

export default Hamburger;
