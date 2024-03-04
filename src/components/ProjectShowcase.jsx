// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';


import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from "../contexts/ThemeContext";
import { darkTheme, lightTheme } from '../styles/Theme';

import "../styles/ProjectShowcase.css"

export default function ProjectShowcase() {
  const { isDarkMode } = useTheme();
  return (
    <Box 
      sx={{
        backgroundColor: isDarkMode ? darkTheme.palette : lightTheme.palette
      }}
    >
      <Grid container spacing={2}>
        <Grid xs={6}>

        </Grid>
        <Grid xs={6}>
          <Swiper
            grabCursor={true}
            effect={'creative'}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: [0, 0, -400],
              },
              next: {
                translate: ['100%', 0, 0],
              },
            }}
            modules={[EffectCreative]}
            lazy={true}
            loop={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </SwiperSlide>
          </Swiper>
        </Grid>
      </Grid>
    </Box>
  );
}