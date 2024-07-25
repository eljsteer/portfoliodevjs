import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import ResumeCard from "../components/AppComponents/ResumeCard";
import TechStack from "../components/AppComponents/TechStack";
import ResumeData from "../utils/ResumeData.json";

import "../styles/resume.css"

export default function Resume() {
  const educationData = ResumeData.Education || [];
  const experienceData = ResumeData.Experience || [];

  return (
    <Container className="resumeContainer">
      <Box id="downloadContainer">
        <Typography variant="h4" gutterBottom>
          Technology Stack Proficiencies
        </Typography>
        <Divider/>
        <TechStack/>
      </Box>
      <Box id="educationContainer">
        <Typography sx={{ margin: "10px" }} variant="h4">
          Education
        </Typography>
        <Divider/>
        <Grid container id="qualificationContainer">
          {educationData.map((item) => (
            <Grid item key={item.courseID}>
              <ResumeCard type="Education" data={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box id="experienceContainer">
        <Typography sx={{ margin: "10px" }} variant="h4">
          Experience
        </Typography>
        <Divider/>
        <Grid container id="workContainer">
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
