import PropTypes from "prop-types";
// ------ MaterialUi Imports ------>>
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Fade from '@mui/material/Fade';
import Stack from "@mui/material/Stack";
import { Tooltip } from '@mui/material';
import Typography from '@mui/material/Typography';
// ------ React Icons Imports ------>>
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

// ------ Local Component Imports ------>>
import ProjectButton from "../AppComponents/ProjectButton";
// ------ Custom Theming Imports ------>>
import { useTheme } from '../../contexts/ThemeContext';
import { darkTheme, lightTheme } from "../../Theme.jsx";
// ------ CSS Stylesheets ------>>
import "./styles/projectCard.css";


// ----------------------------------------------------------------------


// ------------------------------------>>
// ------ Project Card Component ------>>
// ------------------------------------>>
export default function ProjectCard({ project, imageSize }) {
  const { isDarkMode } = useTheme();
  const baseURL = import.meta.env.BASE_URL;
  const isExternalLink = (url) => url.startsWith('http');

// ------ Switch Function to display specific Tech icons ------>> 
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
            offset: [0, -8],
          },
        },
      ],
    },
  };

  return (
    <Box
      key={project.id}
      className="flip-card"
      style={{ width: imageSize, height: imageSize }}
    >
      <Box className="flip-card-inner">
        <Box className="flip-card-front">
          <Box 
            className="blur-load"
            sx={{backgroundImage: `url(${project.placeholder})`}}
          >
            <img
              className="flip-card-img"
              src={isExternalLink(project.images[0].src) ? project.images[0].src : `${baseURL}${project.images[0].src}`}
              srcSet={project.images.map((image) => {
                const imagePath = isExternalLink(image.src) ? image.src : `${baseURL}${image.src}`;
                return `${imagePath} ${image.width}w`;
              }).join(", ")}
              loading="lazy"
              alt={project.projectName}
            />
          </Box>
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
            <Typography variant="body1" className="detailsDecription">
              {project.description}
            </Typography>
          </CardContent>
          <Divider className="detailsDivider" aria-hidden="true" variant="middle" />
          <CardContent className="detailsTechIcons">
            <Stack display="flex" direction="row" justifyContent="center" flexWrap="wrap" spacing={2}>
              {project.technologies.map((tech) => (
                <Tooltip key={tech.id} title={tech.TechName} slotProps={toolTipProps} placement="top" TransitionComponent={Fade} TransitionProps={{ timeout: 600 }}>
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

// ------ Component Proptypes ------>>
ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string.isRequired,
        width: PropTypes.number.isRequired,
      })
    ).isRequired,
    placeholder: PropTypes.string.isRequired,
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
  imageSize: PropTypes.number.isRequired,
};