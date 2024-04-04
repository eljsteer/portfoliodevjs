import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import Stack from "@mui/material/Stack"

export default function ProjectShowcaseDetails( { project }) {

  ProjectShowcaseDetails.propTypes = {
    project: PropTypes.object,
  };  

  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardContent sx={{textAlign:"center"}}>
        <Typography variant="h4" component="div" gutterBottom>
          {project.ProjectName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary" >
          {project.description}
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <Divider sx={{margin:"0 10%"}}/>
      <CardContent>
        <Stack>
          {/* {Project.Technologies.map((Tech) => (
            <div key={Tech.id}>{Tech.Icon}</div>
          ))} */}
        </Stack>
      </CardContent>
    </Card>
  );
}
