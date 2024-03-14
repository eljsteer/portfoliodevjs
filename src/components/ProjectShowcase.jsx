// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import CardMedia from '@mui/material/CardMedia';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';

import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

// import ProjectData from "../utils/ProjectData.json";
// import ProjectSlide from "./ProjectSlide";

const bonzaiCollectiveIMG = "https://images.unsplash.com/photo-1686652655595-aeb97ff65577?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==&auto=format&fit=crop&w=1925&q=80"
const fireStarterIMG = "src/assets/Projects/fireStarterHomePage.jpg"
const Marvellous = "src/assets/Projects/MarvelUniverse_Project.png"

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
      <Grid container spacing={0}>
        <Grid xs={5}>
          <div>Place Holder</div>
        </Grid>
        <Grid xs={5} className="swiper-container">
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
              <CardMedia
                component="img"
                image={fireStarterIMG}
                alt="green iguana"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img src={bonzaiCollectiveIMG}></img>
            </SwiperSlide>
            <SwiperSlide>
            <CardMedia
                component="img"
                image={Marvellous}
                alt="green iguana"
              />
            </SwiperSlide>
          </Swiper>
        </Grid>
      </Grid>
    </Box>
  );
}