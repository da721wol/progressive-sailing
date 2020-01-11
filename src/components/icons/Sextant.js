import React from "react";

function Sextant(props) {
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
      <g stroke="#000" strokeWidth="30">
        <circle cx="300" cy="142.231" r="82.231" fill="#fff"/>
        <path
          d="M110.547,460.114c57.295,34.147 122.754,52.174 189.453,52.174c66.699,0 132.158,-18.027 189.453,-52.174c-57.295,34.147 -122.754,52.174 -189.453,52.174c-66.699,0 -132.158,-18.027 -189.453,-52.174Z"/>
        <path
          fill="none"
          d="M300 239.867v272.421M355.792 225.919l181.323 314.062M244.208 225.919L62.885 539.981"
        />
        <path
          fill="none"
          d="M355.792,225.919l181.323,314.062"/>
        <path
          fill="none"
          d="M244.208,225.919l-181.323,314.062"/>
      </g>
    </svg>
  );
}

export default Sextant;
