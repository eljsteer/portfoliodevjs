import PropTypes from "prop-types";
import { Box, CardContent, Typography, Divider, Stack } from "@mui/material"

import ProjectButton from "../AppComponents/ProjectButton"
import { useTheme } from '../../contexts/ThemeContext';
import { darkTheme, lightTheme } from "../../Theme.jsx";

import "./styles/projectCard.css"

const baseURL = import.meta.env.BASE_URL;
const isExternalLink = (url) => url.startsWith('http');

function ProjectCard({ project, randomSize }) {
  const { isDarkMode } = useTheme();

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
            <Box 
              className="flip-card-back"
              spacing={2}
              sx={{backgroundColor: isDarkMode ? darkTheme.palette.accents.main : lightTheme.palette.accents.main }}
            >
              <CardContent className="detailsCardContent">
                <Typography variant="h5">
                  {project.projectName}
                </Typography>
                <Typography variant="body1" id="detailsDecription">
                  {project.description}
                </Typography>
              </CardContent>
              <Divider id="detailsDivider"/>
              <CardContent id="detailsButtons">
                <Stack display="flex" direction="row" justifyContent="center" spacing={2}>
                  <ProjectButton text="View Live" href={project.deployedLink}/>
                  <ProjectButton text="View Github" href={project.github}/>
                </Stack>
              </CardContent>
            </Box>
          </Box>
        </Box>
  );
}

export default ProjectCard;
