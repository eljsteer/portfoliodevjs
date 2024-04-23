import PropTypes from 'prop-types';
import { Card, CardActionArea, CardMedia } from "@mui/material"

export default function WIPproject() {

  WIPproject.propTypes = {
    project: PropTypes.object,
  };  

  return (
    <Card elevation={5} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image="https://images.unsplash.com/photo-1686652655595-aeb97ff65577?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </CardActionArea>
    </Card>
  );
}
