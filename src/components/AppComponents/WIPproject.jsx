import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

// ------- MaterialUI Imports ------>>
import { 
  Box, 
  Button,
  Card,
  CardMedia, 
  Stack, 
  Typography 
} from "@mui/material";

// ------- Data Imports ------>>
import ProjectData from "../../utils/ProjectData.json"

// ------- CSS import ------->>
import "./styles/wipProject.css"

// ------ Component Function ------>>
export default function WIPproject() {
  const baseURL = import.meta.env.BASE_URL;
  const [projectWIP, setProjectWIP] = useState(null)

  useEffect(() => {
    const project = ProjectData.find(project => project.projectWIP === true);
      if(project) {
        setProjectWIP(project);
      }
  },[]);
  
  WIPproject.propTypes = {
    project: PropTypes.object,
  }; 

  if (!projectWIP) {
    return <div>Loading...</div>;
  }

  return (
    <Card elevation={5} sx={{ maxWidth: 420 }}>
      <Box id="WIPprojectContainer">
        <CardMedia
          component="img"
          image={`${baseURL}${projectWIP.images[0].src}`}
        />
        <Box id="imageOverlay">
          <Typography variant="h5" id="imageCardTitle">{projectWIP.projectName}</Typography>
          <Typography variant="body1" id="imageCardDescription">{projectWIP.description}</Typography>
          <Stack direction="row" spacing={2}>
            <Button className="WIPButtonStyle" target="_blank" rel="noopener noreferrer" href={projectWIP.deployedLink}>
              <Typography variant="body1">View Live</Typography>
            </Button>
            <Button className="WIPButtonStyle" target="_blank" rel="noopener noreferrer" href={projectWIP.github}>
              <Typography>View Github</Typography>
            </Button>
          </Stack>
        </Box>
      </Box>
    </Card>
  );
}
