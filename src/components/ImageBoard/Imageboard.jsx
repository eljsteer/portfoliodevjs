import Packery from "packery";
import { Box } from "@mui/material"
import { useEffect, useRef } from "react";

import "./styles/imageboard.css"

function Projects() {
  const gridRef = useRef(null);

  useEffect(() => {
    const pckry = new 
    Packery(gridRef.current, {
      itemSelector: ".grid-item",
      gutter: 10,
    });

    return () => {
      pckry.destroy();
    };
  }, [])

  return (
    <Box className="grid" ref={gridRef}> 
      {}
    </Box>
  );
}

export default Projects;

