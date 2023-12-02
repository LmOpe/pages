import React from "react";
import { Box } from "@mui/material";
import "../utilities/base.css";
import "./header.css";
import { NavBar } from "./Navbar/NavBar";
export const Header = ({ children }) => {
  return (
    <Box
      display={"flex"}
      height={"100vh"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      alignItems={"center"}
      width={"100vw"}
      gap={"95px"}
      paddingTop={"50px"}
      paddingX={'100px'}
      className="primary-bg"
      component="header"
    >
      <NavBar />
      <Box>{children}</Box>
    </Box>
  );
};
