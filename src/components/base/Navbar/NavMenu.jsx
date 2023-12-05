import React from "react";
import { Box } from "@mui/material";

import { NavigationLink } from "./NavLink";
import { Cart } from "./Cart";
import { NavButton } from "../../utilities/Button";
import "./navMenu.css";
export const NavMenu = () => {
  const className = "secondary-bg nav-menu blue-font font-cardo";
  const styles = {
    padding: "13px 33px",
    fontSize: "19px",
    fontWeight: 700,
    lineHeight: "125%",
  };
  return (
    <Box
      display={"flex"}
      width={"742px"}
      justifyContent={"space-between"}
      alignItems={"center"}
      gap={"30px"}
    >
      <Box
        display={"flex"}
        width={"532px"}
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={"26px"}
      >
        <NavigationLink />
        <Cart />
      </Box>
      <NavButton styles={styles} className={className}>
        Order Today
      </NavButton>
    </Box>
  );
};
