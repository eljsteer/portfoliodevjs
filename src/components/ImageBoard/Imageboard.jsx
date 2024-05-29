import Packery from "packery";
import { useEffect, useRef } from "react";
import { Box } from "@mui/material"

import ProjectData from "../../utils/ProjectData.json"

import "./styles/imageboard.css"

function Projects() {
  const gridRef = useRef(null);
  const stampRef = useRef(null);

  const randomWidth = () => {
    const Size = Math.floor(Math.random()*(500-200)+200)
    console.log(Size)
    return Size;
  }

  useEffect(() => {
    const pckry = new 
    Packery(gridRef.current, {
      itemSelector: ".grid-item",
      gutter: 10,
      horizontal: true,
      stamp: ".stamp"
    });

    pckry.stamp(stampRef.current);
    pckry.layout();

    return () => {
      pckry.destroy();
    };
  }, [])

  return (
    <Box className="grid" ref={gridRef}> 
      <Box className="stamp grid-item" ref={stampRef}>
        PROJECTS
      </Box>
      {ProjectData.map((project) => (
        <img
          key={project.id}
          className="grid-item"
          src={project.images[2].src}
          width={randomWidth()}
        />
      ))}
    </Box>
  );
}

export default Projects;

