import React from "react";

function Arrow(props) {
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
      <path fill={props.color || "#000"} d="M445.754 110.787c10.196-10.181 10.209-26.724.028-36.92l-36.891-36.948c-10.181-10.196-26.724-10.209-36.92-.028L128.114 280.375c-10.196 10.18-10.209 26.724-.028 36.92l36.891 36.948c10.181 10.196 26.724 10.208 36.92.028l243.857-243.484z"/>
      <path fill={props.color || "#000"} d="M201.939 243.362c-10.188-10.188-26.731-10.188-36.92 0l-36.919 36.92c-10.189 10.188-10.189 26.731 0 36.92l243.67 243.67c10.189 10.189 26.732 10.189 36.92 0l36.92-36.92c10.188-10.188 10.188-26.731 0-36.919L201.939 243.362z"/>
    </svg>
  );
}

export default Arrow;
