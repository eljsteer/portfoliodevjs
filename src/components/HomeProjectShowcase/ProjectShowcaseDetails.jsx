import PropTypes from 'prop-types';
// ------ MaterialUi Imports ------>>
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';
import Stack from "@mui/material/Stack";
// ------ React Icons Imports ------->>
import { SiHtml5, SiCss3, SiBootstrap, SiMui, SiJavascript, SiHandlebarsdotjs, SiApollographql, SiMongodb, SiMysql, SiSequelize, SiExpress } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { TbApi } from "react-icons/tb";
// ------ Component Import ------->>
import ProjectButton from "../AppComponents/ProjectButton";
// ------ CSS Stylesheet ------>>
import "./styles/projectShowcaseDetails.css";


// --------------------------------------------------------------------------------------


// ----------------------------------------------------------------->>
// ------ Details of Projects In Showcase - Project Showcase ------->>
// ----------------------------------------------------------------->>
export default function ProjectShowcaseDetails({ project }) {

  ProjectShowcaseDetails.propTypes = {
    project: PropTypes.object,
  };

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
  };

  // ------ Tooltip Styling ------->>
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
    <Card id="detailsCardContainer" elevation={0}>
      <CardContent className="detailsCardContent">
        <Typography variant="h5">
          {project.projectName}
        </Typography>
        <Typography variant="body1" id="detailsDescription">
          {project.description}
        </Typography>
      </CardContent>
      <Divider id="detailsDivider" variant="middle" aria-hidden="true" />
      <CardContent id="detailsTechIcons">
        <Stack display="flex" direction="row" justifyContent="center" spacing={2}>
          {project.technologies.map((tech) => (
            <Tooltip key={tech.id} title={tech.TechName} placement="top" slotProps={toolTipProps} TransitionComponent={Fade} TransitionProps={{ timeout: 600 }}>
              <Typography sx={{ fontSize: { xs: "22px", sm: "28px", md: "32px" } }}>{mapIcon(tech.TechName)}</Typography>
            </Tooltip>
          ))}
        </Stack>
      </CardContent>
      <CardContent id="detailsButtons">
        <Stack display="flex" direction="row" justifyContent="center" spacing={2}>
          <ProjectButton text="View Live" href={project.deployedLink} />
          <ProjectButton text="View Github" href={project.github} />
        </Stack>
      </CardContent>
    </Card>
  );
}

// -------- Component Proptypes -------->>
ProjectButton.propTypes = {
  href: PropTypes.string,
};