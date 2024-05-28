import { Box, Container } from "@mui/material"
import WIPproject from "../components/WIPproject";
import Imageboard from "../components/ImageBoard/Imageboard";

import "../styles/projects.css"

function Projects() {
  return (
    <Box id="projectPageContainer">
      <Container id="WIPContainer">
        <WIPproject/>
        <Imageboard/>
      </Container>
    </Box>
  );
}

export default Projects;