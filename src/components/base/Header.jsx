import { React, useContext, useState } from "react";
import { Box } from "@mui/material";

import "../utilities/base.css";
import { NavBar } from "./Navbar/NavBar";
import { CartContext } from "../../contexts/CartContext";
export const Header = ({ children }) => {
  const num = 0;
  const formattedCount = num.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  const [count, setCount] = useState(formattedCount);
  const value = { count, setCount };
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      alignItems={"center"}
      width={"100vw"}
      maxWidth={'1920px'}
      gap={"2.5rem"}
      padding={"3% 6% 5% 6%"}
      className="primary-bg"
      component="header"
    >
      <CartContext.Provider value={value}>
        <NavBar />
        {children}
      </CartContext.Provider>
    </Box>
  );
};
