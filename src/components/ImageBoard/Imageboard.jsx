import { useEffect, useRef, useState } from "react";
// ------ Packery package - used in displaying images in a masonry tiled layout
import Packery from "packery";
import { Box } from "@mui/material";

// ------ Component & JSON Data Imports ------->>
import ProjectData from "../../utils/ProjectData.json";
import ProjectCard from "../AppComponents/ProjectCard";
import GridProjectCard from "../AppComponents/GridProjectCard";
// ------ Custom Theming Imports ------>>
import { useTheme } from "../../contexts/ThemeContext";
import "./styles/imageBoard.css";


// ----------------------------------------------------------------------------------------------


// --------------------------------------------------->>
// ------ Imageboard Component - Projects Page ------->>
// --------------------------------------------------->>
export default function Imageboard() {
  const { isDarkMode } = useTheme();
  const gridRef = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 900);

  // Function to return Random numbers dependent on window resolution to use in the image sizing height and width
  const imageSize = () => {
    if (window.innerWidth > 1200) {
      const sizes = [300, 350, 400, 450, 500];
      return sizes[Math.floor(Math.random() * sizes.length)];
    } else if (window.innerWidth > 900) {
      const sizes = [300, 350, 400];
      return sizes[Math.floor(Math.random() * sizes.length)];
    } 
    return "100%";
  };

  // Function to handle resize of the images when window resolution changes
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 900);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Function to display images in a tiled, masonry layout using the "Packery" package when the screen state is not "Small Screen". 
  useEffect(() => {
    if (!isSmallScreen) {
      const pckry = new Packery(gridRef.current, {
        itemSelector: ".flip-card",
        transitionDuration: "0.5s",
        gutter: 10,
      });

      const handleImageLoad = () => {
        pckry.layout();
      };

      const images = gridRef.current.querySelectorAll("img");
      images.forEach((img) => {
        if (img.complete) {
          handleImageLoad();
        } else {
          img.addEventListener("load", handleImageLoad, { once: true });
        }
      });

      return () => {
        pckry.destroy();
      };
    }
  }, [isDarkMode, isSmallScreen]);

  return (
    <Box className="Grid" ref={gridRef}>
      {ProjectData.map((project) => (
        isSmallScreen ? (
          <GridProjectCard
            className="grid-card"
            key={project.id}
            project={project}
          />
        ) : (
          <ProjectCard
            className="flip-card"
            key={project.id}
            project={project}
            imageSize={imageSize()}
          />
        )
      ))}
    </Box>
  );
}
