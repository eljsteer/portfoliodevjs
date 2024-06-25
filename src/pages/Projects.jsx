import { Box, Container, Typography } from "@mui/material";
import Imageboard from "../components/ImageBoard/Imageboard";
import WIPproject from "../components/AppComponents/WIPproject"
import "../styles/projects.css";

import { useTheme } from "../contexts/ThemeContext.jsx";
import { darkTheme, lightTheme } from "../Theme.jsx"; 

function Projects() {
  const { isDarkMode } = useTheme();
  return (
    <Box id="projectPageContainer">
      <Typography className="Title" 
        sx={{
          fontFamily: isDarkMode ? darkTheme.typography.fontFamily : lightTheme.typography.fontFamily,
          fontSize: isDarkMode ? darkTheme.typography.h3 : lightTheme.typography.h3
        }} >PROJECTS</Typography>
      <Container id="WIPContainer">
      <h4 className="Subtitle" style={{fontFamily: isDarkMode ? darkTheme.typography.fontFamily : lightTheme.typography.fontFamily}} >CURRENT PROJECT</h4>
        <WIPproject />
      </Container>
      <Box id="mainContainer">
        <Imageboard/>
      </Box>
    </Box>
  );
}

export default Projects;
