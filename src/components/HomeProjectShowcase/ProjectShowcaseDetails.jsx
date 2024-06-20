import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Divider, Tooltip } from '@mui/material';
import Fade from '@mui/material/Fade';
import Stack from "@mui/material/Stack"

import { FaReact } from "react-icons/fa6";
import { DiJavascript } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { SiApollographql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";

import ProjectButton from "../AppComponents/ProjectButton"

import "./styles/projectShowcaseDetails.css"

export default function ProjectShowcaseDetails( { project }) {

  ProjectShowcaseDetails.propTypes = {
    project: PropTypes.object,
  }; 

  const mapIcon = (TechName) => {
    switch (TechName) {
      case "React":
        return <FaReact />;
      case "Javascript":
        return <DiJavascript />;
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
