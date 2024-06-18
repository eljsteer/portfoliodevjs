import Packery from "packery";
import { useEffect, useRef } from "react";
import { Box } from "@mui/material"

import ProjectData from "../../utils/ProjectData.json"
import { useTheme } from "../../contexts/ThemeContext";

import "./styles/imageboard.css"
import ProjectCard from "../AppComponents/ProjectCard";

function Imageboard() {
  const { isDarkMode } = useTheme();
  const gridRef = useRef(null);

  const randomSize = () => {
    const sizes = [ 300, 350, 400, 450]
    return sizes[Math.floor(Math.random() * sizes.length)];
  } 


  useEffect(() => {
    const pckry = new Packery(gridRef.current, {
      itemSelector: ".flip-card",
      transitionDuration: "0.5s",
      gutter: 10,
    });

    const handleImageLoad = () => {
      pckry.layout();
    };

    const images = gridRef.current.querySelectorAll("img");
    images.forEach(img => {
      if (img.complete) {
        handleImageLoad();
      } else {
        img.addEventListener("load", handleImageLoad, { once: true });
      }
    });

    return () => {
      pckry.destroy();
    };
  }, [isDarkMode])

  return (
    <Box className="grid" ref={gridRef}> 
      {ProjectData.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          randomSize={randomSize}
          className
        />
      ))}
    </Box>
  );
}

export default Imageboard;

