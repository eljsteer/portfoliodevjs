import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import Fade from '@mui/material/Fade';

import ResumeFile from "/assets/resume/Jason_Steer_Resumé.pdf"

// React Icons Imports
import { BsDownload } from "react-icons/bs";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
// import { SiHandlebarsdotjs } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
// import { SiApollographql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiSequelize } from "react-icons/si";
import { SiExpress } from "react-icons/si";

// Loacal Component Imports
import { useTheme } from "../../contexts/ThemeContext.jsx";
import { darkTheme, lightTheme } from "../../Theme.jsx";

import "./styles/techStack.css"

export default function TechStack() {
  const { isDarkMode } = useTheme();

  const techStackArray = [
    {Id: 0, Name: "HTML5", Icon: <SiHtml5 className="icon" /> },
    {Id: 1, Name: "CSS3", Icon: <SiCss3 className="icon" /> },
    {Id: 2, Name: "Bootstrap", Icon: <SiBootstrap className="icon" /> },
    {Id: 3, Name: "Material UI", Icon: <SiMui className="icon" /> },
    {Id: 4, Name: "Javascript", Icon: <SiJavascript className="icon" /> },
    {Id: 5, Name: "NodeJS", Icon: <FaNodeJs className="icon" /> },
    {Id: 6, Name: "ExpressJS", Icon: <SiExpress className="icon" /> },
    {Id: 7, Name: "ReactJS", Icon: <SiReact className="icon" /> },
    {Id: 8, Name: "MySQL", Icon: <SiMysql className="icon" /> },
    {Id: 9, Name: "Sequelize", Icon: <SiSequelize className="icon" /> },
    {Id: 10, Name: "MongoDB", Icon: <SiMongodb className="icon" /> },
    {Id: 11, Name: "GraphQL", Icon: <GrGraphQl className="icon" /> },
    {Id: 12, Name: "RESTfull APIs", Icon: <TbApi className="icon" /> },
  ]

  return (
    <Box id="stackContainer">
      <Box id="resumeDownload">
        <a href={ResumeFile} download="Jason_Steer_Resumé.pdf">
          <Tooltip title="Download Resume" TransitionComponent={Fade} TransitionProps={{ timeout: 600 }}>
            <IconButton className="iconButton">
              <BsDownload id="downloadIcon" style={{ color: isDarkMode ? darkTheme.palette.text.primary : lightTheme.palette.text.primary}}/>
            </IconButton>
          </Tooltip>
        </a>
      </Box>
      <ul className="menu">
        {techStackArray.map((tech) => (
          <li key={tech.Id} style={{ "--i":tech.Id }} className="iconBox">  
            {tech.Icon}
            <Typography className="iconText">{tech.Name}</Typography>
          </li>
        ))}
      </ul>
    </Box>
  );
}

