import { Box, Typography } from "@mui/material";

// React Icons Imports
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { SiApollographql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiSequelize } from "react-icons/si";
import { SiExpress } from "react-icons/si";

import "./styles/stackSmall.css"

export default function StackSmall() {

  const techStackArray = [
    {Id: 0, Name: "HTML5", TextBg: "#50723C", Icon: <SiHtml5 className="icon" />},
    {Id: 1, Name: "CSS3", TextBg: "#B4E4E4", Icon: <SiCss3 className="icon" /> },
    {Id: 2, Name: "Bootstrap", TextBg: "#E07A5F", Icon: <SiBootstrap className="icon" /> },
    {Id: 3, Name: "Material UI", TextBg: "#CBBB2A", Icon: <SiMui className="icon" /> },
    {Id: 4, Name: "Javascript", TextBg: "#F9C04D", Icon: <SiJavascript className="icon" /> },
    {Id: 5, Name: "NodeJS", TextBg: "#4F759B", Icon: <FaNodeJs className="icon" /> },
    {Id: 6, Name: "ExpressJS", TextBg: "#BF6900", Icon: <SiExpress className="icon" /> },
    {Id: 7, Name: "ReactJS", TextBg: "#87A330", Icon: <SiReact className="icon" /> },
    {Id: 8, Name: "MySQL", TextBg: "#B4E4E4", Icon: <SiMysql className="icon" /> },
    {Id: 9, Name: "Sequelize", TextBg: "#BCA3AC", Icon: <SiSequelize className="icon" /> },
    {Id: 10, Name: "MongoDB", TextBg: "#87A330", Icon: <SiMongodb className="icon" /> },
    {Id: 11, Name: "GraphQL", TextBg: "#BCA3AC", Icon: <GrGraphQl className="icon" /> },
    {Id: 12, Name: "Apollo GraphQL", TextBg: "#E07A5F", Icon: <SiApollographql className="icon" /> },
    {Id: 13, Name: "RESTfull APIs", TextBg: "#50723C", Icon: <TbApi className="icon" /> },
  ]

  return (
    <Box id="techStackSmall">
      <Box id="stackContainer">
        {techStackArray.map((tech) => (
          <Box key={tech.Id} style={{ }} className="techBox">  
            {tech.Icon}
            <Typography className="techText" sx={{ backgroundColor: tech.TextBg }}> {tech.Name}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

