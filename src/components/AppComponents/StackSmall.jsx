import { Box, Tooltip, Typography } from "@mui/material";

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
    {Id: 0, Name: "HTML5", TextBg: "#2B7878", Icon: <SiHtml5 className="icon" />},
    {Id: 1, Name: "CSS3", TextBg: "#782C17", Icon: <SiCss3 className="icon" /> },
    {Id: 2, Name: "Bootstrap", TextBg: "#436049", Icon: <SiBootstrap className="icon" /> },
    {Id: 3, Name: "Material UI", TextBg: "#436049", Icon: <SiMui className="icon" /> },
    {Id: 4, Name: "Javascript", TextBg: "#123A40", Icon: <SiJavascript className="icon" /> },
    {Id: 5, Name: "NodeJS", TextBg: "#554E11", Icon: <FaNodeJs className="icon" /> },
    {Id: 6, Name: "ExpressJS", TextBg: "#B27906", Icon: <SiExpress className="icon" /> },
    {Id: 7, Name: "ReactJS", TextBg: "#2B7878", Icon: <SiReact className="icon" /> },
    {Id: 8, Name: "MySQL", TextBg: "#782C17", Icon: <SiMysql className="icon" /> },
    {Id: 9, Name: "Sequelize", TextBg: "#436049", Icon: <SiSequelize className="icon" /> },
    {Id: 10, Name: "MongoDB", TextBg: "#123A40", Icon: <SiMongodb className="icon" /> },
    {Id: 11, Name: "GraphQL", TextBg: "#554E11", Icon: <GrGraphQl className="icon" /> },
    {Id: 12, Name: "Apollo GraphQL", TextBg: "#554E11", Icon: <SiApollographql className="icon" /> },
    {Id: 13, Name: "RESTfull APIs", TextBg: "#B27906", Icon: <TbApi className="icon" /> },
  ]

  return (
    <Box id="techStackSmall">
      <ul className="stackContainer">
        {techStackArray.map((tech) => (
          <li key={tech.Id} style={{ }} className="techBox">  
            {tech.Icon}
            <Typography className="techText" sx={{ backgroundColor: tech.TextBg }}> {tech.Name}</Typography>
          </li>
        ))}
      </ul>
    </Box>
  );
}

