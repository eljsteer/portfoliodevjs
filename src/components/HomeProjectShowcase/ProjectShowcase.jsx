import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';

import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import ProjectData from "../../utils/ProjectData.json";
import ProjectShowcaseDetails from './ProjectShowcaseDetails';
import { useTheme } from "../../contexts/ThemeContext";
import { darkTheme, lightTheme } from "../../Theme.jsx";
import "./styles/ProjectShowcase.css";

const baseURL = import.meta.env.BASE_URL;

const isExternalLink = (url) => url.startsWith('http');

export default function ProjectShowcase() {
  const { isDarkMode } = useTheme();
  const [selectedProject, setSelectedProject] = useState(ProjectData[0]);

  const handleSlideChange = (swiper) => {
    const activeIndex = swiper.activeIndex;
    setSelectedProject(ProjectData[activeIndex]);
    console.log(ProjectData[activeIndex]);
  };

  return (
    <Box className="ShowcaseSection" sx={{ backgroundColor: isDarkMode ? darkTheme.palette.primary.dark : lightTheme.palette.primary.main }}>
      <Grid className="ShowcaseWrapper" container spacing={0}>
        <Grid className="ShowDetails">
          <ProjectShowcaseDetails project={selectedProject} />
        </Grid>
        <Grid className="ShowImages" xs={6} id="swiper-container">
          <Swiper
            grabCursor={true}
            effect={'creative'}
            pagination={{ dynamicBullets: true }}
            creativeEffect={{
              prev: { shadow: true, translate: [0, 0, -400] },
              next: { translate: ['100%', 0, 0] },
            }}
            modules={[Pagination]}
            style={{
              "--swiper-pagination-color": isDarkMode ? darkTheme.palette.accents.main : lightTheme.palette.accents.main,
              "--swiper-pagination-bullet-inactive-color": "#fff",
              "--swiper-pagination-bullet-inactive-opacity": "1",
              "--swiper-pagination-bullet-size": "12px",
              "--swiper-pagination-bullet-horizontal-gap": "10px"
            }}
            className="projectShowcaseSwiper"
            onSlideChange={(swiper) => handleSlideChange(swiper)}
          >
            {ProjectData.map((project) => (
              <SwiperSlide key={project.id} className="swiper-slide">
                {project.images && project.images.length > 0 ? (
                  <Box 
                    className="blur-load" 
                    sx={{
                      backgroundImage: `url(${project.placeholder})`,  
                      backgroundSize: "cover",
                      backgroundPosition: "center"
                    }}>
                    <img
                      className="projectShowcaseIMG"
                      src={isExternalLink(project.images[0].src) ? project.images[0].src : `${baseURL}${project.images[0].src}`}
                      srcSet={project.images.map((image) => {
                        const imagePath = isExternalLink(image.src) ? image.src : `${baseURL}${image.src}`;
                        return `${imagePath} ${image.width}w`;
                      }).join(", ")}
                      alt={project.projectName}
                    />
                  </Box>
                ) : (
                  <div>No image available</div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
      </Grid>
    </Box>
  );
}
