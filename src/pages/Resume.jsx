import { Box, Container, Grid, Typography } from "@mui/material";
import ResumeCard from "../components/AppComponents/ResumeCard";
import ResumeData from "../utils/ResumeData.json";

export default function Resume() {
  const educationData = ResumeData.Education || [];
  const experienceData = ResumeData.Experience || [];

  return (
    <Container className="educationContainer">
      <Box>
        <Typography variant="h4" component="h2" gutterBottom>
          Education
        </Typography>
        <Grid container>
          {educationData.map((item) => (
            <Grid item key={item.courseID}>
              <ResumeCard type="Education" data={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box className="experienceContainer">
        <Typography variant="h4" component="h2" gutterBottom>
          Experience
        </Typography>
        <Grid container>
          {experienceData.map((item) => (
            <Grid item key={item.jobId}>
              <ResumeCard type="Experience" data={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
