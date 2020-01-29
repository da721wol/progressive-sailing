import React from "react";

function MoreVert(props) {
  return (
    <svg
      width={props.width || "63px"}
      height={props.height || "63px"}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="#000"
        fillRule="evenodd"
        d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-2 8c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default MoreVert;