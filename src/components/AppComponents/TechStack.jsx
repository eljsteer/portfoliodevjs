import { Box, IconButton, Tooltip } from "@mui/material";
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
import { SiHandlebarsdotjs } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { SiApollographql } from "react-icons/si";
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
    {Name: "HTML5", Icon: <SiHtml5 /> },
    {Name: "CSS3", Icon: <SiCss3 /> },
    {Name: "Bootstrap", Icon: <SiBootstrap /> },
    {Name: "Material UI", Icon: <SiMui /> },
    {Name: "Javascript", Icon: <SiJavascript /> },
    {Name: "NodeJS", Icon: <FaNodeJs /> },
    {Name: "ExpressJS", Icon: <SiExpress /> },
    {Name: "ReactJS", Icon: <SiReact /> },
    {Name: "MySQL", Icon: <SiMysql /> },
    {Name: "Sequelize", Icon: <SiSequelize /> },
    {Name: "MongoDB", Icon: <SiMongodb /> },
    {Name: "GraphQL", Icon: <GrGraphQl /> },
    {Name: "ApolloGraphQL" ,Icon: <SiApollographql /> },
    {Name: "RESTfull APIs", Icon: <TbApi /> },
    {Name: "HandlebarsJS", Icon: <SiHandlebarsdotjs /> }
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
      <ul>
        {techStackArray.map((tech) => (
          <li key={tech.Name}>  
            {tech.Icon}
          </li>
        ))}
      </ul>
    </Box>
  );
}
