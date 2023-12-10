import React from "react";
import { Header } from "../components/base/Header";

import { Box } from "@mui/material";

import "../components/utilities/base.css";
import "../components/base/Navbar/navMenu.css";

import { NavButton } from "../components/utilities/Button";
import { Details } from "../components/Details";
import { Book } from "../components/Book";
export const Homepage = () => {
  const className = "secondary-bg nav-menu blue-font font-cardo";
  const styles = {
    padding: "13px 33px",
    fontSize: "19px",
    fontWeight: 700,
    lineHeight: "125%",
  };
  return (
    <Header>
      <Box
        display={"flex"}
        height={"100%"}
        width={"100%"}
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={"4rem"}
      >
        <Box
          component={"section"}
          width={"100%"}
          height={"65%"}
          display={"flex"}
          alignItems={"flex-start"}
          justifyContent={"space-between"}
          flexDirection={"column"}
          gap={"2.5%"}
          className="font-cardo primary-font"
        >
          <Box
            width={"209px"}
            display={"flex"}
            height={"37px"}
            alignItems={"center"}
            justifyContent={"flex-start"}
            gap={"15px"}
          >
            <Box
              className="secondary-bg"
              width={"100%"}
              height={"1px"}
              alignItems={"center"}
              justifyContent={"center"}
            ></Box>
            <Box
              fontStyle={"italic"}
              fontWeight={400}
              fontSize={"24px"}
              lineHeight={"154.5%"}
              whiteSpace={"nowrap"}
            >
              Welcome to Pages
            </Box>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={"49px"}
            alignItems={"flex-start"}
            justifyContent={"center"}
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={"32px"}
              alignItems={"center"}
              justifyContent={"flex-start"}
            >
              <Box fontSize={"50px"} fontWeight={700} lineHeight={"110%"}>
                Books are uniquely portable magic
              </Box>
              <Box
                className="font-Inter mid-blue-font"
                fontSize={"19px"}
                fontWeight={400}
                lineHeight={"180%"}
              >
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </Box>
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"flex-start"}
              gap={"1rem"}
            >
              <NavButton styles={styles} className={className}>
                Order Today
              </NavButton>
              <NavButton
                styles={{
                  fontWeight: 700,
                  lineHeight: "125%",
                  fontSize: "19px",
                  background: "none",
                  padding: "0.8rem",
                  letterSpacing: "0.38px",
                  flexDirection: "column",
                  gap: "0.1rem",
                }}
                className={"primary-font font-cardo free-demo"}
              >
                Read Free Demo
                <Box
                  width={"100%"}
                  height={"1px"}
                  backgroundColor={"#fff"}
                ></Box>
              </NavButton>
            </Box>
            <Details />
          </Box>
        </Box>
        <Book />
      </Box>
    </Header>
  );
};
