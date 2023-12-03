import { React, useContext, useState } from "react";
import { Box } from "@mui/material";

import "../utilities/base.css";
import "./header.css";
import { NavBar } from "./Navbar/NavBar";
import { CartContext } from "../../contexts/CartContext";
export const Header = ({ children }) => {
  const [count, setCount] = useState(0);
  const value = { count, setCount };
  return (
    <Box
      display={"flex"}
      height={"100vh"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      alignItems={"center"}
      width={"100vw"}
      gap={"95px"}
      padding={"50px"}
      className="primary-bg"
      component="header"
    >
      <CartContext.Provider value={value}>
        <NavBar />
        <Box>{children}</Box>
      </CartContext.Provider>
    </Box>
  );
};
