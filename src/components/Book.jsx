import React from "react";

import { Box } from "@mui/material";

import "../components/utilities/base.css";

export const Book = () => {
  return (
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
            width={"410px"}
            height={"1.8rem"}
            top={"35px"}
            className={"secondary-bg"}
          ></Box>
          <Box
            position={"absolute"}
            zIndex={1}
            width={"245px"}
            height={"1.8rem"}
            top={"112px"}
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
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form.
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
              background: "rgba(255, 202, 66, 0.5)",
            }}
          >
            <Box
              width={"100%"}
              height={"100%"}
              borderRadius={"50%"}
              className="secondary-bg font-cardo blue-font"
              display={"flex"}
              flexDirection={"column"}
              padding={"27px 10px"}
              alignItems={"center"}
              textAlign={"center"}
              gap={"5px"}
            >
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  lineHeight: "125%",
                }}
              >
                Majority
              </h3>
              <Box
                fontSize={"14px"}
                fontStyle={"italic"}
                fontWeight={400}
                lineHeight={"150%"}
              >
                The majority have suffered alteration in some form.
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          width={"341px"}
          height={"424px"}
          position={"absolute"}
          bottom={0}
          left={0}
          display={"flex"}
          justifyContent={"flex-end"}
          alignItems={"flex-start"}
        >
          <Box width={"296px"} height={"328px"} position={"relative"}>
            <Box
              position={"absolute"}
              right={"9px"}
              bottom={"19px"}
              className={"blue-font font-inter"}
              textTransform={"uppercase"}
              textAlign={"center"}
              fontSize={"20px"}
              fontWeight={800}
              lineHeight={"180%"}
              letterSpacing={"3px"}
              width={"190px"}
              height={"140px"}
            >
              The Great Toolkit For Women's Life
            </Box>
            <img
              style={{
                position: "absolute",
                top: "100px",
                left: "130px",
              }}
              src="../src/assets/lamp/LAMP_1.svg"
              alt="Lamp image"
            />
            <img
              style={{
                position: "absolute",
                top: "8px",
                left: "87px",
              }}
              src="../src/assets/lamp/LAMP_2.svg"
              alt="Lamp image"
            />
            <img
              style={{
                position: "absolute",
                top: 0,
                left: "89px",
              }}
              src="../src/assets/lamp/LAMP_3.svg"
              alt="Lamp image"
            />
            <img
              style={{
                position: "absolute",
                top: "101px",
                right: "126px",
              }}
              src="../src/assets/lamp/LAMP_4.svg"
              alt="Lamp image"
            />
            <img
              style={{
                position: "absolute",
                top: "35px",
                left: "-15px",
                zIndex: 1,
              }}
              src="../src/assets/lamp/LAMP_5.svg"
              alt="Lamp image"
            />
            <img
              style={{
                position: "absolute",
                bottom: "2px",
                left: "-15px",
              }}
              src="../src/assets/lamp/LAMP_6.svg"
              alt="Lamp image"
            />
            <img
              style={{
                position: "absolute",
                bottom: 0,
                left: "-20px",
              }}
              src="../src/assets/lamp/LAMP_7.svg"
              alt="Lamp image"
            />
            <img
              style={{
                position: "absolute",
                top: "150px",
                left: "-40px",
                width: "55px",
                height: "55px",
              }}
              src="../src/assets/lamp/LAMP_8.svg"
              alt="Lamp image"
            />
            <img
              style={{
                position: "absolute",
                top: "163px",
                left: "-27px",
              }}
              src="../src/assets/lamp/LAMP_9.svg"
              alt="Lamp image"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
