import { Box, Typography } from "@mui/material"
import Button from "@mui/material/Button"

import { useTheme } from "../../contexts/ThemeContext.jsx";
import { darkTheme, lightTheme } from "../../Theme.jsx"; 
import "./styles/homeContact.css"

let darkThemeText = darkTheme.palette.text
let lightThemeText = lightTheme.palette.text

function HomeContact() {

  const { isDarkMode } = useTheme();

  return (
    <Box className="banner">
      <Box className="gradientContainer">
      </Box>
      <Box className="textContainer">
        <Box className="contactText">
          <Typography>
            Let&apos;s connect and explore how we can collaborate. Reach out to learn more about me and discuss working together!
          </Typography>
        </Box>
        <Button 
          className={`ContactButton ${isDarkMode ? "darkTheme" : "lightTheme"}`}
          href="/contact" 
          variant="outlined"
          sx={{
            color: "white",
            border: "2px solid white",
            borderRadius: 0,
            margin: "3svh"
          }}
        >
          Contact Me
        </Button>
      </Box>
    </Box>
  );
}

export default HomeContact;