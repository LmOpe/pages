import React from "react";
import { Header } from "../components/base/Header";

import { Box } from "@mui/material";

import "../components/utilities/base.css";
import "../components/base/Navbar/navMenu.css";

import { NavButton } from "../components/utilities/Button";
import { Details } from "../components/Details";
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
        <Box
          component={"section"}
          width={"100%"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexDirection={"column"}
          backgroundColor={"#fff"}
          border={"12px solid #DBE1E9"}
          padding={"15px"}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={"3px"}
            padding={"5px"}
          >
            <Box
              className={"blue-font"}
              display={"flex"}
              alignItems={"center"}
              position={"relative"}
              justifyContent={"center"}
              width={"450px"}
            >
              <Box
                textAlign={"center"}
                fontSize={"70px"}
                fontWeight={800}
                lineHeight={"110%"}
                letterSpacing={"3.5px"}
                className={"font-lexend"}
                textTransform={"uppercase"}
                display={"inline"}
                zIndex={2}
              >
                The Dark Light
              </Box>
              <Box
                position={"absolute"}
                zIndex={1}
                width={"427px"}
                height={"1.8rem"}
                top={"37px"}
                className={"secondary-bg"}
              ></Box>
              <Box
                position={"absolute"}
                zIndex={1}
                width={"245px"}
                height={"1.8rem"}
                top={"114px"}
                className={"secondary-bg"}
              ></Box>
            </Box>
            <Box
              className="font-cardo blue-font"
              fontStyle={"italic"}
              fontSize={"18px"}
              textAlign={"center"}
              fontWeight={400}
              lineHeight={"160%"}
              width={"500px"}
            >
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form.
            </Box>
          </Box>
          <Box width={"422px"} height={"478px"} position={"relative"}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              position={"absolute"}
              bottom={0}
              left={"12.5%"}
              textAlign={"center"}
              className={"blue-font font-cardo"}
            >
              <Box fontWeight={700} fontSize={"25px"} lineHeight={"125%"}>
                -John Abraham-
              </Box>
              <Box
                fontSize={"16px"}
                fontStyle={"italic"}
                fontWeight={400}
                lineHeight={"170%"}
              >
                The majority have suffered alteration in some form.
              </Box>
            </Box>
            <Box
              position={"absolute"}
              top={0}
              left={"35%"}
              width={"124px"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
              gap={"5px"}
            >
              <Box className={"primary-bg"} width={"38px"} height={"2px"}></Box>
              <Box
                className={"blue-font font-inter"}
                fontSize={"20px"}
                fontWeight={800}
                display={"flex"}
                flexDirection={"column"}
                height={"24px"}
                alignItems={"center"}
              >
                *
              </Box>
              <Box className={"primary-bg"} width={"38px"} height={"2px"}></Box>
            </Box>
            <Box
              width={"163px"}
              height={"163px"}
              position={"absolute"}
              right={0}
              top={10}
            >
              <Box
                width={"100%"}
                height={"100%"}
                borderRadius={"50%"}
                padding={"9px"}
                style={{
                  background: 'rgba(255, 202, 66, 0.5)'
                }}
              >
                <Box
                  width={"100%"}
                  height={"100%"}
                  borderRadius={"50%"}
                  className="secondary-bg font-cardo blue-font"
                  display={'flex'}
                  flexDirection={'column'}
                  padding={'27px 10px'}
                  alignItems={'center'}
                  textAlign={'center'}
                  gap={'5px'}
                >
                  <h3
                  style={{
                    fontSize: '20px',
                    fontWeight: 700,
                    lineHeight: '125%'
                  }}
                  >
                  Majority
                  </h3>
                  <Box
                  fontSize={'14px'}
                  fontStyle={'italic'}
                  fontWeight={400}
                  lineHeight={'150%'}
                  >
                  The majority have suffered alteration in some form.
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Header>
  );
};
