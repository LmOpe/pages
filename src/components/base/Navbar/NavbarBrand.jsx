import { Box } from "@mui/material";
import React from "react";
import {
  faGithub,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import favicon from "../../../assets/Logo.svg";

import "../../utilities/base.css";
import { Socials } from "./Socials";

export const NavbarBrand = () => {
  const social_data = [
    { icon: faGithub, link: "https://github.com/LmOpe" },
    { icon: faLinkedinIn, link: "www.linkedin.com/in/lawal-muhammed-1b147a12b" },
    { icon: faXTwitter, link: "https://twitter.com/lmo_ope" },
  ];

  const socials = social_data.map((data) => {
    return (
      <Socials key={data.link} data={data} backgroundColor='#fff' className='blue-font'/>
    );
  });

  return (
    <Box
      width={"306px"}
      height={"45px"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      gap={"33px"}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        className="Brand"
        gap={"5px"}
      >
        <img
          width={"24px"}
          height={"28.5px"}
          className="primary-font"
          src={favicon}
        ></img>
        <span
          style={{
            fontWeight: 700,
            fontSize: "28px",
            lineHeight: "125%",
          }}
          className="font-inter primary-font"
        >
          Pages
        </span>
      </Box>
      <ul
        style={{
          display: "flex",
          width: "155px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        className="Socials"
      >
        {socials}
      </ul>
    </Box>
  );
};
