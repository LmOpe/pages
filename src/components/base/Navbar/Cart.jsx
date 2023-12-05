import { Box } from "@mui/material";
import { React, useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";

export const Cart = () => {
  const { count, setCount } = useContext(CartContext);
  function handleClick() {
    setCount(parseInt(count) + 1);
  }
  const formattedCount = count.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  return (
    <Box width={"37px"} height={"31.5px"} position={"relative"}>
      <img
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
        }}
        width={"22px"}
        height={"21px"}
        src="../../../src/assets/Cart.svg"
        alt="Cart image"
      />
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        width={"21px"}
        height={"21px"}
        position={"absolute"}
        top={0}
        right={0}
        borderRadius={"50%"}
        className="secondary-bg blue-font font-inter"
        fontSize={"10px"}
        fontWeight={800}
        onClick={handleClick}
      >
        {formattedCount}
      </Box>
    </Box>
  );
};
