import { Box, Container } from "@mui/material";
import Imageboard from "../components/ImageBoard/Imageboard";
import WIPproject from "../components/AppComponents/WIPproject"
import "../styles/projects.css";

function Projects() {
  return (
    <Box id="projectPageContainer">
      <Container id="WIPContainer">
        <WIPproject />
      </Container>
      <Box id="mainContainer">
        <Imageboard/>
      </Box>
    </Box>
  );
}

export default Projects;
