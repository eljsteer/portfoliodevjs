import PropTypes from "prop-types";
import { Box } from "@mui/material"

import ProjectButton from "../AppComponents/ProjectButton"

import "./styles/projectCard.css"

function ProjectCard() {

  ProjectCard.propTypes = {
    project: PropTypes.element.isRequired,
    randomSize: PropTypes.element.isRequired,
  };

  return (
    
        <Box className="flip-card">
          <Box className="flip-card-inner">
            <Box className="flip-card-front">
              <img
                className="flip-card-img"
                src="https://images.unsplash.com/photo-1718301166305-421b59a63acf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
