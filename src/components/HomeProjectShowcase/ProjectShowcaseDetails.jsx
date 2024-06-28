import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Divider, Tooltip } from '@mui/material';
import Fade from '@mui/material/Fade';
import Stack from "@mui/material/Stack"

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

import ProjectButton from "../AppComponents/ProjectButton"

import "./styles/projectShowcaseDetails.css"

export default function ProjectShowcaseDetails( { project }) {

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
  }

  ProjectButton.propTypes = {
    href: PropTypes.string,
  };

  return (
    <Card id="detailsCardContainer" sx={{maxWidth:600}} elevation={3}>
      <CardContent className="detailsCardContent">
        <Typography variant="h5">
          {project.projectName}
        </Typography>
        <Typography variant="body1" id="detailsDecription">
          {project.description}
        </Typography>
      </CardContent>
      <Divider id="detailsDivider" variant="middle" aria-hidden="true"/>
      <CardContent id="detailsTechIcons">
        <Stack display="flex" direction="row" justifyContent="center" spacing={2}>
          {project.technologies.map((tech) => (
            <Tooltip key={tech.id} title={tech.TechName} slotProps={toolTipProps} TransitionComponent={Fade} TransitionProps={{ timeout: 600 }}>
              <Typography sx={{ fontSize:{ xs: "22px", sm: "28px", md: "32px"}}}>{mapIcon(tech.TechName)}</Typography>
            </Tooltip>
          ))}
        </Stack>
      </CardContent>
      <CardContent id="detailsButtons">
        <Stack display="flex" direction="row" justifyContent="center" spacing={2}>
          <ProjectButton text="View Live" href={project.deployedLink}/>
          <ProjectButton text="View Github" href={project.github}/>
        </Stack>
      </CardContent>
    </Card>
  );
}
