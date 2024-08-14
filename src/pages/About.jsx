// ------ MaterialUI Imports ----->>
import { 
  Box, 
  Container, 
  Typography } from "@mui/material";

// --- CSS Style Sheet
import "../styles/about.css"


// ---------------------------------------------------------------------------------


// ------------------------->>
// ------ About Page ------->>
// ------------------------->>
export default function About() {
  return (
    <Box id="about">
      <Container id="aboutContainer">
        <Typography id="aboutSubtitle" variant="h5" sx={{marginBottom:"10px"}}>
          HI THERE! 🖐🏼
        </Typography>
        <Typography id="aboutMainBody" className="aboutBody" variant="body1">
          I&apos;m a full stack web developer from Christchurch, New Zealand, now living in the Northern Beaches of Sydney. 
          <br/>
          With a background in finance and accounting, I transitioned into software development to pursue my passion for problem-solving and creative solutions.
          <br/>
          After completing a Full Stack Web Development Bootcamp at the University of Sydney with a 97% grade, I honed my skills in the MERN stack. Since then, I&apos;ve been building a variety of projects and have many more ideas in the pipeline.
          I&apos;m always eager to learn, take on new challenges, and collaborate on exciting projects.
        </Typography>
        <br/>
        <Typography className="aboutBody">
          Feel free to reach out if you&apos;d like to work together. 
        </Typography>
        <br/>
        <Typography className="aboutBody">
          Enjoy browsing my portfolio!
        </Typography>
      </Container>
    </Box>
  );
}