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
    <Card elevation={3} sx={{ maxWidth: 600 }}>
      <CardContent sx={{textAlign:"center"}}>
        <Typography variant="h4" component="div" gutterBottom>
          {project.projectName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} >
          {project.description}
        </Typography>
      </CardContent>
      <Divider sx={{margin:"0 10%"}}/>
      <CardContent>
        <Stack display="flex" direction="row" justifyContent="center" spacing={2}>
          {project.technologies.map((tech) => (
            <Typography variant="h5" key={tech.id}>{mapIcon(tech.TechName)}</Typography>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}
