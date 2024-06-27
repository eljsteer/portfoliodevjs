import { Box } from "@mui/material";
import ProjectData from "../../utils/ProjectData.json";
import GridProjectCard from "../AppComponents/GridProjectCard"
import "./styles/gridImageBoard.css";

function GridImageboard() {
  return (
    <Box className="Grid">
      {ProjectData.map((project) => (
        <GridProjectCard
          className="grid-card"
          key={project.id}
          project={project}
        />
      ))}
    </Box>
  );
}

export default GridImageboard;
