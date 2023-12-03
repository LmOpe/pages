import { Box } from "@mui/material";
import React from "react";
import { NavigationLink } from "./NavLink";
import { Cart } from "./Cart";

export const NavMenu = () => {
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
    </Box>
  );
};
