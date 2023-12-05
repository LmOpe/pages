import { React, useState } from "react";
import { NavLink } from "react-router-dom";

import { navLinks } from "../../../data/navbarlinks";

import "./navLink.css";

export const NavigationLink = () => {
  const navLink = navLinks.map((link) => {
    return (
      <NavLink
        style={{
          textDecoration: "none",
          fontSize: "17px",
          fontWeight: 500,
          lineHeight: "125%",
        }}
        to={link.link}
        className={"font-inter primary-font navLink-hover"}
        key={link.link}
      >
        {link.content}
      </NavLink>
    );
  });
  return (
    <ul
      style={{
        width: "469px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: "30px",
      }}
    >
      {navLink}
    </ul>
  );
};
