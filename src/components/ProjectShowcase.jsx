// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative } from 'swiper/modules';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';

import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

// import ProjectData from "../utils/ProjectData.json";
// import ProjectSlide from "./ProjectSlide";

const bonsaiCollectiveIMG = "https://images.unsplash.com/photo-1686652655595-aeb97ff65577?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const fireStarterIMG = "https://images.unsplash.com/photo-1557951959-e3e30ee937e5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const Marvellous = "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

import { useTheme } from "../contexts/ThemeContext";
import { darkTheme, lightTheme } from '../styles/Theme';

import "../styles/ProjectShowcase.css"

export default function ProjectShowcase() {
  const { isDarkMode } = useTheme();

  return (
    <Box 
      sx={{
        backgroundColor: isDarkMode ? darkTheme.palette.background : lightTheme.palette.background
      }}
    >
      <Grid container spacing={0} sx={{display:"flex", justifyContent:"center"}}>
        <Grid xs={5}>
          <div>Place Holder</div>
        </Grid>
        <Grid xs={5} id="swiper-container" >
          <Swiper
            grabCursor={true}
            effect={'creative'}            
            pagination={{
              dynamicBullets: true,
            }}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: [0, 0, -400],
              },
              next: {
                translate: ['100%', 0, 0],
              },
            }}
            modules={[EffectCreative, Pagination]}
            loop={true}
            style={{
              "--swiper-pagination-color": isDarkMode ? darkTheme.palette.accents.main : lightTheme.palette.accents.main,
              "--swiper-pagination-bullet-inactive-color": "#fff",
              "--swiper-pagination-bullet-inactive-opacity": "1",
              "--swiper-pagination-bullet-size": "12px",
              "--swiper-pagination-bullet-horizontal-gap": "10px"
            }}
            className="projectShowcaseSwiper"
          >
            <SwiperSlide>
              <img
                src={fireStarterIMG}
                alt="FireStarter Application"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={bonsaiCollectiveIMG}
                alt="Bonsai Collective E-commerce Application"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Marvellous}
                alt="Marvel Universe Application"
              />
            </SwiperSlide>
          </Swiper>
        </Grid>
      </Grid>
    </Box>
  );
}