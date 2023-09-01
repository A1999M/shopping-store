import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomeSvg() {
  let navigate = useNavigate();

  let handleNavigate = () => {
    navigate("/");
  };

  return (
    <>
      <svg
        width="34px"
        height="34px"
        viewBox="0 0 24 24"
        className="homeIcon"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ cursor: "pointer" }}
        onClick={handleNavigate}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.4498 10.275L11.9998 3.1875L2.5498 10.275L2.9998 11.625H3.7498V20.25H20.2498V11.625H20.9998L21.4498 10.275ZM5.2498 18.75V10.125L11.9998 5.0625L18.7498 10.125V18.75H14.9999V14.3333L14.2499 13.5833H9.74988L8.99988 14.3333V18.75H5.2498ZM10.4999 18.75H13.4999V15.0833H10.4999V18.75Z"
          fill="#000"
          style={{ opacity: 0.7 }}
        />
      </svg>
    </>
  );
}
