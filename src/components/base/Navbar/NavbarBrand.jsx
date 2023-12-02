import { Box } from "@mui/material";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedin, faXTwitter} from '@fortawesome/free-solid-svg-icons';
import favicon from "../../../assets/Logo.svg";

import "../../utilities/base.css";


export const NavbarBrand = () => {

  const social_data = [
    {'icon': faFacebookF},
    {'icon': faLinkedin},
    {'icon': faXTwitter}
  ]

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
            lineHeight: "125%"
          }}
          className="font-inter primary-font"
        >
          Pages
        </span>
      </Box>
      <ul style={{
        display: 'flex',
        width: '155px',
        alignItems: 'center',
        justifyContent: 'space-between'
      }} 
      className="Socials">

      </ul>
    </Box>
  );
};
