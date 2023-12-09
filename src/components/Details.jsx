import React from "react";

import { Box } from "@mui/material";

import './utilities/base.css';
export const Details = () => {
  const details = [
    { "title": "Pages:", 'content': '586pages'},
    { 'title': "Length:", 'content': "10 Hours" },
    { 'title': 'Ratings:', 'content': "4.5/5 (305 ratings)" },
  ];

  const details_component = details.map(detail =>{
    return(
        <Box
        display={'flex'}
        alignItems={'flex-start'}
        gap={'8px'}
        key={detail.title}
        >
            <Box
            width={'12px'}
            height={'12px'}
            borderRadius={'50%'}
            className={'secondary-bg'}
            marginTop={'8px'}
            ></Box>
            <Box
            display={'flex'}
            flexDirection={'column'}
            >
            <h3
            className="font-cardo primary-font"
            style={{
                fontWeight: 700,
                fontSize: '24px',
                lineHeight: '120%'
            }}
            >{detail.title}</h3>
            <Box
            className={'mid-blue-font font-inter'}
            fontWeight={400}
            fontSize={'18px'}
            lineHeight={'170%'}
            style={{
              textWrap: 'nowrap'
            }}
            >
                {detail.content}
            </Box>
            </Box>
        </Box>
    )
  })

  return (
    <Box 
    display={"flex"} 
    alignItems={"center"} 
    gap={"50px"}
    >
        {details_component}
    </Box>
    );
};
