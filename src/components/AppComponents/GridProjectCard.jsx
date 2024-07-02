import PropTypes from "prop-types";
// MaterialUI Imports
import { Box, CardContent, Typography } from "@mui/material";
import { Divider, Tooltip } from '@mui/material';
import Fade from '@mui/material/Fade';
import Stack from "@mui/material/Stack";

// React Icons Imports
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";
import { SiHandlebarsdotjs } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { SiApollographql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiSequelize } from "react-icons/si";
import { SiExpress } from "react-icons/si";

// Loacal Component Imports
import ProjectButton from "../AppComponents/ProjectButton";
import { useTheme } from '../../contexts/ThemeContext';
import { darkTheme, lightTheme } from "../../Theme.jsx";

import "./styles/gridProjectCard.css";

const baseURL = import.meta.env.BASE_URL;
const isExternalLink = (url) => url.startsWith('http');

function GridProjectCard({ project }) {
  const { isDarkMode } = useTheme();

  const mapIcon = (TechName) => {
    switch (TechName) {
      case "HTML5":
        return <SiHtml5 />;
      case "React":
        return <FaReact />;
      case "CSS3":
        return <SiCss3 />;
      case "Bootstrap":
        return <SiBootstrap />;
      case "MaterialUI":
        return <SiMui />;
      case "Javascript":
        return <SiJavascript />;
      case "Handlebars.JS":
        return <SiHandlebarsdotjs />;
      case "NodeJS":
        return <FaNodeJs />;
      case "Express":
        return <SiExpress />;
      case "GraphQL":
        return <GrGraphQl />;
      case "Apollographql":
        return <SiApollographql />;
      case "MongoDB":
        return <SiMongodb />;
      case "MySQL":
        return <SiMysql />;
      case "Sequelize":
        return <SiSequelize />;
      case "RESTful API":
        return <TbApi />;
    }
  }

  const toolTipProps = {
    popper: {
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, -15],
          },
        },
      ],
    },
  };

  return (
    <Box
      key={project.id}
      className="grid-card"
    >
      <Box className="grid-card-inner">
        <Box className="grid-card-front">
          <img
            className="grid-card-img"
            src={isExternalLink(project.images[0].src) ? project.images[0].src : `${baseURL}${project.images[0].src}`}
            srcSet={project.images.map((image) => {
              const imagePath = isExternalLink(image.src) ? image.src : `${baseURL}${image.src}`;
              return `${imagePath} ${image.width}w`;
            }).join(", ")}
            loading="lazy"
            alt={project.projectName}
          />
        </Box>
        <Box 
          className="grid-card-back"
          spacing={2}
          sx={{backgroundColor: isDarkMode ? darkTheme.palette.accents.main : lightTheme.palette.accents.main }}
        >
          <CardContent className="detailsCardContent">
            <Typography variant="h5">
              {project.projectName}
            </Typography>
            <Typography variant="body1" className="detailsDecription">
              {project.description}
            </Typography>
          </CardContent>
          <Divider className="detailsDivider" aria-hidden="true" variant="middle" />
          <CardContent className="detailsTechIcons">
            <Stack display="flex" direction="row" justifyContent="center" flexWrap="wrap" spacing={2}>
              {project.technologies.map((tech) => (
                <Tooltip key={tech.id} title={tech.TechName} placement="top" slotProps={toolTipProps} TransitionComponent={Fade} TransitionProps={{ timeout: 600 }}>
                  <Typography sx={{ fontSize:{ xs: "18px", sm: "24px", md: "28px"}}}>{mapIcon(tech.TechName)}</Typography>
                </Tooltip>
              ))}
            </Stack>
          </CardContent>
          <CardContent className="detailsButtons">
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

GridProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string.isRequired,
        width: PropTypes.number.isRequired,
      })
    ).isRequired,
    projectName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        TechName: PropTypes.string.isRequired,
      })
    ).isRequired,
    deployedLink: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
  }).isRequired,
};

export default GridProjectCard;
