import PropTypes from "prop-types";

import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';
import { SwiperSlide } from 'swiper/react';



// import { useTheme } from "../contexts/ThemeContext";
// import { darkTheme, lightTheme } from '../styles/Theme';

export default function ProjectSlide({project}) {

  ProjectSlide.propTypes = {
    project: PropTypes.object,
  };

  return (
    <SwiperSlide>
      <img 
        src={project.Image}
        alt={project.ProjectName}
      />
    </SwiperSlide>
  );
}