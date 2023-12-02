import { Box } from "@mui/material";
import React from "react";
import { NavbarBrand } from "./NavbarBrand";
import { NavMenu } from "./NavMenu";

export const NavBar = () => {
  return (
    <Box
      width={"100%"}
      display="flex"
      alignItems={"center"}
      justifyContent={"space-between"}
      height={"50px"}
      gap={"25px"}
    >
      <NavbarBrand />
      <NavMenu />
    </Box>
  );
};
