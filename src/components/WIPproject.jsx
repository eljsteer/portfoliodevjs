import PropTypes from 'prop-types';
import { Card, CardActionArea, CardMedia } from "@mui/material"
import { useState, useEffect } from 'react';

import ProjectData from "../utils/ProjectData.json"

export default function WIPproject() {

  const [projectWIP, setProjectWIP] = useState(null)

  useEffect(() => {
    ProjectData.forEach(project => {
      if(project.projectWIP === true ) {
        setProjectWIP(project.images[0].src)
      }
    });
  },[]);

  WIPproject.propTypes = {
    project: PropTypes.object,
  };  

  return (
    <Card elevation={5} sx={{ maxWidth: 420 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={projectWIP}
        />
      </CardActionArea>
    </Card>
  );
}
