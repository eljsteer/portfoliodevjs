import PropTypes from 'prop-types';
import { Box, Button, Card, CardMedia, Stack, Typography } from "@mui/material"
import { useState, useEffect } from 'react';

import ProjectData from "../../utils/ProjectData.json"

import "./styles/wipProject.css"

const baseURL = import.meta.env.BASE_URL;

export default function WIPproject() {

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
            <Button className="WIPButtonStyle" href={projectWIP.deployedLink}>View Live</Button>
            <Button className="WIPButtonStyle" href={projectWIP.github}>View Github</Button>
          </Stack>
        </Box>
      </Box>
    </Card>
  );
}
