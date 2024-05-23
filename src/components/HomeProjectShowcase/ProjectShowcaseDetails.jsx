import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import Stack from "@mui/material/Stack"

import { FaReact } from "react-icons/fa6";
import { DiJavascript } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { SiApollographql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";

import ProjectButton from "./ProjectButton"

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

  return (
    <Card id="detailsCardContainer" sx={{maxWidth:600}} elevation={3}>
      <CardContent className="detailsCardContent">
        <Typography variant="h5">
          {project.projectName}
        </Typography>
        <Typography className="detailsDecription">
          {project.description}
        </Typography>
      </CardContent>
      <Divider className="detailsDivider"/>
      <CardContent>
        <Stack className="detailsTechIcons" display="flex" direction="row" justifyContent="center" spacing={2}>
          {project.technologies.map((tech) => (
            <Typography variant="h4" key={tech.id}>{mapIcon(tech.TechName)}</Typography>
          ))}
        </Stack>
      </CardContent>
      <CardContent className="detailsButtons">
        <Stack display="flex" direction="row" justifyContent="center" spacing={2}>
          <ProjectButton text="View Live" href={project.deployedLink}/>
          <ProjectButton text="View Github" href={project.github}/>
        </Stack>
      </CardContent>
    </Card>
  );
}
