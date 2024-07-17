import { Link } from "react-router-dom";
import { Box, Container, Divider, Grid, IconButton, Typography } from "@mui/material";
import ResumeCard from "../components/AppComponents/ResumeCard";
import ResumeData from "../utils/ResumeData.json";

import ResumeFile from "/assets/resume/Jason_Steer_Resumé.pdf"

// React Icons Imports
import { BsDownload } from "react-icons/bs";
// import { SiHtml5 } from "react-icons/si";
// import { SiCss3 } from "react-icons/si";
// import { SiBootstrap } from "react-icons/si";
// import { SiMui } from "react-icons/si";
// import { FaReact } from "react-icons/fa6";
// import { SiJavascript } from "react-icons/si";
// import { SiHandlebarsdotjs } from "react-icons/si";
// import { TbApi } from "react-icons/tb";
// import { FaNodeJs } from "react-icons/fa";
// import { GrGraphQl } from "react-icons/gr";
// import { SiApollographql } from "react-icons/si";
// import { SiMongodb } from "react-icons/si";
// import { SiMysql } from "react-icons/si";
// import { SiSequelize } from "react-icons/si";
// import { SiExpress } from "react-icons/si";

// Loacal Component Imports
import { useTheme } from "../contexts/ThemeContext.jsx";
import { darkTheme, lightTheme } from "../Theme.jsx";

import "../styles/resume.css"

export default function Resume() {
  const educationData = ResumeData.Education || [];
  const experienceData = ResumeData.Experience || [];
  const { isDarkMode } = useTheme();

  
  // const mapIcon = (TechName) => {
  //   switch (TechName) {
  //     case "HTML5":
  //       return <SiHtml5 />;
  //     case "React":
  //       return <FaReact />;
  //     case "CSS3":
  //       return <SiCss3 />;
  //     case "Bootstrap":
  //       return <SiBootstrap />;
  //     case "MaterialUI":
  //       return <SiMui />;
  //     case "Javascript":
  //       return <SiJavascript />;
  //     case "Handlebars.JS":
  //       return <SiHandlebarsdotjs />;
  //     case "NodeJS":
  //       return <FaNodeJs />;
  //     case "Express":
  //       return <SiExpress />;
  //     case "GraphQL":
  //       return <GrGraphQl />;
  //     case "Apollographql":
  //       return <SiApollographql />;
  //     case "MongoDB":
  //       return <SiMongodb />;
  //     case "MySQL":
  //       return <SiMysql />;
  //     case "Sequelize":
  //       return <SiSequelize />;
  //     case "RESTful API":
  //       return <TbApi />;
  //   }
  // }

  return (
    <Container className="resumeContainer">
      <Box id="downloadContainer">
        <Typography variant="h4" gutterBottom>
          Technology Stack Proficiencies
        </Typography>
        <Divider/>
        <Box id="stackWrapper">
          <Box id="stackContainer">
            <a href={ResumeFile} download="Jason_Steer_Resumé.pdf">
              <IconButton className="iconButton">
                <BsDownload id="downloadIcon"sx={{ color: isDarkMode ? darkTheme.palette.text.primary : lightTheme.palette.text.primary}}/>
              </IconButton>
            </a>
          </Box>
        </Box>
      </Box>
      <Box id="educationContainer">
        <Typography variant="h4" gutterBottom>
          Education
        </Typography>
        <Divider/>
        <Grid container id="qualificationContainer">
          {educationData.map((item) => (
            <Grid item key={item.courseID}>
              <ResumeCard type="Education" data={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box id="experienceContainer">
        <Typography variant="h4" gutterBottom>
          Experience
        </Typography>
        <Divider/>
        <Grid container id="workContainer">
          {experienceData.map((item) => (
            <Grid item key={item.jobId}>
              <ResumeCard type="Experience" data={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
