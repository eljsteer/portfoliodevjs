import { Box, IconButton, Tooltip } from "@mui/material";
import Fade from '@mui/material/Fade';

import StackSmall from "./StackSmall.jsx"
import StackAnimation from "../AppComponents/StackAnimation.jsx"
import ResumeFile from "/assets/resume/Jason_Steer_Resumé.pdf"

// React Icons Imports
import { BsDownload } from "react-icons/bs";

// Loacal Component Imports
import { useTheme } from "../../contexts/ThemeContext.jsx";
import { darkTheme, lightTheme } from "../../Theme.jsx";

import "./styles/techStack.css"

export default function TechStack() {
  const { isDarkMode } = useTheme();

  return (
    <Box id="techStackContainer">
      <Box id="resumeDownload">
        <a href={ResumeFile} download="Jason_Steer_Resumé.pdf">
          <Tooltip title="Download Resume" TransitionComponent={Fade} TransitionProps={{ timeout: 600 }}>
            <IconButton className="iconButton">
              <BsDownload id="downloadIcon" style={{ color: isDarkMode ? darkTheme.palette.text.primary : lightTheme.palette.text.primary}}/>
            </IconButton>
          </Tooltip>
        </a>
      </Box>
      <StackSmall />
      <StackAnimation />
    </Box>
  );
}

