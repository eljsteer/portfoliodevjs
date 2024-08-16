// ------- MaterialUi Imports ------>>
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// ------ React Icons Imports ------>>
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiSequelize } from "react-icons/si";
import { SiExpress } from "react-icons/si";
// ------CSS Stylesheets ------->>
import "./styles/stackAnimation.css"


// ------------------------------------------------------------------------


// ------------------------------------------------------------->>
// ------ Resume Animation of Tech Stack on Large Screens ------>>
// ------------------------------------------------------------->>
export default function StackAnimation() {

  const techStackArray = [
    {Id: 0, Name: "HTML5", Color: "#96D9D9", TextBg: "#2B7878", Icon: <SiHtml5 className="icon" />},
    {Id: 1, Name: "CSS3", Color: "#E07A5F", TextBg: "#782C17", Icon: <SiCss3 className="icon" /> },
    {Id: 2, Name: "Material UI", Color: "#84A98C", TextBg: "#436049", Icon: <SiMui className="icon" /> },
    {Id: 3, Name: "Javascript", Color: "#1F656F", TextBg: "#123A40", Icon: <SiJavascript className="icon" /> },
    {Id: 4, Name: "NodeJS", Color: "#83781B", TextBg: "#554E11", Icon: <FaNodeJs className="icon" /> },
    {Id: 5, Name: "ExpressJS", Color: "#F1A208", TextBg: "#B27906", Icon: <SiExpress className="icon" /> },
    {Id: 6, Name: "ReactJS", Color: "#96D9D9", TextBg: "#2B7878", Icon: <SiReact className="icon" /> },
    {Id: 7, Name: "MySQL", Color: "#E07A5F", TextBg: "#782C17", Icon: <SiMysql className="icon" /> },
    {Id: 8, Name: "Sequelize", Color: "#84A98C", TextBg: "#436049", Icon: <SiSequelize className="icon" /> },
    {Id: 9, Name: "MongoDB", Color: "#1F656F", TextBg: "#123A40", Icon: <SiMongodb className="icon" /> },
    {Id: 10, Name: "GraphQL", Color: "#83781B", TextBg: "#554E11", Icon: <GrGraphQl className="icon" /> },
    {Id: 11, Name: "RESTfull APIs", Color: "#F1A208", TextBg: "#B27906", Icon: <TbApi className="icon" /> },
  ]

  return (
    <Box id="techStackAnimation">
      <ul className="menu">
        {techStackArray.map((tech) => (
          <li key={tech.Id} style={{ "--i":tech.Id, backgroundColor: tech.Color }} className="iconBox">  
            {tech.Icon}
            <Typography className="iconText" sx={{ backgroundColor: tech.TextBg }}> {tech.Name}</Typography>
          </li>
        ))}
      </ul>
    </Box>
  );
}

