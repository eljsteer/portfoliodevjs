import PropTypes from "prop-types";
import { Box } from "@mui/material"

import ProjectButton from "../AppComponents/ProjectButton"

import "./styles/projectCard.css"

const baseURL = import.meta.env.BASE_URL;
const isExternalLink = (url) => url.startsWith('http');

function ProjectCard({ project, randomSize }) {

  ProjectCard.propTypes = {
    project: PropTypes.element.isRequired,
    randomSize: PropTypes.element.isRequired,
  };

  return (
        <Box
          key={project.id}
          className="flip-card"
          style={{ width: randomSize(), height: randomSize() }}
        >
          <Box className="flip-card-inner">
            <Box className="flip-card-front">
              <img
                className="flip-card-img"
                src={isExternalLink(project.images[0].src) ? project.images[0].src : `${baseURL}${project.images[0].src}`}
                srcSet={project.images.map((image) => {
                  const imagePath = isExternalLink(image.src) ? image.src : `${baseURL}${image.src}`;
                  return `${imagePath} ${image.width}w`;
                }).join(", ")}
                alt={project.name}
              />
            </Box>
            <Box className="flip-card-back">
              <ProjectButton/>
            </Box>
          </Box>
        </Box>
  );
}

export default ProjectCard;
