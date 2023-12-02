import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Socials = ({ data, backgroundColor, className }) => {
  return (
    <>
      <a href={data.link}>
        <li
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "45px",
            height: "45px",
            backgroundColor: backgroundColor,
          }}
        >
          <FontAwesomeIcon className={className} icon={data.icon} />
        </li>
      </a>
    </>
  );
};