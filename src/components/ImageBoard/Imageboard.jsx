import Packery from "packery";
import { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import ProjectData from "../../utils/ProjectData.json";
import { useTheme } from "../../contexts/ThemeContext";
import "./styles/imageboard.css";
import ProjectCard from "../AppComponents/ProjectCard";

function Imageboard() {
  const { isDarkMode } = useTheme();
  const gridRef = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600);

  const imageSize = () => {
    if (window.innerWidth > 900) {
      const sizes = [300, 350, 400, 450];
      return sizes[Math.floor(Math.random() * sizes.length)];
    } else {
      return 500;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 900);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
    <Box
      className={`Grid ${isSmallScreen ? "center-grid" : ""}`}
      ref={gridRef}
    >
      {ProjectData.map((project) => (
        <ProjectCard
          className="largeScreenCard"
          key={project.id}
          project={project}
          imageSize={imageSize}
        />
      ))}
    </Box>
  );
}

export default Imageboard;
